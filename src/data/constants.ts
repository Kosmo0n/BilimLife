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
      { title: "The Little Prince", author: "Antoine de Saint-Exupéry", cover: "https://covers.openlibrary.org/b/id/14546594-M.jpg" },
      { title: "Harry Potter", author: "J.K. Rowling", cover: "https://covers.openlibrary.org/b/id/10521270-M.jpg" },
      { title: "Charlotte's Web", author: "E.B. White", cover: "https://covers.openlibrary.org/b/id/12918840-M.jpg" },
      { title: "Matilda", author: "Roald Dahl", cover: "https://covers.openlibrary.org/b/id/12921966-M.jpg" }
    ],
    students: [
      { title: "1984", author: "George Orwell", cover: "https://covers.openlibrary.org/b/id/12818862-M.jpg" },
      { title: "Sapiens", author: "Yuval Noah Harari", cover: "https://covers.openlibrary.org/b/id/13101565-M.jpg" },
      { title: "To Kill a Mockingbird", author: "Harper Lee", cover: "https://covers.openlibrary.org/b/id/12818987-M.jpg" },
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald", cover: "https://covers.openlibrary.org/b/id/12818957-M.jpg" }
    ],
    adults: [
      { title: "Atomic Habits", author: "James Clear", cover: "https://covers.openlibrary.org/b/id/12852656-M.jpg" },
      { title: "Deep Work", author: "Cal Newport", cover: "https://covers.openlibrary.org/b/id/12843075-M.jpg" },
      { title: "The Power of Habit", author: "Charles Duhigg", cover: "https://covers.openlibrary.org/b/id/12819385-M.jpg" },
      { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", cover: "https://covers.openlibrary.org/b/id/12819445-M.jpg" }
    ]
  },
  fr: {
    kids: [
      { title: "Le Petit Prince", author: "Antoine de Saint-Exupéry", cover: "https://covers.openlibrary.org/b/id/14546594-M.jpg" },
      { title: "Astérix le Gaulois", author: "René Goscinny", cover: "https://covers.openlibrary.org/b/id/12854930-M.jpg" },
      { title: "Le Tour du monde", author: "Jules Verne", cover: "https://covers.openlibrary.org/b/id/12850935-M.jpg" },
      { title: "Le Petit Nicolas", author: "René Goscinny", cover: "https://covers.openlibrary.org/b/id/12850930-M.jpg" }
    ],
    students: [
      { title: "L'Étranger", author: "Albert Camus", cover: "https://covers.openlibrary.org/b/id/12850938-M.jpg" },
      { title: "Candide", author: "Voltaire", cover: "https://covers.openlibrary.org/b/id/12851145-M.jpg" },
      { title: "Le Rouge et le Noir", author: "Stendhal", cover: "https://covers.openlibrary.org/b/id/12819036-M.jpg" },
      { title: "Madame Bovary", author: "Gustave Flaubert", cover: "https://covers.openlibrary.org/b/id/12851139-M.jpg" }
    ],
    adults: [
      { title: "Les Misérables", author: "Victor Hugo", cover: "https://covers.openlibrary.org/b/id/12851152-M.jpg" },
      { title: "Marcel Proust", author: "Marcel Proust", cover: "https://covers.openlibrary.org/b/id/12818939-M.jpg" },
      { title: "Monte-Cristo", author: "Alexandre Dumas", cover: "https://covers.openlibrary.org/b/id/12851158-M.jpg" },
      { title: "Germinal", author: "Émile Zola", cover: "https://covers.openlibrary.org/b/id/12851165-M.jpg" }
    ]
  },
  es: {
    kids: [
      { title: "Don Quijote para niños", author: "Miguel de Cervantes", cover: "https://covers.openlibrary.org/b/id/12818951-M.jpg" },
      { title: "Platero y yo", author: "Juan Ramón Jiménez", cover: "https://covers.openlibrary.org/b/id/12851394-M.jpg" },
      { title: "El Principito", author: "Antoine de Saint-Exupéry", cover: "https://covers.openlibrary.org/b/id/14546594-M.jpg" },
      { title: "Cuentos de la selva", author: "Horacio Quiroga", cover: "https://covers.openlibrary.org/b/id/12851398-M.jpg" }
    ],
    students: [
      { title: "Cien años de soledad", author: "Gabriel García Márquez", cover: "https://covers.openlibrary.org/b/id/12851406-M.jpg" },
      { title: "El amor en los tiempos del cólera", author: "Gabriel García Márquez", cover: "https://covers.openlibrary.org/b/id/12851412-M.jpg" },
      { title: "La casa de los espíritus", author: "Isabel Allende", cover: "https://covers.openlibrary.org/b/id/12851419-M.jpg" },
      { title: "Crónica de una muerte", author: "Gabriel García Márquez", cover: "https://covers.openlibrary.org/b/id/12851425-M.jpg" }
    ],
    adults: [
      { title: "La sombra del viento", author: "Carlos Ruiz Zafón", cover: "https://covers.openlibrary.org/b/id/12851432-M.jpg" },
      { title: "Rayuela", author: "Julio Cortázar", cover: "https://covers.openlibrary.org/b/id/12851441-M.jpg" },
      { title: "Don Quijote de la Mancha", author: "Miguel de Cervantes", cover: "https://covers.openlibrary.org/b/id/12818951-M.jpg" },
      { title: "Veinte poemas de amor", author: "Pablo Neruda", cover: "https://covers.openlibrary.org/b/id/12851448-M.jpg" }
    ]
  },
  cn: { // Corrected to match other languages for consistency
    kids: [
      { title: "Journey to the West", author: "Wu Cheng'en", cover: "https://covers.openlibrary.org/b/id/12847975-M.jpg" },
      { title: "The Monkey King", author: "Wu Cheng'en", cover: "https://covers.openlibrary.org/b/id/12847981-M.jpg" },
      { title: "The Little Match Girl", author: "Hans Christian Andersen", cover: "https://covers.openlibrary.org/b/id/12851500-M.jpg" },
      { title: "The Story of the Stone", author: "Cao Xueqin", cover: "https://covers.openlibrary.org/b/id/12851508-M.jpg" }
    ],
    students: [
      { title: "The Art of War", author: "Sun Tzu", cover: "https://covers.openlibrary.org/b/id/12818961-M.jpg" },
      { title: "Dream of the Red Chamber", author: "Cao Xueqin", cover: "https://covers.openlibrary.org/b/id/12851508-M.jpg" },
      { title: "Three Kingdoms", author: "Luo Guanzhong", cover: "https://covers.openlibrary.org/b/id/12851515-M.jpg" },
      { title: "Water Margin", author: "Shi Nai'an", cover: "https://covers.openlibrary.org/b/id/12851522-M.jpg" }
    ],
    adults: [
      { title: "Red Sorghum", author: "Mo Yan", cover: "https://covers.openlibrary.org/b/id/12851530-M.jpg" },
      { title: "To Live", author: "Yu Hua", cover: "https://covers.openlibrary.org/b/id/12851538-M.jpg" },
      { title: "The Three-Body Problem", author: "Liu Cixin", cover: "https://covers.openlibrary.org/b/id/12819001-M.jpg" },
      { title: "Soul Mountain", author: "Gao Xingjian", cover: "https://covers.openlibrary.org/b/id/12851545-M.jpg" }
    ]
  },
  ar: { // Added for consistency
    kids: [
      { title: "Arabian Nights", author: "Various", cover: "https://covers.openlibrary.org/b/id/12849980-M.jpg" },
      { title: "Kalila and Dimna", author: "Ibn al-Muqaffa'", cover: "https://covers.openlibrary.org/b/id/12849988-M.jpg" },
      { title: "Sinbad the Sailor", author: "Various", cover: "https://covers.openlibrary.org/b/id/12849992-M.jpg" },
      { title: "Ali Baba", author: "Various", cover: "https://covers.openlibrary.org/b/id/12850000-M.jpg" }
    ],
    students: [
      { title: "The Prophet", author: "Kahlil Gibran", cover: "https://covers.openlibrary.org/b/id/12849995-M.jpg" },
      { title: "Splendid Suns", author: "Khaled Hosseini", cover: "https://covers.openlibrary.org/b/id/12819005-M.jpg" },
      { title: "The Kite Runner", author: "Khaled Hosseini", cover: "https://covers.openlibrary.org/b/id/12819012-M.jpg" },
      { title: "Palace Walk", author: "Naguib Mahfouz", cover: "https://covers.openlibrary.org/b/id/12850010-M.jpg" },
    ],
    adults: [
      { title: "The Cairo Trilogy", author: "Naguib Mahfouz", cover: "https://covers.openlibrary.org/b/id/12850015-M.jpg" },
      { title: "Season of Migration", author: "Tayeb Salih", cover: "https://covers.openlibrary.org/b/id/12850022-M.jpg" },
      { title: "Children of Gebelawi", author: "Naguib Mahfouz", cover: "https://covers.openlibrary.org/b/id/12850028-M.jpg" },
      { title: "The Yacoubian Building", author: "Alaa Al Aswany", cover: "https://covers.openlibrary.org/b/id/12850035-M.jpg" }
    ]
  }
};

