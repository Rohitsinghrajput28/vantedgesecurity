import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Security Director',
    company: 'Tech Corp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
    content: 'VantEdge provided exceptional pentesting services. Their team identified critical vulnerabilities we missed completely. The detailed reports and remediation guidance were invaluable.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'VP of Infrastructure',
    company: 'Cloud Systems',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces',
    content: 'Working with VantEdge transformed our security posture. Their proactive approach and quick turnaround time allowed us to address issues before they became critical.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'CISO',
    company: 'Financial Services Inc',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces',
    content: 'Outstanding penetration testing from a truly expert team. VantEdge goes beyond basic vulnerability scanning to provide strategic security insights.',
    rating: 5,
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Security Engineer',
    company: 'Enterprise Solutions',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces',
    content: 'VantEdge delivered comprehensive AWS security assessments. Their AWS expertise combined with thorough testing methodology makes them stand out.',
    rating: 5,
  },
];

export const TestimonialSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="testimonials" ref={ref} className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-luxury font-bold mb-4 text-accent-white">
            Trusted by Security Leaders
          </h2>
          <p className="text-accent-white/60 text-lg font-light tracking-wide">
            See what our clients say about their security testing experience
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-lg border border-primary-red/30 hover:border-primary-red/60 bg-dark-card/50 backdrop-blur-sm smooth-transition group"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-accent-white/80 text-base font-light mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border border-primary-red/30"
                />
                <div>
                  <p className="font-semibold text-accent-white text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-accent-white/50 text-xs">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Reviews Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="#reviews"
            className="inline-flex items-center gap-2 text-primary-red font-semibold hover:text-primary-red/80 transition-colors"
          >
            <span>View all reviews</span>
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
