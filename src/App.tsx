import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import StudioPage from './pages/StudioPage';
import AvatarsPage from './pages/AvatarsPage';
import TemplatesPage from './pages/TemplatesPage';
import PricingPage from './pages/PricingPage';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      
      {/* How It Works Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-green-300 mb-4">
              🚀 Simple Process
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Create professional AI videos in just three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Write Your Script',
                description: 'Type or paste your script, or let our AI write one for you. Support for 40+ languages.',
                icon: '✍️',
              },
              {
                step: '02',
                title: 'Choose Your Avatar',
                description: 'Select from 150+ AI avatars or create your own. Pick a voice and background.',
                icon: '🎭',
              },
              {
                step: '03',
                title: 'Generate & Export',
                description: 'Click generate and watch AI create your video. Export in 4K quality in seconds.',
                icon: '🎬',
              },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                <div className="glass rounded-2xl p-8 text-center card-hover h-full">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-xs font-mono text-purple-400 mb-2">STEP {item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Built for <span className="text-gradient">Everyone</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From solopreneurs to enterprise teams, VisionAI adapts to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Marketing', desc: 'Product demos, ads, social content', emoji: '📈', color: 'from-purple-500/20 to-pink-500/20' },
              { title: 'Education', desc: 'Course content, tutorials, training', emoji: '📚', color: 'from-cyan-500/20 to-blue-500/20' },
              { title: 'Sales', desc: 'Pitches, outreach, onboarding', emoji: '💼', color: 'from-green-500/20 to-emerald-500/20' },
              { title: 'Social Media', desc: 'Shorts, reels, stories, TikToks', emoji: '📱', color: 'from-orange-500/20 to-red-500/20' },
              { title: 'HR & Internal', desc: 'Training, announcements, culture', emoji: '👥', color: 'from-indigo-500/20 to-violet-500/20' },
              { title: 'Customer Support', desc: 'FAQs, guides, help videos', emoji: '🎧', color: 'from-teal-500/20 to-cyan-500/20' },
              { title: 'News & Media', desc: 'Reports, updates, broadcasts', emoji: '📰', color: 'from-slate-500/20 to-gray-500/20' },
              { title: 'Personal', desc: 'Greetings, messages, creative', emoji: '✨', color: 'from-fuchsia-500/20 to-purple-500/20' },
            ].map((useCase) => (
              <div key={useCase.title} className={`glass rounded-xl p-5 card-hover bg-gradient-to-br ${useCase.color}`}>
                <div className="text-3xl mb-3">{useCase.emoji}</div>
                <h3 className="font-semibold text-white mb-1">{useCase.title}</h3>
                <p className="text-sm text-gray-400">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Pricing />

      {/* Final CTA */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Start Creating AI Videos Today
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
                Join 10 million+ creators. No credit card required.
              </p>
              <button className="btn-primary px-8 py-4 rounded-xl text-base font-semibold text-white">
                Get Started Free →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a14] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/avatars" element={<AvatarsPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
