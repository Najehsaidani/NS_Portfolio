import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ShoppingCart, GraduationCap, Users, Store, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Multivendor E-Commerce Marketplace',
    description: 'Scalable marketplace with seller dashboards, secure payments, order tracking, and real-time buyer–seller chat.',
    tech: ['Spring Boot', 'FastAPI', 'NestJS', 'Angular', 'Kotlin'],
    icon: Store,
    github: 'https://github.com/najehsaidani/intelligence-marketplace',
    color: 'primary',
    featured: true,
  },
  {
    title: 'TiraPC E-Commerce',
    description: 'Full-stack Spring Boot + React store with secure APIs, role management, and UML modelling.',
    tech: ['Spring Boot', 'React', 'Tailwind CSS', 'Axios'],
    icon: ShoppingCart,
    github: 'https://github.com/najehsaidani/TiraPC',
    color: 'secondary',
  },
  {
    title: 'Learning Management System',
    description: 'Student/teacher management app with standalone Angular components and structured database schema.',
    tech: ['Spring Boot', 'Angular', 'PostgreSQL'],
    icon: GraduationCap,
    color: 'accent',
  },
  {
    title: 'WeConnect - Club & Event Platform',
    description: 'Platform to manage clubs, events, publications with admin panel and secure role-based access.',
    tech: ['Spring Boot', 'React', 'Microservices'],
    icon: Users,
    github: 'https://github.com/najehsaidani/WeConnect',
    color: 'primary',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
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

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const Icon = project.icon;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className={`group relative glass-card rounded-2xl overflow-hidden hover-lift glow-hover ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Animated gradient border on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--neon-cyan) / 0.1), hsl(var(--neon-purple) / 0.1))',
        }}
      />

      {/* Shimmer effect */}
      <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />
      
      {/* Content */}
      <div className="relative p-6 md:p-8">
        <div className="flex items-start justify-between mb-4">
          <motion.div 
            className={`w-14 h-14 rounded-xl bg-${project.color}/10 flex items-center justify-center`}
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className={`w-7 h-7 text-${project.color}`} />
          </motion.div>
          <div className="flex gap-2">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
                aria-label="View on GitHub"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
              </motion.a>
            )}
            <motion.button 
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </motion.button>
          </div>
        </div>

        <motion.h3 
          className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors flex items-center gap-2"
        >
          {project.title}
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="inline-block"
          >
            <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.span>
        </motion.h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <motion.span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-mono bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + techIndex * 0.05 }}
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {project.featured && (
          <motion.div 
            className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-neon text-xs font-bold text-primary-foreground"
            animate={{ 
              boxShadow: [
                "0 0 10px hsl(var(--neon-cyan) / 0.3)",
                "0 0 20px hsl(var(--neon-cyan) / 0.5)",
                "0 0 10px hsl(var(--neon-cyan) / 0.3)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Featured
          </motion.div>
        )}
      </div>

      {/* Bottom border glow on hover */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Animated background decorations */}
      <motion.div 
        className="absolute top-1/3 -right-32 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/3 -left-32 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity }}
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
            // featured-projects
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            My <span className="animated-gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in building scalable, user-centric applications
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/najehsaidani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card hover:border-primary/50 hover:text-primary transition-all group animated-border"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            <span>View All on GitHub</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
