// components/Contact.tsx
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';
import { Section } from './ui/Section';
import { ContactForm } from './ContactForm';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rawatakash1612@gmail.com',
    href: 'mailto:rawatakash1612@gmail.com',
    description: 'Send me an email anytime'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Akashrawat4561',
    href: 'https://github.com/Akashrawat4561',
    description: 'Check out my projects'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'akash-rawat',
    href: 'https://linkedin.com/in/akash-rawat-bb7a0928b',
    description: 'Let\'s connect professionally'
  }
];

export function Contact() {
  return (
    <Section 
      id="contact" 
      title="Get In Touch" 
      subtitle="Ready to bring your ideas to life? Let's start a conversation."
      className="bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left">
              <div className="inline-flex p-3 rounded-2xl bg-violet-100 dark:bg-violet-900/30 mb-4">
                <MessageCircle className="h-8 w-8 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
                Let's work together
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                I'm always open to discussing new opportunities and interesting projects.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-center gap-4 rounded-2xl bg-white dark:bg-neutral-800 p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 hover:-translate-y-1"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 group-hover:from-violet-500 group-hover:to-indigo-500 transition-colors">
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {method.label}
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                      {method.description}
                    </p>
                    <p className="text-violet-600 dark:text-violet-400 font-medium text-sm mt-1">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}