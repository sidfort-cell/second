import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Sparkles, Plus, Play } from 'lucide-react';

const avatars = [
  { id: 1, name: 'Alex Professional', category: 'Business', style: 'from-purple-400 to-pink-400', gender: 'Male', languages: 12 },
  { id: 2, name: 'Sarah Creative', category: 'Creative', style: 'from-cyan-400 to-blue-400', gender: 'Female', languages: 15 },
  { id: 3, name: 'James Tech', category: 'Technology', style: 'from-green-400 to-teal-400', gender: 'Male', languages: 8 },
  { id: 4, name: 'Maya Friendly', category: 'Education', style: 'from-orange-400 to-red-400', gender: 'Female', languages: 20 },
  { id: 5, name: 'Chen Executive', category: 'Business', style: 'from-indigo-400 to-purple-400', gender: 'Male', languages: 10 },
  { id: 6, name: 'Emma Casual', category: 'Social Media', style: 'from-pink-400 to-rose-400', gender: 'Female', languages: 18 },
  { id: 7, name: 'David Coach', category: 'Education', style: 'from-amber-400 to-orange-400', gender: 'Male', languages: 6 },
  { id: 8, name: 'Luna Artist', category: 'Creative', style: 'from-violet-400 to-fuchsia-400', gender: 'Female', languages: 14 },
  { id: 9, name: 'Marcus News', category: 'News', style: 'from-slate-400 to-gray-500', gender: 'Male', languages: 22 },
  { id: 10, name: 'Sofia Health', category: 'Healthcare', style: 'from-emerald-400 to-green-400', gender: 'Female', languages: 9 },
  { id: 11, name: 'Ryan Gamer', category: 'Entertainment', style: 'from-red-400 to-orange-400', gender: 'Male', languages: 7 },
  { id: 12, name: 'Aria Music', category: 'Entertainment', style: 'from-fuchsia-400 to-purple-400', gender: 'Female', languages: 11 },
];

const categories = ['All', 'Business', 'Creative', 'Technology', 'Education', 'Social Media', 'News', 'Healthcare', 'Entertainment'];

export default function AvatarsPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null);

  const filteredAvatars = avatars.filter(avatar => {
    const matchesSearch = avatar.name.toLowerCase().includes(search.toLowerCase()) ||
      avatar.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || avatar.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-20 pb-12 bg-[#0a0a14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            AI <span className="text-gradient">Avatars</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choose from our library of 150+ diverse AI avatars or create your own custom digital twin.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search avatars..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-lighter/50 border border-white/10 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-colors">
            <Filter className="w-4 h-4" />
            Filters
          </button>
          <button className="btn-primary px-6 py-3 rounded-xl text-sm font-semibold text-white flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Create Avatar
          </button>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-transparent'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Avatar Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredAvatars.map((avatar, index) => (
            <motion.div
              key={avatar.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
              onClick={() => setSelectedAvatar(avatar.id)}
              className={`glass rounded-xl overflow-hidden card-hover cursor-pointer group ${
                selectedAvatar === avatar.id ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Avatar Image */}
              <div className={`aspect-square bg-gradient-to-br ${avatar.style} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white/30">{avatar.name.split(' ')[0][0]}</span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
                {/* Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 rounded-full bg-black/40 backdrop-blur-sm text-xs text-white">
                    {avatar.languages} langs
                  </span>
                </div>
              </div>
              
              {/* Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-white">{avatar.name}</h3>
                  <Sparkles className="w-4 h-4 text-purple-400" />
                </div>
                <p className="text-sm text-gray-400">{avatar.category}</p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="px-2 py-0.5 rounded-full bg-white/5 text-xs text-gray-400">{avatar.gender}</span>
                  <span className="px-2 py-0.5 rounded-full bg-white/5 text-xs text-gray-400">{avatar.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Create Custom Avatar CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass rounded-2xl p-8 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
            <Plus className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Create Your Own AI Avatar</h3>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Upload a photo or video of yourself and our AI will create a photorealistic digital twin 
            that you can use in any video.
          </p>
          <button className="btn-primary px-8 py-3 rounded-xl text-sm font-semibold text-white">
            Start Creating
          </button>
        </motion.div>
      </div>
    </div>
  );
}
