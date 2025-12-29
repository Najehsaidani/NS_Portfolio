import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Terminal, Sparkles } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.05,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Hero = () => {
  const firstName = "Najeh".split("");
  const lastName = "Saidani".split("");

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Scanline effect */}
      <div className="scanline" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial="hidden"
            animate="visible"
          >
            {/* Terminal-style intro */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
              variants={textVariants}
              custom={0}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(var(--neon-cyan) / 0.3)" }}
            >
              <Terminal className="w-4 h-4 text-primary" />
              <span className="terminal-text text-sm">~/portfolio$ whoami</span>
              <motion.span 
                className="w-2 h-4 bg-primary"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>

            {/* Name with letter animation */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-4">
              <div className="text-foreground flex flex-wrap justify-center lg:justify-start">
                {firstName.map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block hover:text-primary transition-colors cursor-default"
                    whileHover={{ scale: 1.2, rotate: [-5, 5, 0] }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
              <div className="neon-text flex flex-wrap justify-center lg:justify-start">
                {lastName.map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={firstName.length + i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block hover:text-secondary transition-colors cursor-default"
                    whileHover={{ scale: 1.2, rotate: [5, -5, 0] }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </h1>

            {/* Title */}
            <motion.div
              className="mb-8"
              variants={textVariants}
              custom={4}
            >
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground"
                whileHover={{ scale: 1.02 }}
              >
                <motion.span 
                  className="text-primary inline-block"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  &lt;
                </motion.span>
                Full-Stack Developer
                <motion.span 
                  className="text-primary inline-block"
                  animate={{ rotate: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {" />"} 
                </motion.span>
              </motion.p>
              <motion.p 
                className="text-muted-foreground mt-2 max-w-lg mx-auto lg:mx-0"
                variants={textVariants}
                custom={5}
              >
                IT Systems Development Student at ISET Bizerte, crafting scalable applications 
                with modern technologies. Passionate about clean code and innovative solutions.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              variants={textVariants}
              custom={6}
            >
              <motion.a
                href="#projects"
                className="group relative px-8 py-4 rounded-xl font-semibold text-primary-foreground overflow-hidden neon-border"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span 
                  className="absolute inset-0 bg-gradient-neon"
                  whileHover={{ 
                    background: "linear-gradient(270deg, hsl(var(--neon-cyan)), hsl(var(--neon-purple)), hsl(var(--neon-pink)))",
                  }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  View Projects
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 rounded-xl font-semibold glass-card hover:bg-muted/50 transition-colors"
                whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4 justify-center lg:justify-start"
              variants={textVariants}
              custom={7}
            >
              {[
                { icon: Github, href: "https://github.com/najehsaidani", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/najeh-saidani", label: "LinkedIn" },
                { icon: Mail, href: "mailto:najehsaidani241@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-card hover:text-primary hover:border-primary/50 transition-all duration-300 group"
                  aria-label={label}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: [0, -10, 10, 0],
                    boxShadow: "0 0 25px hsl(var(--neon-cyan) / 0.4)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right content - Profile image */}
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative group">
              {/* Glow effect */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink blur-3xl opacity-30"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Orbiting ring */}
              <motion.div
                className="absolute inset-[-20px] rounded-full border-2 border-dashed border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Image container */}
              <motion.div 
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden neon-border"
                whileHover={{ scale: 1.05 }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={profileImage}
                  alt="Najeh Saidani"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </motion.div>

              {/* Floating badges */}
              <motion.div 
                className="absolute -top-4 -right-4 px-4 py-2 rounded-lg glass-card text-sm font-mono"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-primary">3+</span> Years Exp
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-lg glass-card text-sm font-mono"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-secondary">10+</span> Projects
              </motion.div>

              {/* Tech icons orbiting */}
              <motion.div
                className="absolute top-1/2 -right-8 w-12 h-12 rounded-full glass-card flex items-center justify-center text-lg"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                ⚛️
              </motion.div>
              <motion.div
                className="absolute top-1/2 -left-8 w-12 h-12 rounded-full glass-card flex items-center justify-center text-lg"
                animate={{ 
                  rotate: [360, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                🚀
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.a 
            href="#about" 
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-sm font-mono">scroll</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
