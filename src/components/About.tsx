import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Smartphone, Server, GraduationCap, MapPin } from 'lucide-react';

const highlights = [
  { icon: Code2, label: 'Full-Stack Dev', value: '10+ Projects' },
  { icon: Database, label: 'Databases', value: '5+ Systems' },
  { icon: Smartphone, label: 'Mobile Apps', value: 'Android/Kotlin' },
  { icon: Server, label: 'Microservices', value: 'Scalable APIs' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="terminal-text text-sm mb-4 block">// about-me</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            Who <span className="neon-text">I Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <p className="text-muted-foreground mb-2">
                Bachelor in IT Systems Development (ongoing)
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>ISET Bizerte, Tunisia</span>
              </div>
              <div className="mt-4 pt-4 border-t border-border/30">
                <p className="text-sm text-muted-foreground">
                  Technical Baccalaureate (with honours) - Lycée 14 Janvier
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate <span className="text-primary">Full-Stack Developer</span> with hands-on experience 
              building scalable web and mobile applications. From e-commerce platforms to learning management systems, 
              I specialize in crafting clean, efficient solutions using modern technologies.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My expertise spans across <span className="text-secondary">Java/Spring Boot</span>, 
              <span className="text-secondary"> React/Angular</span>, and <span className="text-secondary">Kotlin</span> for mobile development. 
              I'm passionate about microservices architecture, REST API design, and building user-centric applications 
              that solve real problems.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Problem Solver', 'Team Player', 'Quick Learner', 'Detail-Oriented'].map((trait) => (
                <span key={trait} className="px-4 py-2 rounded-full glass-card text-sm text-primary border border-primary/30">
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="glass-card p-6 rounded-2xl group hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-2xl font-bold neon-text mb-1">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
