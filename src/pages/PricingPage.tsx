import { motion } from 'framer-motion';
import Pricing from '../components/Pricing';
import { ArrowRight, Star } from 'lucide-react';

const testimonials = [
  { name: 'Sarah K.', role: 'Content Creator', text: 'VisionAI cut my video production time by 90%. I can now create a week of content in an hour.', rating: 5 },
  { name: 'Marcus T.', role: 'Marketing Director', text: 'The AI avatars are incredibly realistic. Our customers can\'t tell they\'re not real people.', rating: 5 },
  { name: 'Emily R.', role: 'Educator', text: 'I use VisionAI to create course content in multiple languages. It\'s been a game-changer for reaching global students.', rating: 5 },
];

const faqs = [
  { q: 'How does the free trial work?', a: 'You get full access to all Creator plan features for 14 days. No credit card required. Create up to 30 minutes of video during your trial.' },
  { q: 'Can I cancel anytime?', a: 'Yes! You can cancel your subscription at any time. Your access continues until the end of your billing period.' },
  { q: 'Do you offer refunds?', a: 'We offer a 30-day money-back guarantee on all paid plans. If you\'re not satisfied, contact us for a full refund.' },
  { q: 'Is there an API available?', a: 'Yes, our Business and Enterprise plans include full API access. You can integrate VisionAI directly into your workflows and applications.' },
  { q: 'How realistic are the AI avatars?', a: 'Our latest models produce photorealistic avatars with natural facial expressions, lip sync, and body movements. Most viewers cannot distinguish them from real people.' },
  { q: 'What languages are supported?', a: 'We support 40+ languages including English, Spanish, French, German, Japanese, Korean, Mandarin, Hindi, Arabic, and many more.' },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-16 bg-[#0a0a14]">
      <Pricing />

      {/* Testimonials */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Loved by <span className="text-gradient">Creators</span>
            </h2>
            <p className="text-gray-400">See what our users have to say about VisionAI</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl p-6"
              >
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Create Amazing Videos?
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
              Join over 10 million creators who use VisionAI to produce professional videos in minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary px-8 py-4 rounded-xl text-base font-semibold text-white flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 rounded-xl text-base font-semibold text-white glass hover:bg-white/10 transition-all">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
