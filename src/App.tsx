import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Gem, Trophy, Bell, BookOpen, PlayCircle, Globe, Send, Play, 
  Instagram, Youtube, Send as Telegram, Smartphone, CheckCircle2,
  X, Star, Mic, Smile, Calendar, Clock
} from 'lucide-react';
import { languages, booksData, cinemaData, teachers } from './data/constants';
import { DiamondFlight } from './components/DiamondFlight';

// Define a type for messages to ensure type safety and allow for the isSticker property
interface Message {
  text: string;
  isAi: boolean;
  isSticker?: boolean; // Optional property for stickers
  isAudio?: boolean; // Optional property for audio messages
}

export default function App() {
  const [selectedLang, setSelectedLang] = useState<string | null>(null);
  const [diamonds, setDiamonds] = useState(120);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [messages, setMessages] = useState<Message[]>([{ text: "Привет! Я Элли. Давай попрактикуем язык?", isAi: true }]);
  const [inputText, setInputText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [libraryView, setLibraryView] = useState<string | null>(null);
  const [canCollect, setCanCollect] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);
  const [showRegModal, setShowRegModal] = useState(false);
  const [cinemaLevel, setCinemaLevel] = useState('A1');
  const [showAchievements, setShowAchievements] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showStickers, setShowStickers] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [activeCinemaType, setActiveCinemaType] = useState<'cartoons' | 'movies'>('cartoons');
  const [currentUser, setCurrentUser] = useState<{ username: string } | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<BlobPart[]>([]);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState<any>(null);
  const [bookedTeacherIds, setBookedTeacherIds] = useState<number[]>([]);

  // Данные для уведомлений и достижений
  const notificationsList = [
    { id: 1, title: 'Добро пожаловать!', text: 'Начни свой путь к новым знаниям прямо сейчас.', time: 'Только что' },
    { id: 2, title: 'Бонус за регистрацию', text: 'Вам начислено 100 стартовых алмазов!', time: '1 час назад' },
    { id: 3, title: 'Новое в библиотеке', text: 'В разделе "Студенты" появились свежие бестселлеры.', time: 'Вчера' }
  ];

  const achievementsList = [
    { id: 1, title: 'Первый шаг', desc: 'Отправлено первое сообщение Элли', icon: '🎯', unlocked: messages.length > 1 },
    { id: 2, title: 'Алмазный магнат', desc: 'Собрано более 150 алмазов', icon: '💎', unlocked: diamonds >= 150 },
    { id: 3, title: 'Киноман', desc: 'Выбран раздел Cinema', icon: '🎬', unlocked: activeTab === 'cinema' }
  ];

  // Список путей к стикерам (6 штук)
  const stickers = ['s1', 's2', 's3', 's4', 's5', 's6'].map(s => `/Stikerpack/${s}.png`);
  
  const chatEndRef = useRef<HTMLDivElement>(null);
  const currentLangName = languages.find(l => l.id === selectedLang)?.name;

  const filteredTeachers = useMemo(() => {
    return teachers.filter(t => t.lang === currentLangName);
  }, [currentLangName]);

  useEffect(() => {
    const lastDate = localStorage.getItem('lastDiamondCollection');
    const today = new Date().toDateString();
    if (lastDate === today) setCanCollect(false);

    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
      setIsRegistered(true);
    }
  }, []);

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
    localStorage.setItem('lastDiamondCollection', new Date().toDateString());
    setCanCollect(false);
  };

  const sendSticker = (stickerUrl: string) => {
    setMessages(prev => [...prev, { text: stickerUrl, isAi: false, isSticker: true }]);
    setShowStickers(false);
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "Вау, крутой стикер! 😍", isAi: true }]);
    }, 1000);
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

  const handleRecord = async () => {
    if (!isRecording) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        audioChunksRef.current = [];

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunksRef.current.push(event.data);
          }
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
          const audioUrl = URL.createObjectURL(audioBlob);
          setMessages(prev => [...prev, { text: audioUrl, isAi: false, isAudio: true }]);
          
          setTimeout(() => {
            setMessages(prev => [...prev, { text: "Интересное голосовое сообщение! 🎙️ +15 💎", isAi: true }]);
            setDiamonds(d => d + 15);
          }, 1500);

          stream.getTracks().forEach(track => track.stop());
        };

        mediaRecorder.start();
        setIsRecording(true);
      } catch (err) {
        console.error("Ошибка доступа к микрофону:", err);
        alert("Не удалось получить доступ к микрофону. Проверьте разрешения вашего браузера.");
      }
    } else {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
        mediaRecorderRef.current.stop();
      }
      setIsRecording(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const username = (form.elements.namedItem('username') as HTMLInputElement).value;
    setCurrentUser({ username });
    localStorage.setItem('currentUser', JSON.stringify({ username }));
    setShowLoginModal(false);
  };

  if (!selectedLang) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 text-center">
          <div className="flex flex-col items-center mb-10">
            <img src="/Logo.png" alt="Logo" className="w-24 h-24 object-contain mb-6" />
            <h1 className="text-4xl font-bold text-white mb-2">BilimLife</h1>
            {!currentUser && (
              <button onClick={() => setShowLoginModal(true)} className="bg-indigo-600 text-white px-8 py-2 rounded-full font-bold mt-4">Войти</button>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {languages.map((lang) => (
              <button key={lang.id} onClick={() => setSelectedLang(lang.id)} className={`p-6 rounded-2xl border border-white/10 text-white bg-gradient-to-br ${lang.bgColor}`}>
                <span className="text-5xl block mb-2">{lang.flag}</span>
                {lang.name}
              </button>
            ))}
          </div>
        </div>
        {showLoginModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
            <form onSubmit={handleLogin} className="bg-white p-8 rounded-3xl w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4">Вход</h2>
              <input name="username" required placeholder="Имя пользователя" className="w-full p-3 bg-slate-100 rounded-xl mb-4 outline-none" />
              <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold">Войти</button>
            </form>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 pb-20">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b h-16 flex items-center px-4 justify-between">
        <div onClick={() => setSelectedLang(null)} className="flex items-center gap-2 cursor-pointer">
          <img src="/Logo.png" alt="Logo" className="w-10 h-10" />
          <span className="font-bold text-xl">BilimLife</span>
        </div>

        {/* Center - Motto */}
        <div className="hidden lg:flex flex-1 justify-center px-4">
          <p className="text-slate-400 font-medium italic text-sm tracking-wide">
            "Учитесь с удовольствием — открывайте мир вместе с нами!"
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={() => setShowNotifications(true)} className="p-2 text-slate-400 hover:text-indigo-600 transition-colors relative">
            <Bell size={22} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <button onClick={() => setShowAchievements(true)} className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"><Trophy size={22} /></button>
          <div className="flex items-center gap-1.5 font-bold"><Gem className="text-cyan-500" size={20} />{diamonds}</div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <nav className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {['dashboard', 'teachers', 'library', 'ellie', 'cinema'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-all ${activeTab === tab ? 'bg-indigo-600 text-white' : 'bg-white'}`}>
              {tab === 'ellie' ? 'Элли AI' : tab}
            </button>
          ))}
        </nav>

        {activeTab === 'dashboard' && (
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
            <h2 className="text-3xl font-bold mb-2">С возвращением, {currentUser?.username || 'Друг'}!</h2>
            <p className="mb-6 opacity-90">Твой прогресс в {currentLangName} впечатляет.</p>
            <button onClick={collectDiamonds} disabled={!canCollect} className="bg-white text-indigo-600 px-8 py-3 rounded-2xl font-bold disabled:opacity-50">
              {canCollect ? "Забрать алмазы" : "До завтра!"}
            </button>
          </div>
        )}

        {activeTab === 'teachers' && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredTeachers.map((t) => (
              <div key={t.id} className="bg-white p-4 rounded-2xl border group hover:shadow-md transition-all">
                <div className={`aspect-square rounded-xl mb-4 flex items-center justify-center text-3xl font-bold ${t.color}`}>
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-bold">{t.name}</h3>
                <p className="text-sm text-slate-500 mb-4">{t.lang} Coach</p>
                {bookedTeacherIds.includes(t.id) ? (
                  <div className="w-full py-2 bg-emerald-50 text-emerald-600 rounded-xl text-sm font-bold flex items-center justify-center gap-2">
                    <CheckCircle2 size={16} /> Записано
                  </div>
                ) : (
                  <button 
                    onClick={() => { setSelectedTeacher(t); setShowBookingModal(true); }}
                    className="w-full py-2 bg-slate-100 rounded-xl text-sm font-semibold hover:bg-indigo-600 hover:text-white transition-colors"
                  >
                    Записаться
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'library' && (
          <div className="grid md:grid-cols-3 gap-6">
            {!libraryView ? (
              [
                { id: 'kids', title: 'Дети', subtitle: 'Сказки и игры (3-12 лет)', color: 'bg-emerald-500' },
                { id: 'students', title: 'Студенты', subtitle: 'Развитие и хобби (13-21 год)', color: 'bg-blue-500' },
                { id: 'adults', title: 'Взрослые', subtitle: 'Бизнес и классика (22+ года)', color: 'bg-purple-500' }
              ].map((cat) => (
                <div key={cat.id} onClick={() => setLibraryView(cat.id)} className="bg-white p-8 rounded-3xl border border-slate-100 cursor-pointer hover:border-indigo-300 hover:shadow-xl transition-all group">
                  <div className={`w-14 h-14 ${cat.color} rounded-2xl mb-6 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}><BookOpen size={28} /></div>
                  <h3 className="text-2xl font-bold text-slate-800">{cat.title}</h3>
                  <p className="text-slate-500 mt-2 font-medium">{cat.subtitle}</p>
                </div>
              ))
            ) : (
              <div className="col-span-full">
                <button onClick={() => setLibraryView(null)} className="mb-6 text-indigo-600 font-bold">← Назад</button>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {(booksData[selectedLang as string]?.[libraryView as string] || []).map((book: any, i: number) => (
                    <div key={i} className="bg-white rounded-2xl overflow-hidden border">
                      <img src={book.cover} className="w-full h-48 object-cover" alt={book.title} loading="lazy" />
                      <div className="p-4"><h4 className="font-bold text-sm truncate">{book.title}</h4><p className="text-xs text-slate-400">{book.author}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'ellie' && (
          <div className="max-w-2xl mx-auto h-[600px] bg-white rounded-3xl shadow-xl flex flex-col overflow-hidden border">
            <div className="p-4 bg-indigo-600 text-white flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white/20">
                <img src="/Assitentfoto.png" alt="Ellie" className="w-full h-full object-cover" />
              </div>
              <div><h3 className="font-bold">Элли</h3><p className="text-xs opacity-80">Твой ИИ-репетитор</p></div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ scrollBehavior: 'smooth' }}>
              {messages.map((m: any, i) => (
                <div key={i} className={`flex ${m.isAi ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl ${m.isAi ? 'bg-slate-100' : 'bg-indigo-600 text-white'} ${m.isSticker || m.isAudio ? 'bg-transparent p-0' : ''}`}>
                    {m.isSticker ? (
                      <img src={m.text} className="w-24 h-24" alt="sticker" />
                    ) : m.isAudio ? (
                      <audio controls src={m.text} className="h-10 max-w-[200px]" />
                    ) : (
                      m.text
                    )}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <div className="p-4 border-t flex gap-2 relative">
              <AnimatePresence>
                {showStickers && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute bottom-20 left-4 bg-white border rounded-2xl p-3 shadow-2xl grid grid-cols-4 gap-2 z-50">
                    {stickers.map((url, idx) => (
                      <button key={idx} onClick={() => sendSticker(url)} className="p-1 hover:bg-slate-50 rounded-lg transition-transform active:scale-90">
                        <img src={url} className="w-12 h-12 object-contain" alt={`sticker-${idx}`} />
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              <button onClick={handleRecord} className={`p-3 rounded-xl transition-all ${isRecording ? 'bg-red-500 text-white animate-pulse shadow-lg shadow-red-500/50' : 'bg-slate-100 hover:bg-slate-200'}`}><Mic size={20} /></button>
              <button onClick={() => setShowStickers(!showStickers)} className="p-3 bg-slate-100 rounded-xl"><Smile size={20} /></button>
              <input value={inputText} onChange={e => setInputText(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendMessage()} placeholder="Напишите сообщение..." className="flex-1 bg-slate-100 rounded-xl px-4 outline-none" />
              <button onClick={sendMessage} className="p-3 bg-indigo-600 text-white rounded-xl"><Send size={20} /></button>
            </div>
          </div>
        )}

        {activeTab === 'cinema' && (
          <div className="space-y-6">
            <div className="flex gap-4 border-b">
              {['cartoons', 'movies'].map(type => (
                <button key={type} onClick={() => setActiveCinemaType(type as any)} className={`pb-4 px-2 font-bold capitalize ${activeCinemaType === type ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-slate-400'}`}>{type}</button>
              ))}
            </div>
            <div className="flex gap-2">
              {['A1', 'A2', 'B1', 'B2'].map(lvl => (
                <button key={lvl} onClick={() => setCinemaLevel(lvl)} className={`px-4 py-1.5 rounded-lg border text-sm font-semibold ${cinemaLevel === lvl ? 'bg-indigo-600 text-white' : 'bg-white'}`}>{lvl}</button>
              ))}
            </div>
            <div className="aspect-video bg-slate-900 rounded-3xl flex flex-col items-center justify-center border border-slate-700 p-8 text-center">
              <Youtube className="text-indigo-400 mb-4" size={64} />
              <h3 className="text-white font-bold text-xl mb-6">{cinemaData[selectedLang as string]?.[activeCinemaType]?.[cinemaLevel]?.title || "Видео скоро будет"}</h3>
              <p className="text-white/60 mb-8 max-w-md mx-auto">{cinemaData[selectedLang as string]?.[activeCinemaType]?.[cinemaLevel]?.desc}</p>
              {cinemaData[selectedLang as string]?.[activeCinemaType]?.[cinemaLevel]?.url && (
                <a href={cinemaData[selectedLang as string]?.[activeCinemaType]?.[cinemaLevel].url} target="_blank" rel="noreferrer" className="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2">
                  <PlayCircle size={20} /> Смотреть на YouTube
                </a>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Achievements Modal */}
      <AnimatePresence>
        {showAchievements && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="bg-white rounded-3xl p-6 w-full max-w-md">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Ваши достижения</h2>
                <button onClick={() => setShowAchievements(false)} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"><X size={20} /></button>
              </div>
              <div className="space-y-4">
                {achievementsList.map(a => (
                  <div key={a.id} className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${a.unlocked ? 'bg-indigo-50 border-indigo-100' : 'bg-slate-50 border-slate-100 grayscale opacity-60'}`}>
                    <div className="text-3xl">{a.icon}</div>
                    <div>
                      <h4 className="font-bold">{a.title}</h4>
                      <p className="text-sm text-slate-500">{a.desc}</p>
                    </div>
                    {a.unlocked && <CheckCircle2 className="ml-auto text-indigo-600" size={20} />}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Notifications Modal */}
      <AnimatePresence>
        {showNotifications && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="bg-white rounded-3xl p-6 w-full max-w-md">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Уведомления</h2>
                <button onClick={() => setShowNotifications(false)} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"><X size={20} /></button>
              </div>
              <div className="space-y-3">
                {notificationsList.map(n => (
                  <div key={n.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-slate-800">{n.title}</h4>
                      <span className="text-[10px] text-slate-400 uppercase font-bold">{n.time}</span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">{n.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Booking Modal */}
      <AnimatePresence>
        {showBookingModal && selectedTeacher && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: 20 }}
              className="bg-white rounded-3xl p-8 w-full max-w-lg shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Запись на занятие</h2>
                <button onClick={() => setShowBookingModal(false)} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"><X size={20} /></button>
              </div>
              
              <div className="flex items-center gap-4 mb-8 p-4 bg-slate-50 rounded-2xl">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold ${selectedTeacher.color}`}>
                  {selectedTeacher.name.split(' ').map((n: string) => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{selectedTeacher.name}</h4>
                  <p className="text-slate-500">{selectedTeacher.lang} Specialist</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-slate-600">
                  <Calendar size={20} className="text-indigo-600" />
                  <span>Ближайшая дата: <strong>Завтра, 22 апреля</strong></span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Clock size={20} className="text-indigo-600" />
                  <span>Доступное время: <strong>14:00, 16:30, 19:00</strong></span>
                </div>
              </div>

              <button 
                onClick={() => { 
                  setBookedTeacherIds(prev => [...prev, selectedTeacher.id]); 
                  setShowBookingModal(false); 
                }}
                className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-[0.98]"
              >
                Подтвердить запись
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="bg-white border-t py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/Logo.png" alt="Logo" className="w-8 h-8" />
            <span className="font-bold">BilimLife</span>
          </div>
          <div className="hidden md:block text-slate-400 text-sm italic">
            "Учитесь с удовольствием — открывайте мир вместе с нами!"
          </div>
          <div className="flex gap-6 text-slate-400">
            <Instagram size={20} />
            <Youtube size={20} />
            <Telegram size={20} />
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {isAnimating && <DiamondFlight onComplete={handleAnimationComplete} />}
      </AnimatePresence>
    </div>
  );
}
