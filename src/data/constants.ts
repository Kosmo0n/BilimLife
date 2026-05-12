export const languages = [
  { id: 'en', name: 'English', code: 'EN', flag: '🇺🇸', bgColor: 'from-blue-500/20 to-red-500/20', flagBg: 'bg-[url("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/200px-Flag_of_the_United_States.svg.png")]' },
  { id: 'cn', name: 'Chinese', code: 'CN', flag: '🇨🇳', bgColor: 'from-red-600/20 to-yellow-500/20', flagBg: 'bg-[url("https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/200px-Flag_of_the_People%27s_Republic_of_China.svg.png")]' },
  { id: 'fr', name: 'French', code: 'FR', flag: '🇫🇷', bgColor: 'from-blue-600/20 to-red-600/20', flagBg: 'bg-[url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/200px-Flag_of_France.svg.png")]' },
  { id: 'ar', name: 'Arabic', code: 'AR', flag: '🇸🇦', bgColor: 'from-green-600/20 to-white/20', flagBg: 'bg-[url("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/200px-Flag_of_Saudi_Arabia.svg.png")]' },
  { id: 'es', name: 'Spanish', code: 'ES', flag: '🇪🇸', bgColor: 'from-yellow-500/20 to-red-600/20', flagBg: 'bg-[url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/200px-Flag_of_Spain.svg.png")]' },
];

