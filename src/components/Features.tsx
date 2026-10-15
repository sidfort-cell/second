import { motion } from 'framer-motion';
import { 
  Video, Mic, Globe, Wand2, Layers, Clock, 
  Shield, Zap, Palette, Type, Users, Film 
} from 'lucide-react';

const features = [
  {
    icon: Video,
    title: 'Text to Video',
    description: 'Convert any script or text into professional videos with AI avatars and dynamic backgrounds.',
    color: 'from-purple-500 to-purple-700',
  },
  {
    icon: Mic,
    title: 'AI Voice Cloning',
    description: 'Clone any voice with just 30 seconds of audio. Create natural-sounding narration in any language.',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Globe,
    title: '40+ Languages',
    description: 'Generate videos in over 40 languages with native-quality pronunciation and lip sync.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Wand2,
    title: 'AI Avatars',
    description: 'Choose from 150+ diverse AI avatars or create your own custom digital twin.',
    color: 'from-pink-500 to-rose-600',
  },
  {
    icon: Layers,
    title: 'Template Library',
    description: '500+ professionally designed templates for marketing, education, social media, and more.',
    color: 'from-orange-500 to-amber-600',
  },
  {
    icon: Clock,
    title: 'Real-time Editing',
    description: 'Edit videos in real-time with our intuitive timeline editor. No rendering wait times.',
    color: 'from-indigo-500 to-violet-600',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 compliant with end-to-end encryption. Your content stays private and secure.',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Generate HD videos in under 60 seconds. Our GPU infrastructure ensures blazing speed.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Palette,
    title: 'Brand Kit',
    description: 'Maintain brand consistency with custom colors, fonts, logos, and intro/outro templates.',
    color: 'from-fuchsia-500 to-purple-600',
  },
  {
    icon: Type,
    title: 'Auto Captions',
    description: 'AI-generated captions with custom styling. Boost accessibility and engagement automatically.',
    color: 'from-sky-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together in real-time with your team. Share, comment, and approve videos seamlessly.',
    color: 'from-lime-500 to-green-600',
  },
  {
    icon: Film,
    title: '4K Export',
    description: 'Export in up to 4K resolution. Perfect for YouTube, social media, presentations, and more.',
    color: 'from-red-500 to-pink-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-purple-300 mb-4">
            ✨ Powerful Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Everything You Need to
            <br />
            <span className="text-gradient">Create Amazing Videos</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our comprehensive suite of AI tools makes video creation effortless. 
            From script to screen in minutes, not hours.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="glass rounded-xl p-6 card-hover group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
