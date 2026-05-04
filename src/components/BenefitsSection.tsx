import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Award, Clock, Shield, TrendingUp, Users } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Proactive Risk Reduction',
    description: 'Identify vulnerabilities before attackers do with our continuous, methodical testing approach.',
    stat: '92%',
    statLabel: 'Risk Reduction',
  },
  {
    icon: Award,
    title: 'Expert Security Team',
    description: 'Former offensive security professionals with 15+ years of hands-on pentesting experience.',
    stat: '15+',
    statLabel: 'Years Experience',
  },
  {
    icon: Clock,
    title: 'Fast, Actionable Reports',
    description: 'Detailed reports within 5-10 business days with clear remediation guidance and priorities.',
    stat: '5-10',
    statLabel: 'Days Turnaround',
  },
  {
    icon: Shield,
    title: 'Comprehensive Coverage',
    description: 'From code to cloud to runtime - we test every layer of your security infrastructure.',
    stat: '8+',
    statLabel: 'Service Types',
  },
  {
    icon: Zap,
    title: 'Practical Solutions',
    description: 'Get insights that matter. Real vulnerabilities with real impact on your security posture.',
    stat: '100%',
    statLabel: 'Actionable Findings',
  },
  {
    icon: Users,
    title: 'Partnership Approach',
    description: 'We work closely with your team to understand your unique security challenges and goals.',
    stat: '98%',
    statLabel: 'Client Satisfaction',
  },
];

export const BenefitsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="benefits" ref={ref} className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-luxury font-bold mb-4 text-accent-white">
            Why Choose VantEdge
          </h2>
          <p className="text-accent-white/60 text-lg font-light tracking-wide">
            Industry-leading pentesting services designed for enterprise security
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-lg border border-primary-red/30 hover:border-primary-red/60 bg-dark-card/50 backdrop-blur-sm smooth-transition p-8 flex flex-col h-full"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-red/5 to-transparent opacity-0 group-hover:opacity-100 smooth-transition pointer-events-none" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with Stats */}
                  <div className="mb-6 flex items-start justify-between">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-red/20 group-hover:bg-primary-red/30 smooth-transition">
                      <Icon className="w-6 h-6 text-primary-red" />
                    </div>
                    <div className="text-right">
                      <p className="text-2xl md:text-3xl font-luxury font-bold text-primary-red">
                        {benefit.stat}
                      </p>
                      <p className="text-xs font-semibold text-accent-white/50 uppercase tracking-widest">
                        {benefit.statLabel}
                      </p>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-luxury font-bold mb-3 text-accent-white group-hover:text-primary-red smooth-transition">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-accent-white/60 text-sm font-light leading-relaxed group-hover:text-accent-white/70 smooth-transition">
                    {benefit.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-6 h-0.5 w-0 bg-gradient-to-r from-primary-red to-transparent group-hover:w-12 smooth-transition" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-accent-white/60 font-light mb-6">
            Ready to strengthen your security posture?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 rounded-lg bg-primary-red text-dark-bg font-semibold hover:bg-primary-red/90 transition-colors"
          >
            Schedule a Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
