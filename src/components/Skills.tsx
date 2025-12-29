import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    color: 'neon-cyan',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Python', level: 75 },
      { name: 'Kotlin', level: 80 },
      { name: 'PHP', level: 70 },
    ],
  },
  {
    title: 'Frontend',
    color: 'neon-purple',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Angular', level: 85 },
      { name: 'Vue.js', level: 70 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'React Native', level: 75 },
    ],
  },
  {
    title: 'Backend',
    color: 'neon-pink',
    skills: [
      { name: 'Spring Boot', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'NestJS', level: 80 },
      { name: 'FastAPI', level: 75 },
      { name: 'Laravel', level: 70 },
    ],
  },
  {
    title: 'Database & DevOps',
    color: 'neon-yellow',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Docker', level: 75 },
      { name: 'Git/CI-CD', level: 85 },
      { name: 'Oracle', level: 70 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const SkillBar = ({ name, level, delay, color }: { name: string; level: number; delay: number; color: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const colorClasses: Record<string, string> = {
    'neon-cyan': 'from-neon-cyan to-neon-cyan/50',
    'neon-purple': 'from-neon-purple to-neon-purple/50',
    'neon-pink': 'from-neon-pink to-neon-pink/50',
    'neon-yellow': 'from-neon-yellow to-neon-yellow/50',
  };

  return (
    <motion.div 
      ref={ref} 
      className="mb-4 group"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between items-center mb-2">
        <motion.span 
          className="text-sm font-medium group-hover:text-primary transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          {name}
        </motion.span>
        <motion.span 
          className="text-xs text-muted-foreground font-mono"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="skill-bar relative">
        <motion.div
          className={`skill-bar-fill bg-gradient-to-r ${colorClasses[color] || colorClasses['neon-cyan']}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Glow effect at the end */}
        <motion.div
          className="absolute top-0 bottom-0 w-2 rounded-full"
          style={{ backgroundColor: `hsl(var(--${color}))` }}
          initial={{ left: 0, opacity: 0 }}
          animate={isInView ? { 
            left: `calc(${level}% - 4px)`, 
            opacity: [0, 1, 0.5],
            boxShadow: `0 0 10px hsl(var(--${color}))`,
          } : {}}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 right-20 w-20 h-20 bg-neon-cyan/20 rounded-full blur-2xl"
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-32 h-32 bg-neon-purple/20 rounded-full blur-2xl"
        animate={{ 
          y: [0, 30, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="terminal-text text-sm mb-4 block"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            // my-skills
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            Tech <span className="animated-gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit spanning frontend, backend, mobile, and DevOps technologies
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 rounded-2xl glow-hover"
            >
              <motion.h3 
                className={`text-xl font-bold mb-6 flex items-center gap-2`}
                whileHover={{ x: 5 }}
              >
                <motion.span 
                  className={`w-3 h-3 rounded-full`} 
                  style={{ backgroundColor: `hsl(var(--${category.color}))` }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      `0 0 5px hsl(var(--${category.color}))`,
                      `0 0 15px hsl(var(--${category.color}))`,
                      `0 0 5px hsl(var(--${category.color}))`,
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {category.title}
              </motion.h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={0.3 + categoryIndex * 0.1 + skillIndex * 0.1}
                  color={category.color}
                />
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Additional skills tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <h4 className="text-center text-muted-foreground mb-6">Also experienced with</h4>
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {[
              'Microservices', 'REST API', 'GraphQL', 'Firebase', 'SonarQube', 
              'Agile/Scrum', 'UI/UX', 'GDPR', 'MySQL', 'C/C++',
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.05 }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "hsl(var(--primary) / 0.2)",
                  color: "hsl(var(--primary))",
                  boxShadow: "0 0 20px hsl(var(--neon-cyan) / 0.3)",
                }}
                className="px-4 py-2 rounded-full glass-card text-sm font-mono cursor-default transition-all"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
