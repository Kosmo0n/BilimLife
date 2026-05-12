import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Zap, Brain, RotateCcw, Check, X, Star, Trophy, ArrowRight, Volume2 } from 'lucide-react';
import { practiceData, quizData } from '../../data/constants';

const QuizEngine: React.FC<{ questions: any[]; onFinish: (score: number) => void }> = ({ questions, onFinish }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleNext = () => {
    if (selectedOption === questions[currentStep].correct) {
      setScore(score + 1);
    }

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
      onFinish(score + (selectedOption === questions[currentStep].correct ? 1 : 0));
    }
  };

  if (isFinished) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto bg-[#7a3035]/60 backdrop-blur-md p-10 rounded-[40px] border border-[#8a363c] text-center shadow-2xl"
      >
        <Trophy size={64} className="text-yellow-400 mx-auto mb-6" />
        <h3 className="text-3xl font-black text-white mb-2">Отличный результат!</h3>
        <p className="text-rose-100/60 mb-8">Вы набрали {score} из {questions.length} баллов.</p>
        <div className="flex flex-col gap-3">
          <div className="w-full bg-black/20 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-emerald-500 transition-all duration-1000" 
              style={{ width: `${(score / questions.length) * 100}%` }}
            />
          </div>
          <p className="text-xs text-white/40 font-bold uppercase tracking-widest">Прогресс квиза</p>
        </div>
      </motion.div>
    );
  }

  const q = questions[currentStep];

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="mb-8 flex justify-between items-center px-4">
        <span className="text-rose-100/40 font-black uppercase tracking-[0.2em] text-[10px]">Вопрос {currentStep + 1} из {questions.length}</span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all ${i <= currentStep ? 'w-6 bg-purple-500' : 'w-2 bg-white/10'}`} />
          ))}
        </div>
      </div>

      <motion.div 
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-[#7a3035]/60 backdrop-blur-md p-10 rounded-[40px] border border-[#8a363c] shadow-2xl"
      >
        <h3 className="text-2xl font-bold text-white mb-10 text-center leading-relaxed">{q.question}</h3>
        
        <div className="grid gap-4">
          {q.options.map((opt: string, idx: number) => (
            <button
              key={idx}
              onClick={() => setSelectedOption(idx)}
              className={`w-full p-5 rounded-2xl border-2 transition-all text-left font-bold flex items-center justify-between group ${
                selectedOption === idx 
                  ? 'bg-purple-600 border-purple-400 text-white shadow-lg shadow-purple-900/40' 
                  : 'bg-white/5 border-white/10 text-rose-100/70 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <span>{opt}</span>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                selectedOption === idx ? 'bg-white border-white text-purple-600' : 'border-white/20'
              }`}>
                {selectedOption === idx && <Check size={14} strokeWidth={4} />}
              </div>
            </button>
          ))}
        </div>

        <button
          disabled={selectedOption === null}
          onClick={handleNext}
          className="w-full mt-10 bg-white text-[#7a3035] py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-30 disabled:scale-100 flex items-center justify-center gap-2"
        >
          {currentStep === questions.length - 1 ? 'Завершить' : 'Следующий вопрос'}
          <ArrowRight size={18} />
        </button>
      </motion.div>
    </div>
  );
};

export const PracticeView: React.FC<{ selectedLang: string; onEarn?: (amount: number) => void }> = ({ selectedLang, onEarn }) => {
  const [mode, setMode] = useState<'menu' | 'cards' | 'quiz'>('menu');
  const [currentCard, setCurrentCard] = useState(0);

  const words = practiceData[selectedLang] || practiceData['en'];
  const questions = quizData[selectedLang] || quizData['en'];

  const nextCard = () => {
    if (currentCard === words.length - 1) {
      onEarn?.(5);
    }
    setCurrentCard((prev) => (prev + 1) % words.length);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-black text-white">Практика: {selectedLang.toUpperCase()}</h2>
        {mode !== 'menu' && (
          <button 
            onClick={() => setMode('menu')}
            className="text-rose-100/60 hover:text-white font-bold flex items-center gap-2"
          >
            <RotateCcw size={18} /> Назад
          </button>
        )}
      </div>

      {mode === 'menu' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            onClick={() => setMode('cards')}
            className="group bg-gradient-to-br from-[#7a3035]/60 to-[#977851]/40 backdrop-blur-md p-8 rounded-[32px] border border-[#8a363c] cursor-pointer hover:scale-[1.02] transition-all shadow-2xl overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-white/10 transition-colors">
              <Layers size={120} />
            </div>
            <div className="w-14 h-14 bg-indigo-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-500/20">
              <Layers size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Тренажер слов</h3>
            <p className="text-rose-100/60 text-sm leading-relaxed mb-6">Простое изучение слов с транскрипцией и переводом.</p>
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
              Начать <Zap size={16} />
            </div>
          </div>

          <div 
            onClick={() => setMode('quiz')}
            className="group bg-gradient-to-br from-[#7a3035]/60 to-purple-900/40 backdrop-blur-md p-8 rounded-[32px] border border-[#8a363c] cursor-pointer hover:scale-[1.02] transition-all shadow-2xl overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-white/10 transition-colors">
              <Brain size={120} />
            </div>
            <div className="w-14 h-14 bg-purple-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-purple-500/20">
              <Brain size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Языковой Квиз</h3>
            <p className="text-rose-100/60 text-sm leading-relaxed mb-6">Проверьте свои знания в игровой форме.</p>
            <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
              Выбрать тему <Star size={16} />
            </div>
          </div>
        </div>
      )}

      {mode === 'cards' && (
        <div className="max-w-xl mx-auto py-12">
          <div className="flex justify-center mb-12 gap-1.5">
            {words.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all ${i === currentCard ? 'w-8 bg-indigo-500' : 'w-2 bg-white/20'}`} />
            ))}
          </div>

          <motion.div 
            key={currentCard}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#7a3035] border-2 border-[#8a363c] rounded-[40px] flex flex-col items-center justify-center p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-30" />
            
            <span className="text-indigo-400 font-bold uppercase tracking-widest text-[10px] mb-8">Изучаемое слово</span>
            
            <h3 className="text-5xl font-black text-white text-center mb-2">{words[currentCard].word}</h3>
            <p className="text-rose-100/40 font-medium text-lg mb-8 italic">{words[currentCard].transcription}</p>
            
            <div className="w-full h-px bg-white/10 mb-8" />
            
            <p className="text-3xl font-bold text-rose-100 text-center mb-6">{words[currentCard].translation}</p>
            
            <div className="bg-black/20 p-6 rounded-2xl border border-white/5 w-full">
              <p className="text-white/60 text-sm text-center leading-relaxed font-medium italic">"{words[currentCard].example}"</p>
            </div>
          </motion.div>

          <div className="flex justify-center gap-6 mt-12">
            <button 
              onClick={nextCard}
              className="w-20 h-20 rounded-full bg-indigo-600 border-4 border-indigo-400/50 flex items-center justify-center text-white hover:scale-110 transition-all shadow-xl shadow-indigo-600/20"
            >
              <ArrowRight size={32} />
            </button>
          </div>
        </div>
      )}

      {mode === 'quiz' && (
        <QuizEngine questions={questions} onFinish={(score) => {
          if (score >= questions.length / 2) onEarn?.(10);
        }} />
      )}
    </div>
  );
};
