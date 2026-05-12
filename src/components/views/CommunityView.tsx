import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Users, BookOpen, Send, Heart, Share2, MoreHorizontal, UserCheck, Paperclip, Smile, Trash2, X, ArrowLeft } from 'lucide-react';

const CuratorChat: React.FC = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Здравствуйте! Чем я могу вам помочь сегодня?', isAi: true, time: '10:00' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg = { id: Date.now(), text: input, isAi: false, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages([...messages, newMsg]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, text: 'Принято! Куратор ответит вам в течение нескольких минут.', isAi: true, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    }, 1000);
  };

  return (
    <div className="max-w-3xl mx-auto bg-[#7a3035]/40 backdrop-blur-md rounded-[40px] border border-[#8a363c] overflow-hidden flex flex-col shadow-2xl h-[600px]">
      <div className="p-6 bg-[#8a363c]/30 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">K</div>
          <div>
            <h4 className="text-white font-bold text-sm">Куратор BilimLife</h4>
            <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Online</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth">
        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.isAi ? 'justify-start' : 'justify-end'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl ${m.isAi ? 'bg-white/5 border border-white/10 text-rose-100' : 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/40'}`}>
              <p className="text-sm leading-relaxed">{m.text}</p>
              <p className={`text-[9px] mt-2 font-bold uppercase tracking-widest ${m.isAi ? 'text-rose-100/30' : 'text-white/50'}`}>{m.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 bg-[#653236]/30 border-t border-white/5 flex gap-3">
        <button className="p-3 text-rose-100/40 hover:text-white transition-colors"><Paperclip size={20} /></button>
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Напишите куратору..." 
          className="flex-1 bg-black/20 border border-white/5 rounded-xl px-5 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-all"
        />
        <button 
          onClick={handleSend}
          className="p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all shadow-lg"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

interface CommunityViewProps {
  selectedLang: string;
  posts: any[];
  onPost: (post: any) => void;
  onLike: (id: number) => void;
  onComment: (id: number, comment: any) => void;
  user: any;
}

const blogData: Record<string, any[]> = {
  en: [
    {
      id: 1,
      title: 'The American Dream: Reality vs Myth',
      excerpt: 'What does the American dream look like in the 21st century?',
      content: 'The American Dream is a national ethos of the United States, the set of ideals in which freedom includes the opportunity for prosperity and success. In the 21st century, this concept has evolved. While some believe it’s about wealth, many now see it as the freedom to live the life one chooses. We explore how modern Americans view success, community, and the ever-changing landscape of the USA.',
      category: 'Culture',
      image: 'https://images.unsplash.com/photo-1485671545386-750458952f44?w=800&auto=format&fit=crop&q=60',
      date: 'May 12, 2024',
      readTime: '6 min'
    },
    {
      id: 2,
      title: 'Small Talk Tips for Travelers',
      excerpt: 'How to strike up a conversation in any US coffee shop.',
      content: 'Americans are known for their friendly "small talk." Whether you’re waiting for your latte or in an elevator, knowing how to chat about the weather or local sports is key. We provide a guide on the most common phrases and topics that will help you blend in and make friends across the states.',
      category: 'Tips',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=60',
      date: 'May 10, 2024',
      readTime: '4 min'
    }
  ],
  fr: [
    {
      id: 1,
      title: 'Art de Vivre: The French Lifestyle',
      excerpt: 'Discover why the French value quality over quantity in everything.',
      content: 'From the morning croissant to the evening aperitif, the French "Art de Vivre" is about savoring the moment. It’s not just about luxury; it’s about finding beauty in the everyday. We dive into the rituals of French daily life and how you can adopt this mindful approach to eating, working, and socialising.',
      category: 'Lifestyle',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop&q=60',
      date: '12 мая, 2024',
      readTime: '5 мин'
    },
    {
      id: 2,
      title: '10 фраз для выживания в Париже',
      excerpt: 'Что сказать официанту и как не показаться грубым...',
      content: 'Французы очень ценят вежливость. Начинать любой разговор стоит с приветствия "Bonjour". Если вы сразу заговорите на английском, это может быть воспринято как неуважение. Мы подготовили список из 10 самых важных фраз, которые помогут вам в ресторане, метро и при поиске дороги. Эти простые выражения откроют перед вами двери самых уютных парижских кафе.',
      category: 'Советы',
      image: 'https://images.unsplash.com/photo-1431274172761-fca41d93e114?w=800&auto=format&fit=crop&q=60',
      date: '10 мая, 2024',
      readTime: '3 мин'
    }
  ],
  es: [
    {
      id: 1,
      title: 'The Magic of Siesta and Fiesta',
      excerpt: 'Understanding the Spanish social calendar and values.',
      content: 'In Spain, life is lived in the streets. The balance between "Siesta" (rest) and "Fiesta" (celebration) is a cornerstone of the culture. We explore the history of these traditions and how they influence modern Spanish business and family life, and why being late might not be a problem in Spain.',
      category: 'Culture',
      image: 'https://images.unsplash.com/photo-1543783232-af9942f4a472?w=800&auto=format&fit=crop&q=60',
      date: '11 мая, 2024',
      readTime: '7 мин'
    }
  ],
  cn: [
    {
      id: 1,
      title: 'Культура чаепития в Китае',
      excerpt: 'Традиции, которые сохранились на протяжении тысячелетий...',
      content: 'Чайная церемония в Китае — это не просто способ утолить жажду, а глубокая философская практика. Искусство гунфу-ча требует особого внимания к деталям: от выбора воды и посуды до настроения мастера. Каждое движение имеет значение, а вкус чая раскрывается по-разному с каждой новой заваркой. В этой статье мы разберем основные виды китайского чая и правила проведения церемонии дома.',
      category: 'Культура',
      image: 'https://images.unsplash.com/photo-1544350030-97193f41249e?w=800&auto=format&fit=crop&q=60',
      date: '12 мая, 2024',
      readTime: '5 мин'
    }
  ],
  ar: [
    {
      id: 1,
      title: 'Arabian Hospitality: Diwan and Coffee',
      excerpt: 'The deep roots of generosity in the Arab world.',
      content: 'Hospitality is at the heart of Arabic culture. The "Diwan" or "Majlis" is a space where guests are welcomed with coffee and dates. We discuss the intricate etiquette of serving coffee and why being a good host is considered a moral duty in Arab society.',
      category: 'Traditions',
      image: 'https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=800&auto=format&fit=crop&q=60',
      date: '13 мая, 2024',
      readTime: '6 мин'
    }
  ]
};

export const CommunityView: React.FC<CommunityViewProps> = ({ selectedLang, posts, onPost, onLike, onComment, user }) => {
  const [activeSubTab, setActiveSubTab] = useState<'feed' | 'blog' | 'chat'>('feed');
  const [newPostContent, setNewPostContent] = useState('');
  const [commentingId, setCommentingId] = useState<number | null>(null);
  const [newComment, setNewComment] = useState('');
  const [selectedBlogPost, setSelectedBlogPost] = useState<any>(null);

  const handleCreatePost = () => {
    if (!newPostContent.trim()) return;
    const post = {
      id: Date.now(),
      user: user?.username || 'Гость',
      avatar: (user?.username?.[0] || 'G').toUpperCase(),
      content: newPostContent,
      likes: 0,
      comments: [],
      time: 'Только что',
      tag: selectedLang.toUpperCase()
    };
    onPost(post);
    setNewPostContent('');
  };

  const handleAddComment = (postId: number) => {
    if (!newComment.trim()) return;
    const comment = {
      id: Date.now(),
      user: user?.username || 'Гость',
      text: newComment,
      time: 'Только что'
    };
    onComment(postId, comment);
    setNewComment('');
  };

  const currentBlogPosts = blogData[selectedLang] || blogData['en'];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-3xl font-black text-white">Сообщество</h2>
        <nav className="flex gap-1 bg-black/20 p-1 rounded-2xl border border-white/5">
          {[
            { id: 'feed', label: 'Форум', icon: Users },
            { id: 'blog', label: 'Блог', icon: BookOpen },
            { id: 'chat', label: 'Чат с куратором', icon: MessageSquare }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveSubTab(tab.id as any);
                setSelectedBlogPost(null);
              }}
              className={`px-6 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${activeSubTab === tab.id ? 'bg-indigo-600 text-white shadow-lg' : 'text-rose-100/40 hover:text-white'}`}
            >
              <tab.icon size={14} /> {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <AnimatePresence mode="wait">
        {activeSubTab === 'feed' && (
          <motion.div 
            key="feed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            <div className="lg:col-span-2 space-y-6">
              {/* Create Post */}
              <div className="bg-[#7a3035]/40 backdrop-blur-md p-6 rounded-3xl border border-[#8a363c]">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white shrink-0">
                    {(user?.username?.[0] || 'G').toUpperCase()}
                  </div>
                  <div className="flex-1 space-y-4">
                    <textarea 
                      value={newPostContent}
                      onChange={(e) => setNewPostContent(e.target.value)}
                      placeholder="Поделитесь мыслями или задайте вопрос..." 
                      className="w-full bg-black/20 border border-white/5 rounded-2xl p-4 text-sm text-white placeholder:text-rose-100/20 focus:outline-none focus:border-indigo-500/50 transition-colors"
                      rows={3}
                    />
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <button className="p-2 text-rose-100/40 hover:text-white transition-colors"><Paperclip size={18} /></button>
                      </div>
                      <button 
                        onClick={handleCreatePost}
                        className="bg-indigo-600 text-white px-6 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all"
                      >
                        Опубликовать <Send size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Posts List */}
              <div className="space-y-6">
                {posts.map((post) => (
                  <motion.div 
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#7a3035]/40 backdrop-blur-md p-6 rounded-3xl border border-[#8a363c]"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-3">
                        <div className={`w-10 h-10 rounded-full ${post.isTeacher ? 'bg-amber-500' : 'bg-indigo-500'} flex items-center justify-center font-bold text-white`}>
                          {post.avatar}
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-sm flex items-center gap-2">
                            {post.user}
                            {post.isTeacher && <UserCheck size={14} className="text-amber-400" />}
                          </h4>
                          <p className="text-[10px] text-rose-100/40 font-bold uppercase tracking-widest">{post.time} • <span className="text-indigo-400">{post.tag}</span></p>
                        </div>
                      </div>
                      <button className="text-rose-100/40 hover:text-white"><MoreHorizontal size={20} /></button>
                    </div>
                    <p className="text-rose-100/80 text-sm leading-relaxed mb-6">{post.content}</p>
                    
                    <div className="flex gap-6 border-t border-white/5 pt-4 mb-4">
                      <button 
                        onClick={() => onLike(post.id)}
                        className="flex items-center gap-2 text-rose-100/40 hover:text-rose-400 transition-colors font-bold text-xs"
                      >
                        <Heart size={16} className={post.likes > 12 ? 'fill-rose-500 text-rose-500' : ''} /> {post.likes}
                      </button>
                      <button 
                        onClick={() => setCommentingId(commentingId === post.id ? null : post.id)}
                        className="flex items-center gap-2 text-rose-100/40 hover:text-indigo-400 transition-colors font-bold text-xs"
                      >
                        <MessageSquare size={16} /> {post.comments.length}
                      </button>
                    </div>

                    {/* Comments Section */}
                    <AnimatePresence>
                      {commentingId === post.id && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-4 pt-4 border-t border-white/5">
                            {post.comments.map((comment: any) => (
                              <div key={comment.id} className="bg-black/10 p-4 rounded-2xl border border-white/5">
                                <div className="flex justify-between items-center mb-1">
                                  <span className="text-xs font-bold text-indigo-400">{comment.user}</span>
                                  <span className="text-[9px] text-rose-100/30 uppercase font-bold">{comment.time}</span>
                                </div>
                                <p className="text-xs text-rose-100/70">{comment.text}</p>
                              </div>
                            ))}
                            <div className="flex gap-2">
                              <input 
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Написать комментарий..."
                                className="flex-1 bg-black/20 border border-white/5 rounded-xl px-4 py-2 text-xs text-white focus:outline-none"
                              />
                              <button 
                                onClick={() => handleAddComment(post.id)}
                                className="bg-indigo-600 p-2 rounded-xl text-white hover:bg-indigo-700"
                              >
                                <Send size={14} />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-md p-6 rounded-3xl border border-indigo-500/30">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Users size={18} className="text-indigo-400" /> Language Exchange
                </h3>
                <p className="text-rose-100/60 text-xs leading-relaxed mb-4">Найдите напарника для практики языка среди других студентов.</p>
                <button className="w-full py-3 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition-all">
                  Найти напарника
                </button>
              </div>

              <div className="bg-[#7a3035]/40 backdrop-blur-md p-6 rounded-3xl border border-[#8a363c]">
                <h3 className="text-white font-bold mb-4">Популярные темы</h3>
                <div className="flex flex-wrap gap-2">
                  {['IELTS', 'Грамматика', 'Путешествия', 'Бизнес', 'Кино', 'Мемы'].map((tag) => (
                    <button key={tag} className="px-3 py-1.5 bg-white/5 rounded-lg text-[10px] font-bold text-rose-100/60 border border-white/5 hover:border-indigo-500/50 transition-all uppercase">
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeSubTab === 'blog' && (
          <motion.div 
            key="blog"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {selectedBlogPost ? (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="max-w-4xl mx-auto bg-[#7a3035]/40 backdrop-blur-md rounded-[40px] border border-[#8a363c] overflow-hidden shadow-2xl"
              >
                <div className="h-96 relative">
                  <img src={selectedBlogPost.image} alt={selectedBlogPost.title} className="w-full h-full object-cover" />
                  <button 
                    onClick={() => setSelectedBlogPost(null)}
                    className="absolute top-6 left-6 w-12 h-12 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-all"
                  >
                    <ArrowLeft size={24} />
                  </button>
                  <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="px-3 py-1 bg-indigo-600 text-white text-[10px] font-bold uppercase rounded-full tracking-widest mb-4 inline-block">
                      {selectedBlogPost.category}
                    </span>
                    <h3 className="text-4xl font-black text-white">{selectedBlogPost.title}</h3>
                  </div>
                </div>
                <div className="p-10 space-y-6">
                  <div className="flex items-center gap-6 text-rose-100/40 text-xs font-bold uppercase tracking-widest">
                    <span>{selectedBlogPost.date}</span>
                    <span>•</span>
                    <span>{selectedBlogPost.readTime} чтения</span>
                  </div>
                  <p className="text-rose-100/80 text-lg leading-relaxed first-letter:text-4xl first-letter:font-black first-letter:text-indigo-400 first-letter:mr-1">
                    {selectedBlogPost.content}
                  </p>
                  <div className="pt-10 border-t border-white/5 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white">BL</div>
                      <div>
                        <p className="text-white font-bold text-sm">Редакция BilimLife</p>
                        <p className="text-[10px] text-rose-100/40 font-bold uppercase">Автор статьи</p>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-rose-100/60 hover:text-white transition-colors font-bold text-sm">
                      <Share2 size={18} /> Поделиться
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentBlogPosts.map((post) => (
                  <motion.div 
                    key={post.id}
                    whileHover={{ y: -8 }}
                    onClick={() => setSelectedBlogPost(post)}
                    className="group bg-[#7a3035]/40 backdrop-blur-md rounded-[32px] border border-[#8a363c] overflow-hidden shadow-2xl cursor-pointer"
                  >
                    <div className="h-56 overflow-hidden relative">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-indigo-600 text-white text-[10px] font-bold uppercase rounded-full tracking-widest">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-8">
                      <p className="text-[10px] text-rose-100/40 font-bold uppercase tracking-widest mb-2">{post.date}</p>
                      <h3 className="text-2xl font-black text-white mb-3 group-hover:text-indigo-400 transition-colors leading-tight">{post.title}</h3>
                      <p className="text-rose-100/60 text-sm leading-relaxed mb-6">{post.excerpt}</p>
                      <div className="flex items-center gap-2 text-white font-bold text-xs">
                        Читать полностью <span className="text-indigo-400">→</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {activeSubTab === 'chat' && (
          <motion.div 
            key="chat"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <CuratorChat />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
