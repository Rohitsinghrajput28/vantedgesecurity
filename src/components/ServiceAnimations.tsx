import { motion } from 'framer-motion';
import { Code, Shield, Globe, Server, Cloud, Zap, AlertTriangle, Plug } from 'lucide-react';

// Animated Web Application Testing
export const WebAppAnimation = () => {
  return (
    <motion.div className="relative w-full h-full flex items-center justify-center p-8">
      {/* Browser Frame */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="border-4 border-primary-red/50 rounded w-full max-w-sm"
      >
        {/* Browser Header */}
        <div className="bg-primary-red/20 h-10 flex items-center gap-2 px-4 border-b border-primary-red/30">
          <div className="w-3 h-3 rounded-full bg-primary-red/40"></div>
          <div className="w-3 h-3 rounded-full bg-primary-red/40"></div>
          <div className="w-3 h-3 rounded-full bg-primary-red/40"></div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 h-64 flex flex-col items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="w-12 h-12 border-2 border-primary-red/30 border-t-primary-red rounded-full"
          ></motion.div>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-primary-red text-sm font-light"
          >
            Scanning vulnerabilities...
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Animated Mobile Application Testing
export const MobileAppAnimation = () => {
  return (
    <motion.div className="relative w-full h-full flex items-center justify-center p-8">
      {/* Mobile Device */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="border-8 border-primary-red/50 rounded-3xl w-32 h-64 bg-dark-card/50 flex items-center justify-center relative"
      >
        <div className="w-full h-full flex flex-col items-center justify-center space-y-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -5, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
              className="w-4 h-4 rounded-full bg-primary-red"
            ></motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Animated Code Review
export const CodeReviewAnimation = () => {
  return (
    <motion.div className="relative w-full h-full flex items-center justify-center p-8">
      {/* Code Block */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="font-mono text-xs bg-dark-card/50 border border-primary-red/30 rounded p-4 w-full max-w-sm"
      >
        <div className="space-y-2 text-accent-white/60">
          {['function auth()', '{', '  if(verified)', '    return true', '}'].map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-2"
            >
              <span className="text-primary-red">{i + 1}</span>
              <span>{line}</span>
              {i === 2 && (
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2 text-primary-red text-lg"
                >
                  ⚠️
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Animated Network Testing
export const NetworkAnimation = () => {
  return (
    <motion.div className="relative w-full h-full flex items-center justify-center p-8">
      {/* Network Nodes */}
      <motion.div className="relative w-64 h-32">
        {/* Central Node */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary-red flex items-center justify-center"
        >
          <Server className="w-4 h-4 text-dark-bg" />
        </motion.div>

        {/* Connected Nodes */}
        {[0, 1, 2, 3].map((i) => {
          const angle = (i / 4) * Math.PI * 2;
          const x = Math.cos(angle) * 80;
          const y = Math.sin(angle) * 60;

          return (
            <motion.div
              key={i}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
              style={{
                position: 'absolute',
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
              }}
              className="-translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-primary-red"
            ></motion.div>
          );
        })}

        {/* Connection Lines */}
        {[0, 1, 2, 3].map((i) => {
          const angle = (i / 4) * Math.PI * 2;
          return (
            <motion.line
              key={`line-${i}`}
              x1="50%"
              y1="50%"
              x2={`calc(50% + ${Math.cos(angle) * 80}px)`}
              y2={`calc(50% + ${Math.sin(angle) * 60}px)`}
              stroke="url(#gradient)"
              strokeWidth="2"
              opacity="0.3"
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
};

// Animated Cloud Testing
export const CloudAnimation = () => {
  return (
    <motion.div className="relative w-full h-full flex items-center justify-center p-8">
      <motion.div className="relative w-64 h-32">
        {/* Cloud Shape */}
        <motion.svg
          viewBox="0 0 200 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4a574" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#d4a574" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Cloud outline */}
          <path
            d="M40 60C25 60 15 70 15 85C15 95 25 100 40 100L160 100C180 100 190 90 190 75C190 60 180 50 165 50C165 35 155 25 140 25C135 15 125 10 115 10C95 10 80 20 75 35C60 38 50 50 40 60Z"
            fill="url(#cloudGradient)"
            stroke="#d4a574"
            strokeWidth="2"
          />

          {/* Data points moving inside cloud */}
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              r="4"
              fill="#d4a574"
              animate={{
                cx: [30, 170, 30],
                cy: [50, 60, 50],
              }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
              }}
            />
          ))}
        </motion.svg>
      </motion.div>
    </motion.div>
  );
};

// Animated API Testing
export const APIAnimation = () => {
  return (
    <motion.div className="relative w-full h-full flex items-center justify-center p-8">
      {/* API Request/Response */}
      <div className="w-full max-w-sm space-y-4">
        {/* Request */}
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="border-l-2 border-primary-red/50 pl-4 py-2"
        >
          <div className="text-xs font-mono text-primary-red">→ POST /api/v1/auth</div>
          <div className="text-xs font-mono text-accent-white/60">Content-Type: application/json</div>
        </motion.div>

        {/* Arrow */}
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-center text-primary-red"
        >
          ↓
        </motion.div>

        {/* Response */}
        <motion.div
          animate={{ x: [-10, 0, -10] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="border-l-2 border-primary-red/50 pl-4 py-2 bg-primary-red/5 rounded"
        >
          <div className="text-xs font-mono text-primary-red">← 200 OK</div>
          <div className="text-xs font-mono text-accent-white/60">{'{ "token": "..." }'}</div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Animated AI/ML Testing
export const AIAnimation = () => {
  return (
    <motion.div className="relative w-full h-full flex items-center justify-center p-8">
      {/* Neural Network */}
      <motion.div className="relative w-64 h-32">
        <svg viewBox="0 0 300 150" className="w-full h-full">
          {/* Input layer */}
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={`input-${i}`}
              cx="40"
              cy={30 + i * 40}
              r="8"
              fill="none"
              stroke="#d4a574"
              strokeWidth="2"
              animate={{ r: [8, 10, 8] }}
              transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
            />
          ))}

          {/* Hidden layer */}
          {[0, 1, 2, 3].map((i) => (
            <motion.circle
              key={`hidden-${i}`}
              cx="150"
              cy={20 + i * 35}
              r="8"
              fill="none"
              stroke="#d4a574"
              strokeWidth="2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.2, delay: i * 0.15, repeat: Infinity }}
            />
          ))}

          {/* Output layer */}
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={`output-${i}`}
              cx="260"
              cy={30 + i * 40}
              r="8"
              fill="none"
              stroke="#d4a574"
              strokeWidth="2"
              animate={{ r: [8, 12, 8] }}
              transition={{ duration: 1, delay: i * 0.25, repeat: Infinity }}
            />
          ))}

          {/* Connection lines */}
          {[0, 1, 2].map((i) =>
            [0, 1, 2, 3].map((j) => (
              <motion.line
                key={`line-${i}-${j}`}
                x1="45"
                y1={30 + i * 40}
                x2="145"
                y2={20 + j * 35}
                stroke="#d4a574"
                strokeWidth="1"
                opacity="0.2"
              />
            ))
          )}
        </svg>
      </motion.div>
    </motion.div>
  );
};

// Animated Threat Modelling
export const ThreatAnimation = () => {
  return (
    <motion.div className="relative w-full h-full flex items-center justify-center p-8">
      {/* Threat Visualization */}
      <div className="relative w-64 h-48 flex items-center justify-center">
        {/* Center protected asset */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute w-12 h-12 rounded-lg bg-primary-red/20 border-2 border-primary-red flex items-center justify-center z-10"
        >
          <Shield className="w-6 h-6 text-primary-red" />
        </motion.div>

        {/* Threat circles orbiting */}
        {[0, 1, 2, 3].map((i) => {
          const angle = (i / 4) * Math.PI * 2;
          return (
            <motion.div
              key={i}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                position: 'absolute',
                width: '120px',
                height: '120px',
              }}
            >
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-primary-red/60 bg-dark-card flex items-center justify-center"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <AlertTriangle className="w-3 h-3 text-primary-red" />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
