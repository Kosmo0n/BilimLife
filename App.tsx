import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gem, Trophy, Bell, BookOpen, PlayCircle, Globe, Send, Play, 
  Instagram, Youtube, Send as Telegram, Smartphone, CheckCircle2
} from 'lucide-react';

// --- Mock Data ---
const languages = [
  { id: 'en', name: 'English', code: 'EN', flag: '🇬🇧' },
  { id: 'cn', name: 'Chinese', code: 'CN', flag: '🇨🇳' },
  { id: 'fr', name: 'French', code: 'FR', flag: '🇫🇷' },
  { id: 'ar', name: 'Arabic', code: 'AR', flag: '🇸🇦' },
  { id: 'es', name: 'Spanish', code: 'ES', flag: '🇪🇸' },
];

const teachers = [
  { id: 1, name: 'Sarah Wilson', lang: 'English', color: 'bg-orange-100 text-orange-600' },
  { id: 2, name: 'Li Wei', lang: 'Chinese', color: 'bg-red-100 text-red-600' },
  { id: 3, name: 'Amira Ahmed', lang: 'Arabic', color: 'bg-emerald-100 text-emerald-600' },
  { id: 4, name: 'Jean Reno', lang: 'French', color: 'bg-blue-100 text-blue-600' },
  { id: 5, name: 'Elena Gomez', lang: 'Spanish', color: 'bg-yellow-100 text-yellow-600' },
];

// --- Components ---

const DiamondFlight = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{ 
            x: [0, (Math.random() - 0.5) * 200, window.innerWidth / 2 - 100], 
            y: [0, (Math.random() - 0.5) * 200, -window.innerHeight / 2 + 50],
            opacity: [1, 1, 0],
            scale: [1, 1.5, 0.5]
          }}
          transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
          onAnimationComplete={i === 7 ? onComplete : undefined}
          className="absolute"
        >
          <Gem className="text-cyan-400 fill-cyan-400" size={32} />
        </motion.div>
      ))}
    </div>
  );
};

