import React from 'react';
import { Shield, Brain, Globe, Zap, Smartphone, Bot, Server, Cloud, CheckCircle } from 'lucide-react';

export const SecurityTestingCoverageSection: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: '🧠 Threat Modeling',
      description: 'We identify security risks before exploitation by analyzing architecture, data flows, and trust boundaries.',
      coverage: [
        'Application architecture review',
        'Data flow diagram (DFD) analysis',
        'Trust boundary identification',
        'Asset & attack surface identification',
        'STRIDE threat classification',
        'Abuse & misuse case identification',
        'Authentication & authorization threat analysis',
        'Third-party dependency risks',
        'Business logic threat analysis',
        'Risk prioritization & mitigation mapping',
      ],
    },
    {
      icon: Globe,
      title: '🌐 Web Application Penetration Testing',
      description: 'We assess web applications for vulnerabilities affecting confidentiality, integrity, and availability.',
      coverage: [
        'Authentication & session management',
        'Authorization & access control',
        'Input validation & injection flaws',
        'Cross-Site Scripting (XSS)',
        'Cross-Site Request Forgery (CSRF)',
        'File upload & file handling vulnerabilities',
        'Business logic flaws',
        'Security misconfigurations',
        'Sensitive data exposure',
        'Client-side security issues',
        'Rate-limiting & abuse controls',
        'Error handling & logging weaknesses',
      ],
      badge: '📌 Aligned with OWASP Top 10',
    },
    {
      icon: Zap,
      title: '🔌 API Penetration Testing',
      description: 'We test REST, GraphQL, and backend APIs for modern attack vectors.',
      coverage: [
        'Broken Object Level Authorization (BOLA)',
        'Broken Function Level Authorization (BFLA)',
        'Authentication bypass',
        'Token manipulation (JWT/OAuth)',
        'Mass assignment vulnerabilities',
        'Excessive data exposure',
        'Rate-limit bypass',
        'API parameter tampering',
        'Improper HTTP method handling',
        'GraphQL introspection abuse',
        'CORS misconfigurations',
        'API business logic abuse',
      ],
      badge: '📌 Aligned with OWASP API Top 10',
    },
    {
      icon: Smartphone,
      title: '📱 Mobile Application Penetration Testing',
      description: 'We evaluate both mobile apps and their backend APIs.',
      coverage: [
        'Insecure local storage',
        'Hardcoded secrets & keys',
        'Improper platform usage',
        'Weak encryption',
        'Root / jailbreak detection bypass',
        'SSL pinning bypass',
        'Insecure inter-process communication',
        'Reverse engineering risks',
        'Mobile API abuse',
        'Session & token handling issues',
      ],
      badge: '📌 Aligned with OWASP Mobile Top 10',
    },
    {
      icon: Bot,
      title: '🤖 AI / LLM Penetration Testing',
      description: 'We test AI systems, LLMs, and ML pipelines against emerging AI threats.',
      coverage: [
        'Prompt injection (direct & indirect)',
        'Model output manipulation',
        'Sensitive data leakage',
        'Training data poisoning risks',
        'Insecure plugin / tool access',
        'Excessive model permissions',
        'Inference abuse',
        'Model denial-of-service',
        'Unauthorized model access',
        'AI business logic abuse',
      ],
      badge: '📌 Aligned with OWASP Top 10 for LLM Applications',
    },
    {
      icon: Server,
      title: '🌐 Network Penetration Testing',
      description: 'We assess internal and external networks for exploitable weaknesses.',
      coverage: [
        'Open ports & service enumeration',
        'Outdated & vulnerable services',
        'Weak authentication mechanisms',
        'Credential brute-force testing',
        'SMB, LDAP, DNS enumeration',
        'Network segmentation testing',
        'Privilege escalation paths',
        'Lateral movement simulation',
        'Misconfigured firewalls & ACLs',
        'VPN & remote access security',
      ],
    },
    {
      icon: Cloud,
      title: '☁️ Cloud Penetration Testing',
      description: 'We identify risks arising from misconfiguration and over-privileged access.',
      coverage: [
        'Publicly exposed cloud resources',
        'IAM role & permission analysis',
        'Storage bucket security',
        'Security group & firewall rules',
        'Metadata service exposure',
        'Serverless function security',
        'Secrets management',
        'Logging & monitoring gaps',
        'CI/CD pipeline security',
        'Cloud identity abuse paths',
      ],
      badge: '📌 Aligned with CIS Benchmarks & Cloud Provider Best Practices',
    },
  ];

  const deliverables = [
    'Executive summary (business-friendly)',
    'Detailed vulnerability report',
    'Proof of Concept (PoC) evidence',
    'Risk severity & CVSS scoring',
    'Clear remediation guidance',
    'Compliance mapping (PCI, ISO, SOC2)',
    'Retesting & verification report',
    'Secure portal access for tracking',
  ];

  const highlights = [
    'Transparent test case coverage',
    'Manual + automated testing',
    'Certified security professionals',
    'Real-world attacker mindset',
    'Continuous testing options',
    'Scalable Pentest-as-a-Service model',
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-12 h-12 text-blue-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Security Testing Coverage
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Our Pentest-as-a-Service platform follows globally recognized standards such as{' '}
            <span className="text-blue-400 font-semibold">OWASP, NIST, PCI-DSS, and MITRE ATT&CK</span>.
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Below is a transparent view of what we test across each service so clients clearly understand the depth and scope of our assessments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-blue-400/50 transition-all duration-300 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />

                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>

                  <p className="text-gray-300 mb-6">{service.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-300 mb-3 uppercase tracking-wide">Coverage Includes:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.coverage.map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.badge && (
                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <p className="text-sm text-blue-300 font-semibold">{service.badge}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Deliverables Section */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Shield className="w-6 h-6 text-blue-400 mr-3" />
            📄 Deliverables You Receive
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliverables.map((item, index) => (
              <div
                key={index}
                className="flex items-start p-4 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-blue-400/50 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-700/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-green-300 mb-4">🛡️ Safe & Authorized Testing</h3>
            <ul className="space-y-2">
              {[
                'Performed only with written authorization',
                'No production data destruction',
                'Zero-impact testing approach',
                'Compliance-safe methodology',
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-200">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-700/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-blue-300 mb-4">✅ Why Clients Choose Us</h3>
            <ul className="space-y-2">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center text-gray-200">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
            <span className="relative z-10">Schedule Your Assessment</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};
