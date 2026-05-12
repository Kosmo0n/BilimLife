import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Gem, Trophy, Bell, BookOpen, PlayCircle, Globe, Send, Play,
  Instagram, Youtube, Send as Telegram, Smartphone, CheckCircle2,
  X, Star, Mic, MicOff, Smile, Calendar, Clock, User, Layers, Users, ClipboardCheck, LifeBuoy
} from 'lucide-react';
import { languages, booksData, cinemaData, teachers } from './data/constants';
import { DiamondFlight } from './components/DiamondFlight';

// New View Components
import { ProfileView } from './components/views/ProfileView';
import { PracticeView } from './components/views/PracticeView';
import { CommunityView } from './components/views/CommunityView';
import { AssessmentView } from './components/views/AssessmentView';
import { SupportView } from './components/views/SupportView';

interface Message {
  text: string;
  isAi: boolean;
  isSticker?: boolean;
  isAudio?: boolean;
  isPronunciationResult?: boolean;
  pronunciationScore?: number;
  expectedText?: string;
  spokenText?: string;
}

const pronunciationPhrases: Record<string, string[]> = {
  en: ['Hello, how are you?', 'The weather is beautiful today.', 'I love learning new languages.', 'Can you help me please?', 'Thank you very much!'],
  fr: ['Bonjour, comment allez-vous?', 'Il fait beau aujourd\'hui.', 'J\'aime apprendre les langues.', 'Pouvez-vous m\'aider?', 'Merci beaucoup!'],
  es: ['Hola, ¿cómo estás?', 'Hoy hace buen tiempo.', 'Me encanta aprender idiomas.', '¿Puedes ayudarме пож-ста?', '¡Muchas gracias!'],
  cn: ['你好，你怎么样？', '今天天气很好。', '我喜欢学习新语言。', '你能帮我吗？', '非常感谢！'],
  ar: ['مرحباً، كيف حالك؟', 'الطقس جميل اليوم.', 'أحب تعلم اللغات الجديدة.', 'هل يمكنك مساعدتي؟', 'شكراً جزيلاً!'],
};

const langCodes: Record<string, string> = { en: 'en-US', fr: 'fr-FR', es: 'es-ES', cn: 'zh-CN', ar: 'ar-SA' };

function calcScore(expected: string, spoken: string): number {
  const norm = (s: string) => s.toLowerCase().replace(/[^\w\u0080-\uFFFF\s]/g, '').trim();
  const e = norm(expected).split(/\s+/);
  const s = norm(spoken).split(/\s+/);
  if (norm(expected) === norm(spoken)) return 100;
  let m = 0; e.forEach(w => { if (s.includes(w)) m++; });
  return Math.round((m / Math.max(e.length, 1)) * 100);
}

