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
      { title: "The Little Prince", author: "Antoine de Saint-Exupéry", cover: "book1.jpg" },
      { title: "Harry Potter", author: "J.K. Rowling", cover: "book2.jpg" },
      { title: "Charlotte's Web", author: "E.B. White", cover: "book3.jpg" },
      { title: "Matilda", author: "Roald Dahl", cover: "book4.jpg" }
    ],
    students: [
      { title: "1984", author: "George Orwell", cover: "book5.jpg" },
      { title: "Sapiens", author: "Yuval Noah Harari", cover: "book6.jpg" },
      { title: "To Kill a Mockingbird", author: "Harper Lee", cover: "book7.jpg" },
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald", cover: "book8.jpg" }
    ],
    adults: [
      { title: "Atomic Habits", author: "James Clear", cover: "book9.jpg" },
      { title: "Deep Work", author: "Cal Newport", cover: "book10.jpg" },
      { title: "The Power of Habit", author: "Charles Duhigg", cover: "book11.jpg" },
      { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", cover: "book12.jpg" }
    ]
  },
  fr: {
    kids: [
      { title: "Le Petit Prince", author: "Antoine de Saint-Exupéry", cover: "book13.jpg" },
      { title: "Astérix le Gaulois", author: "René Goscinny", cover: "book14.jpg" },
      { title: "Le Tour du monde", author: "Jules Verne", cover: "book15.jpg" },
      { title: "Le Petit Nicolas", author: "René Goscinny", cover: "book16.jpg" }
    ],
    students: [
      { title: "L'Étranger", author: "Albert Camus", cover: "book17.jpg" },
      { title: "Candide", author: "Voltaire", cover: "book18.jpg  " },
      { title: "Le Rouge et le Noir", author: "Stendhal", cover: "book19.jpg" },
      { title: "Madame Bovary", author: "Gustave Flaubert", cover: "book20.jpg" }
    ],
    adults: [
      { title: "Les Misérables", author: "Victor Hugo", cover: "book21.jpg" },
      { title: "Marcel Proust", author: "Marcel Proust", cover: "book22.jpg" },
      { title: "Monte-Cristo", author: "Alexandre Dumas", cover: "book23.jpg" },
      { title: "Germinal", author: "Émile Zola", cover: "book24.jpg" }
    ]
  },
  es: {
    kids: [
      { title: "Don Quijote para niños", author: "Miguel de Cervantes", cover: "book25.jpg" },
      { title: "Platero y yo", author: "Juan Ramón Jiménez", cover: "book26.jpg" },
      { title: "El Principito", author: "Antoine de Saint-Exupéry", cover: "book27.jpg" },
      { title: "Cuentos de la selva", author: "Horacio Quiroga", cover: "book28.jpg" }
    ],
    students: [
      { title: "Cien años de soledad", author: "Gabriel García Márquez", cover: "book29.jpg" },
      { title: "El amor en los tiempos del cólera", author: "Gabriel García Márquez", cover: "book30.jpg" },
      { title: "La casa de los espíritus", author: "Isabel Allende", cover: "book31.jpg" },
      { title: "Crónica de una muerte", author: "Gabriel García Márquez", cover: "book32.jpg" }
    ],
    adults: [
      { title: "La sombra del viento", author: "Carlos Ruiz Zafón", cover: "book33.jpg" },
      { title: "Rayuela", author: "Julio Cortázar", cover: "book34.jpg" },
      { title: "Don Quijote de la Mancha", author: "Miguel de Cervantes", cover: "book35.jpg" },
      { title: "Veinte poemas de amor", author: "Pablo Neruda", cover: "book36.jpg" }
    ]
  },
  cn: { // Corrected to match other languages for consistency
    kids: [
      { title: "Journey to the West", author: "Wu Cheng'en", cover: "book37.jpg" },
      { title: "The Monkey King", author: "Wu Cheng'en", cover: "book38.jpg" },
      { title: "The Little Match Girl", author: "Hans Christian Andersen", cover: "book39.jpg" },
      { title: "The Story of the Stone", author: "Cao Xueqin", cover: "book40.jpg" }
    ],
    students: [
      { title: "The Art of War", author: "Sun Tzu", cover: "book41.jpg" },
      { title: "Dream of the Red Chamber", author: "Cao Xueqin", cover: "book42.jpg" },
      { title: "Three Kingdoms", author: "Luo Guanzhong", cover: "book43.jpg" },
      { title: "Water Margin", author: "Shi Nai'an", cover: "book44.jpg" }
    ],
    adults: [
      { title: "Red Sorghum", author: "Mo Yan", cover: "book45.jpg" },
      { title: "To Live", author: "Yu Hua", cover: "book46.jpg" },
      { title: "The Three-Body Problem", author: "Liu Cixin", cover: "book47.jpg" },
      { title: "Soul Mountain", author: "Gao Xingjian", cover: "book48.jpg" }
    ]
  },
  ar: { // Added for consistency
    kids: [
      { title: "Arabian Nights", author: "Various", cover: "book49.jpg" },
      { title: "Kalila and Dimna", author: "Ibn al-Muqaffa'", cover: "book50.jpg" },
      { title: "Sinbad the Sailor", author: "Various", cover: "book51.jpg" },
      { title: "Ali Baba", author: "Various", cover: "book52.jpg" }
    ],
    students: [
      { title: "The Prophet", author: "Kahlil Gibran", cover: "book53.jpg" },
      { title: "Splendid Suns", author: "Khaled Hosseini", cover: "book54.jpg" },
      { title: "The Kite Runner", author: "Khaled Hosseini", cover: "book55.jpg" },
      { title: "Palace Walk", author: "Naguib Mahfouz", cover: "book56.jpg" }
    ],
    adults: [
      { title: "The Cairo Trilogy", author: "Naguib Mahfouz", cover: "book57.jpg" },
      { title: "Season of Migration", author: "Tayeb Salih", cover: "book58.jpg" },
      { title: "Children of Gebelawi", author: "Naguib Mahfouz", cover: "book59.jpg" },
      { title: "The Yacoubian Building", author: "Alaa Al Aswany", cover: "book60.jpg" }
    ]
  }
};

