import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, Pause, Download, Share2, Wand2, Type, 
  Image, Mic, Settings, Clock, Layers, Sparkles,
  ChevronRight, Volume2, Maximize2, SkipBack, SkipForward
} from 'lucide-react';

const avatarOptions = [
  { id: 1, name: 'Alex', style: 'from-purple-400 to-pink-400', gender: 'Male' },
  { id: 2, name: 'Sarah', style: 'from-cyan-400 to-blue-400', gender: 'Female' },
  { id: 3, name: 'James', style: 'from-green-400 to-teal-400', gender: 'Male' },
  { id: 4, name: 'Maya', style: 'from-orange-400 to-red-400', gender: 'Female' },
  { id: 5, name: 'Chen', style: 'from-indigo-400 to-purple-400', gender: 'Male' },
  { id: 6, name: 'Emma', style: 'from-pink-400 to-rose-400', gender: 'Female' },
];

const voiceOptions = [
  { id: 1, name: 'Natural Male', accent: 'American', speed: '1.0x' },
  { id: 2, name: 'Natural Female', accent: 'British', speed: '1.0x' },
  { id: 3, name: 'Professional', accent: 'American', speed: '0.9x' },
  { id: 4, name: 'Friendly', accent: 'Australian', speed: '1.1x' },
];

const backgrounds = [
  { id: 1, name: 'Office', gradient: 'from-gray-700 to-gray-900' },
  { id: 2, name: 'Studio', gradient: 'from-purple-900 to-indigo-900' },
  { id: 3, name: 'Nature', gradient: 'from-green-900 to-emerald-900' },
  { id: 4, name: 'Abstract', gradient: 'from-cyan-900 to-blue-900' },
  { id: 5, name: 'Minimal', gradient: 'from-slate-800 to-slate-900' },
  { id: 6, name: 'Warm', gradient: 'from-orange-900 to-red-900' },
];

