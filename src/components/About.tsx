// components/About.tsx
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

export function About() {
  return (
    <Section 
      id="about" 
      title="About Me" 
      subtitle="Passionate developer crafting digital experiences with modern technologies"
      className="bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Motivated and detail-oriented Computer Science Engineering student with a strong foundation in 
            frontend technologies. Passionate about building interactive, user-friendly web experiences 
            and contributing to impactful real-world projects.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Education</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-neutral-900 dark:text-white">B.Tech in Computer Science Engineering</h4>
                  <p className="text-neutral-600 dark:text-neutral-400">SKITM, Indore (RGPV)</p>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>2023–2027</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    <span>CGPA: 7.20</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group"
          >
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg">
                  <MapPin className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Contact</h3>
              </div>
              
              <div className="space-y-3">
                {[
                  { label: 'Email', value: 'rawatakash1612@gmail.com', href: 'mailto:rawatakash1612@gmail.com' },
                  { label: 'Phone', value: '+91 7489487205', href: 'tel:+917489487205' },
                  { label: 'GitHub', value: 'github.com/Akashrawat4561', href: 'https://github.com/Akashrawat4561' },
                  { label: 'LinkedIn', value: 'linkedin.com/in/akash-rawat', href: 'https://linkedin.com/in/akash-rawat-bb7a0928b' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-neutral-100 dark:border-neutral-700 last:border-b-0">
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{item.label}</span>
                    <a 
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="text-sm text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors font-medium"
                    >
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}