// components/Achievements.tsx
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Trophy, Code, Users } from 'lucide-react';

const achievements = [
  {
    title: '3⭐ Coder on HackerRank',
    description: 'Proficient in C++ programming',
    icon: Code,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'College Chess & Volleyball Champion',
    description: 'Won multiple college-level tournaments',
    icon: Trophy,
    color: 'from-amber-500 to-orange-500'
  },
  {
    title: 'Volunteer at Skitech Innothon 2.0',
    // description: 'Developed Budget Quest App (2025)',
    icon: Users,
    color: 'from-green-500 to-emerald-500'
  }
];

export function Achievements() {
  return (
    <Section 
      id="achievements" 
      title="Achievements" 
      subtitle="Awards, hackathons, and recognitions that showcase my journey"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="relative bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 h-full">
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${achievement.color} mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <achievement.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                {achievement.title}
              </h3>
              
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                {achievement.description}
              </p>
              
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}