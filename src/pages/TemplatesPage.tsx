import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Play, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const templates = [
  { id: 1, name: 'Product Launch', category: 'Marketing', duration: '0:45', gradient: 'from-purple-600 to-pink-600', uses: '12.5K' },
  { id: 2, name: 'Tutorial Intro', category: 'Education', duration: '1:30', gradient: 'from-cyan-600 to-blue-600', uses: '8.2K' },
  { id: 3, name: 'Social Story', category: 'Social Media', duration: '0:30', gradient: 'from-orange-500 to-red-500', uses: '25.1K' },
  { id: 4, name: 'Company Update', category: 'Business', duration: '2:00', gradient: 'from-indigo-600 to-purple-600', uses: '6.8K' },
  { id: 5, name: 'News Report', category: 'News', duration: '1:00', gradient: 'from-slate-600 to-gray-700', uses: '4.3K' },
  { id: 6, name: 'Fitness Demo', category: 'Health', duration: '1:15', gradient: 'from-green-600 to-emerald-600', uses: '9.7K' },
  { id: 7, name: 'Recipe Video', category: 'Lifestyle', duration: '2:30', gradient: 'from-amber-500 to-orange-600', uses: '15.4K' },
  { id: 8, name: 'Tech Review', category: 'Technology', duration: '3:00', gradient: 'from-blue-600 to-indigo-600', uses: '11.2K' },
  { id: 9, name: 'Travel Vlog', category: 'Entertainment', duration: '1:45', gradient: 'from-teal-500 to-cyan-600', uses: '18.9K' },
  { id: 10, name: 'Sales Pitch', category: 'Marketing', duration: '0:60', gradient: 'from-rose-500 to-pink-600', uses: '7.6K' },
  { id: 11, name: 'Course Intro', category: 'Education', duration: '1:00', gradient: 'from-violet-600 to-purple-600', uses: '13.1K' },
  { id: 12, name: 'Brand Story', category: 'Business', duration: '2:30', gradient: 'from-fuchsia-600 to-pink-600', uses: '5.9K' },
];

const categories = ['All', 'Marketing', 'Education', 'Social Media', 'Business', 'News', 'Health', 'Lifestyle', 'Technology', 'Entertainment'];

export default function TemplatesPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTemplates = templates.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || t.category === selectedCategory;
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
            Video <span className="text-gradient">Templates</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Start with a professional template and customize it to match your brand and message.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-xl mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search templates..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-surface-lighter/50 border border-white/10 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
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

        {/* Templates Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
              className="glass rounded-xl overflow-hidden card-hover group cursor-pointer"
            >
              {/* Preview */}
              <div className={`aspect-video bg-gradient-to-br ${template.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-5 h-5 text-white ml-0.5" />
                    </div>
                  </div>
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/50 backdrop-blur-sm text-xs text-white flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {template.duration}
                </div>
              </div>
              
              {/* Info */}
              <div className="p-4">
                <h3 className="font-semibold text-white mb-1">{template.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400 flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {template.category}
                  </span>
                  <span className="text-xs text-gray-500">{template.uses} uses</span>
                </div>
                <Link
                  to="/studio"
                  className="mt-3 w-full py-2 rounded-lg bg-white/5 hover:bg-purple-500/20 text-sm text-gray-300 hover:text-purple-300 text-center transition-all block"
                >
                  Use Template
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
