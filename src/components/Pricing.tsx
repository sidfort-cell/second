import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for trying out AI video creation',
    features: [
      '5 minutes of video/month',
      '10 AI avatars',
      '720p resolution',
      'Basic templates',
      'Watermark included',
      'Community support',
    ],
    cta: 'Get Started',
    popular: false,
    gradient: 'from-gray-600 to-gray-700',
  },
  {
    name: 'Creator',
    price: '$29',
    period: '/month',
    description: 'For content creators and freelancers',
    features: [
      '30 minutes of video/month',
      '50 AI avatars',
      '1080p resolution',
      'All templates',
      'No watermark',
      'Custom branding',
      'Priority rendering',
      'Email support',
    ],
    cta: 'Start Free Trial',
    popular: true,
    gradient: 'from-purple-500 to-cyan-500',
  },
  {
    name: 'Business',
    price: '$89',
    period: '/month',
    description: 'For teams and growing businesses',
    features: [
      'Unlimited video minutes',
      '150+ AI avatars',
      '4K resolution',
      'Custom AI avatar',
      'API access',
      'Team collaboration',
      'Brand kit',
      'Voice cloning',
      'Priority support',
      'Analytics dashboard',
    ],
    cta: 'Contact Sales',
    popular: false,
    gradient: 'from-cyan-500 to-green-500',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with custom needs',
    features: [
      'Everything in Business',
      'Dedicated account manager',
      'Custom AI model training',
      'SSO & advanced security',
      'SLA guarantee',
      'On-premise deployment',
      'Custom integrations',
      'Unlimited team members',
      'White-label solution',
      '24/7 phone support',
    ],
    cta: 'Contact Sales',
    popular: false,
    gradient: 'from-amber-500 to-orange-500',
  },
];

export default function Pricing() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-cyan-300 mb-4">
            💎 Simple Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Choose Your <span className="text-gradient">Plan</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Start free and scale as you grow. All plans include a 14-day free trial.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 ${
                plan.popular
                  ? 'glass border-purple-500/50 scale-105'
                  : 'glass'
              } card-hover`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-400">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>

              <button className={`w-full py-3 rounded-xl text-sm font-semibold text-white mb-6 ${
                plan.popular 
                  ? 'btn-primary' 
                  : 'bg-white/10 hover:bg-white/20 transition-colors'
              }`}>
                {plan.cta}
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
