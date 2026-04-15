// ملف قاعدة بيانات الأسئلة - تم تجديده بالكامل 2026

const questionsDB = [
    // 💡 معلومات عامة وتاريخ
    { "questionText": "من هو العالم الذي اكتشف الجاذبية الأرضية؟", "media": "", "answerMedia": "", "answer": "إسحاق نيوتن" },
    { "questionText": "ما هي وحدة قياس المقاومة الكهربائية؟", "media": "", "answerMedia": "", "answer": "الأوم (Ohm)" },
    { "questionText": "من هو مخترع المصباح الكهربائي؟", "media": "", "answerMedia": "", "answer": "توماس إديسون" },
    { "questionText": "ما هي أكبر قارة في العالم من حيث المساحة؟", "media": "", "answerMedia": "", "answer": "قارة آسيا" },
    { "questionText": "في أي قارة تقع جبال الأنديز؟", "media": "", "answerMedia": "", "answer": "أمريكا الجنوبية" },
    { "questionText": "ما هي أطول سلسلة جبال في العالم؟", "media": "", "answerMedia": "", "answer": "سلسلة جبال الأنديز" },
    { "questionText": "ما هو أعمق خندق محيطي في العالم؟", "media": "", "answerMedia": "", "answer": "خندق ماريانا في المحيط الهادئ" },
    { "questionText": "ما هي عاصمة أستراليا؟", "media": "", "answerMedia": "", "answer": "كانبرا" },
    { "questionText": "ما هي أكثر لغة يتحدث بها الناس حول العالم كلغة أم؟", "media": "", "answerMedia": "", "answer": "لغة الماندرين الصينية" },
    { "questionText": "ما هو الغاز الذي يشكل النسبة الأكبر من الغلاف الجوي للأرض؟", "media": "", "answerMedia": "", "answer": "النيتروجين (78%)" },
    { "questionText": "من هي أول دولة استضافت كأس العالم لكرة القدم؟", "media": "", "answerMedia": "", "answer": "الأوروغواي عام 1930" },
    { "questionText": "ما هو الحيوان الذي يُعرف بأنه أسرع حيوان بري؟", "media": "", "answerMedia": "", "answer": "الفهد" },
    { "questionText": "ما هو أقرب كوكب إلى الشمس؟", "media": "", "answerMedia": "", "answer": "عطارد" },
    { "questionText": "ما هو الكوكب الملقب بالكوكب الأحمر؟", "media": "", "answerMedia": "", "answer": "المريخ" },
    { "questionText": "ما هو أكبر كوكب في مجموعتنا الشمسية؟", "media": "", "answerMedia": "", "answer": "المشتري" },
    { "questionText": "من رسم لوحة الموناليزا؟", "media": "", "answerMedia": "", "answer": "ليوناردو دا فينشي" },
    { "questionText": "من هو الشاعر الذي لقب بأمير الشعراء؟", "media": "", "answerMedia": "", "answer": "أحمد شوقي" },
    { "questionText": "ما هو أصغر طائر في العالم؟", "media": "", "answerMedia": "", "answer": "طائر الطنان" },
    { "questionText": "ما هي أقوى عضلة في جسم الإنسان؟", "media": "", "answerMedia": "", "answer": "عضلة الفك (الماضغة)" },
    { "questionText": "كم عدد خلايا الدم الحمراء التي ينتجها الجسم في اليوم؟", "media": "", "answerMedia": "", "answer": "حوالي 200 مليار خلية" },

    // 🕌 إسلاميات
    { "questionText": "في أي عام ميلادي كانت الهجرة النبوية؟", "media": "", "answerMedia": "", "answer": "622 م" },
    { "questionText": "ما اسم الصحابي الذي لقب بـ (أسد الله)؟", "media": "", "answerMedia": "", "answer": "حمزة بن عبد المطلب" },
    { "questionText": "من هو النبي الذي أُلقي في النار ولم تحرقه؟", "media": "", "answerMedia": "", "answer": "إبراهيم عليه السلام" },
    { "questionText": "بأي سورة من القرآن الكريم تُسمى سورة التوديع؟", "media": "", "answerMedia": "", "answer": "سورة النصر" },
    { "questionText": "من هو أول مسجد شُيد في الإسلام؟", "media": "", "answerMedia": "", "answer": "مسجد قباء" },
    { "questionText": "ما هي السورة التي تعدل ثلث القرآن؟", "media": "", "answerMedia": "", "answer": "سورة الإخلاص" },
    { "questionText": "كم مرة ذكر اسم (محمد) صراحة في القرآن الكريم؟", "media": "", "answerMedia": "", "answer": "4 مرات" },
    { "questionText": "من أول من أسلم من الصبيان؟", "media": "", "answerMedia": "", "answer": "علي بن أبي طالب عليه السلام" },
    { "questionText": "كم عدد أركان الإيمان؟", "media": "", "answerMedia": "", "answer": "ستة أركان" },
    { "questionText": "من هو الإمام المعصوم الثامن؟", "media": "", "answerMedia": "", "answer": "الإمام علي الرضا عليه السلام" },
    { "questionText": "أين ولد أمير المؤمنين علي بن أبي طالب؟", "media": "", "answerMedia": "", "answer": "داخل الكعبة المشرفة" },
    { "questionText": "ما هو اللقب الأبرز للسيدة زينب عليها السلام؟", "media": "", "answerMedia": "", "answer": "أم المصائب / عقيلة بني هاشم" },
    { "questionText": "في أي مدينة يقع مرقد الإمام الحسين عليه السلام؟", "media": "", "answerMedia": "", "answer": "كربلاء" },
    { "questionText": "من هم أصحاب الكساء؟", "media": "", "answerMedia": "", "answer": "النبي محمد، علي، فاطمة، الحسن، الحسين (صلوات الله عليهم)" },
    { "questionText": "من هو النبي الذي ابتلعه الحوت؟", "media": "", "answerMedia": "", "answer": "يونس عليه السلام" },

    // ⚽ رياضة
    { "questionText": "ما هي أكثر دولة فازت بكأس العالم لكرة القدم؟", "media": "", "answerMedia": "", "answer": "البرازيل (5 مرات)" },
    { "questionText": "من هو اللاعب الأرجنتيني الذي حقق كأس العالم 2022؟", "media": "", "answerMedia": "", "answer": "ليونيل ميسي" },
    { "questionText": "ما هي المدة الرسمية لمباراة كرة السلة في NBA؟", "media": "", "answerMedia": "", "answer": "48 دقيقة (4 أشواط، 12 دقيقة لكل شوط)" },
    { "questionText": "ما النادي الإسباني الذي يملك أكبر عدد من بطولات دوري الأبطال؟", "media": "", "answerMedia": "", "answer": "ريال مدريد" },
    { "questionText": "في أي رياضة يُستخدم مصطلح (Love) بمعنى (صفر)؟", "media": "", "answerMedia": "", "answer": "التنس الأرضي" },
    { "questionText": "من هو الملقب بـ (الظاهرة) في عالم كرة القدم؟", "media": "", "answerMedia": "", "answer": "رونالدو البرازيلي" },
    { "questionText": "كم يبلغ طول ملعب كرة القدم الدولي المعتمد تقريباً؟", "media": "", "answerMedia": "", "answer": "من 100 إلى 110 متر" },
    { "questionText": "من هو العداء الجامايكي الملقب بـ (أسرع رجل في العالم)؟", "media": "", "answerMedia": "", "answer": "يوسين بولت" },

    // 🎭 ولا كلمة (تمثيل/بدون كلام) - يتم إلغاؤها إذا تم تفعيل الخيار من الإعدادات
    {
        "questionText": "ولا كلمة (واحد يصور الباركود)",
        "media": "<img src=\"https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=%D9%8A%D8%BA%D8%B1%D9%82%20%D9%81%D9%8A%20%D8%B4%D8%A8%D8%B1%20%D9%85%D8%A7%D8%A1\" alt=\"يغرق في شبر ماء\" />",
        "answerMedia": "",
        "answer": "يغرق في شبر ماء"
    },
    {
        "questionText": "ولا كلمة (واحد يصور الباركود)",
        "media": "<img src=\"https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=%D9%8A%D8%A8%D9%8A%D8%B9%20%D8%A7%D9%84%D9%85%D8%A7%D8%A1%20%D9%81%D9%8A%20%D8%AD%D8%A7%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B3%D9%82%D8%A7%D9%8A%D9%8A%D9%86\" alt=\"يبيع الماء في حارة السقايين\" />",
        "answerMedia": "",
        "answer": "يبيع الماء في حارة السقايين"
    },
    {
        "questionText": "ولا كلمة (واحد يصور الباركود)",
        "media": "<img src=\"https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=%D8%A7%D9%84%D8%A8%D8%A7%D8%A8%20%D8%A7%D9%84%D9%84%D9%8A%20%D9%8A%D8%AC%D9%8A%D9%83%20%D9%85%D9%86%D9%87%20%D8%B1%D9%8A%D8%AD...\" alt=\"الباب اللي يجيك منه ريح\" />",
        "answerMedia": "",
        "answer": "الباب اللي يجيك منه ريح سده واستريح"
    },
    {
        "questionText": "ولا كلمة (واحد يصور الباركود)",
        "media": "<img src=\"https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=%D8%A8%D8%BA%D9%89%20%D9%8A%D9%83%D8%AD%D9%84%D9%87%D8%A7%20%D8%B9%D9%85%D8%A7%D9%87%D8%A7\" alt=\"بغى يكحلها عماها\" />",
        "answerMedia": "",
        "answer": "بغى يكحلها عماها"
    },
    {
        "questionText": "ولا كلمة (واحد يصور الباركود)",
        "media": "<img src=\"https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=%D8%A7%D9%84%D9%84%D9%8A%20%D8%A7%D9%8A%D8%AF%D9%87%20%D9%81%D9%8A%20%D8%A7%D9%84%D9%85%D8%A7%D8%A1%20%D9%85%D9%88%20%D9%85%D8%AB%D9%84%20%D8%A7%D9%84%D9%84%D9%8A%20%D8%A7%D9%8A%D8%AF%D9%87%20%D9%81%D9%8A%20%D8%A7%D9%84%D9%86%D8%A7%D8%B1\" alt=\"اللي ايده فالماي مو مثل اللي فالنار\" />",
        "answerMedia": "",
        "answer": "اللي ايده في الماي مو مثل اللي في النار"
    },

    // 🧩 ألغاز وثقافة عامة
    { "questionText": "ما هو الشيء الذي يمشي بلا أرجل ويبكي بلا عيون؟", "media": "", "answerMedia": "", "answer": "السحابة (الغيوم)" },
    { "questionText": "شيء لك، ولكن الناس يستخدمونه أكثر منك، ما هو؟", "media": "", "answerMedia": "", "answer": "اسمك" },
    { "questionText": "أيهما أثقل: كيلو من الحديد أم كيلو من القطن؟", "media": "", "answerMedia": "", "answer": "متساويان" },
    { "questionText": "ما هو الشيء الذي كلما كثر حراسه ضاع؟", "media": "", "answerMedia": "", "answer": "السر" },
    { "questionText": "شهر في السنة الميلادية إذا حذفت أوله أصبح اسم فاكهة؟", "media": "", "answerMedia": "", "answer": "تموز (موز)" },
    { "questionText": "مدينة سعودية تقرأ طردياً وعكسياً بنفس الاسم؟", "media": "", "answerMedia": "", "answer": "العلا" },
    { "questionText": "ما هو العنصر الكيميائي الذي رمزه (O) ؟", "media": "", "answerMedia": "", "answer": "الأكسجين" },
    { "questionText": "كم عدد أسنان الشخص البالغ العادي؟", "media": "", "answerMedia": "", "answer": "32 سن" },

    // ⏱️ تحدي الثلاثين وثواني
    { "questionText": "تحدي الثلاثين: أذكر 5 معادن؟", "media": "", "answerMedia": "", "answer": "ذهب، فضة، حديد، نحاس، ألمنيوم، إلخ" },
    { "questionText": "تحدي الثلاثين: أذكر 5 دول تبدأ بحرف السين؟", "media": "", "answerMedia": "", "answer": "سوريا، سعودية، سودان، سويد، سنغال، سيراليون" },
    { "questionText": "تحدي الثلاثين: عدّد 5 أندية من الدوري الإنجليزي؟", "media": "", "answerMedia": "", "answer": "أرسنال، ليفربول، تشيلسي، السيتي، اليونايتد، إلخ" },
    { "questionText": "تحدي 10 ثواني: أذكر 4 فواكه لونها أحمر؟", "media": "", "answerMedia": "", "answer": "فراولة، تفاح أحمر، رمان، كرز، بطيخ" },
    { "questionText": "تحدي الثلاثين: أذكر 3 من الخلفاء الراشدين؟", "media": "", "answerMedia": "", "answer": "أبو بكر، عمر، عثمان، علي (رضي الله عنهم)" },
    
    // 🌍 عواصم ومعالم
    { "questionText": "ما هي عاصمة إيطاليا؟", "media": "", "answerMedia": "", "answer": "روما" },
    { "questionText": "المدينة التي يقع فيها ساعة بيغ بن؟", "media": "", "answerMedia": "", "answer": "لندن" },
    { "questionText": "أين يقع تمثال الحرية؟", "media": "", "answerMedia": "", "answer": "نيويورك، الولايات المتحدة" },
    { "questionText": "المدينة التي يقع فيها برج خليفة؟", "media": "", "answerMedia": "", "answer": "دبي" },
    { "questionText": "ما هي عاصمة اليابان القديمة قبل طوكيو؟", "media": "", "answerMedia": "", "answer": "كيوتو" },

    // علوم وفضاء
    { "questionText": "كم كوكبا في مجموعتنا الشمسية؟", "media": "", "answerMedia": "", "answer": "8 كواكب" },
    { "questionText": "ما هي سرعة الضوء التقريبية؟", "media": "", "answerMedia": "", "answer": "300 ألف كيلومتر في الثانية" },
    { "questionText": "ما هو الحيوان الثديي الوحيد الذي يستطيع الطيران؟", "media": "", "answerMedia": "", "answer": "الخفاش" },
    { "questionText": "من أي مادة يصنع الزجاج؟", "media": "", "answerMedia": "", "answer": "الرمل (السيليكا)" },

    // أسئلة ختامية منوعة
    { "questionText": "أكمل المثل: من شبّ على شيء...", "media": "", "answerMedia": "", "answer": "شاب عليه" },
    { "questionText": "أكمل المثل: عذره أقبح من...", "media": "", "answerMedia": "", "answer": "ذنبه" },
    { "questionText": "أكمل المثل: رضا الناس غاية...", "media": "", "answerMedia": "", "answer": "لا تدرك" }

];
