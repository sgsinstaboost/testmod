/* ==========================================================================
   ALL POSTS, SERVICES & DYNAMIC CONTENT DATA (posts.js)
   Aap yahan se asani se naye Posts, Jobs, Results, Admit Cards, Services aur 
   Notices ko add ya edit kar sakte hain!
   ========================================================================== */

const POSTS_DATA = {
    marqueeNotices: [
        "🔥 Bihar RTPS Residence, Caste & Income Certificate Online Apply Active!",
        "⚡ SSC GD, Railway Recruitment & Police Online Forms Open",
        "🎓 Bihar Post-Matric & NSP Scholarship Forms Filling Available Here!",
        "📞 For Any Query Call / WhatsApp: 8252880028.",
        "📞 share this website."


 

       
    ],
    results: [
        { id: "job", title: "Bihar Board 10th / 12th Result", tag: "NEW", tagClass: "bg-red-100 text-red-600", customTitle: "Bihar Board 10th/12th Result Check" },
        { id: "job", title: "SSC GD Constable Result", tag: "Declared", tagClass: "text-slate-400", customTitle: "SSC GD Constable Result" },
        { id: "job", title: "Railway RRB NTPC Scorecard", tag: "Active", tagClass: "text-slate-400", customTitle: "Railway RRB NTPC Result" },
        { id: "job", title: "Bihar Police Constable Merit List", tag: "Check Now", tagClass: "text-slate-400", customTitle: "Bihar Police Constable Result" }



       
    ],
    admitCards: [
        { id: "job", title: "Railway Technician Admit Card", tag: "LINK OUT", tagClass: "bg-blue-100 text-blue-600", customTitle: "Railway RRB Admit Card" },
        { id: "job", title: "SSC CGL Tier-1 Hall Ticket", tag: "Download", tagClass: "text-slate-400", customTitle: "SSC CGL Tier-1 Admit Card" },
        { id: "job", title: "NTA NEET / JEE Main Hall Ticket", tag: "Available", tagClass: "text-slate-400", customTitle: "NTA NEET / JEE Admit Card" },
        { id: "job", title: "Bihar Police SI Exam Hall Ticket", tag: "Download", tagClass: "text-slate-400", customTitle: "Bihar Police SI Admit Card" }





       
    ],
    latestJobs: [
        { id: "job", title: "Bihar Police Constable Online Form", tag: "APPLY", tagClass: "bg-emerald-100 text-emerald-600", customTitle: "Bihar Police Constable Form" },
        { id: "job", title: "SSC GD Constable Recruitment 2026", tag: "Active", tagClass: "text-slate-400", customTitle: "SSC GD Constable Form" },
        { id: "job", title: "Indian Army Agniveer Online Form", tag: "Apply Now", tagClass: "text-slate-400", customTitle: "Indian Army Agniveer Online Form" },
        { id: "job", title: "Railway Group D Online Form", tag: "Apply Now", tagClass: "text-slate-400", customTitle: "Railway RRB Group D Form" }





       
   ]  
};

const servicePricing = {
    residence: { govt: 0, process: 20, service: 40, total: 60, title: "Residence Certificate / निवास प्रमाण पत्र", docLabel: "Land Receipt / Old Residence Cert (रसीद या पुराना निवास)" },
    caste: { govt: 0, process: 20, service: 40, total: 60, title: "Caste Certificate / जाति प्रमाण पत्र", docLabel: "Khatian / Land Receipt / Old Caste Cert (खतियान या रसीद)" },
    income: { govt: 0, process: 20, service: 40, total: 60, title: "Income Certificate / आय प्रमाण पत्र", docLabel: "Salary Slip / Land Receipt / Declaration (आय शपथ पत्र)" },
    pan: { govt: 107, process: 20, service: 50, total: 177, title: "New PAN Card / Correction (पैन कार्ड)", docLabel: "DOB Proof / 10th Marksheet (जन्म प्रमाण पत्र या मार्कशीट)" },
    voter: { govt: 0, process: 25, service: 35, total: 60, title: "Voter ID Card / मतदाता पहचान पत्र (Form 6/8)", docLabel: "Address Proof / Electricity Bill / Passbook (बिजली बिल या पासबुक)" },
    aadhaar: { govt: 0, process: 20, service: 30, total: 50, title: "Aadhaar Services / आधार सुधार व प्रिंट", docLabel: "Address Proof / Supporting Document (सहायक दस्तावेज)" },
    ayushman: { govt: 0, process: 20, service: 30, total: 50, title: "Ayushman / E-Shram Card / आयुष्मान कार्ड", docLabel: "Ration Card / PM Letter (राशन कार्ड या पत्र)" },
    scholarship: { govt: 0, process: 30, service: 70, total: 100, title: "Scholarship Form / छात्रवृत्ति आवेदन", docLabel: "Last Passed Marksheet & Fee Receipt (मार्कशीट व रसीद)" },
    job: { govt: 100, process: 20, service: 60, total: 180, title: "Sarkari Job / Admit Card Form", docLabel: "Qualification Marksheet / Certificate (योग्यता प्रमाण पत्र)" },
    other_cert: { govt: 0, process: 20, service: 40, total: 60, title: "Other Digital Service / अन्य डिजिटल सेवा", docLabel: "Relevant Supporting Document (संबंधित दस्तावेज)" }


   
};

