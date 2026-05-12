import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, ClipboardCheck, Timer, ChevronRight, Star, Gem, Medal } from 'lucide-react';
import { assessmentData } from '../../data/constants';

const TestRunner: React.FC<{ questions: any[]; test: any; onFinish: () => void; onEarn?: (amount: number) => void }> = ({ questions, test, onFinish, onEarn }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState(false);

  const handleFinish = () => {
    setIsFinished(true);
    onEarn?.(10);
    setTimeout(onFinish, 3000);
  };

  if (isFinished) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto bg-[#7a3035]/60 backdrop-blur-md p-12 rounded-[40px] border border-[#8a363c] text-center"
      >
        <Trophy size={64} className="text-yellow-400 mx-auto mb-6" />
        <h3 className="text-3xl font-black text-white mb-4">Тест завершен!</h3>
        <p className="text-rose-100/60 mb-8">Ваши результаты обрабатываются. Вы получили +50 XP и 10 💎</p>
        <div className="flex justify-center gap-2">
          {[1, 2, 3].map(i => <Star key={i} className="text-yellow-400 fill-yellow-400" size={24} />)}
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">{test.title}</h3>
        <span className="text-rose-100/40 font-black uppercase text-xs tracking-widest">Вопрос {step + 1} / {questions.length}</span>
      </div>
      
      <div className="bg-[#7a3035]/60 backdrop-blur-md p-10 rounded-[40px] border border-[#8a363c] shadow-2xl">
        <p className="text-2xl font-bold text-white mb-10">{questions[step].q}</p>
        <div className="grid gap-4">
          {questions[step].options.map((opt: string, idx: number) => (
            <button
              key={idx}
              onClick={() => {
                setAnswers({ ...answers, [step]: idx });
                if (step < questions.length - 1) setStep(step + 1);
                else handleFinish();
              }}
              className="w-full p-6 bg-white/5 border-2 border-white/10 rounded-2xl text-left text-rose-100 hover:bg-white/10 hover:border-white/20 transition-all font-bold flex items-center justify-between group"
            >
              <span>{opt}</span>
              <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export const AssessmentView: React.FC<{ selectedLang: string; onEarn?: (amount: number) => void }> = ({ selectedLang, onEarn }) => {
  const [activeView, setActiveView] = useState<'tests' | 'leaderboard'>('tests');
  const [activeTest, setActiveTest] = useState<any>(null);

  const tests = [
    { id: 1, title: 'Входное тестирование', desc: 'Определите свой текущий уровень владения языком.', duration: '20 мин', questions: 40, difficulty: 'Все уровни' },
    { id: 2, title: 'Грамматика: Модуль 1', desc: 'Проверка базовых времен и структур предложений.', duration: '10 мин', questions: 15, difficulty: 'A1' },
    { id: 3, title: 'Лексика: Путешествия', desc: 'Тест на знание слов по теме туризма и транспорта.', duration: '15 мин', questions: 25, difficulty: 'A2-B1' },
  ];

  const leaderboards: Record<string, any[]> = {
    en: [
      { rank: 1, name: 'Alice E.', score: 4500, diamonds: 850, avatar: 'AE' },
      { rank: 2, name: 'Bob S.', score: 4200, diamonds: 720, avatar: 'BS' },
      { rank: 3, name: 'Charlie P.', score: 3800, diamonds: 690, avatar: 'CP' },
      { rank: 4, name: 'Вы', score: 3200, diamonds: 120, avatar: 'U', isUser: true },
    ],
    fr: [
      { rank: 1, name: 'Jean D.', score: 4800, diamonds: 950, avatar: 'JD' },
      { rank: 2, name: 'Marie L.', score: 4100, diamonds: 680, avatar: 'ML' },
      { rank: 3, name: 'Вы', score: 3500, diamonds: 150, avatar: 'U', isUser: true },
    ],
    es: [
      { rank: 1, name: 'Carlos R.', score: 4300, diamonds: 800, avatar: 'CR' },
      { rank: 2, name: 'Elena G.', score: 3900, diamonds: 700, avatar: 'EG' },
      { rank: 3, name: 'Вы', score: 3100, diamonds: 100, avatar: 'U', isUser: true },
    ],
    cn: [
      { rank: 1, name: 'Li W.', score: 5000, diamonds: 1200, avatar: 'LW' },
      { rank: 2, name: 'Вы', score: 2800, diamonds: 90, avatar: 'U', isUser: true },
    ],
    ar: [
      { rank: 1, name: 'Amira A.', score: 4600, diamonds: 900, avatar: 'AA' },
      { rank: 2, name: 'Вы', score: 3000, diamonds: 110, avatar: 'U', isUser: true },
    ]
  };

  const currentLeaderboard = leaderboards[selectedLang] || leaderboards['en'];

  if (activeTest) {
    const questions = assessmentData[selectedLang] || assessmentData['en'];
    return <TestRunner questions={questions} test={activeTest} onFinish={() => setActiveTest(null)} onEarn={onEarn} />;
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-3xl font-black text-white">Оценка: {selectedLang.toUpperCase()}</h2>
        <nav className="flex gap-1 bg-black/20 p-1 rounded-2xl border border-white/5">
          <button
            onClick={() => setActiveView('tests')}
            className={`px-6 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${activeView === 'tests' ? 'bg-indigo-600 text-white shadow-lg' : 'text-rose-100/40 hover:text-white'}`}
          >
            <span className="shrink-0"><ClipboardCheck size={14} /></span> Тестирование
          </button>
          <button
            onClick={() => setActiveView('leaderboard')}
            className={`px-6 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${activeView === 'leaderboard' ? 'bg-indigo-600 text-white shadow-lg' : 'text-rose-100/40 hover:text-white'}`}
          >
            <span className="shrink-0"><Trophy size={14} /></span> Топ недели
          </button>
        </nav>
      </div>

      {activeView === 'tests' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map((test) => (
            <motion.div 
              key={test.id}
              whileHover={{ scale: 1.02 }}
              className="bg-[#7a3035]/40 backdrop-blur-md p-8 rounded-[32px] border border-[#8a363c] flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400">
                  <ClipboardCheck size={24} />
                </div>
                <span className="text-[10px] font-black px-3 py-1 bg-black/30 text-rose-100/60 rounded-full border border-white/5 uppercase tracking-widest">
                  {test.difficulty}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{test.title}</h3>
              <p className="text-rose-100/40 text-sm leading-relaxed mb-8 flex-1">{test.desc}</p>
              <div className="flex items-center gap-4 text-rose-100/60 text-xs font-bold mb-6">
                <span className="flex items-center gap-1.5"><Timer size={14} /> {test.duration}</span>
                <span className="flex items-center gap-1.5"><Star size={14} /> {test.questions} вопр.</span>
              </div>
              <button 
                onClick={() => setActiveTest(test)}
                className="w-full py-4 bg-[#8a363c]/40 hover:bg-indigo-600 text-white rounded-2xl font-bold transition-all border border-white/5 group flex items-center justify-center gap-2"
              >
                Начать тест <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      )}

      {activeView === 'leaderboard' && (
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="bg-[#7a3035]/60 backdrop-blur-md p-8 rounded-[40px] border border-[#8a363c] shadow-2xl mb-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-black text-white mb-1">Топ-10 ({selectedLang.toUpperCase()})</h3>
                <p className="text-rose-100/40 text-sm font-medium">Обновляется каждое воскресенье</p>
              </div>
              <Trophy size={48} className="text-amber-400 drop-shadow-lg" />
            </div>

            <div className="space-y-3">
              {currentLeaderboard.map((item) => (
                <div 
                  key={item.rank}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${item.isUser ? 'bg-indigo-600/20 border-indigo-500/50' : 'bg-[#653236]/30 border-white/5'}`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm ${item.rank === 1 ? 'bg-amber-400 text-amber-900' : item.rank === 2 ? 'bg-slate-300 text-slate-800' : item.rank === 3 ? 'bg-orange-400 text-orange-900' : 'text-rose-100/40'}`}>
                    {item.rank}
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shrink-0 ${item.isUser ? 'bg-indigo-600' : 'bg-[#7a3035]'}`}>
                    {item.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold text-sm ${item.isUser ? 'text-white' : 'text-rose-100'}`}>{item.name} {item.isUser && '(Вы)'}</h4>
                    <p className="text-[10px] text-rose-100/40 font-bold uppercase tracking-widest">{item.score} XP</p>
                  </div>
                  <div className="flex items-center gap-1.5 font-black text-cyan-400">
                    <Gem size={14} /> {item.diamonds}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#7a3035] to-[#977851] p-8 rounded-3xl border border-[#8a363c] text-center">
            <h4 className="text-white font-bold mb-2">Хотите попасть в Топ-3?</h4>
            <p className="text-rose-100/60 text-sm mb-6">Учите по 10 новых слов в день и проходите тесты без ошибок!</p>
            <button className="bg-white text-[#7a3035] px-8 py-3 rounded-2xl font-black text-sm hover:scale-105 transition-transform">
              Узнать больше о баллах
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
