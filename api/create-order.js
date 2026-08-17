export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST method allowed' });
  }

  const { amount, customerId, customerPhone, customerEmail, customerName } = req.body;

  // Keys sirf Vercel Environment Variables se aayengi (Code me koi key nahi hai)
  const CLIENT_ID = process.env.CASHFREE_APP_ID;
  const CLIENT_SECRET = process.env.CASHFREE_SECRET_KEY;
  const IS_SANDBOX = process.env.CASHFREE_ENV !== "production";

  if (!CLIENT_ID || !CLIENT_SECRET) {
    return res.status(500).json({ 
      error: "Cashfree API credentials missing in Vercel Environment Variables." 
    });
  }

  const BASE_URL = IS_SANDBOX 
    ? "https://sandbox.cashfree.com/pg/orders" 
    : "https://api.cashfree.com/pg/orders";

  const orderData = {
    order_id: "order_" + Date.now(),
    order_amount: parseFloat(amount || 1),
    order_currency: "INR",
    customer_details: {
      customer_id: customerId || "cust_" + Date.now(),
      customer_name: customerName || "Applicant",
      customer_phone: customerPhone ? customerPhone.replace(/[^0-9]/g, '').slice(-10) : "9999999999",
      customer_email: customerEmail || "customer@example.com"
    },
    order_meta: {
      return_url: `${req.headers.origin || "https://" + req.headers.host}/?order_id={order_id}`
    }
  };

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-version": "2023-08-01",
        "x-client-id": CLIENT_ID,
        "x-client-secret": CLIENT_SECRET
      },
      body: JSON.stringify(orderData)
    });

    const data = await response.json();
    return res.status(response.ok ? 200 : response.status).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