export default function StudioPage() {
  const [script, setScript] = useState('Welcome to VisionAI Studio. Create stunning videos with AI-powered avatars and natural voice synthesis. Transform your ideas into professional content in minutes.');
  const [selectedAvatar, setSelectedAvatar] = useState(1);
  const [selectedVoice, setSelectedVoice] = useState(1);
  const [selectedBg, setSelectedBg] = useState(2);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('script');
  const [isPlaying, setIsPlaying] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          return 100;
        }
        return prev + 2;
      });
    }, 100);
  };

  return (
    <div className="min-h-screen pt-16 bg-[#0a0a14]">
      <div className="flex flex-col lg:flex-row h-[calc(100vh-4rem)]">
        {/* Left Sidebar - Tools */}
        <div className="w-full lg:w-80 border-r border-white/5 bg-surface/50 overflow-y-auto">
          {/* Tabs */}
          <div className="flex border-b border-white/5">
            {[
              { id: 'script', icon: Type, label: 'Script' },
              { id: 'avatar', icon: Sparkles, label: 'Avatar' },
              { id: 'voice', icon: Mic, label: 'Voice' },
              { id: 'bg', icon: Image, label: 'Background' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex flex-col items-center gap-1 py-3 text-xs transition-colors ${
                  activeTab === tab.id 
                    ? 'text-purple-400 border-b-2 border-purple-400' 
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-4">
            {activeTab === 'script' && (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Your Script</label>
                  <textarea
                    value={script}
                    onChange={(e) => setScript(e.target.value)}
                    className="w-full h-48 bg-surface-lighter/50 border border-white/10 rounded-lg p-3 text-sm text-gray-200 resize-none focus:outline-none focus:border-purple-500/50 transition-colors"
                    placeholder="Type your script here..."
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-gray-500">{script.length} characters</span>
                    <span className="text-xs text-gray-500">~{Math.ceil(script.split(' ').length / 150)} min video</span>
                  </div>
                </div>
                <button 
                  onClick={() => setScript('')}
                  className="text-xs text-purple-400 hover:text-purple-300"
                >
                  Clear script
                </button>
                <div className="border-t border-white/5 pt-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">AI Enhancements</h4>
                  <div className="space-y-2">
                    <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm text-gray-300 transition-colors">
                      <Wand2 className="w-4 h-4 text-purple-400" />
                      Improve with AI
                    </button>
                    <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm text-gray-300 transition-colors">
                      <Layers className="w-4 h-4 text-cyan-400" />
                      Add transitions
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'avatar' && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {avatarOptions.map(avatar => (
                    <button
                      key={avatar.id}
                      onClick={() => setSelectedAvatar(avatar.id)}
                      className={`relative rounded-xl p-3 transition-all ${
                        selectedAvatar === avatar.id 
                          ? 'ring-2 ring-purple-500 bg-purple-500/10' 
                          : 'bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className={`w-full aspect-square rounded-lg bg-gradient-to-br ${avatar.style} mb-2 flex items-center justify-center`}>
                        <span className="text-2xl font-bold text-white/80">{avatar.name[0]}</span>
                      </div>
                      <p className="text-xs text-gray-300 text-center">{avatar.name}</p>
                      <p className="text-xs text-gray-500 text-center">{avatar.gender}</p>
                    </button>
                  ))}
                </div>
                <button className="w-full py-3 rounded-lg border border-dashed border-white/20 text-sm text-gray-400 hover:text-white hover:border-purple-500/50 transition-colors">
                  + Create Custom Avatar
                </button>
              </div>
            )}

            {activeTab === 'voice' && (
              <div className="space-y-3">
                {voiceOptions.map(voice => (
                  <button
                    key={voice.id}
                    onClick={() => setSelectedVoice(voice.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                      selectedVoice === voice.id 
                        ? 'bg-purple-500/10 border border-purple-500/30' 
                        : 'bg-white/5 hover:bg-white/10 border border-transparent'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                      <Volume2 className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium text-gray-200">{voice.name}</p>
                      <p className="text-xs text-gray-500">{voice.accent} • {voice.speed}</p>
                    </div>
                    {selectedVoice === voice.id && (
                      <Play className="w-4 h-4 text-purple-400 ml-auto" />
                    )}
                  </button>
                ))}
                <div className="border-t border-white/5 pt-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-3">Voice Settings</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-gray-500 mb-1 block">Speed</label>
                      <input type="range" min="0.5" max="2" step="0.1" defaultValue="1" className="w-full accent-purple-500" />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 mb-1 block">Pitch</label>
                      <input type="range" min="0.5" max="2" step="0.1" defaultValue="1" className="w-full accent-purple-500" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'bg' && (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  {backgrounds.map(bg => (
                    <button
                      key={bg.id}
                      onClick={() => setSelectedBg(bg.id)}
                      className={`relative rounded-xl overflow-hidden transition-all ${
                        selectedBg === bg.id ? 'ring-2 ring-purple-500' : ''
                      }`}
                    >
                      <div className={`aspect-video bg-gradient-to-br ${bg.gradient}`} />
                      <p className="text-xs text-gray-300 text-center py-2 bg-surface-lighter/50">{bg.name}</p>
                    </button>
                  ))}
                </div>
                <button className="w-full py-3 rounded-lg border border-dashed border-white/20 text-sm text-gray-400 hover:text-white hover:border-purple-500/50 transition-colors">
                  + Upload Custom Background
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Main Preview Area */}
        <div className="flex-1 flex flex-col">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-white/5">
            <div className="flex items-center gap-3">
              <h2 className="text-sm font-medium text-gray-300">Untitled Project</h2>
              <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs">Auto-saved</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors">
                <Download className="w-4 h-4" />
              </button>
              <button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="btn-primary px-4 py-2 rounded-lg text-sm font-semibold text-white flex items-center gap-2 disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4" />
                    Generate Video
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Preview Canvas */}
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="w-full max-w-3xl">
              <div className={`aspect-video rounded-xl overflow-hidden bg-gradient-to-br ${
                backgrounds.find(b => b.id === selectedBg)?.gradient || 'from-purple-900 to-indigo-900'
              } relative`}>
                {/* Avatar Preview */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${
                    avatarOptions.find(a => a.id === selectedAvatar)?.style || 'from-purple-400 to-pink-400'
                  } flex items-center justify-center shadow-2xl`}>
                    <span className="text-4xl font-bold text-white/80">
                      {avatarOptions.find(a => a.id === selectedAvatar)?.name[0]}
                    </span>
                  </div>
                </div>
                
                {/* Script overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-sm text-white/90 text-center leading-relaxed">
                    {script.slice(0, 100)}...
                  </p>
                </div>

                {/* Generation Progress */}
                {isGenerating && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center">
                      <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mb-4 mx-auto" />
                      <p className="text-white font-medium">Generating your video...</p>
                      <p className="text-gray-400 text-sm mt-1">{progress}% complete</p>
                      <div className="w-48 h-2 bg-white/10 rounded-full mt-3 mx-auto overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all duration-100"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Video Controls Overlay */}
                {!isGenerating && (
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors backdrop-blur-sm"
                      >
                        {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white ml-0.5" />}
                      </button>
                      <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                        <div className={`h-full bg-white rounded-full transition-all duration-1000 ${isPlaying ? 'w-1/3' : 'w-0'}`} />
                      </div>
                      <span className="text-xs text-white/70">0:00 / 1:05</span>
                      <button className="text-white/70 hover:text-white">
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Timeline */}
              <div className="mt-4 bg-surface-lighter/50 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <SkipBack className="w-4 h-4 text-gray-500" />
                  <SkipForward className="w-4 h-4 text-gray-500" />
                  <span className="text-xs text-gray-500 ml-auto">Timeline</span>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="flex-1 h-8 rounded bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/5" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
