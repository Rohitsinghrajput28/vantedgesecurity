import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Shield, Globe, Server, Cloud, CheckCircle, Zap, AlertTriangle, Plug } from 'lucide-react';
import {
  WebAppAnimation,
  MobileAppAnimation,
  CodeReviewAnimation,
  NetworkAnimation,
  CloudAnimation,
  APIAnimation,
  AIAnimation,
  ThreatAnimation,
} from './ServiceAnimations';

const serviceCategories = [
  {
    id: 'code',
    name: 'Developer Security',
    title: 'Secure Development',
    subtitle: 'Security from the first line of code',
    color: 'from-blue-500/20 to-blue-600/10',
    borderColor: 'border-blue-500/30',
    icon: Code,
    services: [
      {
        id: 1,
        title: 'Source Code Review',
        description: 'Line-by-line security analysis of your codebase to identify vulnerabilities early.',
        icon: Code,
        animation: CodeReviewAnimation,
      },
      {
        id: 3,
        title: 'API Pentesting',
        description: 'Comprehensive testing of REST, GraphQL, and SOAP APIs including authentication, authorization, and data validation vulnerabilities.',
        icon: Plug,
        animation: APIAnimation,
      },
    ]
  },
  {
    id: 'cloud',
    name: 'Cloud Security',
    title: 'Prevent Cloud Risks',
    subtitle: 'Secure every application in the cloud',
    color: 'from-cyan-500/20 to-cyan-600/10',
    borderColor: 'border-cyan-500/30',
    icon: Cloud,
    services: [
      {
        id: 2,
        title: 'Cloud Pentesting (AWS Specialist)',
        description: 'AWS-focused security assessment covering EC2, S3, IAM, and serverless architectures.',
        icon: Cloud,
        animation: CloudAnimation,
      },
      {
        id: 4,
        title: 'Network Pentesting',
        description: 'Infrastructure security testing including internal networks and perimeter assessments.',
        icon: Server,
        animation: NetworkAnimation,
      },
    ]
  },
  {
    id: 'protect',
    name: 'Runtime Protection',
    title: 'Threat Detection & Response',
    subtitle: 'Detect and block threats in real-time',
    color: 'from-red-500/20 to-red-600/10',
    borderColor: 'border-red-500/30',
    icon: Shield,
    services: [
      {
        id: 5,
        title: 'Web Application Pentesting',
        description: 'Comprehensive security assessment of web applications, authentication mechanisms, and runtime behavior.',
        icon: Globe,
        animation: WebAppAnimation,
      },
      {
        id: 6,
        title: 'Mobile Application Pentesting',
        description: 'Deep security testing for iOS and Android applications including data exposure risks and runtime threats.',
        icon: Shield,
        animation: MobileAppAnimation,
      },
      {
        id: 7,
        title: 'AI Pentesting',
        description: 'Security assessment of AI/ML systems including model vulnerabilities, data poisoning, and adversarial attacks.',
        icon: Zap,
        animation: AIAnimation,
      },
      {
        id: 8,
        title: 'Threat Modelling',
        description: 'Systematic identification and analysis of potential threats and attack paths in your systems.',
        icon: AlertTriangle,
        animation: ThreatAnimation,
      },
    ]
  },
];

export const ServicesGrid = () => {
  const { ref } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-luxury font-bold mb-4 text-accent-white leading-tight">
            Our Security Platform
          </h2>
          <p className="text-accent-white/60 text-lg font-light tracking-wide">
            Comprehensive pentesting solutions across code, cloud, and runtime security
          </p>
        </motion.div>

        {/* Service Categories */}
        <div className="space-y-20" ref={ref}>
          {serviceCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${category.color} border ${category.borderColor} rounded-lg p-8 backdrop-blur-sm`}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-white/10">
                      <CategoryIcon className="w-8 h-8 text-accent-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-accent-white/70 uppercase tracking-widest mb-2">
                        {category.name}
                      </p>
                      <h3 className="text-3xl md:text-4xl font-luxury font-bold text-accent-white mb-2">
                        {category.title}
                      </h3>
                      <p className="text-accent-white/60 text-lg">{category.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Services Grid for Category */}
                <div className="grid md:grid-cols-2 gap-6">
                  {category.services.map((service, serviceIndex) => {
                    const Icon = service.icon;
                    return (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="group relative overflow-hidden rounded-lg border border-primary-red/30 hover:border-primary-red/60 bg-dark-card smooth-transition backdrop-blur-sm hover:bg-dark-card/80"
                      >
                        {/* Content */}
                        <div className="p-8">
                          <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-red/20 group-hover:bg-primary-red/30 smooth-transition">
                            <Icon className="w-6 h-6 text-primary-red" />
                          </div>

                          <h4 className="text-xl font-luxury font-bold mb-3 text-accent-white group-hover:text-primary-red smooth-transition">
                            {service.title}
                          </h4>
                          <p className="text-accent-white/60 mb-6 text-sm font-light leading-relaxed group-hover:text-accent-white/70 smooth-transition">
                            {service.description}
                          </p>

                          {/* CTA */}
                          <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-2 text-primary-red font-semibold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 smooth-transition"
                          >
                            <span>Learn More</span>
                            <CheckCircle className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
