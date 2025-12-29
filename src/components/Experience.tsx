import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Full-Stack Developer Intern',
    company: 'GYM-I-FY',
    period: '06/2025 – 07/2025',
    location: 'Tunisia',
    description: [
      'Designed, developed, and deployed a full e-commerce website with admin and client interfaces',
      'Implemented product, order, and review management features for admins',
      'Built intuitive client-side interfaces for browsing, ordering, and reviewing products',
      'Managed the entire platform, ensuring smooth operations and user-friendly experience',
    ],
    current: true,
  },
  {
    title: 'Backend Developer Intern',
    company: 'GYM-I-FY',
    period: '01/2025 – 02/2025',
    location: 'Tunisia',
    description: [
      'Developed a system for course creation and student management (API, database, frontend)',
      'Enabled instructors to create courses and manage student progress efficiently',
    ],
  },
  {
    title: 'Full-Stack Development Intern',
    company: 'GYM-I-FY',
    period: '01/2024 – 02/2024',
    location: 'Tunisia',
    description: [
      'Gained hands-on experience in full-stack development and company workflows',
      'Assisted in developing features for management systems and learned best practices',
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="terminal-text text-sm mb-4 block">// work-experience</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            Career <span className="neon-text">Journey</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                  index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%]'
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-4 border-background md:-translate-x-1/2 ${
                  exp.current ? 'bg-primary animate-glow-pulse' : 'bg-muted'
                }`} />

                {/* Content card */}
                <div className={`glass-card p-6 rounded-2xl ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  {exp.current && (
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-3">
                      Current
                    </span>
                  )}
                  
                  <div className={`flex items-center gap-2 mb-2 text-sm text-muted-foreground ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span>{exp.company}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>

                  <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className={`space-y-2 text-muted-foreground text-sm ${
                    index % 2 === 0 ? 'md:text-right' : ''
                  }`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className={`flex gap-2 ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}>
                        <span className="text-primary mt-1">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
