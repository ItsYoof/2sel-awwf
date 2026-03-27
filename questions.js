// ملف قاعدة بيانات الأسئلة تم تصديره من صفحة الإدارة
const questionsDB = [
    {
        "questionText": "في أي شهر ولد الإمام الحسين (عليه السلام)؟",
        "media": "",
        "answer": "في شهر شعبان"
    },
    {
        "questionText": "من هي والدة الإمام الحسين (عليه السلام)؟",
        "media": "",
        "answer": "فاطمة الزهراء (عليها السلام)"
    },
    {
        "questionText": "من القائل: تعلّمتُ من الحسين بن علي كيف أكون مظلومًا فأنتصر؟",
        "media": "",
        "answer": "غاندي"
    },
    {
        "questionText": "في أي يوم تعادل زيارة الإمام الحسين (عليه السلام) ألف حجّة وألف عمرة مبرورات وألف غزوة مع نبي مرسل أو إمام عادل؟",
        "media": "",
        "answer": "يوم عرفة"
    },
    {
        "questionText": "ما هي أصول الدين؟",
        "media": "",
        "answer": "التوحيد، العدل، النبوة، الإمامة، المعاد."
    },
    {
        "questionText": "أول من استشهد من الهاشميين في معركة كربلاء؟",
        "media": "",
        "answer": "علي الأكبر (عليه السلام)."
    },
    {
        "questionText": "ما هو السر في مرض الإمام زين العابدين (عليه السلام) ؟",
        "media": "",
        "answer": "حتى لا يقتل، ولا تخلو الأرض من حجة الله تعالى لأنه استلم الإمامة بعد أبيه عليهما السلام."
    },
    {
        "questionText": "ما مقدار وقت فضيلة صلاة المغرب؟",
        "media": "",
        "answer": "يستمر وقت الفضيلة إلى زوال الحمرة المغربية."
    },
    {
        "questionText": "كيف نعرف وقت آذان الظهر إذا كانت هناك غيوم كثيفة؟",
        "media": "",
        "answer": "وقت أذان الظهر هو منتصف الوقت من طلوع الشمس إلى غروبها."
    },
    {
        "questionText": "ما هي أيام التشريق؟",
        "media": "",
        "answer": "هي أيام (11 و12 و13) من شهر ذي الحجة."
    },
    {
        "questionText": "ما العمل الذي كان يحبه أمير المؤمنين عليه السلام؟",
        "media": "",
        "answer": "كان شغوفاً بالزراعة واستصلاح الأراضي وتشجيرها"
    },
    {
        "questionText": "هل صلاة العيد واجبة أم مستحبة؟",
        "media": "",
        "answer": "واجبة في زمن حضور الإمام ومستحبة في عصر الغيبة \nالمصدر: منهاج الصالحين ج1,ص344،الخاتمة"
    },
    {
        "questionText": "إذا دار الأمر بين القيام الركني والقيام غير الركني فأيهما يقدم؟",
        "media": "",
        "answer": "يقدم القيام الركني ، فلو دار الأمر بين أن يقوم حال تكبيرة الإحرام أو حال القراءة فيقدم القيام حال التكبير \nالمصدر: الفقه الميسر، العبادات ج3 ص 191"
    },
    {
        "questionText": "هناك أحكام شرعية تناط موضوعاتها بالعرف أو بالصدق العرفي، فما هي الطرق التي يمكن للمكلّف اتّباعها للتوصّل إلى ذلك ؟",
        "media": "",
        "answer": "الطريق هو الرجوع إلى العرف، ولكن العبرة بالنظر الدقيق العرفي لا المسامحي"
    },
    {
        "questionText": "ما هي الدولة المحددة باللون الأحمر على الخريطة؟",
        "media": "https://api.threethirteen.app/storage/question/questions_69a208db1bb6c.jpeg",
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
        "answer": "لانتقامه من أعداء آل محمد (ص)"
    },
    {
        "questionText": "من هو العالم الشيعي الذي بعث له الإمام المهدي (عج) كتاب وكان في مطلع الكتاب : “.. للأخ السديد، والولي الرشيد ..”",
        "media": "",
        "answer": "الشيخ محمد بن محمد بن النعمان المفيد"
    },
    {
        "questionText": "املأ ؛ روي عن الإمام المهدي (عج) أنه قال : “.. إنّا غير——— لمراعاتكم ولا ناسين——— ..”",
        "media": "",
        "answer": "مهملين، لذكركم"
    },
    {
        "questionText": "راية من التي ينشرها الإمام المهدي (عج) عند القيام ؟",
        "media": "",
        "answer": "راية النبي محمد (ص)"
    },
    {
        "questionText": "من أول من يبايع الإمام المهدي (عج) من الملائكة ؟",
        "media": "",
        "answer": "جبرائيل"
    },
    {
        "questionText": "من هي المرأة المعروفة بخِيَرَةِ الإِمَاءِ ؟",
        "media": "",
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
        "answer": "فرنسا 🇫🇷"
    },
    {
        "questionText": "حرف الألف - أول من جمع القرآن الكريم بين لوحين؟",
        "media": "",
        "answer": "أبو بكر الصديق"
    },
    {
        "questionText": "حرف الألف - غزوة جرح فيها رسول الله صلى الله عليه وسلم وكسرت رباعيته وأشيع فيها أنه قتل؟",
        "media": "",
        "answer": "أحد"
    },
    {
        "questionText": "حرف الألف - لقب أطلقه أهل مكة على محمد رسول الله قبل الإسلام؟",
        "media": "",
        "answer": "الأمين"
    },
    {
        "questionText": "حرف الباء - سورة من سور القرآن الكريم يطلق عليها سنام القرآن؟",
        "media": "",
        "answer": "البقرة"
    },
    {
        "questionText": "حرف التاء - سورة في القرآن الكريم ابتدأت باسم ثمرتين؟",
        "media": "",
        "answer": "التين"
    },
    {
        "questionText": "حرف الجيم - ذروة سنام الإسلام؟",
        "media": "",
        "answer": "الجهاد في سبيل الله"
    },
    {
        "questionText": "حرف الجيم - مدينة عربية فيها أعلى نافورة في العالم؟",
        "media": "",
        "answer": "جــــدة"
    },
    {
        "questionText": "حرف الحاء - سورة في القرآن الكريم ورد فيها ذكر الذباب؟",
        "media": "",
        "answer": "الحج"
    },
    {
        "questionText": "حرف الخاء - مدينة بالسعودية بالقرب من الدمام؟",
        "media": "",
        "answer": "الخبر"
    },
    {
        "questionText": "حرف الخاء - من القائل: (فلا نامت أعين الجبناء)؟",
        "media": "",
        "answer": "خالد بن الوليد"
    },
    {
        "questionText": "حرف الدال - ما اسم أول وحدة عملة في تاريخ الإسلام؟",
        "media": "",
        "answer": "الدينار"
    },
    {
        "questionText": "حرف الذال - ما ميقات أهل العراق؟",
        "media": "",
        "answer": "ذات عرق"
    },
    {
        "questionText": "حرف الذال - معركة قادها خالد بن الوليد ضد الفرس؟",
        "media": "",
        "answer": "ذات السلاسل"
    },
    {
        "questionText": "حرف الراء - الباب الذي يدخل منه الصائمون يوم القيامة؟",
        "media": "",
        "answer": "الريان"
    },
    {
        "questionText": "حرف الزاي - من أول من سل سيفاً في الإسلام؟",
        "media": "",
        "answer": "الزبير بن العوام"
    },
    {
        "questionText": "حرف السين - كم عدد أحزاب القرآن؟",
        "media": "",
        "answer": "ستون حزباً"
    },
    {
        "questionText": "حرف السين - من قائد معركة القادسية؟",
        "media": "",
        "answer": "سعد بن أبي وقاص"
    },
    {
        "questionText": "حرف الشين - سورة تسمى الجامعة؟",
        "media": "",
        "answer": "الشعراء"
    },
    {
        "questionText": "حرف الصاد - ما هي الخمس التي لا سادس لها؟",
        "media": "",
        "answer": "الصلوات"
    },
    {
        "questionText": "حرف الطاء - المدينة التي رحل إليها النبي قبل المدينة؟",
        "media": "",
        "answer": "الطائف"
    },
    {
        "questionText": "حرف الطاء - جبل أقسم الله تعالى به في القرآن؟",
        "media": "",
        "answer": "الطور"
    },
    {
        "questionText": "حرف الظاء - يدخل فيه المتحابون في الله يوم القيامة؟",
        "media": "",
        "answer": "ظل عرش الرحمن"
    },
    {
        "questionText": "حرف العين - من أول فدائي في الإسلام؟",
        "media": "",
        "answer": "علي بن أبي طالب"
    },
    {
        "questionText": "حرف الغين - إفاضة الماء على البدن كله مع النية؟",
        "media": "",
        "answer": "الغسل"
    },
    {
        "questionText": "حرف الفاء - أعلى درجات الجنة؟",
        "media": "",
        "answer": "الفردوس"
    },
    {
        "questionText": "حرف القاف - أول مسجد في الإسلام؟",
        "media": "",
        "answer": "قباء"
    },
    {
        "questionText": "حرف القاف - ما اسم ناقة النبي صلى الله عليه وسلم؟",
        "media": "",
        "answer": "القصواء"
    },
    {
        "questionText": "حرف الكاف - هو لقب موسى عليه السلام؟",
        "media": "",
        "answer": "كليم الله"
    },
    {
        "questionText": "حرف الميم - أين تقع رابطة العالم الإسلامي؟",
        "media": "",
        "answer": "مكة المكرمة"
    },
    {
        "questionText": "حرف النون - ما هي الحشرة التي تكلمت في القرآن وتبسم سليمان من قولها؟",
        "media": "",
        "answer": "النملة"
    },
    {
        "questionText": "حرف الميم - غشاء الجنين الذي يخرج معه عند الولادة؟",
        "media": "",
        "answer": "المشيمة"
    },
    {
        "questionText": "حرف النون - ما هي الحطمة؟",
        "media": "",
        "answer": "النار"
    },
    {
        "questionText": "حرف النون - أداة استعملها النصارى قديماً للإعلان عن صلاتهم؟",
        "media": "",
        "answer": "الناقوس"
    },
    {
        "questionText": "تحدي :\nكم تقدر تعدد دول حرف الميم؟",
        "media": "",
        "answerMedia": "",
        "answer": "هم 13 دولة اذا قال اكثر كذاب"
    },
    {
        "questionText": "تحدي :\nكم تقدر تعدد من الأنبياء ؟",
        "media": "",
        "answerMedia": "",
        "answer": "مين جابها ؟ عدد الانبياء مذكورين 25 نبيًا."
    },
    {
        "questionText": "اسرع واحد \nيحول مبلغ 1ريال لشخص من فريق الخصم",
        "media": "",
        "answerMedia": "",
        "answer": "ورنا الايصال"
    },
    {
        "questionText": "ولا كلمة (واحد يصور ياركود)",
        "media": "<a href='https://me-qr.com' border='0' style='cursor:pointer;display:block'><img src='https://storage3.me-qr.com/qr/325811019.png?v=1774615216' alt='Create qr code for free'></a><a href='https://me-qr.com' border='0' style='cursor:default;display:none'>Create qr code for free</a>",
        "answerMedia": "   ",
        "answer": "القرد في عين أمه غزال."
    },
    {
        "questionText": "ولا كلمة (واحد يصور ياركود)",
        "media": "<a href='https://me-qr.com' border='0' style='cursor:pointer;display:block'><img src='https://storage3.me-qr.com/qr/325811799.png?v=1774615294' alt='Create qr code for free'></a><a href='https://me-qr.com' border='0' style='cursor:default;display:none'>Create qr code for free</a>",
        "answerMedia": " ",
        "answer": "اللي بيته من زجاج لا يرمي الناس بحجر"
    },
    {
        "questionText": "ولا كلمة (واحد يصور ياركود)\n",
        "media": "<a href='https://me-qr.com' border='0' style='cursor:pointer;display:block'><img src='https://storage3.me-qr.com/qr/325811799.png?v=1774615337' alt='Create qr code for free'></a><a href='https://me-qr.com' border='0' style='cursor:default;display:none'>Create qr code for free</a>",
        "answerMedia": " ",
        "answer": "طباخ السم بياكله."
    },
    {
        "questionText": "ولا كلمة (واحد يصور ياركود)\n",
        "media": "<a href='https://me-qr.com' border='0' style='cursor:pointer;display:block'><img src='https://storage3.me-qr.com/qr/325811799.png?v=1774615401' alt='Create qr code for free'></a><a href='https://me-qr.com' border='0' style='cursor:default;display:none'>Create qr code for free</a>",
        "answerMedia": "      ",
        "answer": "ساعة رملية"
    },
    {
        "questionText": "من هو الملقب بـ (الساجد) من الأئمة عليهم السلام؟",
        "media": "",
        "answer": "الإمام زين العابدين عليه السلام"
    },
    {
        "questionText": "ما هي أطول سورة في القرآن الكريم؟",
        "media": "",
        "answer": "سورة البقرة"
    },
    {
        "questionText": "في أي مدينة يقع مرقد الإمام الرضا عليه السلام؟",
        "media": "",
        "answer": "مشهد (إيران)"
    },
    {
        "questionText": "ما هي عاصمة اليابان؟",
        "media": "",
        "answer": "طوكيو"
    },
    {
        "questionText": "ما هي الدولة الملقبة بـ (بلد المليون شهيد)؟",
        "media": "",
        "answer": "الجزائر"
    },
    {
        "questionText": "اين يقع برج بيزا المائل؟",
        "media": "",
        "answer": "إيطاليا"
    },
    {
        "questionText": "من هو اللاعب الذي لقب بـ (الظاهرة)؟",
        "media": "",
        "answer": "رونالدو البرازيلي"
    },
    {
        "questionText": "أي منتخب فاز بكأس العالم 2022؟",
        "media": "",
        "answer": "الأرجنتين"
    },
    {
        "questionText": "ما هو النادي الذي يلقب بـ (الملكي)؟",
        "media": "",
        "answer": "ريال مدريد"
    },
    {
        "questionText": "مثل شعبي: ما طار طير وارتفع إلا كما طار...؟",
        "media": "",
        "answer": "وقع"
    },
    {
        "questionText": "تحدي: اذكر 5 أنواع من الفواكه تبدأ بحرف الميم خلال 10 ثواني.",
        "media": "",
        "answer": "موز، مانجو، مشمش، مندرين (أو أي فاكهة تبدأ بالميم)"
    },
    {
        "questionText": "ما هو أسرع كائن حي على وجه الأرض؟",
        "media": "",
        "answer": "الفهد الصياد"
    },
    {
        "questionText": "من مخترع المصباح الكهربائي؟",
        "media": "",
        "answer": "توماس إديسون"
    },
    {
        "questionText": "ولا كلمة (واحد يصور ياركود)",
        "media": "<a href='https://me-qr.com' border='0' style='cursor:pointer;display:block'><img src='https://storage3.me-qr.com/qr/325811799.png?v=1774615294' alt='Create qr code for free'></a>",
        "answer": "على قد لحافك مد رجليك"
    }
];
