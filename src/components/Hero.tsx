import { motion } from 'framer-motion';
import { Play, Sparkles, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-gray-300">Powered by Next-Gen AI Models</span>
          <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-xs font-medium">NEW</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-white">Create AI Videos</span>
          <br />
          <span className="text-gradient">In Seconds</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Transform text into stunning videos with AI avatars, voice cloning, 
          and cinematic quality. No camera, no studio, no experience needed.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            to="/studio"
            className="btn-primary px-8 py-4 rounded-xl text-base font-semibold text-white flex items-center gap-2 group"
          >
            Start Creating
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="px-8 py-4 rounded-xl text-base font-semibold text-white glass hover:bg-white/10 transition-all flex items-center gap-2">
            <Play className="w-5 h-5" />
            Watch Demo
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 mb-16"
        >
          {[
            { value: '10M+', label: 'Videos Created' },
            { value: '150+', label: 'AI Avatars' },
            { value: '40+', label: 'Languages' },
            { value: '4K', label: 'Resolution' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden glass p-1">
            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-surface-light to-surface p-6">
              {/* Mock Studio Interface */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-3 text-xs text-gray-500">VisionAI Studio</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Left Panel */}
                <div className="md:col-span-2 bg-surface/80 rounded-lg p-4">
                  <div className="aspect-video bg-gradient-to-br from-purple-900/40 to-cyan-900/40 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="relative text-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                      <p className="text-sm text-gray-300">AI Generated Video Preview</p>
                    </div>
                    {/* Animated overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400 animate-gradient" />
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-surface-lighter rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" />
                    </div>
                    <span className="text-xs text-gray-500">0:42 / 1:05</span>
                  </div>
                </div>
                {/* Right Panel */}
                <div className="space-y-3">
                  <div className="bg-surface/80 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-2">Script</div>
                    <div className="text-xs text-gray-300 leading-relaxed">
                      Welcome to the future of content creation. With AI, you can...
                    </div>
                  </div>
                  <div className="bg-surface/80 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-2">Avatar</div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400" />
                      <span className="text-xs text-gray-300">Professional Avatar</span>
                    </div>
                  </div>
                  <div className="bg-surface/80 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-2">Voice</div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs text-gray-300">Natural AI Voice</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
