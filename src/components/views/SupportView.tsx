import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, CreditCard, Mail, Plus, Minus, Download, FileText, CheckCircle2, Send, History } from 'lucide-react';

interface SupportViewProps {
  messages: any[];
  onSendMessage: (msg: any) => void;
}

export const SupportView: React.FC<SupportViewProps> = ({ messages, onSendMessage }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    onSendMessage({
      id: Date.now(),
      text: message,
      email: email,
      time: new Date().toLocaleString()
    });

    setMessage('');
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  };

  const plans = [
    { name: 'Базовый', price: 'Бесплатно', features: ['Доступ к AI-репетитору (лимит)', 'Все базовые книги', 'Участие в рейтинге'], current: true },
    { name: 'Премиум', price: '990 ₸ / мес', features: ['Безлимитный AI-репетитор', 'Все видео и аудио материалы', 'Личный куратор 24/7', 'Эксклюзивные вебинары'], recommended: true },
    { name: 'Для групп', price: '4990 ₸ / мес', features: ['До 5 пользователей', 'Общий кабинет прогресса', 'Скидки на живые уроки'], current: false },
  ];

  const faqs = [
    { q: 'Как работает AI-репетитор Элли?', a: 'Элли основана на современных языковых моделях. Она может проверять ваше произношение, объяснять грамматику и просто общаться на выбранном языке.' },
    { q: 'Могу ли я заниматься с телефона?', a: 'Да, платформа полностью адаптирована для мобильных устройств. Вы можете учиться в любом месте через браузер.' },
    { q: 'Как получить сертификат?', a: 'Сертификат выдается после успешного прохождения финального теста каждого модуля (нужно набрать более 80% правильных ответов).' },
    { q: 'Как потратить алмазы?', a: 'Алмазы можно использовать для открытия новых книг, покупки стикеров или оплаты дополнительных минут с AI-репетитором.' },
  ];

  const templates = [
    { title: 'Таблица времен (English)', type: 'PDF', size: '1.2 MB' },
    { title: 'Чек-лист: 100 частых слов', type: 'XLS', size: '0.5 MB' },
    { title: 'План занятий на 30 дней', type: 'PDF', size: '2.1 MB' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      {/* Plans */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-white mb-4">Тарифы и подписки</h2>
          <p className="text-rose-100/60 max-w-xl mx-auto">Выберите подходящий пакет и начните учиться без ограничений уже сегодня.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i}
              className={`relative bg-[#7a3035]/40 backdrop-blur-md p-8 rounded-[40px] border flex flex-col h-full transition-all hover:scale-[1.02] ${plan.recommended ? 'border-indigo-500/50 shadow-2xl shadow-indigo-500/10' : 'border-[#8a363c]'}`}
            >
              {plan.recommended && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Рекомендуем
                </span>
              )}
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-3xl font-black text-indigo-400 mb-8">{plan.price}</p>
              <ul className="space-y-4 flex-1 mb-10">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-rose-100/60 text-sm">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-2xl font-black transition-all ${plan.current ? 'bg-white/5 border border-white/10 text-rose-100/40 cursor-default' : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl shadow-indigo-600/20'}`}>
                {plan.current ? 'Ваш текущий тариф' : 'Выбрать план'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Templates */}
      <section className="bg-[#7a3035]/40 backdrop-blur-md p-8 md:p-12 rounded-[48px] border border-[#8a363c]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-black text-white mb-2">Библиотека шаблонов</h2>
            <p className="text-rose-100/60 text-sm">Дополнительные материалы для скачивания.</p>
          </div>
          <button className="flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors">
            Смотреть все <Download size={20} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {templates.map((t, i) => (
            <div key={i} className="bg-[#653236]/40 p-6 rounded-3xl border border-white/5 flex items-center gap-4 group hover:bg-[#653236]/60 transition-all cursor-pointer">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-rose-100/40 group-hover:bg-indigo-600/20 group-hover:text-indigo-400 transition-all">
                <FileText size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-bold text-sm truncate">{t.title}</h4>
                <p className="text-[10px] text-rose-100/40 font-bold uppercase tracking-widest">{t.type} • {t.size}</p>
              </div>
              <Download size={18} className="text-rose-100/20 group-hover:text-white transition-colors" />
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-3">
            <HelpCircle className="text-indigo-400" size={32} /> FAQ
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#7a3035]/40 backdrop-blur-md rounded-2xl border border-[#8a363c] overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-white font-bold text-sm pr-4">{faq.q}</span>
                  {openFaq === i ? <Minus size={18} className="text-indigo-400" /> : <Plus size={18} className="text-rose-100/40" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-rose-100/60 text-sm leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* Support Form */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-3">
              <Mail className="text-indigo-400" size={32} /> Поддержка
            </h2>
            <form onSubmit={handleSubmit} className="bg-[#7a3035]/40 backdrop-blur-md p-8 rounded-[40px] border border-[#8a363c] space-y-4">
              <div>
                <label className="block text-[10px] font-black text-rose-100/40 uppercase tracking-widest mb-2 ml-1">Ваше сообщение</label>
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Опишите проблему или задайте вопрос..." 
                  className="w-full bg-black/20 border border-white/5 rounded-2xl p-4 text-sm text-white placeholder:text-rose-100/20 focus:outline-none focus:border-indigo-500/50 transition-colors"
                  rows={4}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email" 
                  className="bg-black/20 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder:text-rose-100/20 focus:outline-none focus:border-indigo-500/50 transition-colors" 
                />
                <button type="submit" className="bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2">
                  {isSent ? <CheckCircle2 size={18} /> : <Send size={18} />}
                  {isSent ? 'Отправлено' : 'Отправить'}
                </button>
              </div>
            </form>
          </div>

          {messages.length > 0 && (
            <div className="bg-[#7a3035]/20 backdrop-blur-md p-8 rounded-[40px] border border-white/5">
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <History size={18} className="text-indigo-400" /> История обращений
              </h3>
              <div className="space-y-4">
                {messages.map((m) => (
                  <div key={m.id} className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">{m.time}</span>
                      {m.email && <span className="text-[9px] text-rose-100/30">{m.email}</span>}
                    </div>
                    <p className="text-xs text-rose-100/70 leading-relaxed">{m.text}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      <span className="text-[9px] text-amber-400 font-bold uppercase">В обработке</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
