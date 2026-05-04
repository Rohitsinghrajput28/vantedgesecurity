import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const TrustedCompaniesSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  // Using placeholder company colors/badges instead of actual logos
  const companies = [
    { id: 1, name: 'TechCorp', initials: 'TC', color: 'from-blue-500 to-blue-600' },
    { id: 2, name: 'CloudSys', initials: 'CS', color: 'from-cyan-500 to-cyan-600' },
    { id: 3, name: 'SecureNet', initials: 'SN', color: 'from-emerald-500 to-emerald-600' },
    { id: 4, name: 'DataGuard', initials: 'DG', color: 'from-purple-500 to-purple-600' },
    { id: 5, name: 'Phoenix AI', initials: 'PA', color: 'from-pink-500 to-pink-600' },
    { id: 6, name: 'Nexus Labs', initials: 'NL', color: 'from-orange-500 to-orange-600' },
    { id: 7, name: 'CoreVault', initials: 'CV', color: 'from-red-500 to-red-600' },
    { id: 8, name: 'VentureTech', initials: 'VT', color: 'from-indigo-500 to-indigo-600' },
  ];

  return (
    <section ref={ref} className="py-20 px-4 relative z-10 bg-dark-card/30 border-y border-primary-red/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-red font-semibold uppercase tracking-widest mb-2">
            Enterprise Clients
          </p>
          <h2 className="text-4xl md:text-5xl font-luxury font-bold text-accent-white mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-accent-white/60 text-lg font-light">
            Security teams across enterprise organizations rely on VantEdge
          </p>
        </motion.div>

        {/* Companies Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.05 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group flex items-center justify-center h-24 rounded-lg border border-primary-red/20 hover:border-primary-red/60 bg-gradient-to-br from-dark-card/50 to-dark-bg/50 backdrop-blur-sm hover:bg-gradient-to-br hover:from-dark-card hover:to-dark-bg smooth-transition cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center gap-2">
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${company.color} flex items-center justify-center group-hover:shadow-lg smooth-transition`}
                >
                  <span className="text-white font-bold text-sm">{company.initials}</span>
                </div>
                <p className="text-xs font-semibold text-accent-white/70 group-hover:text-accent-white text-center px-1 smooth-transition max-w-[80px]">
                  {company.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-3 gap-4 mt-16 pt-16 border-t border-primary-red/20"
        >
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-luxury font-bold text-primary-red mb-2">
              500+
            </p>
            <p className="text-accent-white/60 text-sm">
              Pentesting Engagements
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-luxury font-bold text-primary-red mb-2">
              15+
            </p>
            <p className="text-accent-white/60 text-sm">
              Years Combined Experience
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-luxury font-bold text-primary-red mb-2">
              98%
            </p>
            <p className="text-accent-white/60 text-sm">
              Client Satisfaction Rate
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
