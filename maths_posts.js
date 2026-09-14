// MATHS POSTS (Subject / Chapter Tests)
const mathsData = {
  id: "maths",
  title: "गणित (Mathematics)",
  icon: "📐",
  chapters: [
    {
      id: "percentage",
      name: "प्रतिशत (Percentage)",
      tests: [
        {
          id: "math_pct_1",
          name: "Percentage - Test 1",
          timeMinutes: 5,
          questions: [
            {
              q: "250 का 20% कितना होगा?",
              options: ["40", "50", "60", "25"],
              ans: 1,
              exp: "(250 × 20) / 100 = 50."
            },
            {
              q: "यदि किसी संख्या का 10%, 40 है, तो वह संख्या क्या है?",
              options: ["400", "200", "300", "500"],
              ans: 0,
              exp: "X × (10/100) = 40 => X = 400."
            }
          ]
        }
      ]
    }
  ]
};
