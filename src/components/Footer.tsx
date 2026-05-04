import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      id="contact"
      className="bg-dark-bg/80 border-t border-primary-red/20 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-red flex items-center justify-center text-dark-bg font-luxury text-lg font-bold">
                V
              </div>
              <div>
                <div className="font-luxury text-sm text-primary-red font-bold">VANTEDGE</div>
                <div className="text-xs text-accent-white/50 font-light">SECURITY</div>
              </div>
            </div>
            <p className="text-accent-white/60 text-sm mb-6 font-light">
              Elite offensive security for modern enterprises.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Mail, href: 'mailto:hello@vantedgesecurity.io' },
              ].map(({ icon: Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  whileHover={{ scale: 1.2 }}
                  className="w-8 h-8 rounded-full border border-primary-red/50 flex items-center justify-center text-primary-red hover:bg-primary-red/10 smooth-transition"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-luxury font-bold text-accent-white mb-4 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-2">
              {[
                'Web App Testing',
                'Mobile Testing',
                'Code Review',
                'Network Testing',
                'Cloud Testing',
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-accent-white/60 hover:text-primary-red smooth-transition text-sm font-light">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-luxury font-bold text-accent-white mb-4 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-2">
              {['About', 'Blog', 'Careers', 'Contact', 'Privacy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-accent-white/60 hover:text-primary-red smooth-transition text-sm font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-luxury font-bold text-accent-white mb-4 uppercase tracking-wider text-sm">Newsletter</h4>
            <p className="text-accent-white/60 text-sm mb-4 font-light">
              Get security updates and industry insights delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 bg-dark-card border border-primary-red/20 rounded text-sm text-accent-white placeholder-accent-white/40 focus:outline-none focus:border-primary-red/50 smooth-transition"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-primary-red text-dark-bg font-semibold rounded text-sm uppercase tracking-wider smooth-transition"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-primary-red/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-accent-white/50 text-sm font-light">
            © {currentYear} VantEdge Security. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-accent-white/50 hover:text-primary-red smooth-transition text-sm font-light">
              Privacy Policy
            </a>
            <a href="#" className="text-accent-white/50 hover:text-primary-red smooth-transition text-sm font-light">
              Terms of Service
            </a>
            <a href="#" className="text-accent-white/50 hover:text-primary-red smooth-transition text-sm font-light">
              Sitemap
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};
