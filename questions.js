// ملف قاعدة بيانات الأسئلة تم تصديره من صفحة الإدارة
const questionsDB = [
    {
        "questionText": "في أي شهر ولد الإمام الحسين (عليه السلام)؟",
        "media": "",
        "answerMedia": "",
        "answer": "في شهر شعبان"
    },
    {
        "questionText": "من هي والدة الإمام الحسين (عليه السلام)؟",
        "media": "",
        "answerMedia": "",
        "answer": "فاطمة الزهراء (عليها السلام)"
    },
    {
        "questionText": "من القائل: تعلّمتُ من الحسين بن علي كيف أكون مظلومًا فأنتصر؟",
        "media": "",
        "answerMedia": "",
        "answer": "غاندي"
    },
    {
        "questionText": "في أي يوم تعادل زيارة الإمام الحسين (عليه السلام) ألف حجّة وألف عمرة مبرورات وألف غزوة مع نبي مرسل أو إمام عادل؟",
        "media": "",
        "answerMedia": "",
        "answer": "يوم عرفة"
    },
    {
        "questionText": "ما هي أصول الدين؟",
        "media": "",
        "answerMedia": "",
        "answer": "التوحيد، العدل، النبوة، الإمامة، المعاد."
    },
    {
        "questionText": "أول من استشهد من الهاشميين في معركة كربلاء؟",
        "media": "",
        "answerMedia": "",
        "answer": "علي الأكبر (عليه السلام)."
    },
    {
        "questionText": "ما هو السر في مرض الإمام زين العابدين (عليه السلام) ؟",
        "media": "",
        "answerMedia": "",
        "answer": "حتى لا يقتل، ولا تخلو الأرض من حجة الله تعالى لأنه استلم الإمامة بعد أبيه عليهما السلام."
    },
    {
        "questionText": "ما مقدار وقت فضيلة صلاة المغرب؟",
        "media": "",
        "answerMedia": "",
        "answer": "يستمر وقت الفضيلة إلى زوال الحمرة المغربية."
    },
    {
        "questionText": "كيف نعرف وقت آذان الظهر إذا كانت هناك غيوم كثيفة؟",
        "media": "",
        "answerMedia": "",
        "answer": "وقت أذان الظهر هو منتصف الوقت من طلوع الشمس إلى غروبها."
    },
    {
        "questionText": "ما هي أيام التشريق؟",
        "media": "",
        "answerMedia": "",
        "answer": "هي أيام (11 و12 و13) من شهر ذي الحجة."
    },
    {
        "questionText": "ما العمل الذي كان يحبه أمير المؤمنين عليه السلام؟",
        "media": "",
        "answerMedia": "",
        "answer": "كان شغوفاً بالزراعة واستصلاح الأراضي وتشجيرها"
    },
    {
        "questionText": "هل صلاة العيد واجبة أم مستحبة؟",
        "media": "",
        "answerMedia": "",
        "answer": "واجبة حضوراً، ومستحبة غيبةً."
    },
    {
        "questionText": "ما هي الدولة المحددة باللون الأحمر على الخريطة؟",
        "media": "https://api.threethirteen.app/storage/question/questions_69a208db1bb6c.jpeg",
        "answerMedia": "",
        "answer": "باكستان"
    },
    {
        "questionText": "ما هي الدولة المحددة باللون الأحمر على الخريطة؟",
        "media": "https://api.threethirteen.app/storage/question/questions_69a212abe3f84.jpeg",
        "answerMedia": "https://api.threethirteen.app/storage/question/questions_69a212abe4564.webp",
        "answer": "فلندا"
    },
    {
        "questionText": "ما هي الدولة المحددة باللون الأحمر على الخريطة؟",
        "media": "https://api.threethirteen.app/storage/question/questions_69a215c3f29ea.jpeg",
        "answerMedia": "https://api.threethirteen.app/storage/question/questions_69a2142a1713e.png",
        "answer": "جزر سليمان"
    },
    {
        "questionText": "ما هي الدولة المحددة باللون الأحمر على الخريطة؟",
        "media": "https://api.threethirteen.app/storage/question/questions_69a22887cbe44.jpeg",
        "answerMedia": "https://api.threethirteen.app/storage/question/questions_69a22887cc324.png",
        "answer": "سريلانكا"
    },
    {
        "questionText": "ما هي الدولة المحددة باللون الأحمر على الخريطة؟",
        "media": "https://api.threethirteen.app/storage/question/questions_69a21b03d7477.jpeg",
        "answerMedia": "https://api.threethirteen.app/storage/question/questions_69a21b03d75ce.png",
        "answer": "نيجيريا"
    },
    {
        "questionText": "ما هي الدولة المحددة باللون الأحمر على الخريطة؟",
        "media": "https://api.threethirteen.app/storage/question/questions_69a21b03da753.jpeg",
        "answerMedia": "https://api.threethirteen.app/storage/question/questions_69a21b03da920.png",
        "answer": "أفريقيا الوسطى"
    },
    {
        "questionText": "ما هي ثاني أكبر دولة العالم ؟",
        "media": "",
        "answerMedia": "https://api.threethirteen.app/storage/question_answer/questions_6909e3fd04a11.jpg",
        "answer": "كندا"
    },
    {
        "questionText": "في أي مدينة يقع برج إيفل ؟",
        "media": "https://api.threethirteen.app/storage/question/questions_6905d766a2d6c.jpg",
        "answerMedia": "https://api.threethirteen.app/storage/question/questions_6905d766a2d6c.jpg",
        "answer": "باريس"
    },
    {
        "questionText": "هذه صورة لأي مدينة عربية ؟",
        "media": "https://api.threethirteen.app/storage/question/questions_6902b78fdea01.jpg",
        "answerMedia": "https://api.threethirteen.app/storage/question/questions_6902b78fdea01.jpg",
        "answer": "الإسكندرية في مصر"
    },
    {
        "questionText": "ما هو اسم هذا المبنى في عمان ؟",
        "media": "https://api.threethirteen.app/storage/question/questions_69073a562b657.jpg",
        "answerMedia": "https://api.threethirteen.app/storage/question_answer/questions_69073a562b84d.jpg",
        "answer": "مسجد السلطان قابوس الكبير"
    },
    {
        "questionText": "ما اسم هذا المعلم في ماليزيا ؟",
        "media": "https://api.threethirteen.app/storage/question/questions_6905d766a961f.jpg",
        "answerMedia": "https://api.threethirteen.app/storage/question/questions_6905d766a961f.jpg",
        "answer": "برجا بتروناس التوأم"
    },
    {
        "questionText": "من أي دولة جاء اختراع المنطاد الهوائي ؟",
        "media": "https://api.threethirteen.app/storage/question/questions_690a021294419.jpg",
        "answerMedia": "https://api.threethirteen.app/storage/question_answer/questions_690a0212945b8.jpg",
        "answer": "فرنسا"
    },
    {
        "questionText": "لماذا لقب الإمام المهدي (عج) بالمنتقم؟",
        "media": "",
        "answerMedia": "",
        "answer": "لانتقامه من أعداء آل محمد (ص)"
    },
    {
        "questionText": "من هو العالم الشيعي الذي بعث له الإمام المهدي (عج) كتاب وكان في مطلع الكتاب : “.. للأخ السديد، والولي الرشيد ..”",
        "media": "",
        "answerMedia": "",
        "answer": "الشيخ محمد بن محمد بن النعمان المفيد"
    },
    {
        "questionText": "املأ ؛ روي عن الإمام المهدي (عج) أنه قال : “.. إنّا غير——— لمراعاتكم ولا ناسين——— ..”",
        "media": "",
        "answerMedia": "",
        "answer": "مهملين، لذكركم"
    },
    {
        "questionText": "راية من التي ينشرها الإمام المهدي (عج) عند القيام ؟",
        "media": "",
        "answerMedia": "",
        "answer": "راية النبي محمد (ص)"
    },
    {
        "questionText": "من أول من يبايع الإمام المهدي (عج) من الملائكة ؟",
        "media": "",
        "answerMedia": "",
        "answer": "جبرائيل"
    },
    {
        "questionText": "من هي المرأة المعروفة بخِيَرَةِ الإِمَاءِ ؟",
        "media": "",
        "answerMedia": "",
        "answer": "السيدة نرجس"
    },
    {
        "questionText": "خمن اللاعب من خلال مسيرته :",
        "media": "https://i.top4top.io/p_373145s5u1.jpeg",
        "answerMedia": "https://j.top4top.io/p_3731rr5ke2.jpeg",
        "answer": "الإجابة في الصورة"
    },
    {
        "questionText": "خمن اللاعب من خلال مسيرته :",
        "media": "https://i.top4top.io/p_3731lqn8y1.jpeg",
        "answerMedia": "https://j.top4top.io/p_3731g4olp2.jpeg",
        "answer": "الإجابة في الصورة"
    },
    {
        "questionText": "خمن اللاعب من خلال مسيرته :",
        "media": "https://e.top4top.io/p_3731q26ze1.jpeg",
        "answerMedia": "https://f.top4top.io/p_3731iqc0n2.jpeg",
        "answer": "الإجابة في الصورة"
    },
    {
        "questionText": "خمن اللاعب من خلال مسيرته :",
        "media": "https://i.top4top.io/p_3731bbkvz3.jpeg",
        "answerMedia": "https://j.top4top.io/p_3731d9x1c4.jpeg",
        "answer": "الإجابة في الصورة"
    },
    {
        "questionText": "خمن اللاعب من خلال مسيرته :",
        "media": "https://e.top4top.io/p_3731k7h8h1.jpeg",
        "answerMedia": "https://f.top4top.io/p_3731q9cpi2.jpeg",
        "answer": "الإجابة في الصورة"
    },
    {
        "questionText": "خمن المنتخب من خلال انديه لاعبينه 2025",
        "media": "https://fastupload.live/do.php?img=5404",
        "answerMedia": "https://fastupload.live/do.php?img=5405",
        "answer": "الإجابة في الصورة"
    },
    {
        "questionText": "خمن المنتخب من خلال انديه لاعبينه 2025",
        "media": "https://fastupload.live/do.php?img=5406",
        "answerMedia": "https://fastupload.live/do.php?img=5407",
        "answer": "الإجابة في الصورة"
    },
    {
        "questionText": "خمن المنتخب من خلال انديه لاعبينه 2025",
        "media": "https://fastupload.live/do.php?img=5408",
        "answerMedia": "https://fastupload.live/do.php?img=5409",
        "answer": "الإجابة في الصورة"
    },
    {
        "questionText": "خمن المنتخب من خلال انديه لاعبينه 2025",
        "media": "https://fastupload.live/do.php?img=5410",
        "answerMedia": "https://fastupload.live/do.php?img=5411",
        "answer": "الإجابة في الصورة"
    },
    {
        "questionText": "اين وقعت حرب فردان التي قامت سنة 1916 ميلادي",
        "media": "",
        "answerMedia": "",
        "answer": "فرنسا 🇫🇷"
    },
    {
        "questionText": "حرف الألف - أول من جمع القرآن الكريم بين لوحين؟",
        "media": "",
        "answerMedia": "",
        "answer": "أبو بكر الصديق"
    },
    {
        "questionText": "حرف الألف - غزوة جرح فيها رسول الله صلى الله عليه وسلم وكسرت رباعيته وأشيع فيها أنه قتل؟",
        "media": "",
        "answerMedia": "",
        "answer": "أحد"
    },
    {
        "questionText": "حرف الألف - لقب أطلقه أهل مكة على محمد رسول الله قبل الإسلام؟",
        "media": "",
        "answerMedia": "",
        "answer": "الأمين"
    },
    {
        "questionText": "حرف الباء - سورة من سور القرآن الكريم يطلق عليها سنام القرآن؟",
        "media": "",
        "answerMedia": "",
        "answer": "البقرة"
    },
    {
        "questionText": "حرف التاء - سورة في القرآن الكريم ابتدأت باسم ثمرتين؟",
        "media": "",
        "answerMedia": "",
        "answer": "التين"
    },
    {
        "questionText": "حرف الجيم - ذروة سنام الإسلام؟",
        "media": "",
        "answerMedia": "",
        "answer": "الجهاد في سبيل الله"
    },
    {
        "questionText": "حرف الجيم - مدينة عربية فيها أعلى نافورة في العالم؟",
        "media": "",
        "answerMedia": "",
        "answer": "جــــدة"
    },
    {
        "questionText": "حرف الحاء - سورة في القرآن الكريم ورد فيها ذكر الذباب؟",
        "media": "",
        "answerMedia": "",
        "answer": "الحج"
    },
    {
        "questionText": "حرف الخاء - مدينة بالسعودية بالقرب من الدمام؟",
        "media": "",
        "answerMedia": "",
        "answer": "الخبر"
    },
    {
        "questionText": "حرف الخاء - من القائل: (فلا نامت أعين الجبناء)؟",
        "media": "",
        "answerMedia": "",
        "answer": "خالد بن الوليد"
    },
    {
        "questionText": "حرف الدال - ما اسم أول وحدة عملة في تاريخ الإسلام؟",
        "media": "",
        "answerMedia": "",
        "answer": "الدينار"
    },
    {
        "questionText": "حرف الذال - ما ميقات أهل العراق؟",
        "media": "",
        "answerMedia": "",
        "answer": "ذات عرق"
    },
    {
        "questionText": "حرف الذال - معركة قادها خالد بن الوليد ضد الفرس؟",
        "media": "",
        "answerMedia": "",
        "answer": "ذات السلاسل"
    },
    {
        "questionText": "حرف الراء - الباب الذي يدخل منه الصائمون يوم القيامة؟",
        "media": "",
        "answerMedia": "",
        "answer": "الريان"
    },
    {
        "questionText": "حرف الزاي - من أول من سل سيفاً في الإسلام؟",
        "media": "",
        "answerMedia": "",
        "answer": "الزبير بن العوام"
    },
    {
        "questionText": "حرف السين - كم عدد أحزاب القرآن؟",
        "media": "",
        "answerMedia": "",
        "answer": "ستون حزباً"
    },
    {
        "questionText": "حرف السين - من قائد معركة القادسية؟",
        "media": "",
        "answerMedia": "",
        "answer": "سعد بن أبي وقاص"
    },
    {
        "questionText": "حرف الشين - سورة تسمى الجامعة؟",
        "media": "",
        "answerMedia": "",
        "answer": "الشعراء"
    },
    {
        "questionText": "حرف الصاد - ما هي الخمس التي لا سادس لها؟",
        "media": "",
        "answerMedia": "",
        "answer": "الصلوات"
    },
    {
        "questionText": "حرف الطاء - المدينة التي رحل إليها النبي قبل المدينة؟",
        "media": "",
        "answerMedia": "",
        "answer": "الطائف"
    },
    {
        "questionText": "حرف الطاء - جبل أقسم الله تعالى به في القرآن؟",
        "media": "",
        "answerMedia": "",
        "answer": "الطور"
    },
    {
        "questionText": "حرف الظاء - يدخل فيه المتحابون في الله يوم القيامة؟",
        "media": "",
        "answerMedia": "",
        "answer": "ظل عرش الرحمن"
    },
    {
        "questionText": "حرف العين - من أول فدائي في الإسلام؟",
        "media": "",
        "answerMedia": "",
        "answer": "علي بن أبي طالب"
    },
    {
        "questionText": "حرف الغين - إفاضة الماء على البدن كله مع النية؟",
        "media": "",
        "answerMedia": "",
        "answer": "الغسل"
    },
    {
        "questionText": "حرف الفاء - أعلى درجات الجنة؟",
        "media": "",
        "answerMedia": "",
        "answer": "الفردوس"
    },
    {
        "questionText": "حرف القاف - أول مسجد في الإسلام؟",
        "media": "",
        "answerMedia": "",
        "answer": "قباء"
    },
    {
        "questionText": "حرف القاف - ما اسم ناقة النبي صلى الله عليه وسلم؟",
        "media": "",
        "answerMedia": "",
        "answer": "القصواء"
    },
    {
        "questionText": "حرف الكاف - هو لقب موسى عليه السلام؟",
        "media": "",
        "answerMedia": "",
        "answer": "كليم الله"
    },
    {
        "questionText": "حرف الميم - أين تقع رابطة العالم الإسلامي؟",
        "media": "",
        "answerMedia": "",
        "answer": "مكة المكرمة"
    },
    {
        "questionText": "حرف النون - ما هي الحشرة التي تكلمت في القرآن وتبسم سليمان من قولها؟",
        "media": "",
        "answerMedia": "",
        "answer": "النملة"
    },
    {
        "questionText": "حرف الميم - غشاء الجنين الذي يخرج معه عند الولادة؟",
        "media": "",
        "answerMedia": "",
        "answer": "المشيمة"
    },
    {
        "questionText": "حرف النون - ما هي الحطمة؟",
        "media": "",
        "answerMedia": "",
        "answer": "النار"
    },
    {
        "questionText": "حرف النون - أداة استعملها النصارى قديماً للإعلان عن صلاتهم؟",
        "media": "",
        "answerMedia": "",
        "answer": "الناقوس"
    },
    {
        "questionText": "تحدي الثلاثين:\nكم تقدر تعدد دول حرف الميم؟",
        "media": "",
        "answerMedia": "",
        "answer": "هم 13 دولة اذا قال اكثر كذاب"
    },
    {
        "questionText": "تحدي الثلاثين:\nكم تقدر تعدد من الأنبياء ؟",
        "media": "",
        "answerMedia": "",
        "answer": "مين جابها ؟ عدد الانبياء مذكورين 25 نبيًا."
    },
    {
        "questionText": "من هو الملقب بـ (الساجد) من الأئمة عليهم السلام؟",
        "media": "",
        "answerMedia": "",
        "answer": "الإمام زين العابدين عليه السلام"
    },
    {
        "questionText": "ما هي أطول سورة في القرآن الكريم؟",
        "media": "",
        "answerMedia": "",
        "answer": "سورة البقرة"
    },
    {
        "questionText": "في أي مدينة يقع مرقد الإمام الرضا عليه السلام؟",
        "media": "",
        "answerMedia": "",
        "answer": "مشهد (إيران)"
    },
    {
        "questionText": "ما هي عاصمة اليابان؟",
        "media": "",
        "answerMedia": "",
        "answer": "طوكيو"
    },
    {
        "questionText": "ما هي الدولة الملقبة بـ (بلد المليون شهيد)؟",
        "media": "",
        "answerMedia": "",
        "answer": "الجزائر"
    },
    {
        "questionText": "اين يقع برج بيزا المائل؟",
        "media": "",
        "answerMedia": "",
        "answer": "إيطاليا"
    },
    {
        "questionText": "من هو اللاعب الذي لقب بـ (الساحر)؟",
        "media": "",
        "answerMedia": "",
        "answer": "رونالدينيو"
    },
    {
        "questionText": "أي منتخب فاز بكأس العالم 2022؟",
        "media": "",
        "answerMedia": "",
        "answer": "الأرجنتين"
    },
    {
        "questionText": "ما هو النادي الذي يلقب بـ (الملكي)؟",
        "media": "",
        "answerMedia": "",
        "answer": "ريال مدريد"
    },
    {
        "questionText": "مثل شعبي: ما طار طير وارتفع إلا كما طار...؟",
        "media": "",
        "answerMedia": "",
        "answer": "وقع"
    },
    {
        "questionText": "تحدي الثلاثين:\n اذكر الفواكه تبدأ بحرف الميم ",
        "media": "",
        "answerMedia": "",
        "answer": "موز، مانجو، مشمش، مندرين (أو أي فاكهة تبدأ بالميم)"
    },
    {
        "questionText": "ما هو أسرع كائن حي على وجه الأرض؟",
        "media": "",
        "answerMedia": "",
        "answer": "الفهد الصياد"
    },
    {
        "questionText": "من مخترع المصباح الكهربائي؟",
        "media": "",
        "answerMedia": "",
        "answer": "توماس إديسون"
    },
    {
        "questionText": "تحدي عشر ثواني : منتخبات حققت كأس العالم.\n",
        "media": "",
        "answerMedia": "",
        "answer": "البرازيل، ألمانيا، إيطاليا، الأرجنتين، فرنسا، أوروغواي، إنجلترا، إسبانيا."
    },
    {
        "questionText": "اذكر 4 دول تحد السعودية.",
        "media": "",
        "answerMedia": "",
        "answer": "الأردن، العراق، الكويت، قطر، الإمارات، عمان، اليمن."
    },
    {
        "questionText": "تحدي الثلاثين:\nعدد دول اوربية",
        "media": "",
        "answerMedia": "",
        "answer": "50 دولة ...  ألبانيا، أندورا، أرمينيا، النمسا، أذربيجان، بيلاروسيا،"
    },
    {
        "questionText": "ولا كلمة (واحد يصور الباركود)",
        "media": "<img src=\"https://api.qrserver.com/v1/create-qr-code/?color=000000&amp;bgcolor=FFFFFF&amp;data=%D8%A7%D9%84%D9%82%D8%B1%D8%AF+%D9%81%D9%8A+%D8%B9%D9%8A%D9%86+%D8%A3%D9%85%D9%87+%D8%BA%D8%B2%D8%A7%D9%84.&amp;qzone=1&amp;margin=0&amp;size=400x400&amp;ecc=L\" alt=\"qr code\" />",
        "answerMedia": "",
        "answer": "القرد في عين أمه غزال."
    },
    {
        "questionText": "ولا كلمة (واحد يصور الباركود)\n",
        "media": "<img src=\"https://api.qrserver.com/v1/create-qr-code/?color=000000&amp;bgcolor=FFFFFF&amp;data=%D9%85%D9%86+%D8%AD%D9%81%D8%B1+%D8%AD%D9%81%D8%B1%D8%A9+%D9%84%D8%A3%D8%AE%D9%8A%D9%87+%D9%88%D9%82%D8%B9+%D9%81%D9%8A%D9%87%D8%A7.&amp;qzone=1&amp;margin=0&amp;size=400x400&amp;ecc=L\" alt=\"qr code\" />",
        "answerMedia": "",
        "answer": "من حفر حفرة لأخيه وقع فيها."
    },
    {
        "questionText": "ولا كلمة (واحد يصور الباركود)\n",
        "media": "<img src=\"https://api.qrserver.com/v1/create-qr-code/?color=000000&amp;bgcolor=FFFFFF&amp;data=%D9%85%D9%86+%D8%AD%D9%81%D8%B1+%D8%AD%D9%81%D8%B1%D8%A9+%D9%84%D8%A3%D8%AE%D9%8A%D9%87+%D9%88%D9%82%D8%B9+%D9%81%D9%8A%D9%87%D8%A7.&amp;qzone=1&amp;margin=0&amp;size=400x400&amp;ecc=L\" alt=\"qr code\" />",
        "answerMedia": "",
        "answer": "ابعد عن الشر وغني له."
    },
    {
        "questionText": "ولا كلمة (واحد يصور الباركود)\n",
        "media": "<img src=\"https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=%D8%A7%D9%84%D9%88%D9%82%D8%AA%20%D9%83%D8%A7%D9%84%D8%B3%D9%8A%D9%81\" alt=\"الوقت كالسيف\" />",
        "answerMedia": "",
        "answer": "الوقت كالسيف"
    },
    {
        "questionText": "ولا كلمة (واحد يصور الباركود)",
        "media": "<img src=\"https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=%D8%A7%D9%84%D8%B5%D8%A8%D8%B1%20%D9%85%D9%81%D8%AA%D8%A7%D8%AD%20%D8%A7%D9%84%D9%81%D8%B1%D8%AC\" alt=\"الصبر مفتاح الفرج\" />",
        "answerMedia": "",
        "answer": "الصبر مفتاح الفرج"
    },
    {
        "questionText": "من هو الملقب بـ (الكاظم) من الأئمة عليهم السلام؟",
        "media": "",
        "answerMedia": "",
        "answer": "الإمام موسى بن جعفر (عليه السلام)"
    },
    {
        "questionText": "من هو الإمام الذي يلقب بـ (الجواد)؟",
        "media": "",
        "answerMedia": "",
        "answer": "الإمام محمد بن علي (عليه السلام)"
    },
    {
        "questionText": "من هو الإمام الذي يلقب بـ (الهادي)؟",
        "media": "",
        "answerMedia": "",
        "answer": "الإمام علي بن محمد (عليه السلام)"
    },
    {
        "questionText": "من هو الإمام الذي يلقب بـ (العسكري)؟",
        "media": "",
        "answerMedia": "",
        "answer": "الإمام الحسن بن علي (عليه السلام)"
    },
    {
        "questionText": "في أي تاريخ يصادف استشهاد أمير المؤمنين (عليه السلام)؟",
        "media": "",
        "answerMedia": "",
        "answer": "21 شهر رمضان"
    },
    {
        "questionText": "من هي السيدة الملقبة بـ (أم المصائب)؟",
        "media": "",
        "answerMedia": "",
        "answer": "السيدة زينب (عليها السلام)"
    },
    {
        "questionText": "ما هي الكنية المشهورة للإمام الحسين (عليه السلام)؟",
        "media": "",
        "answerMedia": "",
        "answer": "أبو عبد الله"
    },
    {
        "questionText": "من هو الصحابي الذي خان الإمام الحسن (عليه السلام) في حربه؟",
        "media": "",
        "answerMedia": "",
        "answer": "عبيد الله بن عباس"
    },
    {
        "questionText": "من هو الغلام الذي استشهد في كربلاء وقال: الموت في نصرة الحسين أحلى من العسل؟",
        "media": "",
        "answerMedia": "",
        "answer": "القاسم بن الحسن (عليه السلام)"
    },
    {
        "questionText": "من هو حامل لواء الحسين في كربلاء؟",
        "media": "",
        "answerMedia": "",
        "answer": "العباس بن علي (عليه السلام)"
    },
    {
        "questionText": "ما هو الاسم الحقيقي للسيدة أم البنين (عليها السلام)؟",
        "media": "",
        "answerMedia": "",
        "answer": "فاطمة بنت حزام الكلابية"
    },
    {
        "questionText": "من هو الملقب بـ (سيد الشهداء)؟",
        "media": "",
        "answerMedia": "",
        "answer": "الإمام الحسين (عليه السلام)"
    },
    {
        "questionText": "كم دامت فترة إمامة الإمام المهدي (عج) منذ بدئها؟",
        "media": "",
        "answerMedia": "",
        "answer": "هي مستمرة إلى يومنا هذا"
    },
    {
        "questionText": "ما هو أطول عمر لنبي ذكر في القرآن الكريم؟",
        "media": "",
        "answerMedia": "",
        "answer": "نوح (عليه السلام)"
    },
    {
        "questionText": "أي نبي ابتلعه الحوت؟",
        "media": "",
        "answerMedia": "",
        "answer": "يونس (عليه السلام)"
    },
    {
        "questionText": "من هو النبي الذي ألقي في النار ولم تحرقه؟",
        "media": "",
        "answerMedia": "",
        "answer": "إبراهيم (عليه السلام)"
    },
    {
        "questionText": "من هو النبي الذي كلم الله تعالى؟",
        "media": "",
        "answerMedia": "",
        "answer": "موسى (عليه السلام)"
    },
    {
        "questionText": "من هو النبي الذي برئ من اتهام القوم له وهو في المهد؟",
        "media": "",
        "answerMedia": "",
        "answer": "عيسى (عليه السلام)"
    },
    {
        "questionText": "ما هي أقصر سورة في القرآن الكريم؟",
        "media": "",
        "answerMedia": "",
        "answer": "سور الكوثر"
    },
    {
        "questionText": "ما هي السورة التي تسمى (عروس القرآن)؟",
        "media": "",
        "answerMedia": "",
        "answer": "سورة الرحمن"
    },
    {
        "questionText": "ما هي السورة التي تسمى (قلب القرآن)؟",
        "media": "",
        "answerMedia": "",
        "answer": "سورة يس"
    },
    {
        "questionText": "ما هي السورة التي لا تبدأ بـ (بسم الله الرحمن الرحيم)؟",
        "media": "",
        "answerMedia": "",
        "answer": "سورة التوبة"
    },
    {
        "questionText": "من هو الإمام الذي ولد داخل الكعبة المشرفة؟",
        "media": "",
        "answerMedia": "",
        "answer": "الإمام علي بن أبي طالب (عليه السلام)"
    },
    {
        "questionText": "من هو أول الأئمة بعد أمير المؤمنين (عليه السلام)؟",
        "media": "",
        "answerMedia": "",
        "answer": "الإمام الحسن المجتبى (عليه السلام)"
    },
    {
        "questionText": "كم عدد الأئمة المعصومين (عليهم السلام)؟",
        "media": "",
        "answerMedia": "",
        "answer": "اثنا عشر إماماً"
    },
    {
        "questionText": "من هو الإمام الذي استشهد مسموماً في طوس؟",
        "media": "",
        "answerMedia": "",
        "answer": "الإمام علي بن موسى الرضا (عليه السلام)"
    },
    {
        "questionText": "من هو الإمام الذي لقبه (باقر العلم)؟",
        "media": "",
        "answerMedia": "",
        "answer": "الإمام محمد الباقر (عليه السلام)"
    },
    {
        "questionText": "ما هي الصلاة التي ليس فيها ركوع ولا سجود؟",
        "media": "",
        "answerMedia": "",
        "answer": "صلاة الجنازة"
    },
    {
        "questionText": "من هو النبي الذي بنى الكعبة مع ابنه؟",
        "media": "",
        "answerMedia": "",
        "answer": "إبراهيم وإسماعيل"
    },
    {
        "questionText": "من هو الملك الموكل بالوحي؟",
        "media": "",
        "answerMedia": "",
        "answer": "جبرائيل (عليه السلام)"
    },
    {
        "questionText": "ما هو عدد الأنبياء الذين ذكروا في القرآن الكريم؟",
        "media": "",
        "answerMedia": "",
        "answer": "25 نبياً"
    },
    {
        "questionText": "ما هي السورة التي تنتهي بكلمة (الناس)؟",
        "media": "",
        "answerMedia": "",
        "answer": "سورة الناس"
    },
    {
        "questionText": "ما هي المعجزة الكبرى للنبي محمد (ص)؟",
        "media": "",
        "answerMedia": "",
        "answer": "القرآن الكريم"
    },
    {
        "questionText": "في أي ليلة نزل القرآن الكريم؟",
        "media": "",
        "answerMedia": "",
        "answer": "ليلة القدر"
    },
    {
        "questionText": "ما هي القبلة الأولى للمسلمين؟",
        "media": "",
        "answerMedia": "",
        "answer": "المسجد الأقصى"
    },
    {
        "questionText": "من هو الصحابي الذي قال فيه النبي: (سلمان منا أهل البيت)؟",
        "media": "",
        "answerMedia": "",
        "answer": "سلمان المحمدي"
    },
    {
        "questionText": "ما هو اسم زوجة النبي محمد الأولى؟",
        "media": "",
        "answerMedia": "",
        "answer": "خديجة بنت خويلد"
    },
    {
        "questionText": "من هو والد السيدة فاطمة الزهراء (عليها السلام)؟",
        "media": "",
        "answerMedia": "",
        "answer": "النبي محمد (ص)"
    },
    {
        "questionText": "ما هو اللقب المشهور للإمام علي بن الحسين (عليه السلام)؟",
        "media": "",
        "answerMedia": "",
        "answer": "السجاد / زين العابدين"
    },
    {
        "questionText": "ما اسم كتاب الإمام علي (عليه السلام)؟",
        "media": "",
        "answerMedia": "",
        "answer": "نهج البلاغة"
    },
    {
        "questionText": "ما هي الصلاة التي تؤدى في حالات الخوف؟",
        "media": "",
        "answerMedia": "",
        "answer": "صلاة الآيات"
    },
    {
        "questionText": "من هو أول من آمن بالنبي (ص) من النساء؟",
        "media": "",
        "answerMedia": "",
        "answer": "السيدة خديجة"
    },
    {
        "questionText": "من هو أول من آمن بالنبي (ص) من الرجال؟",
        "media": "",
        "answerMedia": "",
        "answer": "الإمام علي (عليه السلام)"
    },
    {
        "questionText": "كم عدد ركعات الصلوات الواجبة اليومية؟",
        "media": "",
        "answerMedia": "",
        "answer": "17 ركعة"
    },
    {
        "questionText": "ما هي السورة التي تعدل ثلث القرآن؟",
        "media": "",
        "answerMedia": "",
        "answer": "سورة الإخلاص"
    },
    {
        "questionText": "ما اسم المدينة التي هاجر إليها النبي (ص)؟",
        "media": "",
        "answerMedia": "",
        "answer": "المدينة المنورة"
    },
    {
        "questionText": "في أي سنة هجرية وقعت واقعة الطف؟",
        "media": "",
        "answerMedia": "",
        "answer": "61 هج"
    },
    {
        "questionText": "من هو الإمام الذي ولد في الخامس من شعبان؟",
        "media": "",
        "answerMedia": "",
        "answer": "الإمام زين العابدين (عليه السلام)"
    },
    {
        "questionText": "ما هو اسم أم الإمام المهدي (عج)؟",
        "media": "",
        "answerMedia": "",
        "answer": "السيدة نرجس"
    },
    {
        "questionText": "من هو الإمام الذي ولد في 15 رمضان؟",
        "media": "",
        "answerMedia": "",
        "answer": "الإمام الحسن المجتبى (عليه السلام)"
    },
    {
        "questionText": "من هو الإمام الذي استشهد مسموماً في 25 رجب؟",
        "media": "",
        "answerMedia": "",
        "answer": "الإمام موسى الكاظم (عليه السلام)"
    },
    {
        "questionText": "ما هو الاسم الرديف لسورة (الإسراء)؟",
        "media": "",
        "answerMedia": "",
        "answer": "سورة بني إسرائيل"
    },
    {
        "questionText": "ما هي معجزة النبي صالح؟",
        "media": "",
        "answerMedia": "",
        "answer": "الناقة"
    },
    {
        "questionText": "من هو النبي الذي ألان الله له الحديد؟",
        "media": "",
        "answerMedia": "",
        "answer": "داوود (عليه السلام)"
    },
    {
        "questionText": "من هو النبي الذي سخر الله له الريح؟",
        "media": "",
        "answerMedia": "",
        "answer": "سليمان (عليه السلام)"
    },
    {
        "questionText": "ما هي السورة التي تبدأ بـ (تبارك الذي بيده الملك)؟",
        "media": "",
        "answerMedia": "",
        "answer": "سورة الملك"
    },
    {
        "questionText": "من هو خطيب الأنبياء؟",
        "media": "",
        "answerMedia": "",
        "answer": "شعيب (عليه السلام)"
    },
    {
        "questionText": "أين تقع قرية النبي يونس؟",
        "media": "",
        "answerMedia": "",
        "answer": "نينوى"
    },
    {
        "questionText": "من هو الإمام الذي يلقب بـ (شيخ الأئمة)؟",
        "media": "",
        "answerMedia": "",
        "answer": "الإمام جعفر الصادق (عليه السلام)"
    },
    {
        "questionText": "ما هو العلم الذي كان يبرع فيه الإمام الصادق؟",
        "media": "",
        "answerMedia": "",
        "answer": "الكيمياء وغيره"
    },
    {
        "questionText": "كم عدد المذاهب الفقهية المشهورة عند المسلمين؟",
        "media": "",
        "answerMedia": "",
        "answer": "خمسة (بإضافة الجعفري)"
    },
    {
        "questionText": "من هو أول من أذن في الإسلام؟",
        "media": "",
        "answerMedia": "",
        "answer": "بلال الحبشي"
    },
    {
        "questionText": "ما هي أطول آية في القرآن الكريم؟",
        "media": "",
        "answerMedia": "",
        "answer": "آية الدين"
    },
    {
        "questionText": "في أي سورة وردت قصة (أصحاب الكهف)؟",
        "media": "",
        "answerMedia": "",
        "answer": "سورة الكهف"
    },
    {
        "questionText": "ما هي السورة التي تدعى (المنجية)؟",
        "media": "",
        "answerMedia": "",
        "answer": "سورة الملك"
    },
    {
        "questionText": "ما هو اسم الجبل الذي استقرت عليه سفينة نوح؟",
        "media": "",
        "answerMedia": "",
        "answer": "الجودي"
    },
    {
        "questionText": "من هي أخت الإمام الحسين؟",
        "media": "",
        "answerMedia": "",
        "answer": "السيدة زينب (عليها السلام)"
    },
    {
        "questionText": "من هو زوج السيدة فاطمة الزهراء (عليها السلام)؟",
        "media": "",
        "answerMedia": "",
        "answer": "الإمام علي (عليه السلام)"
    },
    {
        "questionText": "ما هو اللقب الذي أطلق على السيدة فاطمة؟",
        "media": "",
        "answerMedia": "",
        "answer": "الزهراء"
    },
    {
        "questionText": "من هو الملقب بـ (ذو الفقار)؟",
        "media": "",
        "answerMedia": "",
        "answer": "سيف الإمام علي"
    },
    {
        "questionText": "ما هي الغزوة التي انتصر فيها المسلمون في رمضان؟",
        "media": "",
        "answerMedia": "",
        "answer": "بدر الكبرى"
    },
    {
        "questionText": "ما هو اسم والد النبي محمد (ص)؟",
        "media": "",
        "answerMedia": "",
        "answer": "عبد الله"
    },
    {
        "questionText": "من هي مرضعة الرسول (ص)؟",
        "media": "",
        "answerMedia": "",
        "answer": "حليمة السعدية"
    },
    {
        "questionText": "من هو النبي الذي يلقب بـ (ذو الكفل)؟",
        "media": "",
        "answerMedia": "",
        "answer": "حزقيل"
    },
    {
        "questionText": "ما هي السورة التي تبدأ باسم فاكهة؟",
        "media": "",
        "answerMedia": "",
        "answer": "سورة التين"
    },
    {
        "questionText": "ما هي عاصمة الدولة في عهد الإمام علي؟",
        "media": "",
        "answerMedia": "",
        "answer": "الكوفة"
    },
    {
        "questionText": "أين يقع مرقد الإمام الحسين؟",
        "media": "",
        "answerMedia": "",
        "answer": "كربلاء"
    },
    {
        "questionText": "أين يقع مرقد الإمام علي؟",
        "media": "",
        "answerMedia": "",
        "answer": "النجف"
    },
    {
        "questionText": "من هو الإمام العاشر؟",
        "media": "",
        "answerMedia": "",
        "answer": "الإمام علي الهادي"
    },
    {
        "questionText": "من هو الإمام الحادي عشر؟",
        "media": "",
        "answerMedia": "",
        "answer": "الإمام الحسن العسكري"
    },
    {
        "questionText": "ما هي عاصمة فرنسا؟",
        "media": "",
        "answerMedia": "",
        "answer": "باريس"
    },
    {
        "questionText": "ما هي عاصمة إيطاليا؟",
        "media": "",
        "answerMedia": "",
        "answer": "روما"
    },
    {
        "questionText": "ما هي عاصمة ألمانيا؟",
        "media": "",
        "answerMedia": "",
        "answer": "برلين"
    },
    {
        "questionText": "ما هي عاصمة العراق؟",
        "media": "",
        "answerMedia": "",
        "answer": "بغداد"
    },
    {
        "questionText": "ما هي عاصمة الكويت؟",
        "media": "",
        "answerMedia": "",
        "answer": "الكويت"
    },
    {
        "questionText": "ما هي عاصمة مصر؟",
        "media": "",
        "answerMedia": "",
        "answer": "القاهرة"
    },
    {
        "questionText": "ما هي عاصمة السعودية؟",
        "media": "",
        "answerMedia": "",
        "answer": "الرياض"
    },
    {
        "questionText": "ما هي عاصمة إسبانيا؟",
        "media": "",
        "answerMedia": "",
        "answer": "مدريد"
    },
    {
        "questionText": "ما هي عاصمة البرازيل؟",
        "media": "",
        "answerMedia": "",
        "answer": "برازيليا"
    },
    {
        "questionText": "ما هي أصغر دولة في العالم؟",
        "media": "",
        "answerMedia": "",
        "answer": "الفاتيكان"
    },
    {
        "questionText": "ما هي أكبر دولة في العالم؟",
        "media": "",
        "answerMedia": "",
        "answer": "روسيا"
    },
    {
        "questionText": "أين يقع تمثال الحرية؟",
        "media": "",
        "answerMedia": "",
        "answer": "نيويورك"
    },
    {
        "questionText": "أين يقع سور الصين العظيم؟",
        "media": "",
        "answerMedia": "",
        "answer": "الصين"
    },
    {
        "questionText": "ما هو أطول نهر في العالم؟",
        "media": "",
        "answerMedia": "",
        "answer": "نهر النيل"
    },
    {
        "questionText": "ما هو أكبر محيط في العالم؟",
        "media": "",
        "answerMedia": "",
        "answer": "المحيط الهادئ"
    },
    {
        "questionText": "ما هي أعلى قمة جبلية؟",
        "media": "",
        "answerMedia": "",
        "answer": "قمة إفرست"
    },
    {
        "questionText": "ما هو لقب كوكب المريخ؟",
        "media": "",
        "answerMedia": "",
        "answer": "الكوكب الأحمر"
    },
    {
        "questionText": "كم عدد قارات العالم؟",
        "media": "",
        "answerMedia": "",
        "answer": "7 قارات"
    },
    {
        "questionText": "في أي قارة تقع مصر؟",
        "media": "",
        "answerMedia": "",
        "answer": "أفريقيا"
    },
    {
        "questionText": "في أي قارة تقع اليابان؟",
        "media": "",
        "answerMedia": "",
        "answer": "آسيا"
    },
    {
        "questionText": "في أي قارة تقع فرنسا؟",
        "media": "",
        "answerMedia": "",
        "answer": "أوروبا"
    },
    {
        "questionText": "ما هي اللغة الرسمية في إسبانيا؟",
        "media": "",
        "answerMedia": "",
        "answer": "الإسبانية"
    },
    {
        "questionText": "ما هي اللغة الرسمية في البرازيل؟",
        "media": "",
        "answerMedia": "",
        "answer": "البرتغالية"
    },
    {
        "questionText": "من هو مكتشف الجاذبية؟",
        "media": "",
        "answerMedia": "",
        "answer": "نيوتن"
    },
    {
        "questionText": "ما هو الغاز الذي نتنفسه؟",
        "media": "",
        "answerMedia": "",
        "answer": "الأكسجين"
    },
    {
        "questionText": "ما هو الحيوان الذي يلقب بـ (سفينة الصحراء)؟",
        "media": "",
        "answerMedia": "",
        "answer": "الجمل"
    },
    {
        "questionText": "ما هو أسرع حيوان بري؟",
        "media": "",
        "answerMedia": "",
        "answer": "الفهد"
    },
    {
        "questionText": "كم عدد كواكب المجموعة الشمسية؟",
        "media": "",
        "answerMedia": "",
        "answer": "8 كواكب"
    },
    {
        "questionText": "ما هي أكبر غابة في العالم؟",
        "media": "",
        "answerMedia": "",
        "answer": "غابات الأمازون"
    },
    {
        "questionText": "أين يقع المسجد الأقصى؟",
        "media": "",
        "answerMedia": "",
        "answer": "فلسطين"
    },
    {
        "questionText": "ما هي العملة المستخدمة في الولايات المتحدة؟",
        "media": "",
        "answerMedia": "",
        "answer": "الدولار"
    },
    {
        "questionText": "ما هي العملة المستخدمة في دول الاتحاد الأوروبي؟",
        "media": "",
        "answerMedia": "",
        "answer": "اليورو"
    },
    {
        "questionText": "من هو مخترع الطائرة؟",
        "media": "",
        "answerMedia": "",
        "answer": "الأخوين رايت"
    },
    {
        "questionText": "ما هي أقرب مجرة لكوكب الأرض؟",
        "media": "",
        "answerMedia": "",
        "answer": "أندروميدا"
    },
    {
        "questionText": "ما هو العنصر الكيميائي (H)؟",
        "media": "",
        "answerMedia": "",
        "answer": "الهيدروجين"
    },
    {
        "questionText": "من هو أول إنسان صعد إلى القمر؟",
        "media": "",
        "answerMedia": "",
        "answer": "نيل أمسترونغ"
    },
    {
        "questionText": "ما هو اسم أكبر صحراء؟",
        "media": "",
        "answerMedia": "",
        "answer": "الصحراء الكبرى"
    },
    {
        "questionText": "أين يقع شلالات نياجرا؟",
        "media": "",
        "answerMedia": "",
        "answer": "بين كندا وأمريكا"
    },
    {
        "questionText": "ما هي عاصمة الهند؟",
        "media": "",
        "answerMedia": "",
        "answer": "نيودلهي"
    },
    {
        "questionText": "ما هي عاصمة روسيا؟",
        "media": "",
        "answerMedia": "",
        "answer": "موسكو"
    },
    {
        "questionText": "ما هو لقب مدينة لندن؟",
        "media": "",
        "answerMedia": "",
        "answer": "مدينة الضباب"
    },
    {
        "questionText": "من هو الرسام الذي رسم لوحة الموناليزا؟",
        "media": "",
        "answerMedia": "",
        "answer": "ليوناردو دا فينشي"
    },
    {
        "questionText": "ما هو الكوكب الأقرب للشمس؟",
        "media": "",
        "answerMedia": "",
        "answer": "عطارد"
    },
    {
        "questionText": "ما هو أبعد كوكب في المجموعة؟",
        "media": "",
        "answerMedia": "",
        "answer": "نبتون"
    },
    {
        "questionText": "ما هو العضو المسؤول عن ضخ الدم؟",
        "media": "",
        "answerMedia": "",
        "answer": "القلب"
    },
    {
        "questionText": "كم عدد أسنان الإنسان البالغ؟",
        "media": "",
        "answerMedia": "",
        "answer": "32"
    },
    {
        "questionText": "ما هو المعدن السائل؟",
        "media": "",
        "answerMedia": "",
        "answer": "الزئبق"
    },
    {
        "questionText": "من هو مؤلف كتاب (قانون الطب)؟",
        "media": "",
        "answerMedia": "",
        "answer": "ابن سينا"
    },
    {
        "questionText": "ما هي عاصمة الإمارات؟",
        "media": "",
        "answerMedia": "",
        "answer": "أبوظبي"
    },
    {
        "questionText": "ما هي عاصمة المغرب؟",
        "media": "",
        "answerMedia": "",
        "answer": "الرباط"
    },
    {
        "questionText": "من هو اللاعب الأكثر تتويجاً بالكرة الذهبية؟",
        "media": "",
        "answerMedia": "",
        "answer": "ليونيل ميسي"
    },
    {
        "questionText": "في أي عام فازت إسبانيا بكأس العالم؟",
        "media": "",
        "answerMedia": "",
        "answer": "2010"
    },
    {
        "questionText": "أي منتخب فاز بكأس العالم 2014؟",
        "media": "",
        "answerMedia": "",
        "answer": "ألمانيا"
    },
    {
        "questionText": "في أي مدينة يقع ملعب (سانتياغو برنابيو)؟",
        "media": "",
        "answerMedia": "",
        "answer": "مدريد"
    },
    {
        "questionText": "من هو اللاعب الذي سجل هدف (يد الله)؟",
        "media": "",
        "answerMedia": "",
        "answer": "مارادونا"
    },
    {
        "questionText": "كم عدد لاعبي فريق كرة القدم في الملعب؟",
        "media": "",
        "answerMedia": "",
        "answer": "11 لاعب"
    },
    {
        "questionText": "أين أقيمت أول بطولة كأس عالم 1930؟",
        "media": "",
        "answerMedia": "",
        "answer": "الأوروغواي"
    },
    {
        "questionText": "من هو الملقب بـ (صاروخ ماديرا)؟",
        "media": "",
        "answerMedia": "",
        "answer": "رونالدو"
    },
    {
        "questionText": "من هو الهداف التاريخي لكأس العالم؟",
        "media": "",
        "answerMedia": "",
        "answer": "ميروسلاف كلوزه"
    },
    {
        "questionText": "ما هو لون بطاقة الطرد؟",
        "media": "",
        "answerMedia": "",
        "answer": "الأحمر"
    },
    {
        "questionText": "كم مدة شوط المباراة الواحد؟",
        "media": "",
        "answerMedia": "",
        "answer": "45 دقيقة"
    },
    {
        "questionText": "أي نادي يلقب بـ (الشياطين الحمر)؟",
        "media": "",
        "answerMedia": "",
        "answer": "مانشستر يونايتد"
    },
    {
        "questionText": "ما هو المنتخب الذي فاز بكأس العالم 5 مرات؟",
        "media": "",
        "answerMedia": "",
        "answer": "البرازيل"
    },
    {
        "questionText": "من هو اللاعب الملقب بـ (البرغوث)؟",
        "media": "",
        "answerMedia": "",
        "answer": "ليونيل ميسي"
    },
    {
        "questionText": "في أي دورة أولمبية شاركت قطر لأول مرة؟",
        "media": "",
        "answerMedia": "",
        "answer": "1984"
    },
    {
        "questionText": "من هو مدرب المنتخب السعودي في مونديال 2022؟",
        "media": "",
        "answerMedia": "",
        "answer": "هيرفي رينارد"
    },
    {
        "questionText": "أين أقيم نهائي كأس العالم 2022؟",
        "media": "",
        "answerMedia": "",
        "answer": "قطر (لوسيل)"
    },
    {
        "questionText": "من هو الفائز بلقب دوري أبطال أوروبا 2024؟",
        "media": "",
        "answerMedia": "",
        "answer": "ريال مدريد"
    },
    {
        "questionText": "ما هي الرياضة التي تستخدم فيها الكرات والمضارب على طاولة؟",
        "media": "",
        "answerMedia": "",
        "answer": "تنس الطاولة"
    },
    {
        "questionText": "ما هي الرياضة التي يطلق عليها (اللعبة البيضاء)؟",
        "media": "",
        "answerMedia": "",
        "answer": "التنس الأرضي"
    },
    {
        "questionText": "كم عدد حلقات العلم الأولمبي؟",
        "media": "",
        "answerMedia": "",
        "answer": "5 حلقات"
    },
    {
        "questionText": "ما هو اسم ملعب نادي برشلونة؟",
        "media": "",
        "answerMedia": "",
        "answer": "كامب نو"
    },
    {
        "questionText": "من هو حارس المرمى الملقب بـ (العنكبوت الأسود)؟",
        "media": "",
        "answerMedia": "",
        "answer": "ليف ياشين"
    },
    {
        "questionText": "من هو اللاعب العربي بطل الدوري الإنجليزي؟",
        "media": "",
        "answerMedia": "",
        "answer": "محمد صلاح"
    },
    {
        "questionText": "أي منتخب فاز بكأس أمم أفريقيا 2023؟",
        "media": "",
        "answerMedia": "",
        "answer": "كوت ديفوار"
    },
    {
        "questionText": "ما هو النادي المصري الملقب بـ (نادي القرن)؟",
        "media": "",
        "answerMedia": "",
        "answer": "الأهلي"
    },
    {
        "questionText": "من فاز بلقب كوبا أمريكا 2024؟",
        "media": "",
        "answerMedia": "",
        "answer": "الأرجنتين"
    },
    {
        "questionText": "ما هي البطولة التي تجمع أفضل أندية أوروبا؟",
        "media": "",
        "answerMedia": "",
        "answer": "دوري أبطال أوروبا"
    },
    {
        "questionText": "كم عدد التبديلات المسموح بها حالياً؟",
        "media": "",
        "answerMedia": "",
        "answer": "5 تبديلات"
    },
    {
        "questionText": "من هو أول منتخب عربي فاز بمباراة في كأس العالم؟",
        "media": "",
        "answerMedia": "",
        "answer": "تونس"
    },
    {
        "questionText": "في أي بلد ولد اللاعب زلاتان إبراهيموفيتش؟",
        "media": "",
        "answerMedia": "",
        "answer": "السويد"
    },
    {
        "questionText": "ما هو مركز اللاعب الذي يرتدي القفازات؟",
        "media": "",
        "answerMedia": "",
        "answer": "حارس مرمى"
    },
    {
        "questionText": "من هو الفريق الفائز بالدوري القطري 2024؟",
        "media": "",
        "answerMedia": "",
        "answer": "السد"
    },
    {
        "questionText": "ما هي المسافة التي يركضها عداء الماراثون؟",
        "media": "",
        "answerMedia": "",
        "answer": "42 كيلومتر"
    },
    {
        "questionText": "من هو أسطورة الملاكمة؟",
        "media": "",
        "answerMedia": "",
        "answer": "محمد علي كلاي"
    },
    {
        "questionText": "في أي رياضة يشتهر اللاعب (مايكل جوردان)؟",
        "media": "",
        "answerMedia": "",
        "answer": "كرة السلة"
    },
    {
        "questionText": "تحدي 10 ثواني: اذكر 5 أسماء أولاد تبدأ بحرف العين.",
        "media": "",
        "answerMedia": "",
        "answer": "علي، عيسى، عمر، عثمان، عباس"
    },
    {
        "questionText": "تحدي 20 ثانية: اذكر 5 عواصم عربية.",
        "media": "",
        "answerMedia": "",
        "answer": "الرياض، الكويت، مسقط، القاهرة، بغداد"
    },
    {
        "questionText": "تحدي 10 ثواني: اذكر 3 أنواع من الفواكه لونها أحمر.",
        "media": "",
        "answerMedia": "",
        "answer": "تفاح، فراولة، رمان"
    },
    {
        "questionText": "تحدي 30 ثانية: اذكر 5 لاعبين لعبوا لريال مدريد.",
        "media": "",
        "answerMedia": "",
        "answer": "رونالدو، زيدان، بنزيما، مودريتش، كاسياس"
    },
    {
        "questionText": "تحدي 10 ثواني: قل (بطة نطينا بطتكم) 5 مرات بسرعة.",
        "media": "",
        "answerMedia": "",
        "answer": "تحدي النطق"
    },
    {
        "questionText": "تحدي 20 ثانية: اذكر 5 دول في قارة آسيا.",
        "media": "",
        "answerMedia": "",
        "answer": "السعودية، الصين، الهند، إيران، كوريا"
    },
    {
        "questionText": "تحدي 15 ثانية: اذكر 5 أشياء موجودة في المطبخ.",
        "media": "",
        "answerMedia": "",
        "answer": "ثلاجة، فرن، ملعقة، سكين، قدر"
    },
    {
        "questionText": "تحدي 20 ثانية: اذكر 5 من أسماء الله الحسنى.",
        "media": "",
        "answerMedia": "",
        "answer": "الرحمن، الرحيم، الملك، القدوس، السلام"
    },
    {
        "questionText": "تحدي 10 ثواني: اذكر 3 دول تبدأ بحرف الميم.",
        "media": "",
        "answerMedia": "",
        "answer": "مصر، مغرب، موريتانيا"
    },
    {
        "questionText": "تحدي 30 ثانية: اذكر 5 سور في القرآن تبدأ بـ (الحمد لله).",
        "media": "",
        "answerMedia": "",
        "answer": "الفاتحة، الأنعام، الكهف، سبأ، فاطر"
    },
    {
        "questionText": "تحدي 10 ثواني: اذكر 3 أنواع سيارات المانية.",
        "media": "",
        "answerMedia": "",
        "answer": "مرسيدس، بي إم دبليو، أودي"
    },
    {
        "questionText": "تحدي 15 ثانية: اذكر 5 ألوان باللغة الإنجليزية.",
        "media": "",
        "answerMedia": "",
        "answer": "Red, Blue, Green, Yellow, Black"
    },
    {
        "questionText": "تحدي 10 ثواني: اذكر اسمين من أسماء مكة المكرمة.",
        "media": "",
        "answerMedia": "",
        "answer": "بكة، البلد الأمين"
    },
    {
        "questionText": "تحدي 30 ثانية: اذكر 5 من قادة معركة كربلاء.",
        "media": "",
        "answerMedia": "",
        "answer": "الحسين، العباس، علي الأكبر، القاسم، حبيب"
    },
    {
        "questionText": "تحدي 10 ثواني: اذكر 3 حيوانات تعيش في الماء.",
        "media": "",
        "answerMedia": "",
        "answer": "سمك، دلفين، حوت"
    },
    {
        "questionText": "تحدي 15 ثانية: اذكر 5 مهن.",
        "media": "",
        "answerMedia": "",
        "answer": "مهندس، طبيب، معلم، طيار، نجار"
    },
    {
        "questionText": "تحدي 10 ثواني: اذكر 3 مدن سعودية.",
        "media": "",
        "answerMedia": "",
        "answer": "الرياض، جدة، الدمام"
    },
    {
        "questionText": "تحدي 20 ثانية: اذكر 4 ماركات هواتف.",
        "media": "",
        "answerMedia": "",
        "answer": "آيفون، سامسونج، هواوي، شاومي"
    },
    {
        "questionText": "تحدي 10 ثواني: اذكر 3 أشياء تطير في الجو.",
        "media": "",
        "answerMedia": "",
        "answer": "طائرة، عصفور، منطاد"
    },
    {
        "questionText": "تحدي 30 ثانية: اذكر 10 دول بسرعة.",
        "media": "",
        "answerMedia": "",
        "answer": "أي 10 دول"
    },
    {
        "questionText": "ولا كلمة (واحد يصور الباركود)",
        "media": "<img src=\"https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=%D8%A7%D9%84%D8%AC%D8%A7%D8%B1%20%D9%82%D8%A8%D9%84%20%D8%A7%D9%84%D8%AF%D8%A7%D8%B1\" alt=\"الجار قبل الدار\" />",
        "answerMedia": "",
        "answer": "الجار قبل الدار"
    },
    {
        "questionText": "ولا كلمة (واحد يصور الباركود)",
        "media": "<img src=\"https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=%D9%84%D8%B3%D8%A7%D9%86%D9%83%20%D8%AD%D8%B5%D8%A7%D9%86%D9%83\" alt=\"لسانك حصانك\" />",
        "answerMedia": "",
        "answer": "لسانك حصانك"
    },
    {
        "questionText": "ولا كلمة (واحد يصور الباركود)",
        "media": "<img src=\"https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=%D9%85%D9%86%20%D8%AC%D8%AF%20%D9%88%D8%AC%D8%AF\" alt=\"من جد وجد\" />",
        "answerMedia": "",
        "answer": "من جد وجد"
    },
    {
        "questionText": "ولا كلمة (واحد يصور الباركود)",
        "media": "<img src=\"https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=%D8%A7%D9%84%D8%B5%D8%A7%D8%AD%D8%A8%20%D8%B3%D8%A7%D8%AD%D8%A8\" alt=\"الصاحب ساحب\" />",
        "answerMedia": "",
        "answer": "الصاحب ساحب"
    },
    {
        "questionText": "ولا كلمة (واحد يصور الباركود)",
        "media": "<img src=\"https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=%D8%A7%D9%84%D9%88%D9%82%D8%AA%20%D9%85%D9%86%20%D8%B0%D9%87%D8%A8\" alt=\"الوقت من ذهب\" />",
        "answerMedia": "",
        "answer": "الوقت من ذهب"
    },
    {
        "questionText": "ولا كلمة (واحد يصور الباركود)",
        "media": "<img src=\"https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D8%A3%D9%86%D9%8A%20%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%D8%A9\" alt=\"في التأني السلامة\" />",
        "answerMedia": "",
        "answer": "في التأني السلامة"
    },
    {
        "questionText": "ولا كلمة (واحد يصور الباركود)",
        "media": "<img src=\"https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=%D8%A7%D8%B7%D9%84%D8%A8%D9%88%D8%A7%20%D8%A7%D9%84%D8%B9%D9%84%D9%85\" alt=\"اطلبوا العلم\" />",
        "answerMedia": "",
        "answer": "اطلبوا العلم"
    },
    {
        "questionText": "ولا كلمة (واحد يصور الباركود)",
        "media": "<img src=\"https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=%D9%85%D8%A7%20%D8%B9%D9%84%D9%89%20%D8%A7%D9%84%D8%B1%D8%B3%D9%88%D9%84%20%D8%A7%D9%84%D8%A7%20%D8%A7%D9%84%D8%A8%D9%84%D8%A7%D8%BA\" alt=\"ما على الرسول إلا البلاغ\" />",
        "answerMedia": "",
        "answer": "ما على الرسول إلا البلاغ"
    },
    {
        "questionText": "ولا كلمة (واحد يصور الباركود)",
        "media": "<img src=\"https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=%D8%A7%D9%84%D8%B9%D9%82%D9%84%20%D8%B2%D9%8A%D9%86%D8%A9\" alt=\"العقل زينة\" />",
        "answerMedia": "",
        "answer": "العقل زينة"
    },
    {
        "questionText": "ولا كلمة (واحد يصور الباركود)",
        "media": "<img src=\"https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=%D8%B9%D9%84%D9%89%20%D9%82%D8%AF%D8%B1%20%D8%A7%D9%87%D9%84%20%D8%A7%D9%84%D8%B9%D8%B2%D9%85\" alt=\"على قدر أهل العزم\" />",
        "answerMedia": "",
        "answer": "على قدر أهل العزم"
    },
    {
        "questionText": "ولا كلمة (واحد يصور الباركود)",
        "media": "<img src=\"https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=%D8%A7%D9%84%D8%B9%D9%84%D9%85%20%D9%86%D9%88%D8%B1\" alt=\"العلم نور\" />",
        "answerMedia": "",
        "answer": "العلم نور"
    },
    {
        "questionText": "ولا كلمة (واحد يصور الباركود)",
        "media": "<img src=\"https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=%D8%A7%D8%AA%D9%82%20%D8%B4%D8%B1%20%D9%85%D9%86%20%D8%A3%D8%AD%D8%B3%D9%86%D8%AA%20%D8%A5%D9%84%D9%8A%D9%87\" alt=\"اتق شر من أحسنت إليه\" />",
        "answerMedia": "",
        "answer": "اتق شر من أحسنت إليه"
    },
    {
        "questionText": "ولا كلمة (واحد يصور الباركود)",
        "media": "<img src=\"https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=%D8%A7%D9%84%D8%B3%D9%83%D9%88%D8%AA%20%D8%B9%D9%84%D8%A7%D9%85%D8%A9%20%D8%A7%D9%84%D8%B1%D8%B6%D8%A7\" alt=\"السكوت علامة الرضا\" />",
        "answerMedia": "",
        "answer": "السكوت علامة الرضا"
    }
];


