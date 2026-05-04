import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Calendar } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'The Rise of Supply Chain Attacks: What You Need to Know',
    category: 'Security Trends',
    date: 'March 15, 2024',
    excerpt:
      'Supply chain attacks are increasingly sophisticated. Learn how to protect your organization from third-party vulnerabilities.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13e763b?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Zero Trust Architecture: Implementation Guide',
    category: 'Best Practices',
    date: 'March 10, 2024',
    excerpt:
      'Implementing Zero Trust requires strategic planning. Here\'s our complete guide to transforming your security model.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70a504f9?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'API Security: Common Vulnerabilities & Fixes',
    category: 'Technical Guide',
    date: 'March 5, 2024',
    excerpt:
      'APIs are critical attack surfaces. Discover the top 10 API vulnerabilities and how to remediate them effectively.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
  },
];

export const ArticlesSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="articles" ref={ref} className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-luxury font-bold mb-4 text-accent-white">
            Security Insights
          </h2>
          <p className="text-accent-white/60 text-lg font-light tracking-wide">
            Stay informed with industry insights and actionable security guidance
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded overflow-hidden border border-primary-red/30 hover:border-primary-red/60 bg-dark-card smooth-transition group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-dark-card">
                <motion.img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-luxury font-bold text-primary-red uppercase tracking-widest">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-accent-white/50">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </div>
                </div>

                <h3 className="text-xl font-luxury font-bold mb-3 text-accent-white group-hover:text-primary-red smooth-transition line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-accent-white/60 text-sm mb-4 line-clamp-2 font-light">
                  {article.excerpt}
                </p>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-primary-red font-semibold text-xs uppercase tracking-widest"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Articles CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-cyan-glow text-cyan-glow font-semibold rounded-lg hover:bg-cyan-glow/10 smooth-transition"
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
