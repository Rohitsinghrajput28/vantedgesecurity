import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'What is penetration testing?',
    answer:
      'Penetration testing is a simulated cyber attack against your systems to identify vulnerabilities. Our experts use the same techniques attackers use, but legally and ethically, to strengthen your security.',
  },
  {
    id: 2,
    question: 'How long does a pentesting engagement take?',
    answer:
      'Engagement timelines vary based on scope. Typical engagements range from 5 to 20 business days, with reports delivered within 5-10 business days after testing completion.',
  },
  {
    id: 3,
    question: 'Are you certified?',
    answer:
      'Yes! Our team holds certifications including OSCP, GWAPT, and CEH. We maintain ISO 27001 compliance and follow NIST and OWASP methodologies.',
  },
  {
    id: 4,
    question: 'Do you provide remediation support?',
    answer:
      'Absolutely. After identifying vulnerabilities, we provide detailed guidance and support to help you fix issues and strengthen your security posture.',
  },
  {
    id: 5,
    question: 'What industries do you serve?',
    answer:
      'We work with financial services, healthcare, technology, e-commerce, and government sectors. We understand compliance requirements like PCI-DSS, HIPAA, and GDPR.',
  },
  {
    id: 6,
    question: 'How much does pentesting cost?',
    answer:
      'Pricing depends on scope, complexity, and systems tested. Rather than list rates, we recommend booking a discovery call where we can understand your needs and provide a custom quote.',
  },
];

export const FAQSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="faq" ref={ref} className="py-20 px-4 relative z-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-luxury font-bold mb-4 text-accent-white">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
              className="glass-card border border-primary-red/30 bg-dark-card rounded overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedId(expandedId === faq.id ? null : faq.id)
                }
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-primary-red/5 smooth-transition"
              >
                <h3 className="text-lg font-luxury font-bold text-accent-white text-left">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: expandedId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-primary-red" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedId === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 border-t border-primary-red/20 bg-dark-card/80"
                  >
                    <p className="text-accent-white/60 text-sm font-light leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