function renderPosts() {
    // Render Marquee Notices
    const marqueeContainer = document.getElementById('marqueeNoticeContainer');
    if(marqueeContainer) {
        marqueeContainer.innerHTML = POSTS_DATA.marqueeNotices.join(' | ');
    }

    // Render Results
    const resContainer = document.getElementById('resultsContainer');
    if(resContainer) {
        resContainer.innerHTML = POSTS_DATA.results.map(item => `
            <li class="p-3 hover:bg-slate-50 transition flex justify-between items-center cursor-pointer" onclick="openApplyModal('${item.id}', '${item.customTitle}')">
                <span class="font-medium text-slate-700 hover:text-red-600">${item.title}</span>
                <span class="${item.tagClass} text-[10px] font-bold px-2 py-0.5 rounded">${item.tag}</span>
            </li>
        `).join('');
    }

    // Render Admit Cards
    const admitContainer = document.getElementById('admitCardsContainer');
    if(admitContainer) {
        admitContainer.innerHTML = POSTS_DATA.admitCards.map(item => `
            <li class="p-3 hover:bg-slate-50 transition flex justify-between items-center cursor-pointer" onclick="openApplyModal('${item.id}', '${item.customTitle}')">
                <span class="font-medium text-slate-700 hover:text-blue-600">${item.title}</span>
                <span class="${item.tagClass} text-[10px] font-bold px-2 py-0.5 rounded">${item.tag}</span>
            </li>
        `).join('');
    }

    // Render Latest Jobs
    const jobsContainer = document.getElementById('latestJobsContainer');
    if(jobsContainer) {
        jobsContainer.innerHTML = POSTS_DATA.latestJobs.map(item => `
            <li class="p-3 hover:bg-slate-50 transition flex justify-between items-center cursor-pointer" onclick="openApplyModal('${item.id}', '${item.customTitle}')">
                <span class="font-medium text-slate-700 hover:text-emerald-600">${item.title}</span>
                <span class="${item.tagClass} text-[10px] font-bold px-2 py-0.5 rounded">${item.tag}</span>
            </li>
        `).join('');
    }
}

function updateServiceDynamicFields(customTitle = "") {
    const selectedKey = document.getElementById('serviceSelect').value;
    const container = document.getElementById('dynamicServiceFields');
    const docLabel = document.getElementById('dynamicDocLabel');
    const conf = servicePricing[selectedKey] || servicePricing['residence'];

    if(docLabel) {
        docLabel.innerText = conf.docLabel + " *";
    }

    let html = "";
    if(selectedKey === 'caste') {
        html = `<div class="grid grid-cols-2 gap-2 mt-2">
                    <div><label class="block text-[11px] text-slate-600">Category / वर्ग *</label><select class="w-full text-xs p-2 border rounded"><option>BC-1 (EBC) / अत्यंत पिछड़ा</option><option>BC-2 (OBC) / पिछड़ा वर्ग</option><option>SC / अनुसूचित जाति</option><option>ST / अनुसूचित जनजाति</option></select></div>
                    <div><label class="block text-[11px] text-slate-600">Caste Name / जाति का नाम *</label><input type="text" placeholder="e.g. Gond (गोंड)" class="w-full text-xs p-2 border rounded"></div>
                </div>`;
    } else if(selectedKey === 'pan') {
        html = `<div class="mt-2"><label class="block text-[11px] text-slate-600">Date of Birth (DOB) / जन्म तिथि *</label><input type="date" class="w-full text-xs p-2 border rounded"></div>`;
    }
    if(container) {
        container.innerHTML = html;
    }
}

function updateBillAndPaymentLinks() {
    const key = document.getElementById('serviceSelect').value;
    const conf = servicePricing[key] || servicePricing['residence'];

    document.getElementById('billGovtFee').innerText = `₹${conf.govt}`;
    document.getElementById('billProcessFee').innerText = `₹${conf.process}`;
    document.getElementById('billServiceCharge').innerText = `₹${conf.service}`;
    document.getElementById('billTotalAmount').innerText = `₹${conf.total}`;

    const upiString = `upi://pay?pa=8252880028@upi&pn=GaneshDigitalWorld&am=${conf.total}&cu=INR`;
    document.getElementById('gpayBtn').href = upiString;
    document.getElementById('phonepeBtn').href = upiString;
}