export default function App() {
  const [selectedLang, setSelectedLang] = useState<string | null>(null);
  const [diamonds, setDiamonds] = useState(120);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [messages, setMessages] = useState<Message[]>([{ text: "Привет! Я Элли. Давай попрактикуем язык?", isAi: true }]);
  const [inputText, setInputText] = useState("");
  const [libraryView, setLibraryView] = useState<string | null>(null);
  const [canCollect, setCanCollect] = useState(true);
  const [cinemaLevel, setCinemaLevel] = useState('A1');
  const [showAchievements, setShowAchievements] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showStickers, setShowStickers] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [activeCinemaType, setActiveCinemaType] = useState<'cartoons' | 'movies'>('cartoons');
  const [currentUser, setCurrentUser] = useState<{ username: string } | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef<any>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState<any>(null);
  const [bookedTeacherIds, setBookedTeacherIds] = useState<number[]>([]);
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const [schedule, setSchedule] = useState([
    { title: 'Разговорный клуб', time: 'Завтра, 18:00', type: 'Live' },
    { title: 'Тест по Модулю 3', time: 'Через 2 дня', type: 'Deadline' },
  ]);
  const [supportMessages, setSupportMessages] = useState<any[]>([]);
  const [communityPosts, setCommunityPosts] = useState<any[]>([
    { 
      id: 1, 
      user: 'Алексей М.', 
      avatar: 'AM', 
      content: 'Ребят, как вы учите неправильные глаголы? У меня они совсем не лезут в голову 😅 Поделитесь лайфхаками!',
      likes: 12,
      comments: [],
      time: '2 часа назад',
      tag: 'English'
    },
    { 
      id: 2, 
      user: 'Sarah Wilson', 
      avatar: 'SW', 
      isTeacher: true,
      content: 'New blog post about British idioms is out! Check it out in the Blog section below. Happy learning! 🇬🇧',
      likes: 45,
      comments: [],
      time: '5 часов назад',
      tag: 'Announcement'
    },
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const username = (form.elements.namedItem('username') as HTMLInputElement).value;
    setCurrentUser({ username });
    localStorage.setItem('currentUser', JSON.stringify({ username }));
    setShowLoginModal(false);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const username = (form.elements.namedItem('username') as HTMLInputElement).value;
    setCurrentUser({ username });
    localStorage.setItem('currentUser', JSON.stringify({ username }));
    setShowLoginModal(false);
    setDiamonds(prev => prev + 100); // Registration bonus
    alert('Поздравляем с регистрацией! Вам начислено 100 💎');
  };

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

  const handleRecord = () => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      alert('Ваш браузер не поддерживает распознавание речи. Используйте Chrome или Edge.');
      return;
    }
    if (isRecording) {
      recognitionRef.current?.stop();
      setIsRecording(false);
      return;
    }
    const phrases = pronunciationPhrases[selectedLang as string] || pronunciationPhrases['en'];
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    setMessages(prev => [...prev, { text: `🎤 Произнесите: **"${phrase}"**`, isAi: true }]);
    const rec = new SR();
    rec.lang = langCodes[selectedLang as string] || 'en-US';
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    recognitionRef.current = rec;
    rec.onstart = () => setIsRecording(true);
    rec.onresult = (event: any) => {
      const spoken = event.results[0][0].transcript;
      const score = calcScore(phrase, spoken);
      const gems = score >= 80 ? 20 : score >= 50 ? 10 : 5;
      setMessages(prev => [...prev, { text: `🗣️ "${spoken}"`, isAi: false }]);
      setTimeout(() => {
        setMessages(prev => [...prev, { text: '', isAi: true, isPronunciationResult: true, pronunciationScore: score, expectedText: phrase, spokenText: spoken }]);
        setDiamonds(d => d + gems);
      }, 600);
    };
    rec.onerror = (e: any) => {
      if (e.error === 'not-allowed') alert('Доступ к микрофону запрещён. Разрешите его в настройках браузера.');
      else if (e.error !== 'aborted') setMessages(prev => [...prev, { text: 'Не удалось распознать речь 😕 Попробуйте ещё раз!', isAi: true }]);
      setIsRecording(false);
    };
    rec.onend = () => setIsRecording(false);
    try { rec.start(); } catch { setIsRecording(false); }
  };

  if (!selectedLang) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-4xl w-full bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-indigo-100 text-center shadow-xl shadow-rose-100/20">
          <div className="flex flex-col items-center mb-10">
            <img src="/Logo.png" alt="Logo" className="w-24 h-24 object-contain mb-6" />
            <h1 className="text-4xl font-black text-slate-800 mb-2">BilimLife</h1>
            {!currentUser && (
              <button onClick={() => setShowLoginModal(true)} className="bg-indigo-600 text-white px-8 py-2 rounded-full font-bold mt-4">Войти</button>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {languages.map((lang) => (
              <button key={lang.id} onClick={() => setSelectedLang(lang.id)} className={`p-6 rounded-2xl border border-white/50 text-slate-700 font-bold bg-gradient-to-br ${lang.bgColor} hover:scale-105 transition-transform shadow-sm`}>
                <span className="text-5xl block mb-2">{lang.flag}</span>
                {lang.name}
              </button>
            ))}
          </div>
        </div>
        {showLoginModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
            <form onSubmit={isRegistering ? handleRegister : handleLogin} className="bg-[#7a3035] p-8 rounded-3xl w-full max-w-md border border-[#8a363c] shadow-2xl">
              <h2 className="text-2xl font-bold mb-4 text-white">{isRegistering ? 'Регистрация' : 'Вход'}</h2>
              <input name="username" required placeholder="Имя пользователя" className="w-full p-3 bg-[#653236] text-white rounded-xl mb-4 outline-none border border-[#8a363c] placeholder:text-rose-100/30" />
              {isRegistering && (
                <input name="email" type="email" placeholder="Email (необязательно)" className="w-full p-3 bg-[#653236] text-white rounded-xl mb-4 outline-none border border-[#8a363c] placeholder:text-rose-100/30" />
              )}
              <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                {isRegistering ? 'Зарегистрироваться' : 'Войти'}
              </button>
              <button 
                type="button" 
                onClick={() => setIsRegistering(!isRegistering)}
                className="w-full mt-4 text-rose-100/60 text-sm font-bold hover:text-white"
              >
                {isRegistering ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться'}
              </button>
              <button 
                type="button" 
                onClick={() => setShowLoginModal(false)}
                className="w-full mt-2 text-rose-100/30 text-xs font-bold hover:text-rose-100/60"
              >
                Отмена
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }

  const tabs = [
    { id: 'dashboard', label: 'Главная', icon: Globe },
    { id: 'practice', label: 'Практика', icon: Layers },
    { id: 'ellie', label: 'Элли AI', icon: Mic },
    { id: 'library', label: 'Библиотека', icon: BookOpen },
    { id: 'cinema', label: 'Кинотеатр', icon: PlayCircle },
    { id: 'community', label: 'Сообщество', icon: Users },
    { id: 'assessment', label: 'Рейтинг', icon: ClipboardCheck },
    { id: 'teachers', label: 'Учителя', icon: User },
    { id: 'support', label: 'Помощь', icon: LifeBuoy },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ position: 'relative' }}>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          backgroundImage: `url('/bg-photo.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.55,
          pointerEvents: 'none',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header className="sticky top-0 z-40 bg-[#7a3035]/80 backdrop-blur-md border-b border-[#8a363c] h-16 flex items-center px-4 justify-between text-white">
        <div onClick={() => setSelectedLang(null)} className="flex items-center gap-2 cursor-pointer">
          <img src="/Logo.png" alt="Logo" className="w-10 h-10" />
          <span className="font-bold text-xl">BilimLife</span>
        </div>

        <div className="hidden lg:flex flex-1 justify-center px-4">
          <p className="text-rose-100/60 font-medium italic text-sm tracking-wide">
            "Учитесь с удовольствием — открывайте мир вместе с нами!"
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={() => setShowNotifications(true)} className="p-2 text-rose-100/70 hover:text-white transition-colors relative">
            <Bell size={22} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-[#7a3035]"></span>
          </button>
          <button onClick={() => setActiveTab('profile')} className="p-2 text-rose-100/70 hover:text-white transition-colors"><User size={22} /></button>
          <div className="flex items-center gap-1.5 font-bold"><Gem className="text-cyan-400" size={20} />{diamonds}</div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 flex-1 w-full">
        <nav className="flex gap-2 mb-10 overflow-x-auto pb-4 no-scrollbar">
          {tabs.map((tab) => (
            <button 
              key={tab.id} 
              onClick={() => setActiveTab(tab.id)} 
              className={`px-6 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all flex items-center gap-2 border ${activeTab === tab.id ? 'bg-indigo-600 text-white border-indigo-500 shadow-xl shadow-indigo-900/40' : 'bg-[#7a3035]/60 text-rose-100/50 border-[#8a363c] hover:bg-[#7a3035] hover:text-white'}`}
            >
              <tab.icon size={14} />
              {tab.label}
            </button>
          ))}
        </nav>

        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            <div className="rounded-3xl overflow-hidden border border-[#8a363c] shadow-2xl">
              <div className="bg-gradient-to-r from-[#653236]/90 via-[#7a3035]/90 to-[#977851]/80 backdrop-blur-md px-8 py-10 flex flex-col md:flex-row items-center gap-8">
                <div className="flex items-center gap-4 flex-shrink-0">
                  <img src="/Logo.png" alt="BilimLife" className="w-16 h-16 object-contain drop-shadow-lg" />
                  <div>
                    <h2 className="text-3xl font-black text-white tracking-tight">BilimLife</h2>
                    <p className="text-rose-200/70 text-[10px] font-black uppercase tracking-[0.2em]">Platform Excellence</p>
                  </div>
                </div>
                <div className="hidden md:block w-px h-16 bg-white/10" />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">С возвращением, {currentUser?.username || 'Друг'}!</h3>
                  <p className="text-rose-100/70 text-sm leading-relaxed max-w-lg">
                    Твой прогресс в изучении {currentLangName} идет по плану. Сегодня отличный день, чтобы выучить 10 новых слов!
                  </p>
                </div>
                <button onClick={collectDiamonds} disabled={!canCollect} className="bg-white text-indigo-600 px-10 py-4 rounded-2xl font-black text-sm shadow-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 whitespace-nowrap">
                  {canCollect ? "Забрать алмазы +50 💎" : "До завтра!"}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div onClick={() => setActiveTab('practice')} className="bg-[#7a3035]/40 backdrop-blur-md p-8 rounded-[32px] border border-[#8a363c] cursor-pointer hover:bg-[#7a3035]/60 transition-all group">
                <Layers className="text-indigo-400 mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="text-xl font-bold text-white mb-2">Продолжить практику</h4>
                <p className="text-rose-100/60 text-sm">У вас 15 новых слов в тренажере.</p>
              </div>
              <div onClick={() => setActiveTab('ellie')} className="bg-[#7a3035]/40 backdrop-blur-md p-8 rounded-[32px] border border-[#8a363c] cursor-pointer hover:bg-[#7a3035]/60 transition-all group">
                <Mic className="text-rose-400 mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="text-xl font-bold text-white mb-2">Чат с Элли</h4>
                <p className="text-rose-100/60 text-sm">Ваш ИИ-репетитор ждет вас.</p>
              </div>
              <div onClick={() => setActiveTab('community')} className="bg-[#7a3035]/40 backdrop-blur-md p-8 rounded-[32px] border border-[#8a363c] cursor-pointer hover:bg-[#7a3035]/60 transition-all group">
                <Users className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="text-xl font-bold text-white mb-2">Сообщество</h4>
                <p className="text-rose-100/60 text-sm">3 новых вопроса на форуме.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'profile' && <ProfileView user={currentUser} diamonds={diamonds} schedule={schedule} />}
        {activeTab === 'practice' && <PracticeView selectedLang={selectedLang || 'en'} onEarn={(amount) => setDiamonds(d => d + amount)} />}
        {activeTab === 'community' && (
          <CommunityView 
            selectedLang={selectedLang || 'en'}
            posts={communityPosts} 
            onPost={(post) => setCommunityPosts(prev => [post, ...prev])}
            onLike={(id) => setCommunityPosts(prev => prev.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p))}
            onComment={(id, comment) => setCommunityPosts(prev => prev.map(p => p.id === id ? { ...p, comments: [...p.comments, comment] } : p))}
            user={currentUser}
          />
        )}
        {activeTab === 'assessment' && <AssessmentView selectedLang={selectedLang || 'en'} onEarn={(amount) => setDiamonds(d => d + amount)} />}
        {activeTab === 'support' && (
          <SupportView 
            messages={supportMessages} 
            onSendMessage={(msg) => setSupportMessages(prev => [...prev, msg])} 
          />
        )}

        {activeTab === 'teachers' && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredTeachers.map((t) => (
              <div key={t.id} className="bg-[#7a3035]/40 backdrop-blur-sm p-4 rounded-2xl border border-[#8a363c] group hover:bg-[#7a3035]/60 transition-all text-white">
                <div className={`aspect-square rounded-xl mb-4 flex items-center justify-center text-3xl font-bold ${t.color}`}>
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-bold">{t.name}</h3>
                <p className="text-sm text-rose-100/60 mb-4">{t.lang} Coach</p>
                {bookedTeacherIds.includes(t.id) ? (
                  <div className="w-full py-2 bg-emerald-500/20 text-emerald-300 rounded-xl text-sm font-bold flex items-center justify-center gap-2">
                    <CheckCircle2 size={16} /> Записано
                  </div>
                ) : (
                  <button
                    onClick={() => { setSelectedTeacher(t); setShowBookingModal(true); }}
                    className="w-full py-2 bg-[#8a363c]/50 rounded-xl text-sm font-semibold hover:bg-indigo-600 hover:text-white transition-colors"
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
                { id: 'kids', title: 'Дети', subtitle: 'Сказки и игры', color: 'bg-emerald-500' },
                { id: 'students', title: 'Студенты', subtitle: 'Развитие и хобби', color: 'bg-blue-500' },
                { id: 'adults', title: 'Взрослые', subtitle: 'Бизнес и классика', color: 'bg-purple-500' }
              ].map((cat) => (
                <div key={cat.id} onClick={() => setLibraryView(cat.id)} className="bg-[#7a3035]/40 p-8 rounded-3xl border border-[#8a363c] cursor-pointer hover:bg-[#7a3035]/60 transition-all group backdrop-blur-sm text-white">
                  <div className={`w-14 h-14 ${cat.color} rounded-2xl mb-6 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}><BookOpen size={28} /></div>
                  <h3 className="text-2xl font-bold">{cat.title}</h3>
                  <p className="text-rose-100/60 mt-2 font-medium">{cat.subtitle}</p>
                </div>
              ))
            ) : (
              <div className="col-span-full">
                <button onClick={() => setLibraryView(null)} className="mb-6 text-rose-100 font-bold hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-xl">←</span> Назад
                </button>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {(booksData[selectedLang as string]?.[libraryView as string] || []).map((book: any, i: number) => (
                    <div key={i} onClick={() => setSelectedBook(book)} className="bg-[#7a3035]/40 rounded-2xl overflow-hidden border border-[#8a363c] cursor-pointer hover:bg-[#7a3035]/60 transition-all hover:-translate-y-1 backdrop-blur-sm text-white">
                      <img src={book.cover} className="w-full h-48 object-cover" alt={book.title} loading="lazy" />
                      <div className="p-4">
                        <h4 className="font-bold text-sm truncate">{book.title}</h4>
                        <p className="text-xs text-rose-100/60">{book.author}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'ellie' && (
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border" style={{ height: 'calc(100vh - 260px)', minHeight: '500px' }}>
            <div className="p-4 bg-indigo-600 text-white flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white/20">
                <img src="/Assitentfoto.png" alt="Ellie" className="w-full h-full object-cover" />
              </div>
              <div><h3 className="font-bold">Элли</h3><p className="text-xs opacity-80">Твой ИИ-репетитор</p></div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ scrollBehavior: 'smooth' }}>
              {messages.map((m: any, i) => (
                <div key={i} className={`flex ${m.isAi ? 'justify-start' : 'justify-end'}`}>
                  {m.isPronunciationResult ? (
                    <div className="max-w-[85%] bg-white border-2 border-indigo-100 rounded-2xl p-4 shadow-sm">
                      <div className={`flex items-center gap-2 mb-2 font-bold text-base ${m.pronunciationScore >= 80 ? 'text-emerald-600' : m.pronunciationScore >= 50 ? 'text-amber-500' : 'text-red-500'}`}>
                        {m.pronunciationScore >= 80 ? '🏆' : m.pronunciationScore >= 50 ? '👍' : '💪'} Произношение: {m.pronunciationScore}%
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2 mb-3">
                        <div className={`h-2 rounded-full ${m.pronunciationScore >= 80 ? 'bg-emerald-500' : m.pronunciationScore >= 50 ? 'bg-amber-400' : 'bg-red-400'}`} style={{ width: `${m.pronunciationScore}%` }} />
                      </div>
                      <p className="text-xs text-slate-500 mb-0.5"><span className="font-semibold text-slate-700">Ожидалось:</span> {m.expectedText}</p>
                      <p className="text-xs text-slate-500 mb-2"><span className="font-semibold text-slate-700">Сказано:</span> {m.spokenText}</p>
                      <p className="text-sm text-slate-600">{m.pronunciationScore >= 80 ? '🌟 Отлично! +20 💎' : m.pronunciationScore >= 50 ? '👌 Неплохо! Продолжайте! +10 💎' : '🔥 Попробуйте ещё раз! +5 💎'}</p>
                    </div>
                  ) : (
                    <div className={`max-w-[80%] p-4 rounded-2xl ${m.isAi ? 'bg-slate-100 text-slate-800' : 'bg-indigo-600 text-white'} ${m.isSticker || m.isAudio ? 'bg-transparent p-0' : ''}`}>
                      {m.isSticker ? <img src={m.text} className="w-24 h-24" alt="sticker" />
                        : m.isAudio ? <audio controls src={m.text} className="h-10 max-w-[200px]" />
                        : <span dangerouslySetInnerHTML={{ __html: m.text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />}
                    </div>
                  )}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <div className="p-4 border-t bg-white flex gap-2 relative">
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
              <button onClick={handleRecord} title={isRecording ? 'Остановить' : 'Проверить произношение'} className={`p-3 rounded-xl transition-all flex items-center justify-center ${isRecording ? 'bg-red-500 text-white animate-pulse shadow-lg' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md'}`}>
                {isRecording ? <MicOff size={20} /> : <Mic size={20} />}
              </button>
              <button onClick={() => setShowStickers(!showStickers)} title="Стикеры" className={`p-3 rounded-xl transition-all ${showStickers ? 'bg-amber-500 text-white' : 'bg-amber-400 text-white hover:bg-amber-500'} shadow-md`}>
                <Smile size={20} />
              </button>
              <input value={inputText} onChange={e => setInputText(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendMessage()} placeholder="Напишите сообщение..." className="flex-1 bg-slate-100 rounded-xl px-4 outline-none text-slate-800" />
              <button onClick={sendMessage} className="p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 shadow-md"><Send size={20} /></button>
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
                <button key={lvl} onClick={() => setCinemaLevel(lvl)} className={`px-4 py-1.5 rounded-lg border text-sm font-semibold ${cinemaLevel === lvl ? 'bg-indigo-600 text-white' : 'bg-black'}`}>{lvl}</button>
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

      <AnimatePresence>
        {showAchievements && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="bg-[#7a3035] border border-[#8a363c] rounded-3xl p-6 w-full max-w-md text-white shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Ваши достижения</h2>
                <button onClick={() => setShowAchievements(false)} className="p-2 bg-[#653236] rounded-full hover:bg-[#8a363c] transition-colors"><X size={20} /></button>
              </div>
              <div className="space-y-4">
                {achievementsList.map(a => (
                  <div key={a.id} className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${a.unlocked ? 'bg-[#977851]/20 border-[#977851]/40' : 'bg-[#653236]/30 border-[#7a3035] grayscale opacity-40'}`}>
                    <div className="text-3xl">{a.icon}</div>
                    <div>
                      <h4 className="font-bold">{a.title}</h4>
                      <p className="text-sm text-rose-100/60">{a.desc}</p>
                    </div>
                    {a.unlocked && <CheckCircle2 className="ml-auto text-emerald-400" size={20} />}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showNotifications && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="bg-[#7a3035] border border-[#8a363c] rounded-3xl p-6 w-full max-w-md text-white shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Уведомления</h2>
                <button onClick={() => setShowNotifications(false)} className="p-2 bg-[#653236] rounded-full hover:bg-[#8a363c] transition-colors"><X size={20} /></button>
              </div>
              <div className="space-y-3">
                {notificationsList.map(n => (
                  <div key={n.id} className="p-4 rounded-2xl bg-[#653236]/40 border border-[#8a363c]">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-rose-100">{n.title}</h4>
                      <span className="text-[10px] text-rose-100/30 uppercase font-bold">{n.time}</span>
                    </div>
                    <p className="text-sm text-rose-100/60 leading-relaxed">{n.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBookingModal && selectedTeacher && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-[#7a3035] border border-[#8a363c] rounded-3xl p-8 w-full max-w-lg shadow-2xl text-white"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Запись на занятие</h2>
                <button onClick={() => setShowBookingModal(false)} className="p-2 bg-[#653236] rounded-full hover:bg-[#8a363c] transition-colors"><X size={20} /></button>
              </div>

              <div className="flex items-center gap-4 mb-8 p-4 bg-[#653236]/40 rounded-2xl border border-[#8a363c]">
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
                  setSchedule(prev => [...prev, { title: `Урок с ${selectedTeacher.name}`, time: 'Завтра, 14:00', type: 'Live' }]);
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

      <AnimatePresence>
        {selectedBook && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-[32px] overflow-hidden w-full max-w-4xl shadow-2xl flex flex-col md:flex-row h-[90vh] md:h-auto max-h-[90vh]"
            >
              <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-slate-100">
                <img src={selectedBook.cover} className="w-full h-full object-cover" alt={selectedBook.title} />
                <button
                  onClick={() => setSelectedBook(null)}
                  className="absolute top-4 left-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors md:hidden"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 p-8 md:p-12 overflow-y-auto flex flex-col">
                <div className="hidden md:flex justify-end mb-4">
                  <button onClick={() => setSelectedBook(null)} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                    <X size={20} />
                  </button>
                </div>

                <div className="mb-8">
                  <h2 className="text-3xl font-black text-slate-900 mb-2 leading-tight">{selectedBook.title}</h2>
                  <p className="text-indigo-600 font-bold text-lg">{selectedBook.author}</p>
                </div>

                <div className="space-y-8 flex-1">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Original Description</h4>
                    <p className="text-slate-700 leading-relaxed text-lg italic">
                      "{selectedBook.description || 'Description soon...'}"
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-indigo-400 mb-3">Перевод (RU)</h4>
                    <p className="text-slate-600 leading-relaxed">
                      {selectedBook.russianDescription || 'Описание скоро появится...'}
                    </p>
                  </div>
                </div>

                <div className="mt-12 flex gap-4">
                  <button className="flex-1 bg-indigo-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Читать книгу
                  </button>
                  <button className="px-6 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-200 transition-all">
                    В избранное
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isAnimating && <DiamondFlight onComplete={handleAnimationComplete} />}
      </AnimatePresence>

      <footer className="bg-[#653236] border-t border-[#7a3035] py-16 mt-auto text-white">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/Logo.png" alt="Logo" className="w-8 h-10" />
            <span className="font-bold text-white">BilimLife</span>
          </div>
          <div className="hidden md:block text-white text-sm italic">
            "Учитесь с удовольствием — открывайте мир вместе с нами!"
          </div>
          <div className="flex gap-6 text-white">
            <a
              href="https://www.instagram.com/bilimlife_edutemplatee?igsh=MWZrcHU4Mzdkc3UyMw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              title="BilimLife в Instagram"
              className="hover:text-rose-200 transition-all hover:scale-110 active:scale-95"
              style={{ display: 'flex' }}
            >
              <Instagram size={20} />
            </a>
            <Youtube size={20} className="hover:text-rose-200 cursor-pointer transition-colors hover:scale-110" />
            <Telegram size={20} className="hover:text-rose-200 cursor-pointer transition-colors hover:scale-110" />
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
