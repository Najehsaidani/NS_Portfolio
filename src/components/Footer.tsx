import { motion } from 'framer-motion';
import { Heart, Terminal } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a 
            href="#home" 
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-neon flex items-center justify-center">
              <Terminal className="w-5 h-5 text-background" />
            </div>
            <span className="font-display font-bold text-xl group-hover:text-primary transition-colors">
              NS<span className="text-primary">.</span>
            </span>
          </motion.a>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} Najeh Saidani. Built with 
            <Heart className="w-4 h-4 text-neon-pink inline" />
            using React & Three.js
          </p>

          {/* Back to top */}
          <motion.a
            href="#home"
            className="px-4 py-2 rounded-lg glass-card hover:border-primary/50 hover:text-primary transition-all text-sm"
            whileHover={{ y: -2 }}
          >
            Back to top ↑
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
