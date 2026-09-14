// FULL LENGTH MOCK TESTS POSTS
const fullMockData = {
  id: "full_mock",
  title: "All Full Mock Tests",
  categories: [
    {
      id: "ssc_gd_full",
      name: "SSC GD Full Mocks",
      tests: [
        {
          id: "ssc_gd_mock_1",
          name: "SSC GD Full Mock Test 1",
          timeMinutes: 60,
          questions: [
            {
              q: "भारत की राजधानी क्या है?",
              options: ["मुंबई", "नई दिल्ली", "कोलकाता", "लखनऊ"],
              ans: 1,
              exp: "भारत की राजधानी नई दिल्ली है।"
            },
            {
              q: "5 + 15 * 2 का मान क्या होगा?",
              options: ["40", "35", "30", "25"],
              ans: 1,
              exp: "BODMAS नियम से: 15 * 2 = 30, फिर 30 + 5 = 35."
            }
          ]
        },
        {
          id: "ssc_gd_mock_2",
          name: "SSC GD Full Mock Test 2",
          timeMinutes: 60,
          questions: [
            {
              q: "'सूर्य' का पर्यायवाची शब्द क्या है?",
              options: ["दिनकर", "निशाकर", "शशि", "जलद"],
              ans: 0,
              exp: "दिनकर, भास्कर, रवि सूर्य के पर्यायवाची हैं।"
            }
          ]
        }
      ]
    },
    {
      id: "up_police_full",
      name: "UP Police Full Mocks",
      tests: [
        {
          id: "upp_mock_1",
          name: "UP Police Mock Test 1",
          timeMinutes: 60,
          questions: [
            {
              q: "उत्तर प्रदेश की राजधानी क्या है?",
              options: ["कानपुर", "वाराणसी", "लखनऊ", "प्रयागराज"],
              ans: 2,
              exp: "उत्तर प्रदेश की प्रशासनिक राजधानी लखनऊ है।"
            }
          ]
        }
      ]
    }
  ]
};
