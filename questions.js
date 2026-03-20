// ملف قاعدة بيانات الأسئلة
// يمكنك وضع جميع أسئلتك هنا بشكل عشوائي دون ترقيم أو ربط بخلية.
// اللعبة ستقوم تلقائياً بتوزيع هذه الأسئلة على الخلايا الـ 25 عشوائياً بدون أي تكرار.

const questionsDB = [
    {
        questionText: "في أي شهر ولد الإمام الحسين (عليه السلام)؟",
        media: "",
        answer: "في شهر شعبان"
    },
    {
        questionText: "من هي والدة الإمام الحسين (عليه السلام)؟",
        media: "",
        answer: "فاطمة الزهراء (عليها السلام)"
    },
    {
        questionText: "من القائل: تعلّمتُ من الحسين بن علي كيف أكون مظلومًا فأنتصر؟",
        media: "",
        answer: "غاندي"
    },
    {
        questionText: "في أي يوم تعادل زيارة الإمام الحسين (عليه السلام) ألف حجّة وألف عمرة مبرورات وألف غزوة مع نبي مرسل أو إمام عادل؟",
        media: "",
        answer: "يوم عرفة"
    },
    {
        questionText: "ما هي أصول الدين؟",
        media: "",
        answer: "التوحيد، العدل، النبوة، الإمامة، المعاد."
    },
    {
        questionText: "أول من استشهد من الهاشميين في معركة كربلاء؟",
        media: "",
        answer: "علي الأكبر (عليه السلام)."
    },
    {
        questionText: "ما هو السر في مرض الإمام زين العابدين (عليه السلام) ؟",
        media: "",
        answer: "حتى لا يقتل، ولا تخلو الأرض من حجة الله تعالى لأنه استلم الإمامة بعد أبيه عليهما السلام."
    },
    {
        questionText: "ما مقدار وقت فضيلة صلاة المغرب؟",
        media: "",
        answer: "يستمر وقت الفضيلة إلى زوال الحمرة المغربية."
    },
    {
        questionText: "كيف نعرف وقت آذان الظهر إذا كانت هناك غيوم كثيفة؟",
        media: "",
        answer: "وقت أذان الظهر هو منتصف الوقت من طلوع الشمس إلى غروبها."
    },
    {
        questionText: "ما هي أيام التشريق؟",
        media: "",
        answer: "هي أيام (11 و12 و13) من شهر ذي الحجة."
    },
    {
        questionText: "ما العمل الذي كان يحبه أمير المؤمنين عليه السلام؟",
        media: "",
        answer: "كان شغوفاً بالزراعة واستصلاح الأراضي وتشجيرها"
    },
    {
        questionText: "هل صلاة العيد واجبة أم مستحبة؟",
        media: "",
        answer: "واجبة في زمن حضور الإمام ومستحبة في عصر الغيبة \nالمصدر: منهاج الصالحين ج1,ص344،الخاتمة"
    },
    {
        questionText: "إذا دار الأمر بين القيام الركني والقيام غير الركني فأيهما يقدم؟",
        media: "",
        answer: "يقدم القيام الركني ، فلو دار الأمر بين أن يقوم حال تكبيرة الإحرام أو حال القراءة فيقدم القيام حال التكبير \nالمصدر: الفقه الميسر، العبادات ج3 ص 191"
    },
    {
        questionText: "هناك أحكام شرعية تناط موضوعاتها بالعرف أو بالصدق العرفي، فما هي الطرق التي يمكن للمكلّف اتّباعها للتوصّل إلى ذلك ؟",
        media: "",
        answer: "الطريق هو الرجوع إلى العرف، ولكن العبرة بالنظر الدقيق العرفي لا المسامحي"
    },
    {
        questionText: "ما هي الدولة المحددة باللون الأحمر على الخريطة؟",
        media: "https://api.threethirteen.app/storage/question/questions_69a208db1bb6c.jpeg",
        answer: "باكستان"
    },
    {
        questionText: "ما هي الدولة المحددة باللون الأحمر على الخريطة؟",
        media: "https://api.threethirteen.app/storage/question/questions_69a212abe3f84.jpeg",
        answerMedia: "https://api.threethirteen.app/storage/question/questions_69a212abe4564.webp",
        answer: "فلندا"
    },
    {
        questionText: "ما هي الدولة المحددة باللون الأحمر على الخريطة؟",
        media: "https://api.threethirteen.app/storage/question/questions_69a215c3f29ea.jpeg",
        answerMedia: "https://api.threethirteen.app/storage/question/questions_69a2142a1713e.png",
        answer: "جزر سليمان"
    },
    {
        questionText: "ما هي الدولة المحددة باللون الأحمر على الخريطة؟",
        media: "https://api.threethirteen.app/storage/question/questions_69a22887cbe44.jpeg",
        answerMedia: "https://api.threethirteen.app/storage/question/questions_69a22887cc324.png",
        answer: "سريلانكا"
    },
    {
        questionText: "ما هي الدولة المحددة باللون الأحمر على الخريطة؟",
        media: "https://api.threethirteen.app/storage/question/questions_69a21b03d7477.jpeg",
        answerMedia: "https://api.threethirteen.app/storage/question/questions_69a21b03d75ce.png",
        answer: "نيجيريا"
    },
    {
        questionText: "ما هي الدولة المحددة باللون الأحمر على الخريطة؟",
        media: "https://api.threethirteen.app/storage/question/questions_69a21b03da753.jpeg",
        answerMedia: "https://api.threethirteen.app/storage/question/questions_69a21b03da920.png",
        answer: "أفريقيا الوسطى"
    },
    {
        questionText: "ما هي ثاني أكبر دولة العالم ؟",
        media: "",
        answerMedia: "https://api.threethirteen.app/storage/question_answer/questions_6909e3fd04a11.jpg",
        answer: "كندا"
    },
    {
        questionText: "في أي مدينة يقع برج إيفل ؟",
        media: "https://api.threethirteen.app/storage/question/questions_6905d766a2d6c.jpg",
        answerMedia: "https://api.threethirteen.app/storage/question/questions_6905d766a2d6c.jpg",
        answer: "باريس"
    },
    {
        questionText: "هذه صورة لأي مدينة عربية ؟",
        media: "https://api.threethirteen.app/storage/question/questions_6902b78fdea01.jpg",
        answerMedia: "https://api.threethirteen.app/storage/question/questions_6902b78fdea01.jpg",
        answer: "الإسكندرية في مصر"
    },
    {
        questionText: "ما هو اسم هذا المبنى في عمان ؟",
        media: "https://api.threethirteen.app/storage/question/questions_69073a562b657.jpg",
        answerMedia: "https://api.threethirteen.app/storage/question_answer/questions_69073a562b84d.jpg",
        answer: "مسجد السلطان قابوس الكبير"
    },
    {
        questionText: "ما اسم هذا المعلم في ماليزيا ؟",
        media: "https://api.threethirteen.app/storage/question/questions_6905d766a961f.jpg",
        answerMedia: "https://api.threethirteen.app/storage/question/questions_6905d766a961f.jpg",
        answer: "برجا بتروناس التوأم"
    },
    {
        questionText: "من أي دولة جاء اختراع المنطاد الهوائي ؟",
        media: "https://api.threethirteen.app/storage/question/questions_690a021294419.jpg",
        answerMedia: "https://api.threethirteen.app/storage/question_answer/questions_690a0212945b8.jpg",
        answer: "فرنسا"
    },
    {
        questionText: "لماذا لقب الإمام المهدي (عج) بالمنتقم؟",
        media: "",
        answer: "لانتقامه من أعداء آل محمد (ص)"
    },
    {
        questionText: "من هو العالم الشيعي الذي بعث له الإمام المهدي (عج) كتاب وكان في مطلع الكتاب : “.. للأخ السديد، والولي الرشيد ..”",
        media: "",
        answer: "الشيخ محمد بن محمد بن النعمان المفيد"
    },
    {
        questionText: "املأ ؛ روي عن الإمام المهدي (عج) أنه قال : “.. إنّا غير——— لمراعاتكم ولا ناسين——— ..”",
        media: "",
        answer: "مهملين، لذكركم"
    },
    {
        questionText: "راية من التي ينشرها الإمام المهدي (عج) عند القيام ؟",
        media: "",
        answer: "راية النبي محمد (ص)"
    },
    {
        questionText: "من أول من يبايع الإمام المهدي (عج) من الملائكة ؟",
        media: "",
        answer: "جبرائيل"
    },
    {
        questionText: "من هي المرأة المعروفة بخِيَرَةِ الإِمَاءِ ؟",
        media: "",
        answer: "السيدة نرجس"
    },
    {
        questionText: "خمن اللاعب من خلال مسيرته :",
        media: "https://i.top4top.io/p_373145s5u1.jpeg",
        answerMedia: "https://j.top4top.io/p_3731rr5ke2.jpeg",
        answer: "الإجابة في الصورة"
    },
    {
        questionText: "خمن اللاعب من خلال مسيرته :",
        media: "https://i.top4top.io/p_3731lqn8y1.jpeg",
        answerMedia: "https://j.top4top.io/p_3731g4olp2.jpeg",
        answer: "الإجابة في الصورة"
    },
    {
        questionText: "خمن اللاعب من خلال مسيرته :",
        media: "https://e.top4top.io/p_3731q26ze1.jpeg",
        answerMedia: "https://f.top4top.io/p_3731iqc0n2.jpeg",
        answer: "الإجابة في الصورة"
    },
    {
        questionText: "خمن اللاعب من خلال مسيرته :",
        media: "https://i.top4top.io/p_3731bbkvz3.jpeg",
        answerMedia: "https://j.top4top.io/p_3731d9x1c4.jpeg",
        answer: "الإجابة في الصورة"
    },
    {
        questionText: "خمن اللاعب من خلال مسيرته :",
        media: "https://e.top4top.io/p_3731k7h8h1.jpeg",
        answerMedia: "https://f.top4top.io/p_3731q9cpi2.jpeg",
        answer: "الإجابة في الصورة"
    },
    {
        questionText: "خمن المنتخب من خلال انديه لاعبينه 2025",
        media: "https://fastupload.live/do.php?img=5404",
        answerMedia: "https://fastupload.live/do.php?img=5405",
        answer: "الإجابة في الصورة"
    },
    {
        questionText: "خمن المنتخب من خلال انديه لاعبينه 2025",
        media: "https://fastupload.live/do.php?img=5406",
        answerMedia: "https://fastupload.live/do.php?img=5407",
        answer: "الإجابة في الصورة"
    },
    {
        questionText: "خمن المنتخب من خلال انديه لاعبينه 2025",
        media: "https://fastupload.live/do.php?img=5408",
        answerMedia: "https://fastupload.live/do.php?img=5409",
        answer: "الإجابة في الصورة"
    },
    {
        questionText: "خمن المنتخب من خلال انديه لاعبينه 2025",
        media: "https://fastupload.live/do.php?img=5410",
        answerMedia: "https://fastupload.live/do.php?img=5411",
        answer: "الإجابة في الصورة"
    },
    {
        questionText: "اين وقعت حرب فردان التي قامت سنة 1916 ميلادي",
        media: "",
        answer: "فرنسا 🇫🇷"
    },
    {
        questionText: "حرف الألف - سورة في القرآن الكريم يطلق عليها أخت الطويلتين؟",
        media: "",
        answer: "الأعراف"
    },
    {
        questionText: "حرف الألف - غزوة جرح فيها رسول الله صلى الله عليه وسلم وكسرت رباعيته وأشيع فيها أنه قتل؟",
        media: "",
        answer: "أحد"
    },
    {
        questionText: "حرف الألف - أول من جمع القرآن الكريم بين لوحين؟",
        media: "",
        answer: "أبو بكر الصديق"
    },
    {
        questionText: "حرف الألف - كنية تكنى بها أسد الله حمزة بن عبد المطلب عم رسول الله؟",
        media: "",
        answer: "أبو عمارة"
    },
    {
        questionText: "حرف الألف - من القائل: (ما أحد يحمل محبرةً وإلا للشافعي عليه منّةٌ)؟",
        media: "",
        answer: "أحمد بن حنبل"
    },
    {
        questionText: "حرف الألف - يطلق على صوت المرجل؟",
        media: "",
        answer: "أزيز"
    },
    {
        questionText: "حرف الألف - لقب أطلقه أهل مكة على محمد رسول الله قبل الإسلام؟",
        media: "",
        answer: "الأمين"
    },
    {
        questionText: "حرف الألف - صحابي جليل فرض له عمر بن الخطاب أكثر مما فرض لابنه؟",
        media: "",
        answer: "أسامة بن زيد"
    },
    {
        questionText: "حرف الألف - الصحابية التي لقبت بـ (مهاجرة الهجرتين)؟",
        media: "",
        answer: "أسماء بنت عميس"
    },
    {
        questionText: "حرف الألف - حيوان يطلق عليه (أسامة)؟",
        media: "",
        answer: "الأسد"
    },
    {
        questionText: "حرف الألف - شاعر جاهلي لقب قبل موته بـ (ذي القروح)؟",
        media: "",
        answer: "امرؤ القيس"
    },
    {
        questionText: "حرف الألف - من القائل: فيـا ليـت الشباب يعـود يومـاً فأخـبـره بمــا فعــل المشــيـب؟",
        media: "",
        answer: "أبو العتاهية"
    },
    {
        questionText: "حرف الألف - مؤلف كتاب (لسان العرب)؟",
        media: "",
        answer: "ابن منظور"
    },
    {
        questionText: "حرف الألف - فرقة من فرق النصارى؟",
        media: "",
        answer: "الأرثوذكس"
    },
    {
        questionText: "حرف الألف - وكالة الأنباء التركية؟",
        media: "",
        answer: "الأناضول"
    },
    {
        questionText: "حرف الباء - سورة من سور القرآن الكريم يطلق عليها سنام القرآن؟",
        media: "",
        answer: "البقرة"
    },
    {
        questionText: "حرف الباء - عالم مسلم هو أول من اكتشف أن سرعة الضوء أكبر من سرعة الصوت؟",
        media: "",
        answer: "البيروني"
    },
    {
        questionText: "حرف الباء - الحرب التي حدثت في الجاهلية واستمرت قرابة الأربعين عاماً بين بكر وتغلب؟",
        media: "",
        answer: "البسوس"
    },
    {
        questionText: "حرف الباء - من بحور الشعر العربي؟",
        media: "",
        answer: "البسيط"
    },
    {
        questionText: "حرف الباء - الشاعر العباسي الذي مات تحت ضرب السياط؟",
        media: "",
        answer: "بشار بن برد"
    },
    {
        questionText: "حرف الباء - يطلق على الولد الأول؟",
        media: "",
        answer: "البِكر"
    },
    {
        questionText: "حرف الباء - مقياس أو وحدة طول تساوي جزءاً من اثني عشر جزءاً من القدم؟",
        media: "",
        answer: "البوصة"
    },
    {
        questionText: "حرف الباء - شاعر عباسي اسمه أبو عبادة الوليد بن عبيد الله الطائي، فما لقبه؟",
        media: "",
        answer: "البحتري"
    },
    {
        questionText: "حرف الباء - عملة إثيوبيا؟",
        media: "",
        answer: "بير"
    },
    {
        questionText: "حرف الباء - سلسلة جبال تقع بين فرنسا وأسبانيا؟",
        media: "",
        answer: "البرانس"
    },
    {
        questionText: "حرف الباء - ما عاصمة كولومبيا؟",
        media: "",
        answer: "بوجوتا"
    },
    {
        questionText: "حرف الباء - اسم يطلق على نوع من الصقور؟",
        media: "",
        answer: "الباز"
    },
    {
        questionText: "حرف الباء - أول طبيب أجرى عملية زراعة قلب؟",
        media: "",
        answer: "برنارد"
    },
    {
        questionText: "حرف الباء - مدينة أوروبية أقيمت فيها أول دورة أولمبية عام 1900 م؟",
        media: "",
        answer: "باريس"
    },
    {
        questionText: "حرف الباء - لقب أطلق على السيدة مريم أم نبي الله عيسى عليه السلام؟",
        media: "",
        answer: "البتول"
    },
    {
        questionText: "حرف التاء - سورة في القرآن الكريم ابتدأت باسم ثمرتين؟",
        media: "",
        answer: "التين"
    },
    {
        questionText: "حرف التاء - صحابي جليل يكنى بأبي رقية كان نصرانياً فأسلم عام 9 هـ؟",
        media: "",
        answer: "تميم بن أوس الداري"
    },
    {
        questionText: "حرف التاء - أعلى هضبة في العالم؟",
        media: "",
        answer: "التبت"
    },
    {
        questionText: "حرف التاء - عاصمة الصين الوطنية؟",
        media: "",
        answer: "تايبيه"
    },
    {
        questionText: "حرف التاء - أكمل هذه العبارة المشهورة (تاج المروءة .........)؟",
        media: "",
        answer: "التواضع"
    },
    {
        questionText: "حرف التاء - يطلق على الفرويدية: مدرسة .............؟",
        media: "",
        answer: "التحليل النفسي"
    },
    {
        questionText: "حرف التاء - آية من آيات الملك منحها الله سبحانه وتعالى لطالوت؟",
        media: "",
        answer: "تابوت"
    },
    {
        questionText: "حرف التاء - نرويجي هو أول سكرتير عام لهيئة الأمم المتحدة؟",
        media: "",
        answer: "ترينغ"
    },
    {
        questionText: "حرف التاء - مكوك فضائي أمريكي انفجر بعد انطلاقه عام 1986 م؟",
        media: "",
        answer: "تشالنجر"
    },
    {
        questionText: "حرف التاء - أسرع المخلوقات البحرية؟",
        media: "",
        answer: "التونة"
    },
    {
        questionText: "حرف التاء - مدينة يمنية مشهورة من أشهر معالمها جبل صبر؟",
        media: "",
        answer: "تعز"
    },
    {
        questionText: "حرف التاء - يستخدم في رؤية الأجسام البعيدة جداً؟",
        media: "",
        answer: "تلسكوب"
    },
    {
        questionText: "حرف التاء - آلة حربية كانت تستخدم في الدفاع عن المدن قديماً؟",
        media: "",
        answer: "ترس"
    },
    {
        questionText: "حرف التاء - لقب الشاعر ثابت بن جابر الذي اشتهر بلقبه؟",
        media: "",
        answer: "تأبط شراً"
    },
    {
        questionText: "حرف التاء - مقبرة هندية مبنية من الرخام الأبيض من عجائب الدنيا السبع؟",
        media: "",
        answer: "تاج محل"
    },
    {
        questionText: "حرف الثاء - صحابي جليل بايع الرسول على أن لا يسأل الناس شيئاً؟",
        media: "",
        answer: "ثوبان مولى رسول الله"
    },
    {
        questionText: "حرف الثاء - يطْلَق على المرأة التي سبق لها الزواج؟",
        media: "",
        answer: "ثيب"
    },
    {
        questionText: "حرف الثاء - مؤلف كتاب فقه اللغة؟",
        media: "",
        answer: "الثعالبي"
    },
    {
        questionText: "حرف الثاء - الغاز الذي يستعمل في إطفاء الحرائق؟",
        media: "",
        answer: "ثاني أكسيد الكربون"
    },
    {
        questionText: "حرف الثاء - أول من دخل الكعبة ملبياً؟",
        media: "",
        answer: "ثمامة بن آثال"
    },
    {
        questionText: "حرف الثاء - مضاد حيوي طبيعي يستخدم في الطعام والدواء؟",
        media: "",
        answer: "الثوم"
    },
    {
        questionText: "حرف الثاء - من خطباء المسلمين الأوائل لقب بخطيب الرسول؟",
        media: "",
        answer: "ثابت بن قيس"
    },
    {
        questionText: "حرف الثاء - صاحب كتاب الذخيرة في الطب؟",
        media: "",
        answer: "ثابت بن قرة"
    },
    {
        questionText: "حرف الثاء - صفة من أهم صفات الشجاعة؟",
        media: "",
        answer: "الثبات"
    },
    {
        questionText: "حرف الثاء - يطلق على سد مشهور بالعراق؟",
        media: "",
        answer: "الثرثار"
    },
    {
        questionText: "حرف الثاء - طعام يتكون من خبز ومرق؟",
        media: "",
        answer: "ثريد"
    },
    {
        questionText: "حرف الثاء - أول من أرضعت رسول الله صلى الله عليه وسلم؟",
        media: "",
        answer: "ثويبة مولاة أبي لهب"
    },
    {
        questionText: "حرف الثاء - يطلق على مجموعة النجوم المتلاصقة؟",
        media: "",
        answer: "الثريا"
    },
    {
        questionText: "حرف الثاء - في اللغة بمعنى الهلاك والخسران؟",
        media: "",
        answer: "الثبور"
    },
    {
        questionText: "حرف الثاء - من المظاهر الفلكية في الكون التي حيرت العلماء؟",
        media: "",
        answer: "الثقوب السوداء"
    },
    {
        questionText: "حرف الجيم - نقيب المهاجرين الذين هاجروا إلى الحبشة وخطيبهم؟",
        media: "",
        answer: "جعفر بن أبي طالب"
    },
    {
        questionText: "حرف الجيم - اسم الصحابي الجليل الذي يكنى بأبي ذر الغفاري؟",
        media: "",
        answer: "جندب بن جنادة"
    },
    {
        questionText: "حرف الجيم - ذروة سنام الإسلام؟",
        media: "",
        answer: "الجهاد في سبيل الله"
    },
    {
        questionText: "حرف الجيم - أهجى شعراء العرب؟",
        media: "",
        answer: "جرير"
    },
    {
        questionText: "حرف الجيم - أكبر جزيرة في العالم؟",
        media: "",
        answer: "جرين لاند"
    },
    {
        questionText: "حرف الجيم - عالم عربي مشهور يلقب بأبي الكيمياء؟",
        media: "",
        answer: "جابر بن حيان"
    },
    {
        questionText: "حرف الجيم - مؤسس الإمبراطورية المغولية؟",
        media: "",
        answer: "جنكيز خان"
    },
    {
        questionText: "حرف الجيم - العلم الذي يعنى بعلم طبقات الأرض؟",
        media: "",
        answer: "جيولوجيا"
    },
    {
        questionText: "حرف الجيم - مدينة عربية فيها أعلى نافورة في العالم؟",
        media: "",
        answer: "جــــدة"
    },
    {
        questionText: "حرف الجيم - يطلق على البئر الذي لم يبن بالحجارة؟",
        media: "",
        answer: "جب"
    },
    {
        questionText: "حرف الجيم - من المؤلفات المهمة لفضيلة الشيخ محمد الغزالي رحمه الله؟",
        media: "",
        answer: "جدد حياتك"
    },
    {
        questionText: "حرف الجيم - المخترع الألماني الذي اخترع أول مطبعة ذات حروف؟",
        media: "",
        answer: "جوتنبرغ"
    },
    {
        questionText: "حرف الجيم - امرأة شغلت منصب رئيس الوزراء في الكيان الصهيوني؟",
        media: "",
        answer: "جولد مائير"
    },
    {
        questionText: "حرف الجيم - من أسماء الصخر؟",
        media: "",
        answer: "جلمود"
    },
    {
        questionText: "حرف الجيم - مخترع آلة التصوير الفوتوغرافي؟",
        media: "",
        answer: "جورج إيستمان"
    },
    {
        questionText: "حرف الحاء - سورة في القرآن الكريم ورد فيها ذكر الذباب؟",
        media: "",
        answer: "الحج"
    },
    {
        questionText: "حرف الحاء - امرأة في الجاهلية ضرب بها المثل في صدق الخبر؟",
        media: "",
        answer: "حذام"
    },
    {
        questionText: "حرف الحاء - وحدة لقياس القدرة يقاس بها قوة المحركات؟",
        media: "",
        answer: "الحصان"
    },
    {
        questionText: "حرف الحاء - صحابي جليل انتدبه الرسول ليأتيه بخبر المشركين في غزوة الأحزاب؟",
        media: "",
        answer: "حذيفة بن اليمان"
    },
    {
        questionText: "حرف الحاء - يطلق على صوت المحتضر؟",
        media: "",
        answer: "حشرجة"
    },
    {
        questionText: "حرف الحاء - شاعر اشتهر بالهجاء حبسه عمر بن الخطاب؟",
        media: "",
        answer: "الحطيئة"
    },
    {
        questionText: "حرف الحاء - اسم الشيماء أخت الرسول من الرضاعة؟",
        media: "",
        answer: "حذافة بنت الحارث"
    },
    {
        questionText: "حرف الحاء - من عجائب الدنيا السبع؟",
        media: "",
        answer: "حدائق بابل المعلقة"
    },
    {
        questionText: "حرف الحاء - من القائل: الأم مـدرسـة إذا أعـددتـها أعـددت شـعـباً طـيـب الأعـراق؟",
        media: "",
        answer: "حافظ إبراهيم"
    },
    {
        questionText: "حرف الحاء - يطلق على صغير الضب؟",
        media: "",
        answer: "الحسل"
    },
    {
        questionText: "حرف الحاء - يطلق على حركة المقاومة الإسلامية في فلسطين؟",
        media: "",
        answer: "حماس"
    },
    {
        questionText: "حرف الحاء - مدينة سورية يوجد فيها قبر الصحابي خالد بن الوليد؟",
        media: "",
        answer: "حمص"
    },
    {
        questionText: "حرف الحاء - لقب أطلق على الصحابي الجليل عبد الله بن الزبير؟",
        media: "",
        answer: "حمامة المسجد"
    },
    {
        questionText: "حرف الحاء - مؤسس جماعة الإخوان المسلمين؟",
        media: "",
        answer: "حسن البنا"
    },
    {
        questionText: "حرف الحاء - أضخم الحيوانات اللافقرية؟",
        media: "",
        answer: "الحبار"
    },
    {
        questionText: "حرف الخاء - ماذا يسمى طعام الولادة؟",
        media: "",
        answer: "الخرس"
    },
    {
        questionText: "حرف الخاء - من أين تحصل الأسماك في البحار على الأوكسجين؟",
        media: "",
        answer: "الخياشيم"
    },
    {
        questionText: "حرف الخاء - هو وسيلة لتمثيل سطح الأرض على لوحة مستوية؟",
        media: "",
        answer: "الخريطة"
    },
    {
        questionText: "حرف الخاء - ما هو صوت النمر؟",
        media: "",
        answer: "خرخرة"
    },
    {
        questionText: "حرف الخاء - ما هو اللفظ العربي للمادة الكيميائية الزنك؟",
        media: "",
        answer: "خارصين"
    },
    {
        questionText: "حرف الخاء - شجر هندي تصنع منه الكراسي؟",
        media: "",
        answer: "الخيزران"
    },
    {
        questionText: "حرف الخاء - من القائل: (فلا نامت أعين الجبناء)؟",
        media: "",
        answer: "خالد بن الوليد"
    },
    {
        questionText: "حرف الخاء - كم يبلغ عدد عيون النحلة؟",
        media: "",
        answer: "خمس عيون"
    },
    {
        questionText: "حرف الخاء - يطلق على عصير العنب أو التمر وشاربه لا يعقل؟",
        media: "",
        answer: "الخمر"
    },
    {
        questionText: "حرف الخاء - خط عرض تتعامد عليه أشعة الشمس مرتين في السنة؟",
        media: "",
        answer: "خط الاستواء"
    },
    {
        questionText: "حرف الخاء - قطعة من البحر تدخل في البر؟",
        media: "",
        answer: "الخليج"
    },
    {
        questionText: "حرف الخاء - ما الاسم الذي يطلق على المشرق والمغرب؟",
        media: "",
        answer: "الخافقان"
    },
    {
        questionText: "حرف الخاء - نبات مخدر يصنع منه الأفيون؟",
        media: "",
        answer: "الخشخاش"
    },
    {
        questionText: "حرف الخاء - مدينة بالسعودية بالقرب من الدمام؟",
        media: "",
        answer: "الخبر"
    },
    {
        questionText: "حرف الخاء - يقصد بمصطلح (الفوبيا) في علم النفس؟",
        media: "",
        answer: "الخوف"
    },
    {
        questionText: "حرف الدال - في اللغة بمعنى المكر؟",
        media: "",
        answer: "الدهاء"
    },
    {
        questionText: "حرف الدال - من يرسل سراً ليلاً ليأتي بالأخبار؟",
        media: "",
        answer: "دسيس"
    },
    {
        questionText: "حرف الدال - الليلة الثلاثون من كل شهر قمري لشدة ظلمتها؟",
        media: "",
        answer: "الدلماء"
    },
    {
        questionText: "حرف الدال - ما اسم أول وحدة عملة في تاريخ الإسلام؟",
        media: "",
        answer: "الدينار"
    },
    {
        questionText: "حرف الدال - ما هي عاصمة دولة تنزانيا؟",
        media: "",
        answer: "دار السلام"
    },
    {
        questionText: "حرف الدال - هو سواد الليل وظلمته؟",
        media: "",
        answer: "الدجى"
    },
    {
        questionText: "حرف الدال - هو صغير الدب؟",
        media: "",
        answer: "ديسم"
    },
    {
        questionText: "حرف الدال - وضع الميت تحت التراب ومواراة بدنه؟",
        media: "",
        answer: "الدفن"
    },
    {
        questionText: "حرف الدال - هي الجرة ذات العروة؟",
        media: "",
        answer: "دورق"
    },
    {
        questionText: "حرف الدال - هي الشجرة العظيمة المتشعبة الفروع؟",
        media: "",
        answer: "الدوحة"
    },
    {
        questionText: "حرف الدال - يضخها القلب إلى جميع أجزاء جسم الإنسان؟",
        media: "",
        answer: "الدماء"
    },
    {
        questionText: "حرف الدال - ما هو الذي نأكله قبل أن يولد ونأكله بعد أن يموت؟",
        media: "",
        answer: "الدجاج"
    },
    {
        questionText: "حرف الدال - هو الزمان الطويل أو مدة الحياة كلها؟",
        media: "",
        answer: "الدهر"
    },
    {
        questionText: "حرف الدال - كوكب المريخ له قمران فوبوس و...؟",
        media: "",
        answer: "دايموس"
    },
    {
        questionText: "حرف الدال - ما هو الطائر الذي يكنى بأبي اليقظات؟",
        media: "",
        answer: "الديك"
    },
    {
        questionText: "حرف الذال - نوع من أنواع السمك؟",
        media: "",
        answer: "ذئب البحر"
    },
    {
        questionText: "حرف الذال - بمعنى السهو وسرحان العقل؟",
        media: "",
        answer: "الذهول"
    },
    {
        questionText: "حرف الذال - حشرة ذكرت في القرآن الكريم؟",
        media: "",
        answer: "الذباب"
    },
    {
        questionText: "حرف الذال - الانكسار والخضوع والهوان؟",
        media: "",
        answer: "ذل"
    },
    {
        questionText: "حرف الذال - اللسان إذا انسلق وانقشر من داء يصيبه؟",
        media: "",
        answer: "ذحق"
    },
    {
        questionText: "حرف الذال - يوصف به نزول الدمع من العين؟",
        media: "",
        answer: "ذرف"
    },
    {
        questionText: "حرف الذال - ما ميقات أهل العراق؟",
        media: "",
        answer: "ذات عرق"
    },
    {
        questionText: "حرف الذال - هي الموجات الترددية في الجو؟",
        media: "",
        answer: "ذبذبات"
    },
    {
        questionText: "حرف الذال - هو أحد الأمراض التي كان العرب يعرفونها قديماً؟",
        media: "",
        answer: "ذات الجنب"
    },
    {
        questionText: "حرف الذال - هو فصاحة اللسان وقوة عربيته؟",
        media: "",
        answer: "ذلاقة اللسان"
    },
    {
        questionText: "حرف الذال - نبات عشبي يصنع منه الخبز والنشا؟",
        media: "",
        answer: "الذرة"
    },
    {
        questionText: "حرف الذال - هي المرأة السليطة اللسان؟",
        media: "",
        answer: "ذربة"
    },
    {
        questionText: "حرف الذال - معركة قادها خالد بن الوليد ضد الفرس؟",
        media: "",
        answer: "ذات السلاسل"
    },
    {
        questionText: "حرف الذال - الملك الصالح الذي ملك الأرض وورد ذكره في القرآن؟",
        media: "",
        answer: "ذو القرنين"
    },
    {
        questionText: "حرف الذال - لقب نبي الله إسماعيل عليه السلام؟",
        media: "",
        answer: "الذبيح"
    },
    {
        questionText: "حرف الراء - الذاكرة العشوائية في الحاسب الآلي؟",
        media: "",
        answer: "رام"
    },
    {
        questionText: "حرف الراء - عملة ماليزيا؟",
        media: "",
        answer: "رينقت"
    },
    {
        questionText: "حرف الراء - نوع من أنواع الأشعة لتصوير الدماغ بالألوان؟",
        media: "",
        answer: "الرنين المغناطيسي"
    },
    {
        questionText: "حرف الراء - عنصر فلزي إشعاعي؟",
        media: "",
        answer: "الراديوم"
    },
    {
        questionText: "حرف الراء - هو نزف الأنف دماً؟",
        media: "",
        answer: "رعاف"
    },
    {
        questionText: "حرف الراء - هي باطن كف اليد في اللغة؟",
        media: "",
        answer: "راحة"
    },
    {
        questionText: "حرف الراء - وحدة وزن إنجليزية؟",
        media: "",
        answer: "رطل"
    },
    {
        questionText: "حرف الراء - الاسم الفارسي لدفتر تقويم السنوات والشهور؟",
        media: "",
        answer: "روزنافه"
    },
    {
        questionText: "حرف الراء - ما هو الشيء الذي يتكلم بكل لغات العالم في نفس الوقت؟",
        media: "",
        answer: "الراديو"
    },
    {
        questionText: "حرف الراء - أول طبيب مسلم فصل بين طب الأطفال وطب النساء؟",
        media: "",
        answer: "الرازي"
    },
    {
        questionText: "حرف الراء - هو المادة الأساسية في صناعة الزجاج؟",
        media: "",
        answer: "الرمل"
    },
    {
        questionText: "حرف الراء - وحدة لقياس قوة الزلازل؟",
        media: "",
        answer: "ريختر"
    },
    {
        questionText: "حرف الراء - الباب الذي يدخل منه الصائمون يوم القيامة؟",
        media: "",
        answer: "الريان"
    },
    {
        questionText: "حرف الراء - ما هو الشرك الأصغر؟",
        media: "",
        answer: "الرياء"
    },
    {
        questionText: "حرف الراء - من أمراض العين؟",
        media: "",
        answer: "رمد"
    },
    {
        questionText: "حرف الزاي - هو اهتزاز الأرض وارتجافها؟",
        media: "",
        answer: "زلزال"
    },
    {
        questionText: "حرف الزاي - ما معنى كلمة بترول؟",
        media: "",
        answer: "زيت الصخر"
    },
    {
        questionText: "حرف الزاي - طعام أهل النار؟",
        media: "",
        answer: "الزقوم"
    },
    {
        questionText: "حرف الزاي - من الكتب السماوية؟",
        media: "",
        answer: "الزبور"
    },
    {
        questionText: "حرف الزاي - اللقب الذي أطلق على سيدة نساء أهل الجنة؟",
        media: "",
        answer: "الزهراء"
    },
    {
        questionText: "حرف الزاي - يابس وصافي ولد في النار وإذا عاد إليها انهار؟",
        media: "",
        answer: "الزجاج"
    },
    {
        questionText: "حرف الزاي - قطعة من الحديد حلزونية تتمتع بخاصية التمدد؟",
        media: "",
        answer: "الزنبرك"
    },
    {
        questionText: "حرف الزاي - من القبائل المشهورة في أفريقيا يتميزون بشدتهم؟",
        media: "",
        answer: "الزولو"
    },
    {
        questionText: "حرف الزاي - الملائكة المكلفة بدفع أهل النار إليها؟",
        media: "",
        answer: "الزبانية"
    },
    {
        questionText: "حرف الزاي - ما أكبر مدينة من حيث عدد السكان في سويسرا؟",
        media: "",
        answer: "زيورخ"
    },
    {
        questionText: "حرف الزاي - حجر كريم يشبه الزمرد وله ألوان كثيرة؟",
        media: "",
        answer: "زبرجد"
    },
    {
        questionText: "حرف الزاي - هو الكفر باطناً مع التظاهر بالإيمان؟",
        media: "",
        answer: "زندقة"
    },
    {
        questionText: "حرف الزاي - مادة سوداء تستخدم في رصف الطرق؟",
        media: "",
        answer: "زفت"
    },
    {
        questionText: "حرف الزاي - من أول من سل سيفاً في الإسلام؟",
        media: "",
        answer: "الزبير بن العوام"
    },
    {
        questionText: "حرف الزاي - مرض تآكل خلايا المخ مع تقدم العمر؟",
        media: "",
        answer: "الزهايمر"
    },
    {
        questionText: "حرف السين - ما عاصمة البوسنة والهرسك؟",
        media: "",
        answer: "سراييفو"
    },
    {
        questionText: "حرف السين - حيوان لبون له ذنب طويل كثيف الشعر يتخذ منه فراء؟",
        media: "",
        answer: "سنجاب"
    },
    {
        questionText: "حرف السين - ماذا يسمى شحم سنام الإبل؟",
        media: "",
        answer: "السرهد"
    },
    {
        questionText: "حرف السين - كم عدد أحزاب القرآن؟",
        media: "",
        answer: "ستون حزباً"
    },
    {
        questionText: "حرف السين - من قائد معركة القادسية؟",
        media: "",
        answer: "سعد بن أبي وقاص"
    },
    {
        questionText: "حرف السين - ما أكبر مدينة من حيث عدد السكان في استراليا؟",
        media: "",
        answer: "سيدني"
    },
    {
        questionText: "حرف السين - هو اللباس في النار وجاء وصفه في القرآن؟",
        media: "",
        answer: "سرابيل"
    },
    {
        questionText: "حرف السين - كم كان عمر النبي عندما ماتت أمه؟",
        media: "",
        answer: "ست سنوات"
    },
    {
        questionText: "حرف السين - شجرة ذكرت في القرآن؟",
        media: "",
        answer: "السدر"
    },
    {
        questionText: "حرف السين - وقت في الليل يستحب الاستغفار فيه؟",
        media: "",
        answer: "السحر"
    },
    {
        questionText: "حرف السين - من أول من كتب بسم الله الرحمن الرحيم؟",
        media: "",
        answer: "سليمان عليه السلام"
    },
    {
        questionText: "حرف السين - اسم عين في الجنة؟",
        media: "",
        answer: "سلسبيل"
    },
    {
        questionText: "حرف السين - الممثل الدبلوماسي لدولة ما في دولة مضيفة؟",
        media: "",
        answer: "سفير"
    },
    {
        questionText: "حرف السين - من أسماء جهنم؟",
        media: "",
        answer: "سقر"
    },
    {
        questionText: "حرف السين - عالم نحوي مسلم ذو أصل فارسي؟",
        media: "",
        answer: "سيبويه"
    },
    {
        questionText: "حرف الشين - ما اسم السبت قبل الإسلام؟",
        media: "",
        answer: "شبار"
    },
    {
        questionText: "حرف الشين - سورة تسمى الجامعة؟",
        media: "",
        answer: "الشعراء"
    },
    {
        questionText: "حرف الشين - ما يستعمل لتثبيت الشموع فيه للزينة؟",
        media: "",
        answer: "شمعدان"
    },
    {
        questionText: "حرف الشين - النوع الخفيف من الضباب؟",
        media: "",
        answer: "شبورة"
    },
    {
        questionText: "حرف الشين - حزمة دقيقة من الضوء تنطلق باستقامة واحدة؟",
        media: "",
        answer: "الشعاع"
    },
    {
        questionText: "حرف الشين - هو العرق النابض الذي يحمل الدم من القلب للجسد؟",
        media: "",
        answer: "الشريان"
    },
    {
        questionText: "حرف الشين - يطلق على البخيل الحريص على المال؟",
        media: "",
        answer: "الشحيح"
    },
    {
        questionText: "حرف الشين - مذهب فكري يقوم على الإلحاد وأن المادة أساس كل شيء؟",
        media: "",
        answer: "الشيوعية"
    },
    {
        questionText: "حرف الشين - نهر يتكون من التقاء نهري دجلة والفرات؟",
        media: "",
        answer: "شط العرب"
    },
    {
        questionText: "حرف الشين - امرأة حكمت مصر 80 يوماً؟",
        media: "",
        answer: "شجرة الدر"
    },
    {
        questionText: "حرف الشين - إحدى مراحل تطور الدودة في خلقتها؟",
        media: "",
        answer: "شرنقة"
    },
    {
        questionText: "حرف الشين - هو جدول الماء المتساقط من مستوى مرتفع؟",
        media: "",
        answer: "شلال"
    },
    {
        questionText: "حرف الشين - كتلة من الغازات الملتهبة ومصدر للحرارة؟",
        media: "",
        answer: "الشمس"
    },
    {
        questionText: "حرف الشين - طائر من الجوارح من فصيلة الصقور؟",
        media: "",
        answer: "شاهين"
    },
    {
        questionText: "حرف الشين - عملة اليهود في أرض فلسطين؟",
        media: "",
        answer: "شيكل"
    },
    {
        questionText: "حرف الصاد - ما أكثر الدول سكاناً في العالم؟",
        media: "",
        answer: "الصين"
    },
    {
        questionText: "حرف الصاد - ما أقدم دولة تنتج البخور واللبان في العالم؟",
        media: "",
        answer: "الصومال"
    },
    {
        questionText: "حرف الصاد - ما هو الاسم السري لقنبلة هيروشيما؟",
        media: "",
        answer: "الصبي الصغير"
    },
    {
        questionText: "حرف الصاد - ما هو العذاب الذي وقع على قوم ثمود؟",
        media: "",
        answer: "الصيحة"
    },
    {
        questionText: "حرف الصاد - هي قمة ظهر الفرس؟",
        media: "",
        answer: "صهوة"
    },
    {
        questionText: "حرف الصاد - إحدى أنواع الحمى تصيب الإنسان؟",
        media: "",
        answer: "الصفراوية"
    },
    {
        questionText: "حرف الصاد - يطلق على صوت السيوف في الحرب؟",
        media: "",
        answer: "صليل"
    },
    {
        questionText: "حرف الصاد - عاصمة بلغاريا؟",
        media: "",
        answer: "صوفيا"
    },
    {
        questionText: "حرف الصاد - ظاهرة اصطدام الصوت بحاجز ثم رجوعه؟",
        media: "",
        answer: "الصدى"
    },
    {
        questionText: "حرف الصاد - صيحة تصم الآذان لشدتها يوم القيامة؟",
        media: "",
        answer: "الصاخة"
    },
    {
        questionText: "حرف الصاد - ما هي الخمس التي لا سادس لها؟",
        media: "",
        answer: "الصلوات"
    },
    {
        questionText: "حرف الصاد - من هم الذين وصفهم الله بعبدة الكواكب؟",
        media: "",
        answer: "الصائبة"
    },
    {
        questionText: "حرف الصاد - جزيرة في البحر المتوسط فتحها المسلمون بقيادة أسد الفرات؟",
        media: "",
        answer: "صقلية"
    },
    {
        questionText: "حرف الصاد - ماذا يطلق على صوت الفرس؟",
        media: "",
        answer: "صهيل"
    },
    {
        questionText: "حرف الصاد - حجر استخدمه العرب قديماً لإشعال النار؟",
        media: "",
        answer: "الصوان"
    },
    {
        questionText: "حرف الضاد - بخار الماء الكثيف ويغشى الأرض كالدخان؟",
        media: "",
        answer: "الضباب"
    },
    {
        questionText: "حرف الضاد - من أسماء الأسد مكون من أربعة حروف؟",
        media: "",
        answer: "ضيغم"
    },
    {
        questionText: "حرف الضاد - هو الشيء الذي يؤنب الإنسان على فعل خطأ في نفسه؟",
        media: "",
        answer: "الضمير"
    },
    {
        questionText: "حرف الضاد - نبات هو طعام أهل النار ذكر في سورة الغاشية؟",
        media: "",
        answer: "الضريع"
    },
    {
        questionText: "حرف الضاد - القوة المؤثرة بفعل ثقل عمود الهواء؟",
        media: "",
        answer: "الضغط الجوي"
    },
    {
        questionText: "حرف الضاد - صفة النصارى التي ذكرها القرآن في سورة الفاتحة؟",
        media: "",
        answer: "الضالين"
    },
    {
        questionText: "حرف الضاد - من أسماء الأسد مكون من خمسة حروف؟",
        media: "",
        answer: "ضرغام"
    },
    {
        questionText: "حرف الضاد - هي وظيفة القلب الأساسية في الجسم؟",
        media: "",
        answer: "ضخ الدم"
    },
    {
        questionText: "حرف الضاد - ما هي السورة التي سميت باسم وقت من أوقات الزمن؟",
        media: "",
        answer: "الضحى"
    },
    {
        questionText: "حرف الضاد - هي شاطئ البحر وساحله؟",
        media: "",
        answer: "الضفة"
    },
    {
        questionText: "حرف الضاد - عظم مستطيل من عظام الجنب منحني؟",
        media: "",
        answer: "الضلع"
    },
    {
        questionText: "حرف الضاد - هو القبر المبني حوله أو مكان دفن الإنسان؟",
        media: "",
        answer: "ضريح"
    },
    {
        questionText: "حرف الضاد - كلمة مرادفة للحقد؟",
        media: "",
        answer: "ضغينة"
    },
    {
        questionText: "حرف الضاد - الجلبة والصياح وأكثر ما تكون من السيارات؟",
        media: "",
        answer: "ضجيج"
    },
    {
        questionText: "حرف الضاد - العملية الأساسية في الحساب والجبر؟",
        media: "",
        answer: "الضرب"
    },
    {
        questionText: "حرف الطاء - مدينة لبنانية تشتهر ببساتين الزيتون ومعمل تكرير بترول؟",
        media: "",
        answer: "طرابلس"
    },
    {
        questionText: "حرف الطاء - ما أكبر مدينة في آسيا؟",
        media: "",
        answer: "طوكيو"
    },
    {
        questionText: "حرف الطاء - من هو الصحابي المعروف بذي النور؟",
        media: "",
        answer: "الطفيل بن عمر الدوسي"
    },
    {
        questionText: "حرف الطاء - ما معنى حجارة من سجيل؟",
        media: "",
        answer: "طين متحجر"
    },
    {
        questionText: "حرف الطاء - من هو أول تابعي فسر القرآن؟",
        media: "",
        answer: "الطبري"
    },
    {
        questionText: "حرف الطاء - من هو الشخص الذي لا يغضب إذا أخرجت له لسانك؟",
        media: "",
        answer: "الطبيب"
    },
    {
        questionText: "حرف الطاء - يحملك إلى حيث تريد وهو واقف؟",
        media: "",
        answer: "الطريق"
    },
    {
        questionText: "حرف الطاء - من الأمراض الخطيرة كان يسمى الموت الأسود؟",
        media: "",
        answer: "الطاعون"
    },
    {
        questionText: "حرف الطاء - جبل أقسم الله تعالى به في القرآن؟",
        media: "",
        answer: "الطور"
    },
    {
        questionText: "حرف الطاء - هي الخضرة التي تعلو الماء الراكد؟",
        media: "",
        answer: "طحلب"
    },
    {
        questionText: "حرف الطاء - من أسماء يوم القيامة؟",
        media: "",
        answer: "الطامة"
    },
    {
        questionText: "حرف الطاء - مدينة أسبانية تاريخية حكمها المسلمون قروناً؟",
        media: "",
        answer: "طليطلة"
    },
    {
        questionText: "حرف الطاء - وزن للأثقال يقدر بألف كيلو جرام؟",
        media: "",
        answer: "طن"
    },
    {
        questionText: "حرف الطاء - المدينة التي رحل إليها النبي قبل المدينة؟",
        media: "",
        answer: "الطائف"
    },
    {
        questionText: "حرف الطاء - أين كلم الله سبحانه وتعالى نبي الله موسى؟",
        media: "",
        answer: "طور سيناء"
    },
    {
        questionText: "حرف الظاء - الأشعة الخاصة بتصوير قنوات العمود الفقري؟",
        media: "",
        answer: "الظليلة"
    },
    {
        questionText: "حرف الظاء - الشيء الذي إذا سرت سار معك ولا تسبقه؟",
        media: "",
        answer: "الظل"
    },
    {
        questionText: "حرف الظاء - نهى الله عنه وقال أن بعضه إثم؟",
        media: "",
        answer: "الظن"
    },
    {
        questionText: "حرف الظاء - اسم من أسماء الثعبان؟",
        media: "",
        answer: "الظربغانة"
    },
    {
        questionText: "حرف الظاء - سلطان مملوكي صَدّ غارات التتار؟",
        media: "",
        answer: "الظاهر بيبرس"
    },
    {
        questionText: "حرف الظاء - ماذا تسمى المرأة التي ترضع غير ولدها؟",
        media: "",
        answer: "الظئر"
    },
    {
        questionText: "حرف الظاء - اسم فرس للرسول صلى الله عليه وسلم؟",
        media: "",
        answer: "الظرب"
    },
    {
        questionText: "حرف الظاء - المذهب القديم الذي يقوم على الأخذ بظاهر النص فقط؟",
        media: "",
        answer: "الظاهرية"
    },
    {
        questionText: "حرف الظاء - يطلق على الهودج الذي تركبه المرأة على الجمل؟",
        media: "",
        answer: "الظعينة"
    },
    {
        questionText: "حرف الظاء - الظفر المشقوق للبقرة والشاة والظبي؟",
        media: "",
        answer: "ظلف"
    },
    {
        questionText: "حرف الظاء - ما كان المشهور عن الحجاج بن يوسف الثقفي؟",
        media: "",
        answer: "ظالم"
    },
    {
        questionText: "حرف الظاء - في النحو: اسم دل على زمان الحدث أو مكانه؟",
        media: "",
        answer: "ظرف"
    },
    {
        questionText: "حرف الظاء - ماذا كان يطلق على المحيط الأطلسي قديماً؟",
        media: "",
        answer: "الظلمات"
    },
    {
        questionText: "حرف الظاء - من مدن سلطنة عمان؟",
        media: "",
        answer: "ظفار"
    },
    {
        questionText: "حرف الظاء - يدخل فيه المتحابون في الله يوم القيامة؟",
        media: "",
        answer: "ظل عرش الرحمن"
    },
    {
        questionText: "حرف العين - من خامس الخلفاء الراشدين؟",
        media: "",
        answer: "عمر بن عبد العزيز"
    },
    {
        questionText: "حرف العين - ماذا يسبب نقص فيتامين ( أ )؟",
        media: "",
        answer: "العمى الليلي"
    },
    {
        questionText: "حرف العين - من أول فدائي في الإسلام؟",
        media: "",
        answer: "علي بن أبي طالب"
    },
    {
        questionText: "حرف العين - ماذا يسمى ذكر الضفدع؟",
        media: "",
        answer: "العلجوم"
    },
    {
        questionText: "حرف العين - من قائد غزوة ذات السلاسل؟",
        media: "",
        answer: "عمرو بن العاص"
    },
    {
        questionText: "حرف العين - اللقب الذي أطلق على القارة الأمريكية عند اكتشافها؟",
        media: "",
        answer: "العالم الجديد"
    },
    {
        questionText: "حرف العين - يوم نجى الله فيه موسى ومن يصومه يكفر السنة الماضية؟",
        media: "",
        answer: "عاشوراء"
    },
    {
        questionText: "حرف العين - مادة صلبة ينبعث منها رائحة زكية إذا أحرقت؟",
        media: "",
        answer: "العنبر"
    },
    {
        questionText: "حرف العين - تقسيم البشرية على أساس لون البشرة أو اللغة؟",
        media: "",
        answer: "العنصرية"
    },
    {
        questionText: "حرف العين - الاسم القديم الذي عرفته العرب لنظام الشرطة؟",
        media: "",
        answer: "العسس"
    },
    {
        questionText: "حرف العين - الحيوان الصنم الذي عبده بنو إسرائيل؟",
        media: "",
        answer: "العجل"
    },
    {
        questionText: "حرف العين - من أحفاد نوح وإليه تنسب العرب؟",
        media: "",
        answer: "عدنان"
    },
    {
        questionText: "حرف العين - معركة كانت بين المسلمين والتتار بقيادة قطز؟",
        media: "",
        answer: "عين جالوت"
    },
    {
        questionText: "حرف العين - ما اسم العام الذي ولد فيه سيدنا محمد؟",
        media: "",
        answer: "عام الفيل"
    },
    {
        questionText: "حرف العين - الاسم الذي يطلق على الخط الذي كتب به القرآن؟",
        media: "",
        answer: "العثماني"
    },
    {
        questionText: "حرف الغين - أحد أسماء الأسد؟",
        media: "",
        answer: "الغضنفر"
    },
    {
        questionText: "حرف الغين - باب من أبواب الشعر تغنى به الشعراء؟",
        media: "",
        answer: "الغزل"
    },
    {
        questionText: "حرف الغين - ماذا يسمى طعام الختان؟",
        media: "",
        answer: "الغديرة"
    },
    {
        questionText: "حرف الغين - في مصطلح الحديث ما رواه واحد؟",
        media: "",
        answer: "غريب"
    },
    {
        questionText: "حرف الغين - من أول من صنع المجهر البسيط؟",
        media: "",
        answer: "غاليليو"
    },
    {
        questionText: "حرف الغين - الصبي الذي يقارب سن البلوغ؟",
        media: "",
        answer: "الغلام"
    },
    {
        questionText: "حرف الغين - الكرب والحزن ماذا يسمى؟",
        media: "",
        answer: "الغم"
    },
    {
        questionText: "حرف الغين - العرب النصارى حلفاء الروم في الجاهلية؟",
        media: "",
        answer: "الغساسنة"
    },
    {
        questionText: "حرف الغين - واحد من فواسق الدواب؟",
        media: "",
        answer: "الغراب"
    },
    {
        questionText: "حرف الغين - لقب الصحابي حنظلة بن عامر؟",
        media: "",
        answer: "غسيل الملائكة"
    },
    {
        questionText: "حرف الغين - من أسماء يوم القيامة ورد في القرآن؟",
        media: "",
        answer: "الغاشية"
    },
    {
        questionText: "حرف الغين - هو بيت السيف؟",
        media: "",
        answer: "غمد"
    },
    {
        questionText: "حرف الغين - إفاضة الماء على البدن كله مع النية؟",
        media: "",
        answer: "الغسل"
    },
    {
        questionText: "حرف الغين - تلون السماء بعد غروب الشمس؟",
        media: "",
        answer: "الغسق"
    },
    {
        questionText: "حرف الغين - هو السحاب الأبيض؟",
        media: "",
        answer: "الغمام"
    },
    {
        questionText: "حرف الفاء - ما أكبر بحيرة نهرية في العالم؟",
        media: "",
        answer: "فكتوريا"
    },
    {
        questionText: "حرف الفاء - ما أسرع الحيوانات البرية؟",
        media: "",
        answer: "الفهد الهندي"
    },
    {
        questionText: "حرف الفاء - أعلى درجات الجنة؟",
        media: "",
        answer: "الفردوس"
    },
    {
        questionText: "حرف الفاء - هو الفقر وقلة ذات اليد؟",
        media: "",
        answer: "الفاقة"
    },
    {
        questionText: "حرف الفاء - سورة في القرآن غير الفاتحة تبدأ بالحمد لله؟",
        media: "",
        answer: "فاطر"
    },
    {
        questionText: "حرف الفاء - عالم رياضيات إغريق له نظريات تدرس اليوم؟",
        media: "",
        answer: "فيثاغورس"
    },
    {
        questionText: "حرف الفاء - حيوان برمائي تلد صغارها تحت الماء؟",
        media: "",
        answer: "فرس النهر"
    },
    {
        questionText: "حرف الفاء - أطول عظمة في جسم الإنسان؟",
        media: "",
        answer: "الفخذ"
    },
    {
        questionText: "حرف الفاء - من هم أكثر أهل الجنة؟",
        media: "",
        answer: "الفقراء"
    },
    {
        questionText: "حرف الفاء - لونه أسود ولا ينتفع به إلا إذا كان لونه أحمر؟",
        media: "",
        answer: "الفحم"
    },
    {
        questionText: "حرف الفاء - ما الشيء الذي إذا وضع في الثلاجة لا يبرد؟",
        media: "",
        answer: "الفلفل"
    },
    {
        questionText: "حرف الفاء - حضارة اندثرت قبل آلاف السنين؟",
        media: "",
        answer: "الفينيقية"
    },
    {
        questionText: "حرف الفاء - عاصمة النمسا؟",
        media: "",
        answer: "فينا"
    },
    {
        questionText: "حرف الفاء - وحدة قياس كهربائية؟",
        media: "",
        answer: "فولت"
    },
    {
        questionText: "حرف الفاء - لغة إيرانية من الفصيلة الهندية الأوروبية؟",
        media: "",
        answer: "الفارسية"
    },
    {
        questionText: "حرف القاف - من هو أول ولد آدم؟",
        media: "",
        answer: "قابيل"
    },
    {
        questionText: "حرف القاف - ما هو أول ما خلق الله؟",
        media: "",
        answer: "القلم"
    },
    {
        questionText: "حرف القاف - من قائد معركة عين جالوت؟",
        media: "",
        answer: "قطز"
    },
    {
        questionText: "حرف القاف - وحدة الوزن التي يوزن بها الماس؟",
        media: "",
        answer: "القيراط"
    },
    {
        questionText: "حرف القاف - ماذا يسمى طعام الضيوف؟",
        media: "",
        answer: "القرى"
    },
    {
        questionText: "حرف القاف - ما أكبر مدينة في أفريقيا؟",
        media: "",
        answer: "القاهرة"
    },
    {
        questionText: "حرف القاف - له خمسة أصابع بلا لحم ولا عظم؟",
        media: "",
        answer: "القفاز"
    },
    {
        questionText: "حرف القاف - ما أول منازل الآخرة؟",
        media: "",
        answer: "القبر"
    },
    {
        questionText: "حرف القاف - جبل في مكة اشتهر في عهد قريش؟",
        media: "",
        answer: "قبيس"
    },
    {
        questionText: "حرف القاف - شيء كعبه للحيوان ورأسه للإنسان؟",
        media: "",
        answer: "القمح"
    },
    {
        questionText: "حرف القاف - الاسم الذي يطلق على مولدة النساء؟",
        media: "",
        answer: "قابلة"
    },
    {
        questionText: "حرف القاف - فئة اشتهرت بغزو السفن والسطو عليها؟",
        media: "",
        answer: "القراصنة"
    },
    {
        questionText: "حرف القاف - ما اسم ناقة النبي صلى الله عليه وسلم؟",
        media: "",
        answer: "القصواء"
    },
    {
        questionText: "حرف القاف - معلم من معالم المسجد الأقصى؟",
        media: "",
        answer: "قبة الصخرة"
    },
    {
        questionText: "حرف القاف - أول مسجد في الإسلام؟",
        media: "",
        answer: "قباء"
    },
    {
        questionText: "حرف الكاف - ما هو أكبر عضو في الجسم؟",
        media: "",
        answer: "الكبد"
    },
    {
        questionText: "حرف الكاف - من داعية الشيوعية؟",
        media: "",
        answer: "كارل ماركس"
    },
    {
        questionText: "حرف الكاف - ما السؤال الذي تختلف إجابته دائماً؟",
        media: "",
        answer: "كم الساعة"
    },
    {
        questionText: "حرف الكاف - ما اسم ابن نوح الذي غرق في الطوفان؟",
        media: "",
        answer: "كنعان"
    },
    {
        questionText: "حرف الكاف - زيت طيار صلب أبيض متبلور ذو رائحة؟",
        media: "",
        answer: "كافور"
    },
    {
        questionText: "حرف الكاف - ما هي عملة جمهورية التشيك؟",
        media: "",
        answer: "كورون"
    },
    {
        questionText: "حرف الكاف - ما هو الذي خلقه الله تعالى واستعظمه؟",
        media: "",
        answer: "كيد النساء"
    },
    {
        questionText: "حرف الكاف - له أربع أرجل ولا يستطيع المشي إلا محمولاً؟",
        media: "",
        answer: "الكرسي"
    },
    {
        questionText: "حرف الكاف - هو مبنى البرلمان الروسي؟",
        media: "",
        answer: "الكرملين"
    },
    {
        questionText: "حرف الكاف - وكالة الأنباء الكويتية؟",
        media: "",
        answer: "كونا"
    },
    {
        questionText: "حرف الكاف - ما هو الاسم الكيميائي للطباشير؟",
        media: "",
        answer: "كربونات الكالسيوم"
    },
    {
        questionText: "حرف الكاف - صفة أخرجت إبليس من الجنة؟",
        media: "",
        answer: "الكبر"
    },
    {
        questionText: "حرف الكاف - مقاطعة تتنازع عليها الهند وباكستان؟",
        media: "",
        answer: "كشمير"
    },
    {
        questionText: "حرف الكاف - هو لقب موسى عليه السلام؟",
        media: "",
        answer: "كليم الله"
    },
    {
        questionText: "حرف الكاف - السنة الميلادية التي يكون فيها فبراير 29 يوماً؟",
        media: "",
        answer: "كبيسة"
    },
    {
        questionText: "حرف اللام - ما أكبر مدينة في أوروبا؟",
        media: "",
        answer: "لندن"
    },
    {
        questionText: "حرف اللام - يكون في الصبح واحد وفي الليل ثلاثة فما هو؟",
        media: "",
        answer: "حرف اللام"
    },
    {
        questionText: "حرف اللام - هو اسم من أسماء الفضة؟",
        media: "",
        answer: "لجين"
    },
    {
        questionText: "حرف اللام - ما هو أخف المعادن؟",
        media: "",
        answer: "الليثيوم"
    },
    {
        questionText: "حرف اللام - جسم مستطيل بسببه يكب الناس في النار؟",
        media: "",
        answer: "اللسان"
    },
    {
        questionText: "حرف اللام - مرض سرطان الدم؟",
        media: "",
        answer: "اللوكيميا"
    },
    {
        questionText: "حرف اللام - من هو اليهودي الذي سحر النبي؟",
        media: "",
        answer: "لبيد بن الأعصم"
    },
    {
        questionText: "حرف اللام - هو سيد الطعام؟",
        media: "",
        answer: "اللحم"
    },
    {
        questionText: "حرف اللام - كلمة مناداة تعبر عن الخضوع؟",
        media: "",
        answer: "لبيك"
    },
    {
        questionText: "حرف اللام - علبة تجعل فيها مادة متفجرة تستعمل في الحروب؟",
        media: "",
        answer: "لغم"
    },
    {
        questionText: "حرف اللام - كتاب كتب فيه ما كان وما سيكون إلى يوم القيامة؟",
        media: "",
        answer: "اللوح المحفوظ"
    },
    {
        questionText: "حرف اللام - من هو النبي الذي آمن بنبي؟",
        media: "",
        answer: "لوط"
    },
    {
        questionText: "حرف اللام - أحد أكبر المعاجم العربية ألفه ابن منظور؟",
        media: "",
        answer: "لسان العرب"
    },
    {
        questionText: "حرف اللام - أطول كلمة في القرآن؟",
        media: "",
        answer: "ليستخلفنهم"
    },
    {
        questionText: "حرف اللام - يستخرج من البحر ويباع بأغلى الأثمان؟",
        media: "",
        answer: "اللؤلؤ"
    },
    {
        questionText: "حرف الميم - هي أمر خارق للعادة يجريه الله على أيدي أنبياء؟",
        media: "",
        answer: "المعجزة"
    },
    {
        questionText: "حرف الميم - من أعلم هذه الأمة بالحلال والحرام؟",
        media: "",
        answer: "معاذ بن جبل"
    },
    {
        questionText: "حرف الميم - ما سورة الدين؟",
        media: "",
        answer: "الماعون"
    },
    {
        questionText: "حرف الميم - من مؤسس الدولة الأموية؟",
        media: "",
        answer: "معاوية بن أبي سفيان"
    },
    {
        questionText: "حرف الميم - من فاتح السند؟",
        media: "",
        answer: "محمد بن القاسم"
    },
    {
        questionText: "حرف الميم - أين تقع رابطة العالم الإسلامي؟",
        media: "",
        answer: "مكة المكرمة"
    },
    {
        questionText: "حرف الميم - أين ظهرت الدولة الطولونية والإخشيدية؟",
        media: "",
        answer: "مصر"
    },
    {
        questionText: "حرف الميم - حيوان بري منقرض من أجداد الفيل؟",
        media: "",
        answer: "ماموث"
    },
    {
        questionText: "حرف الميم - ما هو الذي لا ينتفع به إلا إذا أشعلنا في عينيه؟",
        media: "",
        answer: "الموقد"
    },
    {
        questionText: "حرف الميم - ما هو الشيء الذي يحتكم إليه كل أحد وليس من الأحياء؟",
        media: "",
        answer: "الميزان"
    },
    {
        questionText: "حرف الميم - غشاء الجنين الذي يخرج معه عند الولادة؟",
        media: "",
        answer: "المشيمة"
    },
    {
        questionText: "حرف الميم - ما الشيء الذي خرج من الماء وإذا أتى عليه الماء هلك؟",
        media: "",
        answer: "الملح"
    },
    {
        questionText: "حرف الميم - آلة حربية استعملها الرومان لقذف الحجارة؟",
        media: "",
        answer: "المنجنيق"
    },
    {
        questionText: "حرف الميم - أقصر آية في القرآن؟",
        media: "",
        answer: "مدهامتان"
    },
    {
        questionText: "حرف الميم - سباق العدو الطويل الذي مسافته 26 ميل؟",
        media: "",
        answer: "ماراثون"
    },
    {
        questionText: "حرف النون - ما هي أول فتنة بني إسرائيل؟",
        media: "",
        answer: "الناقة"
    },
    {
        questionText: "حرف النون - ماذا يسمى طعام القادم من سفره؟",
        media: "",
        answer: "النقيعة"
    },
    {
        questionText: "حرف النون - من المقصود بهذه الآية: ( فبهت الذي كفر )؟",
        media: "",
        answer: "النمرود"
    },
    {
        questionText: "حرف النون - ما معنى اسم جعفر؟",
        media: "",
        answer: "النهر الصغير"
    },
    {
        questionText: "حرف النون - ما هي الحشرة التي تكلمت في القرآن وتبسم سليمان من قولها؟",
        media: "",
        answer: "النملة"
    },
    {
        questionText: "حرف النون - ما اسم الدابة التي أرسلت إلى ثمود؟",
        media: "",
        answer: "ناقة الله"
    },
    {
        questionText: "حرف النون - ما هي الحطمة؟",
        media: "",
        answer: "النار"
    },
    {
        questionText: "حرف النون - ما هي أكبر دولة إسلامية في أفريقيا؟",
        media: "",
        answer: "نيجيرا"
    },
    {
        questionText: "حرف النون - الاسم المعرب لجهاز الفاكس؟",
        media: "",
        answer: "ناسوخ"
    },
    {
        questionText: "حرف النون - ما هو لقب صلاح الدين الأيوبي؟",
        media: "",
        answer: "الناصر"
    },
    {
        questionText: "حرف النون - ماذا يسمى صوت الدجاجة؟",
        media: "",
        answer: "نقنقة"
    },
    {
        questionText: "حرف النون - مسمى الحركة التي تزعمها الألمان في الحرب العالمية الثانية؟",
        media: "",
        answer: "النازية"
    },
    {
        questionText: "حرف النون - من مكونات مادة السيجارة؟",
        media: "",
        answer: "نيكوتين"
    },
    {
        questionText: "حرف النون - حفرة تحت الأرض ممهدة ليسير بها الإنسان والسيارات؟",
        media: "",
        answer: "النفق"
    },
    {
        questionText: "حرف النون - أداة استعملها النصارى قديماً للإعلان عن صلاتهم؟",
        media: "",
        answer: "الناقوس"
    }
];
