import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Benefits', href: '#benefits' },
    { label: 'How We Work', href: '#process' },
    { label: 'FAQs', href: '#faq' },
    { label: 'Articles', href: '#articles' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-dark-bg/90 backdrop-blur-md z-50 border-b border-primary-red/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Luxury Style */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.08 }}
            className="flex items-center gap-3 group"
          >
            {/* Logo SVG - VantEdge Shield */}
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-red to-primary-red/60 flex items-center justify-center text-white font-luxury text-xl font-bold shadow-lg group-hover:shadow-2xl smooth-transition">
              V
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-luxury text-sm tracking-widest uppercase text-primary-red group-hover:text-primary-red/80 smooth-transition">
                VantEdge
              </span>
              <span className="font-sans text-xs text-accent-white/70 tracking-wider">SECURITY</span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ y: -2 }}
                className="text-accent-white/70 hover:text-primary-red text-sm font-medium uppercase tracking-wider smooth-transition relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-red group-hover:w-full smooth-transition" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 165, 116, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-7 py-2.5 bg-primary-red text-dark-bg font-semibold rounded text-sm uppercase tracking-widest hover:shadow-lg smooth-transition hover:bg-primary-red/90"
          >
            Book Call
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-red p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4 space-y-3 border-t border-primary-red/20"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 text-accent-white/70 hover:text-primary-red text-sm uppercase tracking-wider smooth-transition"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-2.5 bg-primary-red text-dark-bg font-semibold rounded text-sm uppercase tracking-widest smooth-transition hover:bg-primary-red/90"
            >
              Book Call
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