export const cinemaData: Record<string, any> = {
  en: {
    cartoons: {
      A1: { title: "Peppa Pig: Learning English", desc: "Basic words for kids", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      A2: { title: "Masha and the Bear", desc: "Simple sentences", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B1: { title: "Adventure Time", desc: "Everyday conversations", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B2: { title: "The Simpsons", desc: "Cultural references", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" }
    },
    movies: {
      A1: { title: "Easy English Movie", desc: "Simple plot", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      A2: { title: "Forrest Gump", desc: "Classic story", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B1: { title: "The King's Speech", desc: "British accent", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B2: { title: "The Social Network", desc: "Fast-paced dialogue", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" }
    }
  },
  fr: {
    cartoons: {
      A1: { title: "T'choupi à l'école", desc: "Mots simples", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      A2: { title: "Trotro", desc: "Phrases de base", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B1: { title: "Miraculous", desc: "Conversations courantes", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B2: { title: "Les Shadoks", desc: "Humour et culture", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" }
    },
    movies: {
      A1: { title: "Le Dîner de Cons", desc: "Humour simple", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      A2: { title: "Intouchables", desc: "Dialogue clair", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B1: { title: "Amélie", desc: "Film culte", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B2: { title: "La Haine", desc: "Langage familier", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" }
    }
  },
  es: { // Added for consistency
    cartoons: {
      A1: { title: "Pocoyó", desc: "Vocabulario básico", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      A2: { title: "Peppa Pig en Español", desc: "Frases sencillas", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B1: { title: "Cantajuego", desc: "Canciones y diálogos", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B2: { title: "El Chavo Animado", desc: "Humor y cultura", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" }
    },
    movies: {
      A1: { title: "Ocho Apellidos Vascos", desc: "Comedia ligera", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      A2: { title: "El Laberinto del Fauno", desc: "Fantasía oscura", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B1: { title: "Volver", desc: "Drama familiar", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B2: { title: "Relatos Salvajes", desc: "Comedia negra", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" }
    }
  },
  cn: { // Added for consistency
    cartoons: {
      A1: { title: "Pleasant Goat and Big Big Wolf", desc: "Simple Chinese", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      A2: { title: "Boonie Bears", desc: "Basic conversations", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B1: { title: "Monkey King: Hero Is Back", desc: "Chinese mythology", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B2: { title: "Nezha", desc: "Advanced vocabulary", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" }
    },
    movies: {
      A1: { title: "The Farewell", desc: "Family drama", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      A2: { title: "Crouching Tiger, Hidden Dragon", desc: "Cultural themes", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B1: { title: "Hero", desc: "Historical epic", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B2: { title: "Farewell My Concubine", desc: "Complex narrative", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" }
    }
  },
  ar: { // Added for consistency
    cartoons: {
      A1: { title: "The 99", desc: "Basic Arabic", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      A2: { title: "Freej", desc: "Everyday life", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B1: { title: "Adnan wa Lina", desc: "Classic anime", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B2: { title: "Shaabiat Al Cartoon", desc: "Social commentary", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" }
    },
    movies: {
      A1: { title: "The Message", desc: "Historical drama", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      A2: { title: "Omar", desc: "Palestinian drama", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B1: { title: "The Insult", desc: "Legal drama", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" },
      B2: { title: "Capernaum", desc: "Social realism", url: "СЮДА_ВСТАВИТЬ_ССЫЛКУ_ЮТУБ", img: "СЮДА_ВСТАВИТЬ_ПРЕВЬЮ_ВИДЕО" }
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