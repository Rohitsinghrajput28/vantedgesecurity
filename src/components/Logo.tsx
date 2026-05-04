import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo = ({ size = 'md', showText = true }: LogoProps) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  };

  const textSizeMap = {
    sm: 'text-sm',
    md: 'text-xl',
    lg: 'text-3xl',
  };

  return (
    <motion.div
      className="flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
    >
      {/* Gradient Shield Logo */}
      <div className={`${sizeMap[size]} rounded-lg bg-gradient-to-br from-cyan-glow via-blue-500 to-purple-glow flex items-center justify-center text-white font-bold relative overflow-hidden`}>
        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-glow to-purple-glow opacity-0"
          animate={{ opacity: [0, 0.2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* V Icon */}
        <span className={`${textSizeMap[size]} relative z-10`}>V</span>
      </div>

      {/* Company Name */}
      {showText && (
        <motion.div
          className={`font-bold bg-gradient-to-r from-cyan-glow via-blue-400 to-purple-glow bg-clip-text text-transparent ${textSizeMap[size]}`}
          whileHover={{ opacity: 0.8 }}
        >
          VantedgeSecurity
        </motion.div>
      )}
    </motion.div>
  );
};
