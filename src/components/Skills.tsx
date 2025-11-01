// components/Skills.tsx
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Code, Database, Cpu, Users, Wrench } from 'lucide-react';

const skills = {
  'Frontend Development': {
    icon: Code,
    items: ['HTML', 'CSS', 'JavaScript', 'React.js','Bootstrap'],
    color: 'from-blue-500 to-cyan-500'
  },
  'Backend Development': {
    icon: Cpu,
    items: ['Learning'],
    color: 'from-green-500 to-emerald-500'
  },
  'Database': {
    icon: Database,
    items: ['Learning'],
    color: 'from-amber-500 to-orange-500'
  },
  'Programming Languages': {
    icon: Code,
    items: ['C++', 'Python', 'Basic Java'],
    color: 'from-purple-500 to-pink-500'
  },
  'Tools & Technologies': {
    icon: Wrench,
    items: ['Git', 'GitHub', 'VS Code', 'Framer Motion'],
    color: 'from-red-500 to-rose-500'
  },
  'Soft Skills': {
    icon: Users,
    items: ['Teamwork', 'Problem-Solving', 'Adaptability', 'Leadership', 'Communication'],
    color: 'from-indigo-500 to-violet-500'
  }
};

export function Skills() {
  return (
    <Section 
      id="skills" 
      title="Skills & Technologies" 
      subtitle="The tools and technologies I use to bring ideas to life."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, { icon: Icon, items, color }], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="relative h-full overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-neutral-800">
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition-opacity group-hover:opacity-5`} />
              
              {/* Icon */}
              <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-r ${color} p-3`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
                {category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-700 transition-colors group-hover:bg-white group-hover:shadow-sm dark:bg-neutral-700 dark:text-neutral-300 dark:group-hover:bg-neutral-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}