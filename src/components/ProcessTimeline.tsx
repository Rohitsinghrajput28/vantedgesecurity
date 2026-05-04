import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, ArrowRight } from 'lucide-react';

const processSteps = [
  {
    id: 1,
    title: 'Discovery & Scoping',
    description: 'We understand your infrastructure, systems, and security goals.',
  },
  {
    id: 2,
    title: 'Reconnaissance',
    description: 'Gathering information about your digital infrastructure and attack surface.',
  },
  {
    id: 3,
    title: 'Active Testing',
    description: 'Executing penetration tests, exploits, and vulnerability assessments.',
  },
  {
    id: 4,
    title: 'Analysis & Review',
    description: 'Deep analysis of findings, risk assessment, and impact evaluation.',
  },
  {
    id: 5,
    title: 'Reporting',
    description: 'Comprehensive reports with executive summaries and technical details.',
  },
  {
    id: 6,
    title: 'Remediation Support',
    description: 'Guidance on fixing vulnerabilities and strengthening your security posture.',
  },
];

export const ProcessTimeline = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="process" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-luxury font-bold mb-4 text-accent-white">
            How We Work
          </h2>
          <p className="text-accent-white/60 text-lg font-light tracking-wide">
            A proven methodology from initial scoping to remediation support
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Center Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1 }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-glow to-purple-glow origin-top"
            style={{ display: 'none' }}
          />

          {/* Steps */}
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="glass-card p-8 rounded border border-primary-red/30 hover:border-primary-red/60 bg-dark-card smooth-transition">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary-red flex items-center justify-center text-dark-bg font-luxury font-bold text-lg">
                        {step.id}
                      </div>
                      <h3 className="text-lg font-luxury font-bold text-accent-white">{step.title}</h3>
                    </div>
                    <p className="text-accent-white/60 text-sm font-light">{step.description}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="hidden lg:block">
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-glow to-purple-glow shadow-lg shadow-cyan-glow/50"
                  />
                </div>

                {/* Empty Space */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(212, 165, 116, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-primary-red text-dark-bg font-semibold rounded uppercase tracking-widest text-sm inline-flex items-center gap-2 smooth-transition"
          >
            Start Assessment
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