export const cinemaData: Record<string, any> = {
  en: {
    cartoons: {
      A1: { title: "Peppa Pig: Learning English", desc: "Basic words for kids", url: "https://www.youtube.com/watch?v=L2yP1_g3k3Q", img: "https://i.ytimg.com/vi/L2yP1_g3k3Q/hq720.jpg" },
      A2: { title: "Masha and the Bear", desc: "Simple sentences", url: "https://www.youtube.com/watch?v=KYg_f22j-5g", img: "https://i.ytimg.com/vi/KYg_f22j-5g/hq720.jpg" },
      B1: { title: "Adventure Time", desc: "Everyday conversations", url: "https://www.youtube.com/watch?v=X0jP-t20B0Q", img: "https://i.ytimg.com/vi/X0jP-t20B0Q/hq720.jpg" },
      B2: { title: "The Simpsons", desc: "Cultural references", url: "https://www.youtube.com/watch?v=DX1o_s6204g", img: "https://i.ytimg.com/vi/DX1o_s6204g/hq720.jpg" }
    },
    movies: {
      A1: { title: "Easy English Movie", desc: "Simple plot", url: "https://www.youtube.com/watch?v=a_y-y814_1Q", img: "https://i.ytimg.com/vi/a_y-y814_1Q/hq720.jpg" },
      A2: { title: "Forrest Gump", desc: "Classic story", url: "https://www.youtube.com/watch?v=bT8_y4K1y_k", img: "https://i.ytimg.com/vi/bT8_y4K1y_k/hq720.jpg" },
      B1: { title: "The King's Speech", desc: "British accent", url: "https://www.youtube.com/watch?v=oz49GL_W-1A", img: "https://i.ytimg.com/vi/oz49GL_W-1A/hq720.jpg" },
      B2: { title: "The Social Network", desc: "Fast-paced dialogue", url: "https://www.youtube.com/watch?v=lB95KLmpzEE", img: "https://i.ytimg.com/vi/lB95KLmpzEE/hq720.jpg" }
    }
  },
  fr: {
    cartoons: {
      A1: { title: "T'choupi à l'école", desc: "Mots simples", url: "https://www.youtube.com/watch?v=z02z02z02z0", img: "https://i.ytimg.com/vi/z02z02z02z0/hq720.jpg" },
      A2: { title: "Trotro", desc: "Phrases de base", url: "https://www.youtube.com/watch?v=z02z02z02z1", img: "https://i.ytimg.com/vi/z02z02z02z1/hq720.jpg" },
      B1: { title: "Miraculous", desc: "Conversations courantes", url: "https://www.youtube.com/watch?v=z02z02z02z2", img: "https://i.ytimg.com/vi/z02z02z02z2/hq720.jpg" },
      B2: { title: "Les Shadoks", desc: "Humour et culture", url: "https://www.youtube.com/watch?v=z02z02z02z3", img: "https://i.ytimg.com/vi/z02z02z02z3/hq720.jpg" }
    },
    movies: {
      A1: { title: "Le Dîner de Cons", desc: "Humour simple", url: "https://www.youtube.com/watch?v=z02z02z02z4", img: "https://i.ytimg.com/vi/z02z02z02z4/hq720.jpg" },
      A2: { title: "Intouchables", desc: "Dialogue clair", url: "https://www.youtube.com/watch?v=z02z02z02z5", img: "https://i.ytimg.com/vi/z02z02z02z5/hq720.jpg" },
      B1: { title: "Amélie", desc: "Film culte", url: "https://www.youtube.com/watch?v=z02z02z02z6", img: "https://i.ytimg.com/vi/z02z02z02z6/hq720.jpg" },
      B2: { title: "La Haine", desc: "Langage familier", url: "https://www.youtube.com/watch?v=z02z02z02z7", img: "https://i.ytimg.com/vi/z02z02z02z7/hq720.jpg" }
    }
  },
  es: { // Added for consistency
    cartoons: {
      A1: { title: "Pocoyó", desc: "Vocabulario básico", url: "https://www.youtube.com/watch?v=es1es1es1es1", img: "https://i.ytimg.com/vi/es1es1es1es1/hq720.jpg" },
      A2: { title: "Peppa Pig en Español", desc: "Frases sencillas", url: "https://www.youtube.com/watch?v=es2es2es2es2", img: "https://i.ytimg.com/vi/es2es2es2es2/hq720.jpg" },
      B1: { title: "Cantajuego", desc: "Canciones y diálogos", url: "https://www.youtube.com/watch?v=es3es3es3es3", img: "https://i.ytimg.com/vi/es3es3es3es3/hq720.jpg" },
      B2: { title: "El Chavo Animado", desc: "Humor y cultura", url: "https://www.youtube.com/watch?v=es4es4es4es4", img: "https://i.ytimg.com/vi/es4es4es4es4/hq720.jpg" }
    },
    movies: {
      A1: { title: "Ocho Apellidos Vascos", desc: "Comedia ligera", url: "https://www.youtube.com/watch?v=es5es5es5es5", img: "https://i.ytimg.com/vi/es5es5es5es5/hq720.jpg" },
      A2: { title: "El Laberinto del Fauno", desc: "Fantasía oscura", url: "https://www.youtube.com/watch?v=es6es6es6es6", img: "https://i.ytimg.com/vi/es6es6es6es6/hq720.jpg" },
      B1: { title: "Volver", desc: "Drama familiar", url: "https://www.youtube.com/watch?v=es7es7es7es7", img: "https://i.ytimg.com/vi/es7es7es7es7/hq720.jpg" },
      B2: { title: "Relatos Salvajes", desc: "Comedia negra", url: "https://www.youtube.com/watch?v=es8es8es8es8", img: "https://i.ytimg.com/vi/es8es8es8es8/hq720.jpg" }
    }
  },
  cn: { // Added for consistency
    cartoons: {
      A1: { title: "Pleasant Goat and Big Big Wolf", desc: "Simple Chinese", url: "https://www.youtube.com/watch?v=cn1cn1cn1cn1", img: "https://i.ytimg.com/vi/cn1cn1cn1cn1/hq720.jpg" },
      A2: { title: "Boonie Bears", desc: "Basic conversations", url: "https://www.youtube.com/watch?v=cn2cn2cn2cn2", img: "https://i.ytimg.com/vi/cn2cn2cn2cn2/hq720.jpg" },
      B1: { title: "Monkey King: Hero Is Back", desc: "Chinese mythology", url: "https://www.youtube.com/watch?v=cn3cn3cn3cn3", img: "https://i.ytimg.com/vi/cn3cn3cn3cn3/hq720.jpg" },
      B2: { title: "Nezha", desc: "Advanced vocabulary", url: "https://www.youtube.com/watch?v=cn4cn4cn4cn4", img: "https://i.ytimg.com/vi/cn4cn4cn4cn4/hq720.jpg" }
    },
    movies: {
      A1: { title: "The Farewell", desc: "Family drama", url: "https://www.youtube.com/watch?v=cn5cn5cn5cn5", img: "https://i.ytimg.com/vi/cn5cn5cn5cn5/hq720.jpg" },
      A2: { title: "Crouching Tiger, Hidden Dragon", desc: "Cultural themes", url: "https://www.youtube.com/watch?v=cn6cn6cn6cn6", img: "https://i.ytimg.com/vi/cn6cn6cn6cn6/hq720.jpg" },
      B1: { title: "Hero", desc: "Historical epic", url: "https://www.youtube.com/watch?v=cn7cn7cn7cn7", img: "https://i.ytimg.com/vi/cn7cn7cn7cn7/hq720.jpg" },
      B2: { title: "Farewell My Concubine", desc: "Complex narrative", url: "https://www.youtube.com/watch?v=cn8cn8cn8cn8", img: "https://i.ytimg.com/vi/cn8cn8cn8cn8/hq720.jpg" }
    }
  },
  ar: { // Added for consistency
    cartoons: {
      A1: { title: "The 99", desc: "Basic Arabic", url: "https://www.youtube.com/watch?v=ar1ar1ar1ar1", img: "https://i.ytimg.com/vi/ar1ar1ar1ar1/hq720.jpg" },
      A2: { title: "Freej", desc: "Everyday life", url: "https://www.youtube.com/watch?v=ar2ar2ar2ar2", img: "https://i.ytimg.com/vi/ar2ar2ar2ar2/hq720.jpg" },
      B1: { title: "Adnan wa Lina", desc: "Classic anime", url: "https://www.youtube.com/watch?v=ar3ar3ar3ar3", img: "https://i.ytimg.com/vi/ar3ar3ar3ar3/hq720.jpg" },
      B2: { title: "Shaabiat Al Cartoon", desc: "Social commentary", url: "https://www.youtube.com/watch?v=ar4ar4ar4ar4", img: "https://i.ytimg.com/vi/ar4ar4ar4ar4/hq720.jpg" }
    },
    movies: {
      A1: { title: "The Message", desc: "Historical drama", url: "https://www.youtube.com/watch?v=ar5ar5ar5ar5", img: "https://i.ytimg.com/vi/ar5ar5ar5es5/hq720.jpg" },
      A2: { title: "Omar", desc: "Palestinian drama", url: "https://www.youtube.com/watch?v=ar6ar6ar6ar6", img: "https://i.ytimg.com/vi/ar6ar6ar6ar6/hq720.jpg" },
      B1: { title: "The Insult", desc: "Legal drama", url: "https://www.youtube.com/watch?v=ar7ar7ar7ar7", img: "https://i.ytimg.com/vi/ar7ar7ar7ar7/hq720.jpg" },
      B2: { title: "Capernaum", desc: "Social realism", url: "https://www.youtube.com/watch?v=ar8ar8ar8ar8", img: "https://i.ytimg.com/vi/ar8ar8ar8ar8/hq720.jpg" }
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