export default function BilimLife() {
  const [selectedLang, setSelectedLang] = useState<string | null>(null);
  const [diamonds, setDiamonds] = useState(120);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [messages, setMessages] = useState([{ text: "Привет! Я Элли. Давай попрактикуем язык?", isAi: true }]);
  const [inputText, setInputText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [libraryView, setLibraryView] = useState<string | null>(null);
  const [canCollect, setCanCollect] = useState(true);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Проверка лимита сбора алмазов (раз в день)
  useEffect(() => {
    const lastDate = localStorage.getItem('lastDiamondCollection');
    const today = new Date().toDateString();
    if (lastDate === today) {
      setCanCollect(false);
    }
  }, []);

  // Автоскролл чата при новых сообщениях
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const collectDiamonds = () => {
    if (isAnimating || !canCollect) return;
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    setDiamonds(prev => prev + 50);
    setIsAnimating(false);
    const today = new Date().toDateString();
    localStorage.setItem('lastDiamondCollection', today);
    setCanCollect(false);
  };

  const sendMessage = () => {
    if (!inputText) return;
    setMessages(prev => [...prev, { text: inputText, isAi: false }]);
    setInputText("");
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "Отлично сказано! +10 💎", isAi: true }]);
      setDiamonds(d => d + 10);
    }, 1000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  if (!selectedLang) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl w-full bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-8">Выберите язык обучения</h1>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {languages.map((lang) => (
              <motion.button
                key={lang.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedLang(lang.name)}
                className="flex flex-col items-center p-6 bg-white/5 hover:bg-white/20 rounded-2xl border border-white/10 transition-colors"
              >
                <span className="text-5xl mb-3">{lang.flag}</span>
                <span className="text-white font-medium">{lang.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      {/* --- HEADER --- */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">B</div>
            <span className="font-bold text-xl hidden md:block">BilimLife</span>
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full">
              <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-[10px] text-white">1</div>
              <span className="text-sm font-semibold">Kosai</span>
            </div>
            
            <div className="flex items-center gap-1.5">
              <Gem className="text-cyan-500" size={20} />
              <motion.span 
                key={diamonds}
                initial={{ scale: 1.5, color: '#06b6d4' }}
                animate={{ scale: 1, color: '#0f172a' }}
                className="font-bold"
              >
                {diamonds}
              </motion.span>
            </div>

            <div className="flex gap-3 text-slate-400">
              <Trophy size={20} className="hover:text-amber-500 cursor-pointer transition-colors" />
              <Bell size={20} className="hover:text-indigo-600 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* --- NAVIGATION TABS --- */}
        <nav className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {['dashboard', 'teachers', 'library', 'ellie', 'cinema'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-all whitespace-nowrap ${
                activeTab === tab 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              {tab === 'ellie' ? 'Элли AI' : tab}
            </button>
          ))}
        </nav>

        <AnimatePresence mode="wait">
          {/* --- DASHBOARD & GAMIFICATION --- */}
          {activeTab === 'dashboard' && (
            <motion.div 
              key="dash"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              className="grid gap-6"
            >
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-2">С возвращением, Kosai!</h2>
                  <p className="text-indigo-100 mb-6">Твой прогресс в {selectedLang} впечатляет.</p>
                  <button 
                    onClick={collectDiamonds}
                    disabled={isAnimating || !canCollect}
                    className="bg-white text-indigo-600 px-8 py-3 rounded-2xl font-bold shadow-xl hover:bg-indigo-50 transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {canCollect ? "Забрать алмазы" : "Награда получена"}
                  </button>
                  {!canCollect && (
                    <p className="mt-4 text-xs text-indigo-200">Следующая награда будет доступна завтра</p>
                  )}
                </div>
                <div className="absolute right-[-20px] bottom-[-20px] opacity-20">
                  <Gem size={200} />
                </div>
              </div>
            </motion.div>
          )}

          {/* --- TEACHERS --- */}
          {activeTab === 'teachers' && (
            <motion.div 
              key="teachers"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4"
            >
              {teachers.map((t) => (
                <div key={t.id} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                  <div className={`aspect-square rounded-xl mb-4 flex items-center justify-center text-3xl font-bold ${t.color}`}>
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-bold">{t.name}</h3>
                  <p className="text-sm text-slate-500 mb-4">{t.lang} Coach</p>
                  <div className="mb-4 space-y-1">
                    <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden"><div className="h-full bg-indigo-400 w-3/4"></div></div>
                    <p className="text-[10px] text-slate-400 uppercase font-bold">Опыт: 5+ лет</p>
                  </div>
                  <button className="w-full py-2 bg-slate-100 rounded-xl text-sm font-semibold hover:bg-indigo-600 hover:text-white transition-colors">
                    Записаться
                  </button>
                </div>
              ))}
            </motion.div>
          )}

          {/* --- LIBRARY --- */}
          {activeTab === 'library' && (
            <motion.div key="lib" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-3 gap-6">
              {!libraryView ? (
                [
                  { id: 'kids', title: 'Дети', age: '7–17', color: 'bg-emerald-500' },
                  { id: 'students', title: 'Студенты', age: '18–25', color: 'bg-blue-500' },
                  { id: 'adults', title: 'Взрослые', age: '25+', color: 'bg-purple-500' }
                ].map((cat) => (
                  <div 
                    key={cat.id} 
                    onClick={() => setLibraryView(cat.id)}
                    className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 cursor-pointer hover:border-indigo-300 hover:shadow-lg transition-all"
                  >
                    <div className={`w-12 h-12 ${cat.color} rounded-2xl mb-4 flex items-center justify-center text-white`}>
                      <BookOpen />
                    </div>
                    <h3 className="text-xl font-bold">{cat.title}</h3>
                    <p className="text-slate-500">Возраст: {cat.age}</p>
                    <div className="mt-6 space-y-2">
                      <div className="h-4 w-full bg-slate-50 rounded-full" />
                      <div className="h-4 w-2/3 bg-slate-50 rounded-full" />
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full">
                  <button 
                    onClick={() => setLibraryView(null)}
                    className="mb-6 text-indigo-600 font-semibold flex items-center gap-2 hover:underline"
                  >
                    ← Назад к категориям
                  </button>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="bg-white aspect-[3/4] rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400">
                        Book Cover {i}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 space-y-2 opacity-50">
                    <div className="h-4 w-full bg-slate-100 rounded-full animate-pulse" />
                    <div className="h-4 w-2/3 bg-slate-100 rounded-full animate-pulse" />
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* --- ELLIE AI --- */}
          {activeTab === 'ellie' && (
            <motion.div key="ellie" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto w-full">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 h-[600px] flex flex-col">
                <div className="p-4 bg-indigo-600 text-white flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                    {/* ТВОЕ ФОТО ТУТ: замени src на "/твой-файл.png" */}
                    <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Ellie" alt="Ellie" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold">Элли</h3>
                    <p className="text-xs text-indigo-100">Твой ИИ-репетитор</p>
                  </div>
                </div>
                
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.isAi ? 'justify-start' : 'justify-end'}`}>
                      <div className={`max-w-[80%] p-4 rounded-2xl ${m.isAi ? 'bg-slate-100 rounded-tl-none' : 'bg-indigo-600 text-white rounded-tr-none shadow-sm'}`}>
                        {m.text}
                      </div>
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                  <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Play className="text-amber-600 fill-amber-600" size={16} />
                      <span className="text-sm font-medium text-amber-800">Прослушать произношение</span>
                    </div>
                    <span className="text-xs text-amber-600">0:04</span>
                  </div>
                </div>

                <div className="p-4 border-t border-slate-100 flex gap-2">
                  <input 
                    type="text" 
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Напишите что-нибудь..."
                    className="flex-1 bg-slate-100 rounded-xl px-4 py-2 outline-none focus:ring-2 ring-indigo-500/20"
                  />
                  <button 
                    onClick={sendMessage}
                    className="p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* --- CINEMA --- */}
          {activeTab === 'cinema' && (
            <motion.div key="cinema" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="flex gap-4 border-b border-slate-200">
                <button className="pb-4 px-2 border-b-2 border-indigo-600 font-bold">Мультфильмы</button>
                <button className="pb-4 px-2 text-slate-400 font-medium">Фильмы</button>
              </div>
              
              <div className="flex gap-2">
                {['A1', 'A2', 'B1', 'B2'].map(lvl => (
                  <button key={lvl} className="px-4 py-1.5 rounded-lg border border-slate-200 text-sm font-semibold hover:bg-slate-50">
                    {lvl}
                  </button>
                ))}
              </div>

              <div className="relative aspect-video bg-slate-900 rounded-3xl overflow-hidden flex items-center justify-center group">
                <img 
                  src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60" 
                  alt="Movie"
                />
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 mx-auto cursor-pointer hover:scale-110 transition-transform">
                    <PlayCircle className="text-white" size={48} />
                  </div>
                  <h3 className="text-white text-2xl font-bold">The Magic Journey</h3>
                  <p className="text-white/80">Обучающее видео • 15 мин</p>
                </div>
                <button className="absolute bottom-6 right-6 bg-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
                  <Globe size={16} />
                  Сменить язык
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* --- TEACHER ENROLLMENT FORM (Quick Mock) --- */}
      {activeTab === 'teachers' && (
        <div className="max-w-6xl mx-auto px-4 mt-12">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm max-w-xl">
            {isSubmitted ? (
              <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="text-center py-8">
                <CheckCircle2 className="mx-auto text-emerald-500 mb-4" size={48} />
                <h3 className="text-xl font-bold">Заявка отправлена!</h3>
                <p className="text-slate-500">Мы свяжемся с вами в ближайшее время.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="grid gap-4">
                <h3 className="text-2xl font-bold mb-6">Записаться на пробный урок</h3>
                <input required type="text" placeholder="Ваше имя" className="bg-slate-50 p-3 rounded-xl outline-none border border-transparent focus:border-indigo-300" />
                <div className="grid grid-cols-2 gap-4">
                  <input required type="text" placeholder="Возраст" className="bg-slate-50 p-3 rounded-xl outline-none border border-transparent focus:border-indigo-300" />
                  <input required type="text" placeholder="Город" className="bg-slate-50 p-3 rounded-xl outline-none border border-transparent focus:border-indigo-300" />
                </div>
                <input required type="tel" placeholder="Телефон" className="bg-slate-50 p-3 rounded-xl outline-none border border-transparent focus:border-indigo-300" />
                <div className="flex gap-4 mt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="mode" className="w-4 h-4 text-indigo-600" defaultChecked />
                    <span className="text-sm font-medium">Онлайн</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="mode" className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm font-medium">Оффлайн</span>
                  </label>
                </div>
                <button type="submit" className="bg-indigo-600 text-white py-4 rounded-2xl font-bold mt-4 shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-colors">
                  Отправить заявку
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-slate-200 py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold">B</div>
            <span className="font-bold">BilimLife</span>
          </div>
          <div className="flex gap-6">
            <Instagram size={24} className="text-slate-400 hover:text-pink-500 cursor-pointer transition-colors" />
            <Smartphone className="text-slate-400 hover:text-black cursor-pointer" /> {/* TikTok Mock */}
            <Youtube size={24} className="text-slate-400 hover:text-red-600 cursor-pointer transition-colors" />
            <Telegram className="text-slate-400 hover:text-blue-500 cursor-pointer" />
          </div>
          <p className="text-slate-400 text-sm">© 2024 BilimLife. All rights reserved.</p>
        </div>
      </footer>

      {/* --- ANIMATIONS --- */}
      <AnimatePresence>
        {isAnimating && <DiamondFlight onComplete={handleAnimationComplete} />}
      </AnimatePresence>
    </div>
  );
}