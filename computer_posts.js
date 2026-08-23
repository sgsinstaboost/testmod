var computerQuizData = [
  {
    "category": "Computer",
    "topics": [
      {
        "topicName": "कंप्यूटर का परिचय एवं मेमोरी (Basics & Memory)",
        "tests": [
          {
            "testName": "Test 1 (कंप्यूटर का परिचय)",
            "timeInMinutes": 10,
            "questions": [
              {
                "q": "कंप्यूटर का जनक (Father of Computer) किसे कहा जाता है?",
                "options": ["चार्ल्स बैबेज", "एलन ट्यूरिंग", "ब्लेज पास्कल", "बिल गेट्स"],
                "answer": 0,
                "explanation": "चार्ल्स बैबेज (Charles Babbage) को विश्लेषणात्मक इंजन की अवधारणा के कारण कंप्यूटर का जनक माना जाता है।"
              },
              {
                "q": "कंप्यूटर का मुख्य मस्तिष्क (Brain of Computer) किसे कहा जाता है?",
                "options": ["RAM", "CPU", "Hard Disk", "Monitor"],
                "answer": 1,
                "explanation": "CPU (Central Processing Unit) कंप्यूटर का मस्तिष्क कहलाता है, जो सभी निर्देशों को प्रोसेस करता है।"
              },
              {
                "q": "निम्नलिखित में से कौन-सा एक इनपुट डिवाइस (Input Device) है?",
                "options": ["प्रिंटर", "मॉनिटर", "कीबोर्ड", "स्पीकर"],
                "answer": 2,
                "explanation": "कीबोर्ड एक इनपुट डिवाइस है जिसके माध्यम से डेटा और निर्देश दर्ज किए जाते हैं।"
              }
            ]
          },
          {
            "testName": "Test 2 (मेमोरी और स्टोरेज)",
            "timeInMinutes": 10,
            "questions": [
              {
                "q": "RAM किस प्रकार की मेमोरी का उदाहरण है?",
                "options": ["अस्थिर (Volatile)", "स्थिर (Non-Volatile)", "सेकेंडरी स्टोरेज", "ऑप्टिकल मेमोरी"],
                "answer": 0,
                "explanation": "RAM एक अस्थिर (Volatile) मेमोरी है, जिसमें पावर ऑफ होते ही डेटा मिट जाता है।"
              },
              {
                "q": "1 किलोबाइट (1 KB) में कितने बाइट्स होते हैं?",
                "options": ["1000 बाइट्स", "1024 बाइट्स", "1048 बाइट्स", "512 बाइट्स"],
                "answer": 1,
                "explanation": "कंप्यूटर बाइनरी सिस्टम में 1 KB = 1024 बाइट्स (Bytes) के बराबर होता है।"
              },
              {
                "q": "कंप्यूटर को बूट करने के लिए प्राथमिक निर्देश कहाँ स्टोर होते हैं?",
                "options": ["RAM", "ROM BIOS", "Cache", "Pen Drive"],
                "answer": 1,
                "explanation": "कंप्यूटर बूटिंग के प्राथमिक निर्देश ROM BIOS में सुरक्षित रहते हैं।"
              }
            ]
          }
        ]
      },
      {
        "topicName": "Full Form Test (Basic to Advanced)",
        "tests": [
          {
            "testName": "Test 1 (बुनियादी कंप्यूटर एवं हार्डवेयर संक्षिप्त नाम)",
            "timeInMinutes": 15,
            "questions": [
              {
                "q": "CPU का पूर्ण रूप (Full Form) क्या है?",
                "options": ["Central Processing Unit", "Central Program Unit", "Control Processing Unit", "Central Power Unit"],
                "answer": 0,
                "explanation": "CPU: Central Processing Unit - इसे कंप्यूटर का दिमाग कहा जाता है।"
              },
              {
                "q": "RAM का पूर्ण रूप क्या है?",
                "options": ["Random Access Memory", "Read Access Memory", "Rapid Action Memory", "Random Available Memory"],
                "answer": 0,
                "explanation": "RAM: Random Access Memory - यह प्राथमिक और अस्थिर (Volatile) मेमोरी है।"
              },
              {
                "q": "ROM का पूर्ण रूप क्या है?",
                "options": ["Read Only Memory", "Random Only Memory", "Run On Memory", "Real Operating Memory"],
                "answer": 0,
                "explanation": "ROM: Read Only Memory - यह स्थायी और नॉन-वोलेटाइल मेमोरी है।"
              },
              {
                "q": "ALU का पूर्ण रूप क्या होता है?",
                "options": ["Arithmetic Logic Unit", "Advanced Logic Unit", "Array Logic Unit", "Automatic Logic Unit"],
                "answer": 0,
                "explanation": "ALU: Arithmetic Logic Unit - यह CPU का भाग है जो गणितीय और तार्किक गणनाएं करता है।"
              },
              {
                "q": "CU का पूर्ण रूप क्या है?",
                "options": ["Control Unit", "Central Unit", "Calculation Unit", "Core Unit"],
                "answer": 0,
                "explanation": "CU: Control Unit - यह कंप्यूटर के सभी भागों के कार्यों को नियंत्रित करता है।"
              },
              {
                "q": "BIOS का पूर्ण रूप क्या है?",
                "options": ["Basic Input Output System", "Binary Input Output System", "Basic Internal Operating System", "Board Input Output System"],
                "answer": 0,
                "explanation": "BIOS: Basic Input Output System - यह कंप्यूटर स्टार्ट करते समय हार्डवेयर की जांच करता है।"
              },
              {
                "q": "POST का पूर्ण रूप क्या होता है?",
                "options": ["Power On Self Test", "Program Operating System Test", "Power Only Start Test", "Primary Output System Test"],
                "answer": 0,
                "explanation": "POST: Power On Self Test - कंप्यूटर चालू होने पर BIOS द्वारा की जाने वाली पहली जांच।"
              },
              {
                "q": "HDD का पूर्ण रूप क्या है?",
                "options": ["Hard Disk Drive", "Heavy Data Drive", "Hard Digital Drive", "High Density Drive"],
                "answer": 0,
                "explanation": "HDD: Hard Disk Drive - यह कंप्यूटर की मुख्य सेकेंडरी स्टोरेज डिवाइस है।"
              },
              {
                "q": "SSD का पूर्ण रूप क्या है?",
                "options": ["Solid State Drive", "Super Speed Drive", "Single Storage Disk", "Static State Drive"],
                "answer": 0,
                "explanation": "SSD: Solid State Drive - यह HDD से बहुत तेज और चिप आधारित स्टोरेज डिवाइस है।"
              },
              {
                "q": "FDD का पूर्ण रूप क्या है?",
                "options": ["Floppy Disk Drive", "Fast Data Drive", "Fixed Disk Drive", "Flash Drive Device"],
                "answer": 0,
                "explanation": "FDD: Floppy Disk Drive - पुरानी चुंबकीय डिस्क को पढ़ने वाला ड्राइव।"
              },
              {
                "q": "USB का पूर्ण रूप क्या है?",
                "options": ["Universal Serial Bus", "United Serial Bus", "Universal System Bus", "Universal Storage Board"],
                "answer": 0,
                "explanation": "USB: Universal Serial Bus - यह विभिन्न उपकरणों को कंप्यूटर से जोड़ने का मानक पोर्ट है।"
              },
              {
                "q": "VGA का पूर्ण रूप क्या है?",
                "options": ["Video Graphics Array", "Visual Graphics Adapter", "Video General Access", "Virtual Graphics Array"],
                "answer": 0,
                "explanation": "VGA: Video Graphics Array - मॉनिटर को कंप्यूटर से जोड़ने वाला वीडियो केबल पोर्ट।"
              },
              {
                "q": "HDMI का पूर्ण रूप क्या है?",
                "options": ["High-Definition Multimedia Interface", "High Data Media Interface", "High Definition Memory Interface", "Heavy Display Multimedia Interface"],
                "answer": 0,
                "explanation": "HDMI: High-Definition Multimedia Interface - ऑडियो और वीडियो दोनों को हाई क्वालिटी में ट्रांसफर करता है।"
              },
              {
                "q": "SMPS का पूर्ण रूप क्या होता है?",
                "options": ["Switched-Mode Power Supply", "Single Mode Power Supply", "System Main Power Supply", "Static Mode Power System"],
                "answer": 0,
                "explanation": "SMPS: Switched-Mode Power Supply - यह AC करंट को कंप्यूटर के लिए DC में बदलता है।"
              },
              {
                "q": "DVD का पूर्ण रूप क्या है?",
                "options": ["Digital Versatile Disc / Digital Video Disc", "Digital Virtual Disc", "Dynamic Video Disc", "Dual Video Disk"],
                "answer": 0,
                "explanation": "DVD: Digital Versatile Disc (या Digital Video Disc)।"
              },
              {
                "q": "CD का पूर्ण रूप क्या है?",
                "options": ["Compact Disc", "Computer Disc", "Common Data", "Central Disk"],
                "answer": 0,
                "explanation": "CD: Compact Disc - यह एक ऑप्टिकल स्टोरेज माध्यम है जिसकी क्षमता प्रायः 700 MB होती है।"
              },
              {
                "q": "LCD का पूर्ण रूप क्या है?",
                "options": ["Liquid Crystal Display", "Light Crystal Diode", "Liquid Clear Display", "Low Crystal Display"],
                "answer": 0,
                "explanation": "LCD: Liquid Crystal Display - डिस्प्ले स्क्रीन तकनीक।"
              },
              {
                "q": "LED का पूर्ण रूप क्या है?",
                "options": ["Light Emitting Diode", "Liquid Emitting Diode", "Light Electronic Display", "Low Emission Display"],
                "answer": 0,
                "explanation": "LED: Light Emitting Diode - ऊर्जा की बचत करने वाली आधुनिक डिस्प्ले तकनीक।"
              },
              {
                "q": "CRT का पूर्ण रूप क्या है?",
                "options": ["Cathode Ray Tube", "Central Ray Tube", "Common Ray Terminal", "Color Ray Terminal"],
                "answer": 0,
                "explanation": "CRT: Cathode Ray Tube - पुराने भारी मॉनिटर और टीवी में इस्तेमाल होने वाली तकनीक।"
              },
              {
                "q": "GPU का पूर्ण रूप क्या है?",
                "options": ["Graphics Processing Unit", "General Processing Unit", "Global Processing Unit", "Gaming Power Unit"],
                "answer": 0,
                "explanation": "GPU: Graphics Processing Unit - ग्राफिक्स और वीडियो को तेजी से रेंडर करने वाला प्रोसेसर।"
              }
            ]
          },
          {
            "testName": "Test 2 (मेमोरी यूनिट्स एवं चिप संक्षिप्ताक्षर)",
            "timeInMinutes": 15,
            "questions": [
              {
                "q": "BIT का संक्षिप्त रूप किससे बना है?",
                "options": ["Binary Digit", "Basic Information Term", "Binary Integer", "Binary Table"],
                "answer": 0,
                "explanation": "BIT: Binary Digit (0 और 1) - कंप्यूटर मेमोरी की सबसे छोटी इकाई।"
              },
              {
                "q": "KB का पूर्ण रूप क्या है?",
                "options": ["Kilobyte", "Kilobit", "Key Byte", "Kilo Board"],
                "answer": 0,
                "explanation": "KB: Kilobyte (1 KB = 1024 Bytes)।"
              },
              {
                "q": "MB का पूर्ण रूप क्या है?",
                "options": ["Megabyte", "Main Byte", "Mega Bit", "Micro Byte"],
                "answer": 0,
                "explanation": "MB: Megabyte (1 MB = 1024 KB)।"
              },
              {
                "q": "GB का पूर्ण रूप क्या है?",
                "options": ["Gigabyte", "General Byte", "Giga Bit", "Great Byte"],
                "answer": 0,
                "explanation": "GB: Gigabyte (1 GB = 1024 MB)।"
              },
              {
                "q": "TB का पूर्ण रूप क्या है?",
                "options": ["Terabyte", "Total Byte", "Tera Bit", "Tera Band"],
                "answer": 0,
                "explanation": "TB: Terabyte (1 TB = 1024 GB)।"
              },
              {
                "q": "PB का पूर्ण रूप क्या है?",
                "options": ["Petabyte", "Primary Byte", "Peta Bit", "Power Byte"],
                "answer": 0,
                "explanation": "PB: Petabyte (1 PB = 1024 TB)।"
              },
              {
                "q": "EB का पूर्ण रूप क्या है?",
                "options": ["Exabyte", "Extra Byte", "Electronic Byte", "Extended Byte"],
                "answer": 0,
                "explanation": "EB: Exabyte (1 EB = 1024 PB)।"
              },
              {
                "q": "ZB का पूर्ण रूप क्या है?",
                "options": ["Zettabyte", "Zero Byte", "Zone Byte", "Zetta Bit"],
                "answer": 0,
                "explanation": "ZB: Zettabyte (1 ZB = 1024 EB)।"
              },
              {
                "q": "YB का पूर्ण रूप क्या है?",
                "options": ["Yottabyte", "Yield Byte", "Yotta Bit", "Year Byte"],
                "answer": 0,
                "explanation": "YB: Yottabyte (1 YB = 1024 ZB)।"
              },
              {
                "q": "SRAM का पूर्ण रूप क्या है?",
                "options": ["Static Random Access Memory", "Synchronous RAM", "Simple RAM", "Super RAM"],
                "answer": 0,
                "explanation": "SRAM: Static Random Access Memory - यह कैश मेमोरी में इस्तेमाल होती है और इसे बार-बार रिफ्रेश नहीं करना पड़ता।"
              },
              {
                "q": "DRAM का पूर्ण रूप क्या है?",
                "options": ["Dynamic Random Access Memory", "Digital RAM", "Direct RAM", "Dual RAM"],
                "answer": 0,
                "explanation": "DRAM: Dynamic Random Access Memory - इसे लगातार रिफ्रेश करने की आवश्यकता होती है।"
              },
              {
                "q": "SDRAM का पूर्ण रूप क्या है?",
                "options": ["Synchronous Dynamic Random Access Memory", "Static Dynamic RAM", "Serial Dynamic RAM", "Super DRAM"],
                "answer": 0,
                "explanation": "SDRAM: Synchronous Dynamic Random Access Memory - यह सिस्टम बस क्लॉक के साथ सिंक होकर काम करती है।"
              },
              {
                "q": "PROM का पूर्ण रूप क्या है?",
                "options": ["Programmable Read Only Memory", "Primary Read Only Memory", "Permanent ROM", "Public ROM"],
                "answer": 0,
                "explanation": "PROM: Programmable Read Only Memory - इसमें केवल एक बार डेटा लिखा (Program) जा सकता है।"
              },
              {
                "q": "EPROM का पूर्ण रूप क्या है?",
                "options": ["Erasable Programmable Read Only Memory", "Electronic PROM", "Extended PROM", "External PROM"],
                "answer": 0,
                "explanation": "EPROM: Erasable Programmable Read Only Memory - इसका डेटा पराबैंगनी (UV) किरणों द्वारा मिटाया जाता है।"
              },
              {
                "q": "EEPROM का पूर्ण रूप क्या है?",
                "options": ["Electrically Erasable Programmable Read Only Memory", "Electronic Erasable PROM", "Extended Electric PROM", "Enhanced PROM"],
                "answer": 0,
                "explanation": "EEPROM: Electrically Erasable Programmable Read Only Memory - इसका डेटा विद्युत सिग्नल द्वारा मिटाया और लिखा जाता है।"
              },
              {
                "q": "SIMM का पूर्ण रूप क्या है?",
                "options": ["Single In-line Memory Module", "Serial In-line Memory Module", "Simple Internal Memory Module", "Single Integrated Memory Module"],
                "answer": 0,
                "explanation": "SIMM: Single In-line Memory Module - पुराने मदरबोर्ड में इस्तेमाल होने वाला रैम मॉड्यूल।"
              },
              {
                "q": "DIMM का पूर्ण रूप क्या है?",
                "options": ["Dual In-line Memory Module", "Digital In-line Memory Module", "Direct Internal Memory Module", "Dual Integrated Memory Module"],
                "answer": 0,
                "explanation": "DIMM: Dual In-line Memory Module - आधुनिक कंप्यूटरों में प्रयुक्त होने वाला रैम स्लॉट मॉड्यूल।"
              },
              {
                "q": "IC का पूर्ण रूप क्या है?",
                "options": ["Integrated Circuit", "Internal Circuit", "Integrated Chip", "Information Circuit"],
                "answer": 0,
                "explanation": "IC: Integrated Circuit - सिलिकॉन से बनी चिप, जिसका आविष्कार जैक किल्बी ने किया था।"
              },
              {
                "q": "VLSI का पूर्ण रूप क्या है?",
                "options": ["Very Large Scale Integration", "Very Low Scale Integration", "Virtual Large Scale Integration", "Vector Large Scale Integration"],
                "answer": 0,
                "explanation": "VLSI: Very Large Scale Integration - चौथी पीढ़ी के कंप्यूटरों में प्रयुक्त माइक्रोप्रोसेसर तकनीक।"
              },
              {
                "q": "ULSI का पूर्ण रूप क्या है?",
                "options": ["Ultra Large Scale Integration", "Universal Large Scale Integration", "United Large Scale Integration", "Ultimate Large Scale Integration"],
                "answer": 0,
                "explanation": "ULSI: Ultra Large Scale Integration - पांचवीं पीढ़ी (5th Gen) के कंप्यूटरों में प्रयुक्त तकनीक।"
              }
            ]
          },
          {
            "testName": "Test 3 (ऑपरेटिंग सिस्टम एवं सॉफ्टवेयर संक्षिप्ताक्षर)",
            "timeInMinutes": 15,
            "questions": [
              {
                "q": "OS का पूर्ण रूप क्या है?",
                "options": ["Operating System", "Open System", "Optical Storage", "Online Service"],
                "answer": 0,
                "explanation": "OS: Operating System - यह हार्डवेयर और यूजर के बीच इंटरफेस का काम करता है।"
              },
              {
                "q": "DOS का पूर्ण रूप क्या है?",
                "options": ["Disk Operating System", "Digital Operating System", "Direct Operating System", "Data Operating System"],
                "answer": 0,
                "explanation": "DOS: Disk Operating System - यह कमांड लाइन आधारित ऑपरेटिंग सिस्टम है।"
              },
              {
                "q": "GUI का पूर्ण रूप क्या है?",
                "options": ["Graphical User Interface", "General User Interface", "Global User Interface", "Graphic Universal Interface"],
                "answer": 0,
                "explanation": "GUI: Graphical User Interface - आइकॉन और विजुअल आधारित यूजर इंटरफेस (जैसे Windows)।"
              },
              {
                "q": "CUI / CLI का पूर्ण रूप क्या है?",
                "options": ["Character / Command User Interface", "Central User Interface", "Common User Interface", "Control User Interface"],
                "answer": 0,
                "explanation": "CUI: Character User Interface या CLI: Command Line Interface।"
              },
              {
                "q": "API का पूर्ण रूप क्या है?",
                "options": ["Application Programming Interface", "Advanced Program Interface", "Application Process Integration", "Applied Protocol Interface"],
                "answer": 0,
                "explanation": "API: Application Programming Interface - दो सॉफ्टवेयर अनुप्रयोगों को आपस में बातचीत करने की अनुमति देता है।"
              },
              {
                "q": "SDK का पूर्ण रूप क्या है?",
                "options": ["Software Development Kit", "System Development Kit", "Software Device Key", "Standard Development Kit"],
                "answer": 0,
                "explanation": "SDK: Software Development Kit - ऐप डेवलप करने के लिए टूल्स का संग्रह।"
              },
              {
                "q": "IDE का पूर्ण रूप क्या है?",
                "options": ["Integrated Development Environment", "Internal Development Environment", "Integrated Device Engine", "Interface Design Engine"],
                "answer": 0,
                "explanation": "IDE: Integrated Development Environment - कोडिंग, टेस्टिंग और डिबगिंग के लिए सॉफ्टवेयर (जैसे Android Studio)।"
              },
              {
                "q": "APK का पूर्ण रूप क्या है?",
                "options": ["Android Package Kit", "Android Program Key", "Application Package Kernel", "Android Private Kit"],
                "answer": 0,
                "explanation": "APK: Android Package Kit - एंड्रॉइड ऑपरेटिंग सिस्टम के लिए इंस्टॉलेशन फाइल फॉर्मेट।"
              },
              {
                "q": "DBMS का पूर्ण रूप क्या है?",
                "options": ["Database Management System", "Data Base Main System", "Digital Business Management System", "Data Backup Management Software"],
                "answer": 0,
                "explanation": "DBMS: Database Management System - डेटा को व्यवस्थित रूप से स्टोर और मैनेज करने वाला सॉफ्टवेयर।"
              },
              {
                "q": "RDBMS का पूर्ण रूप क्या है?",
                "options": ["Relational Database Management System", "Rapid Database Management System", "Realtime Database Management System", "Remote Database Management System"],
                "answer": 0,
                "explanation": "RDBMS: Relational Database Management System - टेबल्स के रूप में डेटा स्टोर करने वाला सिस्टम (उदा: MySQL)।"
              },
              {
                "q": "SQL का पूर्ण रूप क्या है?",
                "options": ["Structured Query Language", "Simple Query Language", "Standard Query Logic", "System Query Language"],
                "answer": 0,
                "explanation": "SQL: Structured Query Language - डेटाबेस से डेटा फेच और अपडेट करने की मानक भाषा।"
              },
              {
                "q": "DML का पूर्ण रूप क्या है?",
                "options": ["Data Manipulation Language", "Data Management Language", "Data Markup Language", "Digital Machine Language"],
                "answer": 0,
                "explanation": "DML: Data Manipulation Language - SQL में INSERT, UPDATE, DELETE कमांड्स।"
              },
              {
                "q": "DDL का पूर्ण रूप क्या है?",
                "options": ["Data Definition Language", "Data Description Language", "Digital Design Language", "Database Development Language"],
                "answer": 0,
                "explanation": "DDL: Data Definition Language - SQL में CREATE, ALTER, DROP कमांड्स।"
              },
              {
                "q": "DCL का पूर्ण रूप क्या है?",
                "options": ["Data Control Language", "Data Command Language", "Digital Control Logic", "Database Control List"],
                "answer": 0,
                "explanation": "DCL: Data Control Language - GRANT और REVOKE जैसी परमिशन कमांड्स।"
              },
              {
                "q": "TCL का पूर्ण रूप क्या है?",
                "options": ["Transaction Control Language", "Total Control Language", "Transfer Command Logic", "Transaction Code List"],
                "answer": 0,
                "explanation": "TCL: Transaction Control Language - COMMIT, ROLLBACK कमांड्स।"
              },
              {
                "q": "ERP का पूर्ण रूप क्या है?",
                "options": ["Enterprise Resource Planning", "Electronic Resource Program", "Enterprise Report Process", "Entity Resource Planning"],
                "answer": 0,
                "explanation": "ERP: Enterprise Resource Planning - व्यावसायिक प्रक्रियाओं को प्रबंधित करने वाला सॉफ्टवेयर।"
              },
              {
                "q": "CRM का पूर्ण रूप क्या है?",
                "options": ["Customer Relationship Management", "Consumer Record Management", "Client Resource Module", "Customer Report Maker"],
                "answer": 0,
                "explanation": "CRM: Customer Relationship Management - ग्राहकों के डेटा और संपर्क को मैनेज करने का सिस्टम।"
              },
              {
                "q": "BIOS ROM में फर्मवेयर (Firmware) क्या होता है?",
                "options": ["हार्डवेयर में एम्बेडेड सॉफ्टवेयर", "अस्थायी फाइलें", "एप्लीकेशन सॉफ्टवेयर", "ऑपरेटिंग सिस्टम का भाग"],
                "answer": 0,
                "explanation": "Firmware: हार्डवेयर चिप में स्थायी रूप से लिखा गया सॉफ्टवेयर।"
              },
              {
                "q": "FAT का पूर्ण रूप क्या है?",
                "options": ["File Allocation Table", "Fast Access Table", "File Access Terminal", "Format Allocation Table"],
                "answer": 0,
                "explanation": "FAT: File Allocation Table - हार्ड डिस्क और मेमोरी कार्ड का पुराना फाइल सिस्टम।"
              },
              {
                "q": "NTFS का पूर्ण रूप क्या है?",
                "options": ["New Technology File System", "Network File System", "New Track File Storage", "National Technology File System"],
                "answer": 0,
                "explanation": "NTFS: New Technology File System - विंडोज का आधुनिक और सुरक्षित फाइल सिस्टम।"
              }
            ]
          },
          {
            "testName": "Test 4 (इंटरनेट एवं नेटवर्किंग भाग-1)",
            "timeInMinutes": 15,
            "questions": [
              {
                "q": "LAN का पूर्ण रूप क्या है?",
                "options": ["Local Area Network", "Large Area Network", "Link Area Network", "Local Access Network"],
                "answer": 0,
                "explanation": "LAN: Local Area Network - एक कमरे, ऑफिस या बिल्डिंग तक सीमित नेटवर्क।"
              },
              {
                "q": "WAN का पूर्ण रूप क्या है?",
                "options": ["Wide Area Network", "Wireless Area Network", "Web Area Network", "World Access Network"],
                "answer": 0,
                "explanation": "WAN: Wide Area Network - देशों और महाद्वीपों में फैला वैश्विक नेटवर्क (उदा: इंटरनेट)।"
              },
              {
                "q": "MAN का पूर्ण रूप क्या है?",
                "options": ["Metropolitan Area Network", "Main Area Network", "Multiple Access Network", "Medium Area Network"],
                "answer": 0,
                "explanation": "MAN: Metropolitan Area Network - पूरे शहर में फैला नेटवर्क (उदा: केबल टीवी नेटवर्क)।"
              },
              {
                "q": "PAN का पूर्ण रूप क्या है?",
                "options": ["Personal Area Network", "Private Area Network", "Public Access Network", "Peer Area Network"],
                "answer": 0,
                "explanation": "PAN: Personal Area Network - व्यक्तिगत उपयोग का नेटवर्क (उदा: ब्लूटूथ, हॉटस्पॉट)।"
              },
              {
                "q": "WLAN का पूर्ण रूप क्या है?",
                "options": ["Wireless Local Area Network", "Wide Local Area Network", "Web Local Access Network", "World LAN"],
                "answer": 0,
                "explanation": "WLAN: Wireless Local Area Network - बिना तार का स्थानीय नेटवर्क (Wi-Fi आधारित)।"
              },
              {
                "q": "VPN का पूर्ण रूप क्या है?",
                "options": ["Virtual Private Network", "Visual Private Network", "Virtual Public Network", "Verified Private Network"],
                "answer": 0,
                "explanation": "VPN: Virtual Private Network - इंटरनेट पर सुरक्षित और एन्क्रिप्टेड कनेक्शन स्थापित करता है।"
              },
              {
                "q": "IP का पूर्ण रूप क्या है?",
                "options": ["Internet Protocol", "Internal Protocol", "Information Provider", "Internet Provider"],
                "answer": 0,
                "explanation": "IP: Internet Protocol - नेटवर्क पर प्रत्येक डिवाइस का विशिष्ट पता निर्धारित करने का नियम।"
              },
              {
                "q": "IPv4 का पूर्ण रूप क्या है?",
                "options": ["Internet Protocol Version 4", "Internal Protocol Version 4", "Internet Packet Version 4", "IP Vector 4"],
                "answer": 0,
                "explanation": "IPv4: Internet Protocol Version 4 - यह 32-बिट का पता होता है।"
              },
              {
                "q": "IPv6 का पूर्ण रूप क्या है?",
                "options": ["Internet Protocol Version 6", "Internal Protocol Version 6", "Internet Packet Version 6", "IP Vector 6"],
                "answer": 0,
                "explanation": "IPv6: Internet Protocol Version 6 - यह 128-बिट का आधुनिक IP एड्रेस है।"
              },
              {
                "q": "MAC एड्रेस का पूर्ण रूप क्या है?",
                "options": ["Media Access Control", "Memory Access Control", "Machine Access Code", "Main Address Control"],
                "answer": 0,
                "explanation": "MAC: Media Access Control - यह नेटवर्क कार्ड (NIC) का 48-बिट का स्थायी भौतिक पता होता है।"
              },
              {
                "q": "URL का पूर्ण रूप क्या है?",
                "options": ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Resource Link", "United Resource Locator"],
                "answer": 0,
                "explanation": "URL: Uniform Resource Locator - इंटरनेट पर किसी वेबपेज या फाइल का पूरा वेब पता।"
              },
              {
                "q": "URI का पूर्ण रूप क्या है?",
                "options": ["Uniform Resource Identifier", "Universal Resource Interface", "United Resource Index", "Uniform Real Identifier"],
                "answer": 0,
                "explanation": "URI: Uniform Resource Identifier - वेब पर किसी संसाधन की पहचान करने वाला मानक।"
              },
              {
                "q": "URN का पूर्ण रूप क्या है?",
                "options": ["Uniform Resource Name", "Universal Resource Number", "United Real Name", "Unique Resource Name"],
                "answer": 0,
                "explanation": "URN: Uniform Resource Name - वेब संसाधन का स्थायी नाम।"
              },
              {
                "q": "ISP का पूर्ण रूप क्या है?",
                "options": ["Internet Service Provider", "International Service Protocol", "Internet System Program", "Internal Security Provider"],
                "answer": 0,
                "explanation": "ISP: Internet Service Provider - इंटरनेट सेवा प्रदान करने वाली कंपनी (उदा: Jio, Airtel)।"
              },
              {
                "q": "DNS का पूर्ण रूप क्या है?",
                "options": ["Domain Name System", "Domain Network Server", "Digital Name Service", "Data Network System"],
                "answer": 0,
                "explanation": "DNS: Domain Name System - यह डोमेन नेम (जैसे google.com) को IP एड्रेस में बदलता है।"
              },
              {
                "q": "DHCP का पूर्ण रूप क्या है?",
                "options": ["Dynamic Host Configuration Protocol", "Digital Host Control Protocol", "Data Host Configuration Program", "Dynamic Header Control Protocol"],
                "answer": 0,
                "explanation": "DHCP: Dynamic Host Configuration Protocol - नेटवर्क में डिवाइसेज को ऑटोमैटिक IP प्रदान करता है।"
              },
              {
                "q": "FTP का पूर्ण रूप क्या है?",
                "options": ["File Transfer Protocol", "Fast Transfer Protocol", "File Transmission Program", "Format Transfer Protocol"],
                "answer": 0,
                "explanation": "FTP: File Transfer Protocol - नेटवर्क पर फाइलों को अपलोड और डाउनलोड करने का प्रोटोकॉल।"
              },
              {
                "q": "SFTP का पूर्ण रूप क्या है?",
                "options": ["Secure File Transfer Protocol", "Simple File Transfer Protocol", "Super Fast Transfer Protocol", "Static File Transfer Protocol"],
                "answer": 0,
                "explanation": "SFTP: Secure File Transfer Protocol - SSH द्वारा सुरक्षित फाइल ट्रांसफर।"
              },
              {
                "q": "HTTP का पूर्ण रूप क्या है?",
                "options": ["Hypertext Transfer Protocol", "High Text Transfer Protocol", "Hyperlink Transfer Protocol", "Hypertext Transmission Program"],
                "answer": 0,
                "explanation": "HTTP: Hypertext Transfer Protocol - वर्ल्ड वाइड वेब पर वेबपेज ट्रांसफर करने का प्रोटोकॉल।"
              },
              {
                "q": "HTTPS का पूर्ण रूप क्या है?",
                "options": ["Hypertext Transfer Protocol Secure", "Hypertext Transmission Protocol System", "Hyperlink Transfer Protocol Standard", "High Text Protocol Secure"],
                "answer": 0,
                "explanation": "HTTPS: Hypertext Transfer Protocol Secure - SSL/TLS द्वारा एन्क्रिप्टेड सुरक्षित वेब ब्राउजिंग।"
              }
            ]
          },
          {
            "testName": "Test 5 (इंटरनेट, ईमेल एवं वेब प्रोटोकॉल)",
            "timeInMinutes": 15,
            "questions": [
              {
                "q": "WWW का पूर्ण रूप क्या है?",
                "options": ["World Wide Web", "World Wide Webpage", "World Web Wide", "World Wide Word"],
                "answer": 0,
                "explanation": "WWW: World Wide Web - टिम बर्नर्स-ली द्वारा 1989 में विकसित इंटरनेट सूचना प्रणाली।"
              },
              {
                "q": "HTML का पूर्ण रूप क्या है?",
                "options": ["HyperText Markup Language", "Hyperlink Text Markup Language", "High Text Machine Language", "HyperText Marking Language"],
                "answer": 0,
                "explanation": "HTML: HyperText Markup Language - वेबपेज बनाने की मूल मार्कअप भाषा।"
              },
              {
                "q": "XML का पूर्ण रूप क्या है?",
                "options": ["Extensible Markup Language", "Extension Markup Language", "External Markup Language", "Extended Machine Language"],
                "answer": 0,
                "explanation": "XML: Extensible Markup Language - डेटा को स्टोर और ट्रांसपोर्ट करने के लिए प्रयुक्त भाषा।"
              },
              {
                "q": "CSS का पूर्ण रूप क्या है?",
                "options": ["Cascading Style Sheets", "Computer Style System", "Creative Style Sheets", "Color Style Sheets"],
                "answer": 0,
                "explanation": "CSS: Cascading Style Sheets - वेबपेज को स्टाइल और डिजाइन देने के लिए प्रयुक्त भाषा।"
              },
              {
                "q": "SMTP का पूर्ण रूप क्या है?",
                "options": ["Simple Mail Transfer Protocol", "Standard Mail Transmission Protocol", "Single Mail Transfer Program", "System Mail Transfer Protocol"],
                "answer": 0,
                "explanation": "SMTP: Simple Mail Transfer Protocol - ईमेल भेजने (Send) के लिए प्रयुक्त प्रोटोकॉल।"
              },
              {
                "q": "POP3 का पूर्ण रूप क्या है?",
                "options": ["Post Office Protocol version 3", "Public Office Protocol 3", "Private Online Protocol 3", "Program Output Protocol 3"],
                "answer": 0,
                "explanation": "POP3: Post Office Protocol version 3 - सर्वर से ईमेल डाउनलोड/रिसीव करने का प्रोटोकॉल।"
              },
              {
                "q": "IMAP का पूर्ण रूप क्या है?",
                "options": ["Internet Message Access Protocol", "Internal Mail Access Protocol", "Internet Mail Application Program", "Instant Message Access Protocol"],
                "answer": 0,
                "explanation": "IMAP: Internet Message Access Protocol - सर्वर पर रहते हुए ईमेल एक्सेस और सिंक करने का आधुनिक प्रोटोकॉल।"
              },
              {
                "q": "MIME का पूर्ण रूप क्या है?",
                "options": ["Multipurpose Internet Mail Extensions", "Multiple Internet Mail Engine", "Main Internet Message Extension", "Modern Internet Mail Encoding"],
                "answer": 0,
                "explanation": "MIME: Multipurpose Internet Mail Extensions - ईमेल में ऑडियो, वीडियो, इमेज अटैचमेंट भेजने की तकनीक।"
              },
              {
                "q": "TCP का पूर्ण रूप क्या है?",
                "options": ["Transmission Control Protocol", "Transfer Control Protocol", "Terminal Connection Protocol", "Transmission Core Program"],
                "answer": 0,
                "explanation": "TCP: Transmission Control Protocol - डेटा को छोटे-छोटे पैकेट्स में बांटकर सुरक्षित डिलीवर करने का नियम।"
              },
              {
                "q": "UDP का पूर्ण रूप क्या है?",
                "options": ["User Datagram Protocol", "Universal Data Protocol", "Unified Datagram Program", "User Data Process"],
                "answer": 0,
                "explanation": "UDP: User Datagram Protocol - तेज गति से डेटा भेजने वाला कनेक्शन-रहित प्रोटोकॉल (लाइव स्ट्रीमिंग आदि में)।"
              },
              {
                "q": "VoIP का पूर्ण रूप क्या है?",
                "options": ["Voice over Internet Protocol", "Video over IP", "Voice on Internet Provider", "Visual over IP"],
                "answer": 0,
                "explanation": "VoIP: Voice over Internet Protocol - इंटरनेट के माध्यम से वॉयस कॉल करने की तकनीक (उदा: WhatsApp Calling)।"
              },
              {
                "q": "Wi-Fi का पूर्ण रूप क्या है?",
                "options": ["Wireless Fidelity", "Wireless Fiber", "Wide Fidelity", "Wireless Finding"],
                "answer": 0,
                "explanation": "Wi-Fi: Wireless Fidelity - IEEE 802.11 मानक पर आधारित वायरलेस नेटवर्किंग तकनीक।"
              },
              {
                "q": "WLAN मानक IEEE 802.11 में 'IEEE' का पूर्ण रूप क्या है?",
                "options": ["Institute of Electrical and Electronics Engineers", "International Electrical Engineering Entity", "Institute of Electronic Engineering Experts", "Indian Electrical Engineers Institute"],
                "answer": 0,
                "explanation": "IEEE: Institute of Electrical and Electronics Engineers।"
              },
              {
                "q": "MODEM का संक्षिप्त रूप किससे मिलकर बना है?",
                "options": ["MOdulator-DEModulator", "MOdern-DEMonstrator", "MOdule-DEvice-Manager", "MOde-DElivery-Mechanism"],
                "answer": 0,
                "explanation": "MODEM: MOdulator-DEModulator - एनालॉग सिग्नल को डिजिटल और डिजिटल को एनालॉग में बदलता है।"
              },
              {
                "q": "NAT का पूर्ण रूप क्या है?",
                "options": ["Network Address Translation", "Network Access Terminal", "Native Address Transfer", "Node Allocation Table"],
                "answer": 0,
                "explanation": "NAT: Network Address Translation - प्राइवेट IP को पब्लिक IP में मैप करता है।"
              },
              {
                "q": "OSI मॉडल में 'OSI' का पूर्ण रूप क्या है?",
                "options": ["Open Systems Interconnection", "Operating System Integration", "Optical System Interface", "Open Software Interface"],
                "answer": 0,
                "explanation": "OSI: Open Systems Interconnection - 7 लेयर वाला नेटवर्किंग रेफरेंस मॉडल।"
              },
              {
                "q": "ARP का पूर्ण रूप क्या है?",
                "options": ["Address Resolution Protocol", "Access Resolution Protocol", "Advanced Routing Protocol", "Array Resolution Process"],
                "answer": 0,
                "explanation": "ARP: Address Resolution Protocol - IP एड्रेस से MAC एड्रेस ढूंढता है।"
              },
              {
                "q": "RARP का पूर्ण रूप क्या है?",
                "options": ["Reverse Address Resolution Protocol", "Remote Address Resolution Protocol", "Rapid Address Resolution Protocol", "Routed Address Resolution Protocol"],
                "answer": 0,
                "explanation": "RARP: Reverse Address Resolution Protocol - MAC एड्रेस से IP एड्रेस ढूंढता है।"
              },
              {
                "q": "ICMP का पूर्ण रूप क्या है?",
                "options": ["Internet Control Message Protocol", "Internal Communication Message Protocol", "Internet Connection Management Protocol", "IP Control Main Protocol"],
                "answer": 0,
                "explanation": "ICMP: Internet Control Message Protocol - नेटवर्क एरर रिपोर्टिंग (जैसे Ping कमांड) के लिए प्रयुक्त।"
              },
              {
                "q": "SNMP का पूर्ण रूप क्या है?",
                "options": ["Simple Network Management Protocol", "System Network Monitoring Protocol", "Secure Network Main Protocol", "Standard Network Management Program"],
                "answer": 0,
                "explanation": "SNMP: Simple Network Management Protocol - नेटवर्क डिवाइसेज को मॉनिटर और मैनेज करता है।"
              }
            ]
          },
          {
            "testName": "Test 6 (फाइल एक्सटेंशन एवं ग्राफिक्स संक्षिप्ताक्षर)",
            "timeInMinutes": 15,
            "questions": [
              {
                "q": "PDF का पूर्ण रूप क्या है?",
                "options": ["Portable Document Format", "Public Document File", "Printable Document File", "Permanent Data Format"],
                "answer": 0,
                "explanation": "PDF: Portable Document Format - एडोब (Adobe) द्वारा विकसित दस्तावेज फॉर्मेट।"
              },
              {
                "q": "JPEG / JPG का पूर्ण रूप क्या है?",
                "options": ["Joint Photographic Experts Group", "Joint Picture Experts Group", "Java Photo Encoding Group", "Joint Pixel Export Group"],
                "answer": 0,
                "explanation": "JPEG: Joint Photographic Experts Group - डिजिटल फोटो का लोकप्रिय कंप्रेस्ड फॉर्मेट।"
              },
              {
                "q": "PNG का पूर्ण रूप क्या है?",
                "options": ["Portable Network Graphics", "Public Network Graphics", "Photo Network Group", "Portable New Graphics"],
                "answer": 0,
                "explanation": "PNG: Portable Network Graphics - ट्रांसपेरेंट बैकग्राउंड सपोर्ट करने वाला इमेज फॉर्मेट।"
              },
              {
                "q": "GIF का पूर्ण रूप क्या है?",
                "options": ["Graphics Interchange Format", "General Image File", "Graphic Information File", "Global Image Format"],
                "answer": 0,
                "explanation": "GIF: Graphics Interchange Format - एनिमेटेड और 256 रंगों वाला इमेज फॉर्मेट।"
              },
              {
                "q": "BMP का पूर्ण रूप क्या है?",
                "options": ["Bitmap Image File", "Binary Map Picture", "Basic Media Picture", "Byte Map Process"],
                "answer": 0,
                "explanation": "BMP: Bitmap - अनकंप्रेस्ड रॉ इमेज फाइल फॉर्मेट।"
              },
              {
                "q": "TIFF का पूर्ण रूप क्या है?",
                "options": ["Tagged Image File Format", "Total Image Format File", "True Image File Format", "Terminal Image Format"],
                "answer": 0,
                "explanation": "TIFF: Tagged Image File Format - उच्च गुणवत्ता वाली ग्राफिक और स्कैनिंग फाइल।"
              },
              {
                "q": "MP3 का पूर्ण रूप क्या है?",
                "options": ["MPEG Audio Layer-3", "Music Player 3", "Media Player 3", "Motion Picture 3"],
                "answer": 0,
                "explanation": "MP3: MPEG Audio Layer-3 - लोकप्रिय ऑडियो कंप्रेशन फॉर्मेट।"
              },
              {
                "q": "MP4 का पूर्ण रूप क्या है?",
                "options": ["MPEG-4 Part 14", "Media Player 4", "Motion Picture 4", "Music Player 4"],
                "answer": 0,
                "explanation": "MP4: MPEG-4 Part 14 - ऑडियो और वीडियो डिजिटल कंटेनर फॉर्मेट।"
              },
              {
                "q": "MPEG का पूर्ण रूप क्या है?",
                "options": ["Moving Picture Experts Group", "Motion Photo Experts Group", "Media Picture Encoding Group", "Movie Player Export Group"],
                "answer": 0,
                "explanation": "MPEG: Moving Picture Experts Group - वीडियो संपीड़न मानक संस्था।"
              },
              {
                "q": "AVI का पूर्ण रूप क्या है?",
                "options": ["Audio Video Interleave", "Advanced Video Interface", "Audio Visual Integration", "Array Video Interface"],
                "answer": 0,
                "explanation": "AVI: Audio Video Interleave - माइक्रोसॉफ्ट का वीडियो फाइल फॉर्मेट।"
              },
              {
                "q": "WAV का पूर्ण रूप क्या है?",
                "options": ["Waveform Audio File Format", "Wireless Audio Vector", "Wave Audio Video", "Wide Audio Voice"],
                "answer": 0,
                "explanation": "WAV: Waveform Audio File Format - विंडोज की अनकंप्रेस्ड ऑडियो फाइल।"
              },
              {
                "q": "DOC / DOCX में 'DOC' का पूर्ण रूप क्या है?",
                "options": ["Document", "Data Object Code", "Digital Output Card", "Direct Output Code"],
                "answer": 0,
                "explanation": "DOC: Document File Format (MS Word की फाइल)।"
              },
              {
                "q": "XLS / XLSX का संबंध किस प्रकार की फाइल से है?",
                "options": ["Excel Spreadsheet", "XML System", "Execute Script", "Extended Sheet"],
                "answer": 0,
                "explanation": "XLS: Excel Spreadsheet (MS Excel फाइल)।"
              },
              {
                "q": "PPT / PPTX का संबंध किससे है?",
                "options": ["PowerPoint Presentation", "Portable Page Template", "Primary Point Tool", "Page Presentation Text"],
                "answer": 0,
                "explanation": "PPT: PowerPoint Presentation (MS PowerPoint फाइल)।"
              },
              {
                "q": "RTF का पूर्ण रूप क्या है?",
                "options": ["Rich Text Format", "Raw Text File", "Real Time File", "Rapid Text Format"],
                "answer": 0,
                "explanation": "RTF: Rich Text Format - वर्डपैड और वर्ड डॉक्यूमेंट का कॉमन टेक्स्ट फॉर्मेट।"
              },
              {
                "q": "TXT का पूर्ण रूप क्या है?",
                "options": ["Plain Text File", "Total Text", "Terminal Text", "Transfer Text"],
                "answer": 0,
                "explanation": "TXT: Plain Text (नोटपैड की साधारण टेक्स्ट फाइल)।"
              },
              {
                "q": "CSV का पूर्ण रूप क्या है?",
                "options": ["Comma Separated Values", "Character Standard Value", "Common Serial Variable", "Control System Variable"],
                "answer": 0,
                "explanation": "CSV: Comma Separated Values - डेटा को अल्पविराम से अलग करके स्टोर करने वाली फाइल।"
              },
              {
                "q": "ZIP का पूर्ण रूप क्या है?",
                "options": ["Zone Information Protocol (Compressed Archive)", "Zero Loss Integration", "Zip Index Packet", "Zoned Input Package"],
                "answer": 0,
                "explanation": "ZIP: कंप्रेस्ड आर्काइव फाइल फॉर्मेट जो फाइलों का आकार छोटा करता है।"
              },
              {
                "q": "ISO फाइल का पूर्ण रूप किससे संबंधित है?",
                "options": ["Optical Disc Image (International Organization for Standardization)", "Internal System Object", "Input Storage Object", "Integrated System Output"],
                "answer": 0,
                "explanation": "ISO: CD/DVD डिस्क की सम्पूर्ण डिजिटल कॉपी (Disk Image File)।"
              },
              {
                "q": "EXE का पूर्ण रूप क्या है?",
                "options": ["Executable File", "Execute Extension", "Extended File", "Electronic Execution"],
                "answer": 0,
                "explanation": "EXE: Executable File - विंडोज में सीधे रन होने वाली सॉफ्टवेयर प्रोग्राम फाइल।"
              }
            ]
          },
          {
            "testName": "Test 7 (प्रोग्रामिंग, वेब डेवलपमेंट एवं डेटा स्ट्रक्चर)",
            "timeInMinutes": 15,
            "questions": [
              {
                "q": "OOP का पूर्ण रूप क्या है?",
                "options": ["Object-Oriented Programming", "Open Operating Protocol", "Output Oriented Program", "Online Object Process"],
                "answer": 0,
                "explanation": "OOP: Object-Oriented Programming - ऑब्जेक्ट और क्लास आधारित प्रोग्रामिंग प्रतिमान (जैसे Java, C++)।"
              },
              {
                "q": "JVM का पूर्ण रूप क्या है?",
                "options": ["Java Virtual Machine", "Java Verified Module", "Java Visual Mechanism", "Java Vector Machine"],
                "answer": 0,
                "explanation": "JVM: Java Virtual Machine - जावा बाइटकोड को निष्पादित करने वाला रनटाइम इंजन।"
              },
              {
                "q": "JDK का पूर्ण रूप क्या है?",
                "options": ["Java Development Kit", "Java Device Key", "Java Data Kernel", "Java Deployment Kit"],
                "answer": 0,
                "explanation": "JDK: Java Development Kit - जावा प्रोग्राम विकसित करने के लिए पूरा पैकेज।"
              },
              {
                "q": "JRE का पूर्ण रूप क्या है?",
                "options": ["Java Runtime Environment", "Java Realtime Engine", "Java Resource Entity", "Java Remote Environment"],
                "answer": 0,
                "explanation": "JRE: Java Runtime Environment - जावा एप्लिकेशन चलाने के लिए आवश्यक माहौल।"
              },
              {
                "q": "JSON का पूर्ण रूप क्या है?",
                "options": ["JavaScript Object Notation", "Java Serialized Object Network", "JavaScript Output Node", "Java Standard Object Name"],
                "answer": 0,
                "explanation": "JSON: JavaScript Object Notation - लाइटवेट डेटा इंटरचेंज फॉर्मेट।"
              },
              {
                "q": "AJAX का पूर्ण रूप क्या है?",
                "options": ["Asynchronous JavaScript and XML", "Advanced Java Access Extension", "Applied JavaScript Array XML", "Automated Java Access XML"],
                "answer": 0,
                "explanation": "AJAX: Asynchronous JavaScript and XML - बिना पेज रीलोड किए बैकग्राउंड से डेटा लोड करने की तकनीक।"
              },
              {
                "q": "DOM का पूर्ण रूप क्या है?",
                "options": ["Document Object Model", "Data Object Module", "Digital Output Mechanism", "Direct Object Mapping"],
                "answer": 0,
                "explanation": "DOM: Document Object Model - वेबपेज के HTML स्ट्रक्चर को प्रोग्रामेटिक रूप से एक्सेस करने का इंटरफेस।"
              },
              {
                "q": "PHP का पूर्ण रूप क्या है?",
                "options": ["Hypertext Preprocessor (मूलतः Personal Home Page)", "Program Hypertext Processor", "Private Home Protocol", "Primary Hypertext Page"],
                "answer": 0,
                "explanation": "PHP: Hypertext Preprocessor - सर्वर साइड वेब डेवलपमेंट स्क्रिप्टिंग भाषा।"
              },
              {
                "q": "ASP का पूर्ण रूप क्या है?",
                "options": ["Active Server Pages", "Advanced Server Protocol", "Application Service Provider", "Array Script Page"],
                "answer": 0,
                "explanation": "ASP: Active Server Pages - माइक्रोसॉफ्ट द्वारा विकसित सर्वर साइड इंजन।"
              },
              {
                "q": "JSP का पूर्ण रूप क्या है?",
                "options": ["JavaServer Pages", "Java Standard Program", "Java Serial Protocol", "Java Source Page"],
                "answer": 0,
                "explanation": "JSP: JavaServer Pages - जावा आधारित डायनामिक वेबपेज तकनीक।"
              },
              {
                "q": "ASCII का पूर्ण रूप क्या है?",
                "options": ["American Standard Code for Information Interchange", "Asian Standard Code for Information Interchange", "American System Code for Internal Interchange", "All Standard Code for Internet Interchange"],
                "answer": 0,
                "explanation": "ASCII: American Standard Code for Information Interchange (7 या 8 बिट कैरेक्टर एन्कोडिंग)।"
              },
              {
                "q": "EBCDIC का पूर्ण रूप क्या है?",
                "options": ["Extended Binary Coded Decimal Interchange Code", "Electronic Binary Coded Data Interchange Code", "Extended Byte Code Decimal Interchange", "Embedded Binary Code Data Interchange"],
                "answer": 0,
                "explanation": "EBCDIC: Extended Binary Coded Decimal Interchange Code (IBM मेनफ्रेम में प्रयुक्त 8-बिट कोड)।"
              },
              {
                "q": "BCD का पूर्ण रूप क्या है?",
                "options": ["Binary Coded Decimal", "Basic Coded Data", "Binary Character Display", "Byte Coded Digit"],
                "answer": 0,
                "explanation": "BCD: Binary Coded Decimal - दशमलव अंकों को 4-बिट बाइनरी में लिखने की विधि।"
              },
              {
                "q": "FIFO का पूर्ण रूप क्या है?",
                "options": ["First In, First Out", "Fast Input, Fast Output", "Final In, Final Out", "First Index, First Order"],
                "answer": 0,
                "explanation": "FIFO: First In, First Out - क्यू (Queue) डेटा स्ट्रक्चर का नियम।"
              },
              {
                "q": "LIFO का पूर्ण रूप क्या है?",
                "options": ["Last In, First Out", "Low Input, Fast Output", "Latest In, Final Out", "Linear Input, Fixed Output"],
                "answer": 0,
                "explanation": "LIFO: Last In, First Out - स्टैक (Stack) डेटा स्ट्रक्चर का नियम।"
              },
              {
                "q": "COBOL का पूर्ण रूप क्या है?",
                "options": ["Common Business Oriented Language", "Computer Business Oriented Language", "Common Basic Operating Language", "Core Business Output Language"],
                "answer": 0,
                "explanation": "COBOL: Common Business Oriented Language - व्यावसायिक उपयोग के लिए विकसित उच्च स्तरीय भाषा।"
              },
              {
                "q": "FORTRAN का पूर्ण रूप क्या है?",
                "options": ["Formula Translation", "Format Transformation", "Foreign Language Translation", "Formula Transaction"],
                "answer": 0,
                "explanation": "FORTRAN: Formula Translation - 1957 में जॉन बैकस द्वारा विकसित पहली उच्च स्तरीय वैज्ञानिक भाषा।"
              },
              {
                "q": "BASIC का पूर्ण रूप क्या है?",
                "options": ["Beginner's All-purpose Symbolic Instruction Code", "Basic Application System Instruction Code", "Binary Automatic Symbolic Instruction Code", "Beginner's Advanced System Interface Code"],
                "answer": 0,
                "explanation": "BASIC: Beginner's All-purpose Symbolic Instruction Code।"
              },
              {
                "q": "LISP का पूर्ण रूप क्या है?",
                "options": ["List Processing", "Logic Instruction Script", "Language of Integrated Systems", "Linear Instruction Process"],
                "answer": 0,
                "explanation": "LISP: List Processing - आर्टिफिशियल इंटेलिजेंस (AI) में इस्तेमाल होने वाली प्राचीन भाषा।"
              },
              {
                "q": "ALGOR / ALGOL का पूर्ण रूप क्या है?",
                "options": ["Algorithmic Language", "Algebraic Operating Logic", "Algorithm Output Language", "Array Logic Language"],
                "answer": 0,
                "explanation": "ALGOL: Algorithmic Language।"
              }
            ]
          },
          {
            "testName": "Test 8 (साइबर सुरक्षा, एन्क्रिप्शन एवं क्लाउड)",
            "timeInMinutes": 15,
            "questions": [
              {
                "q": "SSL का पूर्ण रूप क्या है?",
                "options": ["Secure Sockets Layer", "System Security Layer", "Safe Socket Link", "Serial Security Level"],
                "answer": 0,
                "explanation": "SSL: Secure Sockets Layer - इंटरनेट संचार को एन्क्रिप्ट करने वाली सुरक्षा तकनीक।"
              },
              {
                "q": "TLS का पूर्ण रूप क्या है?",
                "options": ["Transport Layer Security", "Transmission Level Security", "Total Logic Security", "Terminal Link Safety"],
                "answer": 0,
                "explanation": "TLS: Transport Layer Security - SSL का अधिक उन्नत और आधुनिक सुरक्षा रूप।"
              },
              {
                "q": "DDoS का पूर्ण रूप क्या है?",
                "options": ["Distributed Denial of Service", "Direct Denial of System", "Distributed Data of Server", "Digital Denial of Security"],
                "answer": 0,
                "explanation": "DDoS: Distributed Denial of Service - सर्वर पर भारी फर्जी ट्रैफिक भेजकर उसे क्रैश करने का साइबर हमला।"
              },
              {
                "q": "DoS का पूर्ण रूप क्या है?",
                "options": ["Denial of Service", "Disk Operating System", "Data of System", "Direct Output Service"],
                "answer": 0,
                "explanation": "DoS: Denial of Service - सर्वर को सेवाओं से बाधित करने वाला हमला।"
              },
              {
                "q": "WPA का पूर्ण रूप (Wi-Fi Security) क्या है?",
                "options": ["Wi-Fi Protected Access", "Wireless Public Access", "Wi-Fi Protocol Access", "Wireless Privacy Agreement"],
                "answer": 0,
                "explanation": "WPA: Wi-Fi Protected Access - वायरलेस नेटवर्क को पासवर्ड से सुरक्षित रखने की प्रणाली।"
              },
              {
                "q": "WEP का पूर्ण रूप क्या है?",
                "options": ["Wired Equivalent Privacy", "Wireless Encryption Protocol", "Web Electronic Privacy", "Wide Encryption Protection"],
                "answer": 0,
                "explanation": "WEP: Wired Equivalent Privacy - वाई-फाई का पुराना सुरक्षा प्रोटोकॉल।"
              },
              {
                "q": "IDS का पूर्ण रूप क्या है?",
                "options": ["Intrusion Detection System", "Internal Data Security", "Integrated Device System", "Identity Defense Software"],
                "answer": 0,
                "explanation": "IDS: Intrusion Detection System - नेटवर्क में अनधिकृत प्रवेश की पहचान करने वाला सिस्टम।"
              },
              {
                "q": "IPS का पूर्ण रूप (Security Context) क्या है?",
                "options": ["Intrusion Prevention System", "Internet Provider Service", "Internal Protection Software", "IP Protocol Security"],
                "answer": 0,
                "explanation": "IPS: Intrusion Prevention System - नेटवर्क पर होने वाले हमलों को रोकने वाला सिस्टम।"
              },
              {
                "q": "AES का पूर्ण रूप क्या है?",
                "options": ["Advanced Encryption Standard", "Automated Encryption System", "Applied Electronic Security", "Array Encryption Standard"],
                "answer": 0,
                "explanation": "AES: Advanced Encryption Standard - 128, 192 और 256 बिट वाली सममित एन्क्रिप्शन तकनीक।"
              },
              {
                "q": "DES का पूर्ण रूप क्या है?",
                "options": ["Data Encryption Standard", "Digital Encryption System", "Direct Encoding Standard", "Data Electronic Security"],
                "answer": 0,
                "explanation": "DES: Data Encryption Standard - पुराना 56-बिट ब्लॉक सिफर एन्क्रिप्शन मानक।"
              },
              {
                "q": "RSA का पूर्ण रूप इसके आविष्कारकों के नाम पर क्या है?",
                "options": ["Rivest, Shamir, Adleman", "Rapid Security Algorithm", "Remote System Access", "Real Secure Algorithm"],
                "answer": 0,
                "explanation": "RSA: Rivest–Shamir–Adleman - पब्लिक-की असममित (Asymmetric) क्रिप्टोग्राफी मानक।"
              },
              {
                "q": "SHA का पूर्ण रूप क्या है?",
                "options": ["Secure Hash Algorithm", "System Hash Array", "Serial Hyper Algorithm", "Standard Host Access"],
                "answer": 0,
                "explanation": "SHA: Secure Hash Algorithm - डेटा की प्रामाणिकता जांचने के लिए हैश फंक्शन।"
              },
              {
                "q": "MD5 का पूर्ण रूप क्या है?",
                "options": ["Message Digest Algorithm 5", "Media Data 5", "Memory Dump 5", "Main Digital Algorithm 5"],
                "answer": 0,
                "explanation": "MD5: Message Digest 5 - 128-बिट का क्रिप्टोग्राफिक हैश वैल्यू जनरेटर।"
              },
              {
                "q": "SaaS का पूर्ण रूप क्या है?",
                "options": ["Software as a Service", "System as a Service", "Software and System", "Storage as a Service"],
                "answer": 0,
                "explanation": "SaaS: Software as a Service - क्लाउड पर सॉफ्टवेयर उपलब्ध कराना (उदा: Google Docs, Office 365)।"
              },
              {
                "q": "PaaS का पूर्ण रूप क्या है?",
                "options": ["Platform as a Service", "Program as a Service", "Payment as a Service", "Public Application Service"],
                "answer": 0,
                "explanation": "PaaS: Platform as a Service - क्लाउड पर ऐप डेवलपमेंट के लिए प्लेटफॉर्म देना (उदा: Heroku, AWS Elastic Beanstalk)।"
              },
              {
                "q": "IaaS का पूर्ण रूप क्या है?",
                "options": ["Infrastructure as a Service", "Internet as a Service", "Information as a Service", "Interface as a Service"],
                "answer": 0,
                "explanation": "IaaS: Infrastructure as a Service - वर्चुअल सर्वर, स्टोरेज और नेटवर्क इंफ्रास्ट्रक्चर देना (उदा: AWS EC2)।"
              },
              {
                "q": "CAPTCHA का पूर्ण रूप क्या है?",
                "options": ["Completely Automated Public Turing test to tell Computers and Humans Apart", "Common Automated Public Test for Computer Humans", "Computer And Person Turing Check Applied", "Control Access Protocol Turing Computer Human Array"],
                "answer": 0,
                "explanation": "CAPTCHA: Completely Automated Public Turing test to tell Computers and Humans Apart।"
              },
              {
                "q": "2FA / MFA का पूर्ण रूप क्या है?",
                "options": ["Two-Factor / Multi-Factor Authentication", "Two Fast Access", "Dual Factor Authorization", "Multiple Factor Audit"],
                "answer": 0,
                "explanation": "2FA: Two-Factor Authentication - पासवर्ड के साथ OTP या बायोमेट्रिक से दोहरी सुरक्षा।"
              },
              {
                "q": "OTP का पूर्ण रूप क्या है?",
                "options": ["One Time Password", "Only Text Password", "Online Transaction Pin", "One True Password"],
                "answer": 0,
                "explanation": "OTP: One Time Password - एक बार प्रयोग होने वाला सुरक्षा पिन।"
              },
              {
                "q": "XSS का संक्षिप्त रूप (Cyber Attack) क्या है?",
                "options": ["Cross-Site Scripting", "Extended Style Sheets", "XML System Security", "Cross-Server Sync"],
                "answer": 0,
                "explanation": "XSS: Cross-Site Scripting - वेब एप्लिकेशन में दुर्भावनापूर्ण जावास्क्रिप्ट कोड इंजेक्ट करने की कमजोरी।"
              }
            ]
          },
          {
            "testName": "Test 9 (टेलीकॉम, सेल्युलर एवं आधुनिक वायरलेस तकनीक)",
            "timeInMinutes": 15,
            "questions": [
              {
                "q": "GSM का पूर्ण रूप क्या है?",
                "options": ["Global System for Mobile Communications", "General System for Mobile", "Global Standard Mobile", "Global Short Message"],
                "answer": 0,
                "explanation": "GSM: Global System for Mobile Communications - 2G सेल्युलर नेटवर्क का वैश्विक मानक।"
              },
              {
                "q": "CDMA का पूर्ण रूप क्या है?",
                "options": ["Code Division Multiple Access", "Core Device Multiple Access", "Carrier Digital Mobile Access", "Common Data Multiple Access"],
                "answer": 0,
                "explanation": "CDMA: Code Division Multiple Access - एक ही चैनल पर कई संचार सिग्नलों को प्रसारित करने की तकनीक।"
              },
              {
                "q": "SIM का पूर्ण रूप क्या है?",
                "options": ["Subscriber Identity Module", "Subscriber Information Module", "System Identification Memory", "Single Identity Module"],
                "answer": 0,
                "explanation": "SIM: Subscriber Identity Module - फोन में प्रयुक्त स्मार्ट कार्ड जो उपभोक्ता की पहचान करता है।"
              },
              {
                "q": "GPRS का पूर्ण रूप क्या है?",
                "options": ["General Packet Radio Service", "Global Packet Radio System", "General Public Radio Service", "Global Program Radio Signal"],
                "answer": 0,
                "explanation": "GPRS: General Packet Radio Service - 2.5G तकनीक जो मोबाइल में इंटरनेट डेटा की सुविधा देती है।"
              },
              {
                "q": "EDGE का पूर्ण रूप क्या है?",
                "options": ["Enhanced Data rates for GSM Evolution", "Extended Data GSM Engine", "Electronic Data Global Evolution", "Enhanced Digital GSM Entity"],
                "answer": 0,
                "explanation": "EDGE: Enhanced Data rates for GSM Evolution (2.75G)।"
              },
              {
                "q": "3G, 4G, 5G में 'G' का क्या अर्थ है?",
                "options": ["Generation", "Giga", "Global", "General"],
                "answer": 0,
                "explanation": "G का अर्थ 'Generation' (पीढ़ी) होता है।"
              },
              {
                "q": "LTE का पूर्ण रूप क्या है?",
                "options": ["Long Term Evolution", "Light Transmission Energy", "Local Telecom Engine", "Long Track Ethernet"],
                "answer": 0,
                "explanation": "LTE: Long Term Evolution - 4G वायरलेस ब्रॉडबैंड तकनीक।"
              },
              {
                "q": "VoLTE का पूर्ण रूप क्या है?",
                "options": ["Voice over Long Term Evolution", "Video on LTE", "Voice over Local Telecom", "Visual over Long Term Evolution"],
                "answer": 0,
                "explanation": "VoLTE: Voice over Long Term Evolution - 4G नेटवर्क पर हाई-डेफिनिशन वॉयस कॉलिंग।"
              },
              {
                "q": "GPS का पूर्ण रूप क्या है?",
                "options": ["Global Positioning System", "General Pointer System", "Global Path Satellite", "Geographic Position Sensor"],
                "answer": 0,
                "explanation": "GPS: Global Positioning System - उपग्रह आधारित नेविगेशन प्रणाली।"
              },
              {
                "q": "NFC का पूर्ण रूप क्या है?",
                "options": ["Near Field Communication", "Network Field Connection", "Nearby Fast Connect", "New Frequency Control"],
                "answer": 0,
                "explanation": "NFC: Near Field Communication - कुछ सेंटीमीटर की दूरी में संपर्क रहित डेटा और पेमेंट ट्रांसफर।"
              },
              {
                "q": "RFID का पूर्ण रूप क्या है?",
                "options": ["Radio Frequency Identification", "Radio Format Identifier", "Rapid Frequency Interface", "Remote Frequency ID"],
                "answer": 0,
                "explanation": "RFID: Radio Frequency Identification - रेडियो तरंगों द्वारा टैग को ट्रैक करने की तकनीक (जैसे FASTag)।"
              },
              {
                "q": "SMS का पूर्ण रूप क्या है?",
                "options": ["Short Message Service", "Simple Message System", "Single Mail Service", "System Message Server"],
                "answer": 0,
                "explanation": "SMS: Short Message Service - 160 अक्षरों तक का टेक्स्ट मैसेज।"
              },
              {
                "q": "MMS का पूर्ण रूप क्या है?",
                "options": ["Multimedia Messaging Service", "Multi Message System", "Mobile Multimedia Server", "Master Messaging Service"],
                "answer": 0,
                "explanation": "MMS: Multimedia Messaging Service - फोटो, वीडियो, ऑडियो युक्त मैसेजिंग।"
              },
              {
                "q": "IMEI का पूर्ण रूप क्या है?",
                "options": ["International Mobile Equipment Identity", "Internal Mobile Engine Identifier", "International Mobile Electronic Index", "Integrated Mobile Equipment ID"],
                "answer": 0,
                "explanation": "IMEI: International Mobile Equipment Identity - हर मोबाइल का 15 अंकों का अद्वितीय पहचान कोड।"
              },
              {
                "q": "Li-Fi का पूर्ण रूप क्या है?",
                "options": ["Light Fidelity", "Laser Fidelity", "Liquid Fiber", "Low Frequency Internet"],
                "answer": 0,
                "explanation": "Li-Fi: Light Fidelity - दृश्य प्रकाश (LED Light) द्वारा अति उच्च गति का डेटा ट्रांसफर।"
              },
              {
                "q": "WIMAX का पूर्ण रूप क्या है?",
                "options": ["Worldwide Interoperability for Microwave Access", "Wide Internet Microwave Access", "Wireless Mobile Access Exchange", "World Interconnected Microwave Access"],
                "answer": 0,
                "explanation": "WIMAX: Worldwide Interoperability for Microwave Access - लंबी दूरी की वायरलेस ब्रॉडबैंड तकनीक।"
              },
              {
                "q": "PSTN का पूर्ण रूप क्या है?",
                "options": ["Public Switched Telephone Network", "Private Switched Telephone Network", "Packet Switched Telecom Network", "Primary Standard Telecom Network"],
                "answer": 0,
                "explanation": "PSTN: Public Switched Telephone Network - पारंपरिक लैंडलाइन टेलीफोन नेटवर्क।"
              },
              {
                "q": "ISDN का पूर्ण रूप क्या है?",
                "options": ["Integrated Services Digital Network", "International System Digital Network", "Integrated Serial Data Network", "Internet Service Digital Node"],
                "answer": 0,
                "explanation": "ISDN: Integrated Services Digital Network - वॉयस और डेटा का डिजिटल ट्रांसमिशन।"
              },
              {
                "q": "DSL का पूर्ण रूप क्या है?",
                "options": ["Digital Subscriber Line", "Direct System Line", "Digital Server Link", "Data Serial Link"],
                "answer": 0,
                "explanation": "DSL: Digital Subscriber Line - टेलीफोन लाइनों पर हाई-स्पीड इंटरनेट कनेक्शन।"
              },
              {
                "q": "ADSL का पूर्ण रूप क्या है?",
                "options": ["Asymmetric Digital Subscriber Line", "Advanced Digital System Line", "Automated DSL", "Applied Digital Subscriber Line"],
                "answer": 0,
                "explanation": "ADSL: Asymmetric Digital Subscriber Line - जिसमें डाउनलोड स्पीड अपलोड स्पीड से अधिक होती है।"
              }
            ]
          },
          {
            "testName": "Test 10 (AI, प्रिंटर, मिसलेनियस एवं एडवांस्ड संक्षिप्ताक्षर)",
            "timeInMinutes": 15,
            "questions": [
              {
                "q": "AI का पूर्ण रूप क्या है?",
                "options": ["Artificial Intelligence", "Automated Information", "Applied Intelligence", "Advanced Interface"],
                "answer": 0,
                "explanation": "AI: Artificial Intelligence - मशीनों में मानव जैसी बुद्धिमत्ता विकसित करने की तकनीक।"
              },
              {
                "q": "ML का पूर्ण रूप क्या है?",
                "options": ["Machine Learning", "Modern Logic", "Multiple Language", "Main Logic"],
                "answer": 0,
                "explanation": "ML: Machine Learning - AI की शाखा जहाँ सिस्टम अनुभव और डेटा से सीखते हैं।"
              },
              {
                "q": "DL का पूर्ण रूप क्या है?",
                "options": ["Deep Learning", "Direct Logic", "Digital Language", "Data Learning"],
                "answer": 0,
                "explanation": "DL: Deep Learning - न्यूरल नेटवर्क आधारित मशीन लर्निंग का गहरा रूप।"
              },
              {
                "q": "NLP का पूर्ण रूप (AI Context) क्या है?",
                "options": ["Natural Language Processing", "Network Layer Protocol", "Neural Logic Process", "New Language Program"],
                "answer": 0,
                "explanation": "NLP: Natural Language Processing - कंप्यूटर द्वारा मानव भाषा (हिंदी, इंग्लिश) को समझने की तकनीक।"
              },
              {
                "q": "IoT का पूर्ण रूप क्या है?",
                "options": ["Internet of Things", "Interface of Technology", "Internal Object Transfer", "Information of Things"],
                "answer": 0,
                "explanation": "IoT: Internet of Things - भौतिक उपकरणों को इंटरनेट से जोड़कर स्मार्ट बनाना।"
              },
              {
                "q": "DPI का पूर्ण रूप (प्रिंटर रेजोल्यूशन) क्या है?",
                "options": ["Dots Per Inch", "Data Per Inch", "Digital Picture Index", "Direct Print Index"],
                "answer": 0,
                "explanation": "DPI: Dots Per Inch - प्रिंटर और स्कैनर की गुणवत्ता मापने की इकाई।"
              },
              {
                "q": "PPM का पूर्ण रूप क्या है?",
                "options": ["Pages Per Minute", "Points Per Minute", "Pixels Per Minute", "Paper Per Minute"],
                "answer": 0,
                "explanation": "PPM: Pages Per Minute - प्रिंटर की छपाई की गति की इकाई।"
              },
              {
                "q": "OCR का पूर्ण रूप क्या है?",
                "options": ["Optical Character Recognition", "Optical Code Reader", "Online Character Reader", "Optimal Color Recognition"],
                "answer": 0,
                "explanation": "OCR: Optical Character Recognition - छपे या हस्तलिखित टेक्स्ट को डिजिटल टेक्स्ट में बदलना।"
              },
              {
                "q": "OMR का पूर्ण रूप क्या है?",
                "options": ["Optical Mark Recognition", "Optical Mark Reader", "Online Mark Recognition", "Optical Media Reader"],
                "answer": 0,
                "explanation": "OMR: Optical Mark Recognition - उत्तर पुस्तिकाओं (OMR शीट) के निशानों को पढ़ने की तकनीक।"
              },
              {
                "q": "MICR का पूर्ण रूप क्या है?",
                "options": ["Magnetic Ink Character Recognition", "Magnetic Ink Code Reader", "Modern Ink Character Reader", "Magnetic Input Code Recognition"],
                "answer": 0,
                "explanation": "MICR: Magnetic Ink Character Recognition - बैंक चेकों पर छपे कोड को पढ़ने की तकनीक।"
              },
              {
                "q": "BCR का पूर्ण रूप क्या है?",
                "options": ["Barcode Reader", "Binary Code Reader", "Basic Character Recognition", "Business Card Reader"],
                "answer": 0,
                "explanation": "BCR: Barcode Reader - सामानों पर बनी काली-सफेद पट्टियों (बारकोड) को स्कैन करने वाला डिवाइस।"
              },
              {
                "q": "QR Code में 'QR' का पूर्ण रूप क्या है?",
                "options": ["Quick Response", "Quality Result", "Quantum Read", "Quick Report"],
                "answer": 0,
                "explanation": "QR: Quick Response - 2D मैट्रिक्स बारकोड जो तेजी से डेटा पढ़ता है।"
              },
              {
                "q": "UPS का पूर्ण रूप क्या है?",
                "options": ["Uninterruptible Power Supply", "Universal Power System", "United Power Supply", "Unit Power Source"],
                "answer": 0,
                "explanation": "UPS: Uninterruptible Power Supply - बिजली जाने पर कंप्यूटर को निरंतर बैटरी बैकअप देता है।"
              },
              {
                "q": "VIRUS का पूर्ण रूप क्या है?",
                "options": ["Vital Information Resources Under Siege", "Very Important Resource Unit System", "Virtual Information Resource Under Security", "Vital Integrated Resource Utility Software"],
                "answer": 0,
                "explanation": "VIRUS: Vital Information Resources Under Siege।"
              },
              {
                "q": "RAID का पूर्ण रूप क्या है?",
                "options": ["Redundant Array of Independent Disks", "Rapid Array of Integrated Disks", "Random Access Integrated Disk", "Real Array of Internal Disks"],
                "answer": 0,
                "explanation": "RAID: Redundant Array of Independent Disks - डेटा सुरक्षा और परफॉर्मेंस के लिए कई हार्ड डिस्क को एक साथ जोड़ना।"
              },
              {
                "q": "CMOS का पूर्ण रूप क्या है?",
                "options": ["Complementary Metal-Oxide-Semiconductor", "Central Metal Oxide Silicon", "Common Micro Oxide Semiconductor", "Computer Main Oxide System"],
                "answer": 0,
                "explanation": "CMOS: Complementary Metal-Oxide-Semiconductor - मदरबोर्ड की बैटरी जो डेट और टाइम को सुरक्षित रखती है।"
              },
              {
                "q": "DMA का पूर्ण रूप क्या है?",
                "options": ["Direct Memory Access", "Digital Memory Array", "Dual Memory Access", "Dynamic Memory Allocation"],
                "answer": 0,
                "explanation": "DMA: Direct Memory Access - CPU को बाईपास करके I/O डिवाइस का सीधे RAM से डेटा आदान-प्रदान।"
              },
              {
                "q": "SATA का पूर्ण रूप क्या है?",
                "options": ["Serial Advanced Technology Attachment", "Standard ATA", "System Advanced Technology Adapter", "Serial Array Technology Access"],
                "answer": 0,
                "explanation": "SATA: Serial Advanced Technology Attachment - हार्ड डिस्क और SSD को मदरबोर्ड से जोड़ने वाला केबल इंटरफेस।"
              },
              {
                "q": "PATA का पूर्ण रूप क्या है?",
                "options": ["Parallel Advanced Technology Attachment", "Primary ATA", "Point to point ATA", "Public ATA"],
                "answer": 0,
                "explanation": "PATA: Parallel Advanced Technology Attachment - पुरानी चौड़ी रिबन वाली केबल तकनीक।"
              },
              {
                "q": "SCSI का पूर्ण रूप क्या है?",
                "options": ["Small Computer System Interface", "Serial Computer System Interface", "Standard Computer Storage Interface", "System Control Serial Interface"],
                "answer": 0,
                "explanation": "SCSI: Small Computer System Interface (उच्च गति वाली स्टोरेज डिवाइसेज को जोड़ने का इंटरफेस)।"
              }
            ]
          }
        ]
      }
    ]
  }
];
