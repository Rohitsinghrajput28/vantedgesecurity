import { motion } from 'framer-motion';

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative z-10"
    >
      <div className="max-w-4xl text-center space-y-6">
        {/* Main Headline with Luxury Font */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-luxury font-bold text-accent-white leading-tight"
        >
          <span>
            Securing Your
            <br />
            <span className="text-primary-red">Digital</span> Frontier
          </span>
        </motion.h1>

        {/* Company Name Highlight */}
        <motion.div
          variants={itemVariants}
          className="text-xl md:text-2xl font-sans uppercase tracking-widest text-primary-red font-medium"
        >
          VantEdge Security
        </motion.div>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-accent-white/70 font-light tracking-wide"
        >
          Elite-level offensive security for modern enterprises
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-accent-white/60 text-base max-w-2xl mx-auto leading-relaxed font-light"
        >
          Proactive penetration testing that identifies vulnerabilities before
          attackers do. Protect your digital assets with industry-leading
          cybersecurity expertise.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          variants={itemVariants}
          className="pt-8"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 50px rgba(212, 165, 116, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-primary-red text-dark-bg font-semibold text-base rounded uppercase tracking-widest smooth-transition hover:shadow-2xl"
          >
            Book a Discovery Call
          </motion.button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-8 pt-12 flex-wrap"
        >
          {['500+ Clients', '99.8% Vulnerabilities Found', 'ISO 27001 Certified'].map((badge) => (
            <div
              key={badge}
              className="px-4 py-2 rounded-full border border-cyan-glow/20 bg-cyan-glow/5 text-gray-300"
            >
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