export const booksData: Record<string, any> = {
  en: {
    kids: [
      { title: "The Little Prince", author: "Antoine de Saint-Exupéry", cover: "/books/book1.jpg", description: "A young prince visits various planets in space, including Earth, and addresses themes of loneliness, friendship, love, and loss.", russianDescription: "Маленький принц посещает планеты и рассуждает о дружбе, любви и одиночестве." },
      { title: "Harry Potter", author: "J.K. Rowling", cover: "/books/book2.jpg", description: "A young wizard discovers his magical heritage on his eleventh birthday when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry.", russianDescription: "История о юном волшебнике, который узнает о своем прошлом и отправляется в Хогвартс." },
      { title: "Charlotte's Web", author: "E.B. White", cover: "/books/book3.jpg", description: "A pig named Wilbur and his friendship with a barn spider named Charlotte, who saves him from being slaughtered by writing messages in her web.", russianDescription: "Дружба между поросенком Вилбуром и мудрой паучихой Шарлоттой." },
      { title: "Matilda", author: "Roald Dahl", cover: "/books/book4.jpg", description: "Matilda Wormwood is a precocious child with telekinetic powers who uses her abilities to deal with her shallow parents and tyrannical headmistress.", russianDescription: "Матильда — гениальная девочка с телекинезом, противостоящая вредным взрослым." }
    ],
    students: [
      { title: "1984", author: "George Orwell", cover: "/books/book5.jpg", description: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism and mass surveillance.", russianDescription: "Культовая антиутопия о тоталитарном обществе и Большом Брате." },
      { title: "Sapiens", author: "Yuval Noah Harari", cover: "/books/book6.jpg", description: "A book that surveys the history of humankind from the evolution of archaic human species in the Stone Age up to the twenty-first century.", russianDescription: "Краткая история человечества от каменного века до современности." },
      { title: "To Kill a Mockingbird", author: "Harper Lee", cover: "/books/book7.jpg", description: "A novel about the roots of human behavior—to innocence and experience, kindness and cruelty, love and hatred, humor and pathos.", russianDescription: "История о правосудии, расизме и взрослении в американском городке." },
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald", cover: "/books/book8.jpg", description: "A novel that explores themes of decadence, idealism, resistance to change, social upheaval, and excess in the Roaring Twenties.", russianDescription: "История о любви, богатстве и американской мечте в 20-е годы." }
    ],
    adults: [
      { title: "Atomic Habits", author: "James Clear", cover: "/books/book9.jpg", description: "A guide on how to build good habits and break bad ones, emphasizing small changes that lead to remarkable results.", russianDescription: "Руководство по формированию полезных привычек через маленькие изменения." },
      { title: "Deep Work", author: "Cal Newport", cover: "/books/book10.jpg", description: "A book about the ability to focus without distraction on a cognitively demanding task, and how it leads to better results.", russianDescription: "Как научиться глубоко концентрироваться на важных задачах." },
      { title: "The Power of Habit", author: "Charles Duhigg", cover: "/books/book11.jpg", description: "An exploration of the science behind habit formation in our lives, companies, and societies.", russianDescription: "Исследование того, как привычки управляют нашей жизнью и как их менять." },
      { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", cover: "/books/book12.jpg", description: "A summary of research on cognitive biases and the two systems of thought: fast and emotional vs. slow and logical.", russianDescription: "О двух системах мышления и том, как мы принимаем решения." }
    ]
  },
  fr: {
    kids: [
      { title: "Le Petit Prince", author: "Antoine de Saint-Exupéry", cover: "/books/book13.jpg", description: "Le Petit Prince est une œuvre de langue française, la plus connue d'Antoine de Saint-Exupéry. Publié en 1943 à New York, c'est un conte poétique et philosophique.", russianDescription: "Поэтическая сказка о маленьком принце, который путешествует по планетам и узнает о жизни." },
      { title: "Astérix le Gaulois", author: "René Goscinny", cover: "/books/book14.jpg", description: "Astérix le Gaulois est la première bande dessinée de la série Astérix, de René Goscinny et Albert Uderzo.", russianDescription: "Первый комикс о приключениях непобедимых галлов Астерикса и Обеликса." },
      { title: "Le Tour du monde", author: "Jules Verne", cover: "/books/book15.jpg", description: "Le Tour du monde en quatre-vingts jours est un roman d'aventures de Jules Verne, publié en 1872.", russianDescription: "Приключенческий роман Жюля Верна о кругосветном путешествии Филеаса Фогга за 80 дней." },
      { title: "Le Petit Nicolas", author: "René Goscinny", cover: "/books/book16.jpg", description: "Les Aventures du Petit Nicolas sont une série de livres pour enfants écrits par René Goscinny et illustrés par Jean-Jacques Sempé.", russianDescription: "Юмористические рассказы о французском школьнике Николя и его друзьях." }
    ],
    students: [
      { title: "L'Étranger", author: "Albert Camus", cover: "/books/book17.jpg", description: "L'Étranger est un roman d'Albert Camus paru en 1942. Il prend place dans la tétralogie que Camus nommera « cycle de l'absurde ».", russianDescription: "Философский роман Альбера Камю об абсурдности бытия и отчуждении личности." },
      { title: "Candide", author: "Voltaire", cover: "/books/book18.jpg", description: "Candide ou l'Optimisme est un conte philosophique de Voltaire paru à Genève en janvier 1759.", russianDescription: "Философская повесть Вольтера, высмеивающая слепой оптимизм через приключения Кандида." },
      { title: "Le Rouge et le Noir", author: "Stendhal", cover: "/books/book19.jpg", description: "Le Rouge et le Noir est un roman psychologique écrit par Stendhal, publié pour la première fois à Paris en 1830.", russianDescription: "Психологический роман о молодом человеке, пытающемся добиться успеха в эпоху Реставрации." },
      { title: "Madame Bovary", author: "Gustave Flaubert", cover: "/books/book20.jpg", description: "Madame Bovary est un roman de Gustave Flaubert paru en 1857. C'est une œuvre majeure de la littérature française.", russianDescription: "Классика французского реализма о мечтах и разочарованиях Эммы Бовари." }
    ],
    adults: [
      { title: "Les Misérables", author: "Victor Hugo", cover: "/books/book21.jpg", description: "Les Misérables est un roman de Victor Hugo publié en 1862. C'est l'un des plus grands romans de la littérature du XIXe siècle.", russianDescription: "Эпический роман Виктора Гюго о справедливости, любви и искуплении." },
      { title: "Marcel Proust", author: "Marcel Proust", cover: "/books/book22.jpg", description: "À la recherche du temps perdu est une suite romanesque de Marcel Proust écrite entre 1906 et 1922.", russianDescription: "Цикл романов Пруста о памяти, времени и поиске утраченного смысла." },
      { title: "Monte-Cristo", author: "Alexandre Dumas", cover: "/books/book23.jpg", description: "Le Comte de Monte-Cristo est un roman d'Alexandre Dumas, écrit avec la collaboration d'Auguste Maquet.", russianDescription: "Легендарная история мести и правосудия Эдмона Дантеса." },
      { title: "Germinal", author: "Émile Zola", cover: "/books/book24.jpg", description: "Germinal est un roman d'Émile Zola publié en 1885. C'est le treizième volume de la série des Rougon-Macquart.", russianDescription: "Роман Эмиля Золя о забастовке шахтеров и социальной несправедливости." }
    ]
  },
  es: {
    kids: [
      { title: "Don Quijote para niños", author: "Miguel de Cervantes", cover: "/books/book25.jpg", description: "Una versión adaptada para niños de la obra maestra de la literatura española.", russianDescription: "Адаптированная для детей версия «Дон Кихота», шедевра испанской литературы." },
      { title: "Platero y yo", author: "Juan Ramón Jiménez", cover: "/books/book26.jpg", description: "Una narración lírica que recrea poéticamente la vida y muerte del burrito Platero.", russianDescription: "Лирическое повествование о жизни и смерти ослика Платеро." },
      { title: "El Principito", author: "Antoine de Saint-Exupéry", cover: "/books/book27.jpg", description: "La famosa historia del Principito traducida al español.", russianDescription: "Знаменитая история о Маленьком принце на испанском языке." },
      { title: "Cuentos de la selva", author: "Horacio Quiroga", cover: "/books/book28.jpg", description: "Una serie de cuentos infantiles ambientados en la selva, protagonizados por animales.", russianDescription: "Сборник сказок о животных, живущих в сельве." }
    ],
    students: [
      { title: "Cien años de soledad", author: "Gabriel García Márquez", cover: "/books/book29.jpg", description: "Una obra maestra del realismo mágico que narra la historia de la familia Buendía en el pueblo ficticio de Macondo.", russianDescription: "Шедевр магического реализма о семье Буэндиа в городке Макондо." },
      { title: "El amor en los tiempos del cólera", author: "Gabriel García Márquez", cover: "/books/book30.jpg", description: "Una novela que explora la naturaleza del amor en todas sus formas y su persistencia a lo largo del tiempo.", russianDescription: "История о всепоглощающей любви, которая ждала своего часа десятилетиями." },
      { title: "La casa de los espíritus", author: "Isabel Allende", cover: "/books/book31.jpg", description: "Una saga familiar que sigue la vida de la familia Trueba a través de varias generaciones en un país latinoamericano sin nombre.", russianDescription: "Семейная сага о любви, магии и политических потрясениях в Латинской Америке." },
      { title: "Crónica de una muerte", author: "Gabriel García Márquez", cover: "/books/book32.jpg", description: "Una novela corta que relata el asesinato de Santiago Nasar y cómo todo el pueblo sabía que iba a ocurrir.", russianDescription: "История о предсказанном убийстве, которое никто не смог или не захотел предотвратить." }
    ],
    adults: [
      { title: "La sombra del viento", author: "Carlos Ruiz Zafón", cover: "/books/book33.jpg", description: "Un misterio literario ambientado en la Barcelona de la posguerra, centrado en un cementerio de libros olvidados.", russianDescription: "Литературный триллер о тайне проклятой книги в послевоенной Барселоне." },
      { title: "Rayuela", author: "Julio Cortázar", cover: "/books/book34.jpg", description: "Una novela experimental que puede leerse en diferentes órdenes, rompiendo la estructura narrativa tradicional.", russianDescription: "Экспериментальный роман, который можно читать в разном порядке глав." },
      { title: "Don Quijote de la Mancha", author: "Miguel de Cervantes", cover: "/books/book35.jpg", description: "La obra cumbre de la lengua española, que narra las aventuras de un hidalgo que se cree caballero andante.", russianDescription: "Величайший испанский роман о приключениях рыцаря печального образа." },
      { title: "Veinte poemas de amor", author: "Pablo Neruda", cover: "/books/book36.jpg", description: "Una de las obras más célebres de Neruda, que explora los sentimientos del amor y la melancolía.", russianDescription: "Сборник страстной и меланхоличной любовной лирики Пабло Неруды." }
    ]
  },
  cn: { // Corrected to match other languages for consistency
    kids: [
      { title: "Journey to the West", author: "Wu Cheng'en", cover: "/books/book37.jpg", description: "西游记是中国四大名著之一，讲述了孙悟空保护唐僧去西天取经的故事。", russianDescription: "«Путешествие на Запад» — история о Сунь Укуне, сопровождающем монаха в поисках священных текстов." },
      { title: "The Monkey King", author: "Wu Cheng'en", cover: "/books/book38.jpg", description: "美猴王孙悟空是大闹天宫的英雄，拥有七十二变和神奇的金箍棒。", russianDescription: "История о Короле Обезьян, обладающем магическими способностями и сражающемся с богами." },
      { title: "The Little Match Girl", author: "Hans Christian Andersen", cover: "/books/book39.jpg", description: "卖火柴的小女孩是一个感人的童话故事，讲述了一个贫苦小女孩在除夕夜的故事。", russianDescription: "«Девочка со спичками» — трогательная сказка о бедной девочке в канун Нового года." },
      { title: "The Story of the Stone", author: "Cao Xueqin", cover: "/books/book40.jpg", description: "红楼梦，又称石头记，是中国最伟大的古典小说，描绘了贾府的兴衰。", russianDescription: "«Сон в красном тереме» — величайший классический роман о расцвете и упадке знатной семьи." }
    ],
    students: [
      { title: "The Art of War", author: "Sun Tzu", cover: "/books/book41.jpg", description: "孙子兵法是世界上最早的兵书，其中的智慧至今仍应用于商业和生活。", russianDescription: "«Искусство войны» Сунь-цзы — древний трактат, мудрость которого актуальна и сегодня." },
      { title: "Dream of the Red Chamber", author: "Cao Xueqin", cover: "/books/book42.jpg", description: "红楼梦不仅是一部小说，更是中国封建社会的百科全书。", russianDescription: "Роман «Сон в красном тереме» как энциклопедия жизни китайского общества." },
      { title: "Three Kingdoms", author: "Luo Guanzhong", cover: "/books/book43.jpg", description: "三国演义描述了汉朝末年群雄逐鹿的战争场面和政治斗争。", russianDescription: "«Троецарствие» — эпическое полотно о войнах и интригах в конце эпохи Хань." },
      { title: "Water Margin", author: "Shi Nai'an", cover: "/books/book44.jpg", description: "水浒传讲述了一百零八位好汉反抗贪官污吏，在梁山泊起义的故事。", russianDescription: "«Речные заводи» — история о 108 благородных разбойниках, восставших против коррупции." }
    ],
    adults: [
      { title: "Red Sorghum", author: "Mo Yan", cover: "/books/book45.jpg", description: "红高粱家族是莫言的代表作，描写了抗日战争时期农民的英勇斗争。", russianDescription: "«Красный гаолян» Мо Яня — история героизма крестьян в годы войны с Японией." },
      { title: "To Live", author: "Yu Hua", cover: "/books/book46.jpg", description: "活着通过农民福贵的苦难经历，展现了中国人顽强的生命力。", russianDescription: "«Жить» Юй Хуа — глубокая драма о силе человеческого духа и воле к жизни." },
      { title: "The Three-Body Problem", author: "Liu Cixin", cover: "/books/book47.jpg", description: "三体是中国最成功的科幻小说，探讨了人类文明与外星文明的接触。", russianDescription: "«Задача трех тел» — научно-фантастический бестселлер о контакте с внеземным разумом." },
      { title: "Soul Mountain", author: "Gao Xingjian", cover: "/books/book48.jpg", description: "灵山是一部寻找自我和探索中国边远地区文化的文学杰作。", russianDescription: "«Чудотворные горы» — лауреат Нобелевской премии, философское путешествие вглубь Китая." }
    ]
  },
  ar: { // Added for consistency
    kids: [
      { title: "Arabian Nights", author: "Various", cover: "/books/book49.jpg", description: "ألف ليلة وليلة هي مجموعة من القصص الشعبية من الشرق الأوسط وغرب آسيا.", russianDescription: "«Тысяча и одна ночь» — знаменитый сборник сказок народов Востока." },
      { title: "Kalila and Dimna", author: "Ibn al-Muqaffa'", cover: "/books/book50.jpg", description: "كليلة ودمنة هو كتاب يتضمن مجموعة من القصص الأخلاقية على لسان الحيوانات.", russianDescription: "«Калила и Димна» — сборник басен и поучительных историй о животных." },
      { title: "Sinbad the Sailor", author: "Various", cover: "/books/book51.jpg", description: "قصة السندباد البحري هي واحدة من أشهر حكايات ألف ليلة وليلة.", russianDescription: "Сказка о Синдбаде-мореходе, совершившем семь невероятных путешествий." },
      { title: "Ali Baba", author: "Various", cover: "/books/book52.jpg", description: "علي بابا والأربعون حرامي هي قصة شهيرة من التراث العربي.", russianDescription: "«Али-Баба и сорок разбойников» — классическая арабская сказка о сокровищах." }
    ],
    students: [
      { title: "The Prophet", author: "Kahlil Gibran", cover: "/books/book53.jpg", description: "النبي هو كتاب من تأليف جبران خليل جبران، يحتوي على مجموعة من المواعظ الفلسفية.", russianDescription: "«Пророк» Халиля Джебрана — философские размышления о жизни, любви и свободе." },
      { title: "Splendid Suns", author: "Khaled Hosseini", cover: "/books/book54.jpg", description: "ألف شمس ساطعة هي رواية تتناول حياة امرأتين في أفغانستان خلال عقود من الاضطرابات.", russianDescription: "«Тысяча сияющих солнц» — драматическая история двух женщин в охваченном войной Афганистане." },
      { title: "The Kite Runner", author: "Khaled Hosseini", cover: "/books/book55.jpg", description: "عداء الطائرة الورقية هي رواية تتناول قصة صداقة وخيانة في أفغانستان.", russianDescription: "«Бегущий за ветром» — глубокий роман о дружбе, предательстве и искуплении." },
      { title: "Palace Walk", author: "Naguib Mahfouz", cover: "/books/book56.jpg", description: "بين القصرين هي الجزء الأول من ثلاثية القاهرة الشهيرة لنجيب محفوظ.", russianDescription: "«Байан аль-Касрайн» — первая часть Каирской трилогии Нагиба Махфуза о жизни египетской семьи." }
    ],
    adults: [
      { title: "The Cairo Trilogy", author: "Naguib Mahfouz", cover: "/books/book57.jpg", description: "ثلاثية القاهرة هي ملحمة أدبية تصور حياة أجيال متعاقبة في القاهرة.", russianDescription: "«Каирская трилогия» — эпическая сага, изображающая жизнь нескольких поколений каирской семьи." },
      { title: "Season of Migration", author: "Tayeb Salih", cover: "/books/book58.jpg", description: "موسم الهجرة إلى الشمال هي رواية سودانية تتناول الصدام بين الشرق والغرب.", russianDescription: "«Сезон паломничества на север» — классика арабской литературы о столкновении Востока и Запада." },
      { title: "Children of Gebelawi", author: "Naguib Mahfouz", cover: "/books/book59.jpg", description: "أولاد حارتنا هي رواية رمزية فلسفية مثيرة للجدل لنجيب محفوظ.", russianDescription: "«Дети нашей улицы» — философская аллегория Махфуза о поиске справедливости и веры." },
      { title: "The Yacoubian Building", author: "Alaa Al Aswany", cover: "/books/book60.jpg", description: "عمارة يعقوبيان هي رواية تصور المجتمع المصري المعاصر من خلال سكان مبنى واحد.", russianDescription: "«Дом Якубяна» — портрет современного египетского общества через судьбы жителей одного дома." }
    ]
  }
};

export const cinemaData: Record<string, any> = {
  en: {
    cartoons: {
      A1: { title: "Peppa Pig: Learning English", desc: "Basic words for kids", url: "https://youtu.be/gAEvd_dsFSY?si=ysmjwPX_XvIDIycM", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      A2: { title: "Masha and the Bear", desc: "Simple sentences", url: "https://youtu.be/VAf5BCUCbok?si=HKeBURugaAv97b9x", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B1: { title: "Adventure Time", desc: "Everyday conversations", url: "https://youtu.be/tg7ovSctPX8?si=A51r3Igx6VHkw9XL", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B2: { title: "The Simpsons", desc: "Cultural references", url: "https://youtu.be/yFagIIKjGIY?si=J6akz1_w6OizfUik", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" }
    },
    movies: {
      A1: { title: "Easy English Movie", desc: "Simple plot", url: "https://youtu.be/0CEccHU-Ypo?si=3HRuDK_UstOpTWCm", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      A2: { title: "Forrest Gump", desc: "Classic story", url: "https://youtu.be/E18TiWdvTss?si=TVAxQzcZKx4Yp_e1", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B1: { title: "The King's Speech", desc: "British accent", url: "https://youtu.be/OT16yUEh7-0?si=5qXRD58Ejce0WcuY", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B2: { title: "The Social Network", desc: "Fast-paced dialogue", url: "https://youtu.be/wX4bKWhtK8M?si=mbxroyB7G214DsvF", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" }
    }
  },
  fr: {
    cartoons: {
      A1: { title: "T'choupi à l'école", desc: "Mots simples", url: "https://youtu.be/fVopuaJzWN0?si=cQNFH02gfSZXH85Z", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      A2: { title: "Trotro", desc: "Phrases de base", url: "https://youtu.be/TWKHwRDFIPs?si=STjoMOkFL8iAxbMH", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B1: { title: "Miraculous", desc: "Conversations courantes", url: "https://youtu.be/76_w828asSw?si=nB_hlL1MiMsh6Xdc", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B2: { title: "Les Shadoks", desc: "Humour et culture", url: "https://youtu.be/mHtiUrJOJqo?si=lHZ9zUX7q16RQD_-", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" }
    },
    movies: {
      A1: { title: "Le Dîner de Cons", desc: "Humour simple", url: "https://youtu.be/UYYwaFy05-U?si=5Qq8JnLUUxffoSQ_", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      A2: { title: "Intouchables", desc: "Dialogue clair", url: "https://youtu.be/oqbysjyG_l4?si=k_ZLwhsuTwCWxgJw", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B1: { title: "Amélie", desc: "Film culte", url: "https://youtu.be/AVFHSVdsqKU?si=En4Hrh2Osb9nHQ3Y", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B2: { title: "La Haine", desc: "Langage familier", url: "https://youtu.be/pdXYtMGrSSE?si=V7ThFWg6OFkHYICx", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" }
    }
  },
  es: { // Added for consistency
    cartoons: {
      A1: { title: "Pocoyó", desc: "Vocabulario básico", url: "https://youtu.be/yohfV-DzB-I?si=BQq-CJGXPiKngxJ3", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      A2: { title: "Peppa Pig en Español", desc: "Frases sencillas", url: "https://youtu.be/BBSD4u2CFSo?si=t0hrezhwPNmQ5Jzh", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B1: { title: "Cantajuego", desc: "Canciones y diálogos", url: "https://youtu.be/mYiwxBwTQ_E?si=6O1Ewchh6ijM7LNz", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B2: { title: "El Chavo Animado", desc: "Humor y cultura", url: "https://youtube.com/shorts/72HFe5u_U40?si=lXsOaCT0dOvk1XE7", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" }
    },
    movies: {
      A1: { title: "Ocho Apellidos Vascos", desc: "Comedia ligera", url: "https://youtu.be/7kVNqAlIT-c?si=MSg_OFRLuTDNSmzC", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      A2: { title: "El Laberinto del Fauno", desc: "Fantasía oscura", url: "https://youtu.be/gKRht96o_68?si=T79ruUVa1__ASXSt", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B1: { title: "Volver", desc: "Drama familiar", url: "https://youtube.com/shorts/XCnVnGmuAYE?si=xqR_aNQLavgUD9ht", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B2: { title: "Relatos Salvajes", desc: "Comedia negra", url: "https://youtu.be/KWxxnUYO1Ek?si=n0iRtOf8RLj52nzr", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" }
    }
  },
  cn: { // Added for consistency
    cartoons: {
      A1: { title: "Pleasant Goat and Big Big Wolf", desc: "Simple Chinese", url: "https://youtu.be/krhO7PwW7AY?si=T-K9jTDmHFANatzG", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      A2: { title: "Boonie Bears", desc: "Basic conversations", url: "https://youtu.be/GEXEHWPsREc?si=DP3vBygug4WDiPCL", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B1: { title: "Monkey King: Hero Is Back", desc: "Chinese mythology", url: "https://youtu.be/ul2qvUfisOE?si=3_wpHIyp31DNZ1Xh", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B2: { title: "Nezha", desc: "Advanced vocabulary", url: "https://youtu.be/edEGcpA0How?si=ZN6JVzl2HvwVfcdk", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" }
    },
    movies: {
      A1: { title: "The Farewell", desc: "Family drama", url: "https://youtu.be/AScXo7W3q5k?si=nnFO63OOOI1XQv4l", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      A2: { title: "Crouching Tiger, Hidden Dragon", desc: "Cultural themes", url: "https://youtu.be/EBOOJU9Pphw?si=tRkNn-5uUA5nn3Oj", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B1: { title: "Hero", desc: "Historical epic", url: "https://youtu.be/_cEPCAyPorw?si=9c0Kb3fml7Fbqi6W", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B2: { title: "Farewell My Concubine", desc: "Complex narrative", url: "https://youtu.be/_cEPCAyPorw?si=OzoYnJVSRs5wnh1i", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" }
    }
  },
  ar: { // Added for consistency
    cartoons: {
      A1: { title: "The 99", desc: "Basic Arabic", url: "https://youtube.com/shorts/RlxsuAa1ynA?si=ULdn-Mcg-BC2kFYP", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      A2: { title: "Freej", desc: "Everyday life", url: "https://youtu.be/2itVlcsNjgw?si=Y38DI8JRzEJuQVP4", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B1: { title: "Adnan wa Lina", desc: "Classic anime", url: "https://youtu.be/DRhGT5FTn8g?si=60gZaywtFNf4SauQ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B2: { title: "Shaabiat Al Cartoon", desc: "Social commentary", url: "https://youtu.be/Y-j5BFGCJR0?si=pEKLNsolvEeLIyKX", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" }
    },
    movies: {
      A1: { title: "The Message", desc: "Historical drama", url: "https://youtu.be/vQKqv4JboBU?si=R8TIEQ0b5HzIIuR0", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      A2: { title: "Omar", desc: "Palestinian drama", url: "https://youtu.be/Afui9KDHnkA?si=za-YkdnicLVnkk45", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B1: { title: "The Insult", desc: "Legal drama", url: "https://www.imdb.com/title/tt7048622/?ref_=ext_shr_lnk", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B2: { title: "Capernaum", desc: "Social realism", url: "https://youtu.be/oial-Xy7LIU?si=ScEmU5EVf_SG3oG0", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" }
    }
  }
};

export const teachers = [
  { id: 1, name: 'Sarah Wilson', lang: 'English', color: 'bg-orange-100 text-orange-600' },
  { id: 2, name: 'John Smith', lang: 'English', color: 'bg-purple-100 text-purple-600' },
  { id: 3, name: 'Li Wei', lang: 'Chinese', color: 'bg-red-100 text-red-600' },
  { id: 4, name: 'Wang Fen', lang: 'Chinese', color: 'bg-green-100 text-green-600' },
  { id: 5, name: 'Amira Ahmed', lang: 'Arabic', color: 'bg-emerald-100 text-emerald-600' },
  { id: 6, name: 'Omar Hassan', lang: 'Arabic', color: 'bg-blue-100 text-blue-600' },
  { id: 7, name: 'Jean Reno', lang: 'French', color: 'bg-blue-100 text-blue-600' },
  { id: 8, name: 'Marie Dubois', lang: 'French', color: 'bg-pink-100 text-pink-600' },
  { id: 9, name: 'Elena Gomez', lang: 'Spanish', color: 'bg-yellow-100 text-yellow-600' },
  { id: 10, name: 'Carlos Ruiz', lang: 'Spanish', color: 'bg-indigo-100 text-indigo-600' },
];

export const practiceData: Record<string, any[]> = {
  en: [
    { word: 'Environment', transcription: '[ɪnˈvaɪrənmənt]', translation: 'Окружающая среда', example: 'We must protect the environment.' },
    { word: 'Achievement', transcription: '[əˈtʃiːvmənt]', translation: 'Достижение', example: 'It was a great achievement.' },
    { word: 'Sustainable', transcription: '[səˈsteɪnəbl]', translation: 'Устойчивый', example: 'Sustainable development is key.' },
  ],
  fr: [
    { word: 'Bonjour', transcription: '[bɔ̃ʒuʁ]', translation: 'Здравствуйте', example: 'Bonjour, comment allez-vous?' },
    { word: 'Bibliothèque', transcription: '[bibliɔtɛk]', translation: 'Библиотека', example: 'Je vais à la bibliothèque.' },
  ],
  es: [
    { word: 'Gracias', transcription: '[ˈɡɾaθjas]', translation: 'Спасибо', example: 'Muchas gracias por todo.' },
    { word: 'Felicidad', transcription: '[feliθiˈðað]', translation: 'Счастье', example: 'La felicidad es importante.' },
  ],
  cn: [
    { word: '你好', transcription: '[Nǐ hǎo]', translation: 'Привет', example: '你好，很高兴见到你。' },
    { word: '谢谢', transcription: '[Xièxiè]', translation: 'Спасибо', example: '谢谢你的帮助。' },
  ],
  ar: [
    { word: 'مرحباً', transcription: '[Marḥaban]', translation: 'Привет', example: 'مرحباً بك в منزلنا.' },
    { word: 'شكراً', transcription: '[Shukran]', translation: 'Спасибо', example: 'شكراً جزيلاً لك.' },
  ],
};

export const quizData: Record<string, any[]> = {
  en: [
    { question: 'What is the opposite of "Hot"?', options: ['Cold', 'Warm', 'Sunny', 'Dry'], correct: 0 },
    { question: 'Past tense of "Speak"?', options: ['Speaked', 'Spoke', 'Spoken', 'Speaking'], correct: 1 },
  ],
  fr: [
    { question: 'Comment dit-on "Water" en français?', options: ['Pain', 'Eau', 'Lait', 'Vin'], correct: 1 },
    { question: 'Le pluriel de "Chat"?', options: ['Chats', 'Chate', 'Chatx', 'Chatus'], correct: 0 },
  ],
  es: [
    { question: '¿Cómo se dice "Red" en español?', options: ['Azul', 'Rojo', 'Verde', 'Amarillo'], correct: 1 },
    { question: 'Plural de "Libro"?', options: ['Libros', 'Libre', 'Libreza', 'Libramen'], correct: 0 },
  ],
  cn: [
    { question: '"再见" means?', options: ['Hello', 'Goodbye', 'Thank you', 'Please'], correct: 1 },
    { question: 'Which character means "Person"?', options: ['人', '大', '天', '口'], correct: 0 },
  ],
  ar: [
    { question: 'How do you write "Peace"?', options: ['سلام', 'کلام', 'طعام', 'منام'], correct: 0 },
    { question: '"أنا" means?', options: ['You', 'He', 'I', 'She'], correct: 2 },
  ],
};

export const assessmentData: Record<string, any[]> = {
  en: [
    { q: 'Choose the correct form: "She ___ to school every day."', options: ['go', 'goes', 'going', 'gone'], correct: 1 },
    { q: 'Which word is a synonym for "Fast"?', options: ['Slow', 'Quick', 'Loud', 'Quiet'], correct: 1 },
    { q: 'Translate "Book" to Russian:', options: ['Ручка', 'Стол', 'Книга', 'Окно'], correct: 2 },
  ],
  fr: [
    { q: 'Translate "Apple" to French:', options: ['Pomme', 'Poire', 'Orange', 'Banane'], correct: 0 },
    { q: 'Which is a greeting?', options: ['Merci', 'Bonjour', 'S\'il vous plaît', 'Pardon'], correct: 1 },
  ],
  es: [
    { q: 'Translate "House" to Spanish:', options: ['Mesa', 'Silla', 'Casa', 'Perro'], correct: 2 },
    { q: 'Which means "Good morning"?', options: ['Buenas noches', 'Buenas tardes', 'Buenos días', 'Hola'], correct: 2 },
  ],
  cn: [
    { q: 'What is "Water" in Chinese?', options: ['水', '火', '土', '木'], correct: 0 },
    { q: 'Which character means "Mountain"?', options: ['山', '川', '日', '月'], correct: 0 },
  ],
  ar: [
    { q: 'What is "Book" in Arabic?', options: ['كتاب', 'قلم', 'مكتب', 'دفتر'], correct: 0 },
    { q: 'Which is a number?', options: ['بيت', 'واحد', 'سماء', 'بحر'], correct: 1 },
  ],
};