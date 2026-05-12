import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Calendar, Clock, Award, Star, TrendingUp } from 'lucide-react';

interface ProfileViewProps {
  user: { username: string } | null;
  diamonds: number;
  schedule?: { title: string; time: string; type: string }[];
}

export const ProfileView: React.FC<ProfileViewProps> = ({ user, diamonds, schedule = [] }) => {
  const stats = [
    { label: 'Пройдено уроков', value: '24', icon: Target, color: 'text-blue-400' },
    { label: 'Слова в запасе', value: '850', icon: Star, color: 'text-amber-400' },
    { label: 'Дней ударно', value: '12', icon: TrendingUp, color: 'text-rose-400' },
  ];

  const goals = [
    { title: 'Ежедневная цель', progress: 75, target: '20 мин / 30 мин' },
    { title: 'Недельный план', progress: 40, target: '4 урока / 10 уроков' },
  ];

  const upcomingEvents = schedule;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* User Header */}
      <div className="bg-[#7a3035]/60 backdrop-blur-md rounded-3xl p-8 border border-[#8a363c] flex flex-col md:flex-row items-center gap-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white shadow-xl">
          {user?.username?.[0] || 'U'}
        </div>
        <div className="text-center md:text-left flex-1">
          <h2 className="text-3xl font-black text-white mb-1">{user?.username || 'Студент'}</h2>
          <p className="text-rose-200/60 font-medium tracking-wide flex items-center justify-center md:justify-start gap-2">
            <Award size={16} /> Уровень: Продвинутый (B1)
          </p>
        </div>
        <div className="flex gap-4">
          <div className="bg-[#653236]/60 px-6 py-3 rounded-2xl border border-[#8a363c] text-center">
            <p className="text-2xl font-black text-white">{diamonds}</p>
            <p className="text-[10px] uppercase tracking-widest text-rose-200/40">Алмазов</p>
          </div>
          <div className="bg-[#653236]/60 px-6 py-3 rounded-2xl border border-[#8a363c] text-center">
            <p className="text-2xl font-black text-white">#12</p>
            <p className="text-[10px] uppercase tracking-widest text-rose-200/40">В рейтинге</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Progress & Goals */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-[#7a3035]/40 backdrop-blur-sm p-6 rounded-2xl border border-[#8a363c]"
              >
                <stat.icon className={`${stat.color} mb-3`} size={24} />
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="text-sm text-rose-100/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-[#7a3035]/40 backdrop-blur-sm p-8 rounded-3xl border border-[#8a363c]">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Target size={20} className="text-indigo-400" /> Цели обучения
            </h3>
            <div className="space-y-6">
              {goals.map((goal, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-rose-100 font-medium">{goal.title}</span>
                    <span className="text-rose-100/60 text-sm">{goal.target}</span>
                  </div>
                  <div className="w-full bg-black/30 rounded-full h-3 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${goal.progress}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#7a3035]/40 backdrop-blur-sm p-8 rounded-3xl border border-[#8a363c]">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Award size={20} className="text-amber-400" /> Достижения
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex flex-col items-center gap-2 p-4 bg-[#653236]/30 rounded-2xl border border-white/5 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-help">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center text-2xl">
                    🏆
                  </div>
                  <span className="text-[10px] text-center text-rose-100/60 font-bold uppercase tracking-tighter">Мастер слов</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Schedule & Certificates */}
        <div className="space-y-6">
          <div className="bg-[#7a3035]/40 backdrop-blur-sm p-6 rounded-3xl border border-[#8a363c]">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Calendar size={20} className="text-cyan-400" /> Расписание
            </h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, i) => (
                <div key={i} className="bg-[#653236]/40 p-4 rounded-xl border border-white/5">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-white font-bold text-sm">{event.title}</h4>
                    <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase ${event.type === 'Live' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                      {event.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-rose-100/40 text-xs">
                    <Clock size={12} /> {event.time}
                  </div>
                </div>
              ))}
              <button className="w-full py-3 bg-[#8a363c]/30 hover:bg-[#8a363c]/50 text-white rounded-xl text-xs font-bold transition-all border border-white/5">
                Смотреть весь календарь
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600/40 to-purple-600/40 backdrop-blur-sm p-8 rounded-3xl border border-indigo-500/30 text-center">
            <Trophy className="mx-auto text-amber-400 mb-4" size={48} />
            <h4 className="text-white font-bold mb-2">Сертификат A2</h4>
            <p className="text-rose-100/60 text-sm mb-6">Вы успешно завершили базовый курс английского языка.</p>
            <button className="px-6 py-2 bg-white text-indigo-600 rounded-full font-bold text-sm hover:scale-105 transition-transform">
              Скачать PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
