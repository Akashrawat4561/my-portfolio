import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'MindSpace',
    tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap'],
    desc: 'A comprehensive mental health tracking application that helps users monitor their moods, maintain journals, and find daily inspiration through curated quotes.',
    image: 'MindSpace.jpg',
    featured: false,
    links: {
      live: '#',
      github: 'https://github.com/Akashrawat4561/mindspace-app'
    }
  },
  // {
  //   title: 'Student Accommodation Finder (SecureStay)',
  //   tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Google Maps API'],
  //   desc: 'A platform connecting students with verified hostel and PG listings, featuring smart filters, interactive maps, and landlord management tools.',
  //   image: undefined,
  //   featured: false,
  //   links: {
  //     live: '#',
  //     github: '#'
  //   }
  // },
  {
    title: 'Portfolio Website',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS'],
    desc: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark mode support.',
    image: '/portfolio.jpg', 
    featured: false,
    links: {
      live: '#',
      github: 'https://github.com/Akashrawat4561/Portfolio-Website'
    }
  }
];

export function Projects() {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      title="Featured Work"
      subtitle="Showcasing projects that demonstrate my skills and passion for development."
      className="bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900"
    >
      {/* Featured Project */}
      {featuredProject && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group mb-16 overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600/5 to-indigo-600/5 dark:from-violet-600/10 dark:to-indigo-600/10"
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
                <span className="h-2 w-2 rounded-full bg-violet-500" />
                Featured Project
              </div>

              <h3 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-white">
                {featuredProject.title}
              </h3>

              <p className="mb-6 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {featuredProject.desc}
              </p>

              <div className="mb-8 flex flex-wrap gap-3">
                {featuredProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-violet-700 backdrop-blur-sm dark:bg-neutral-800/80 dark:text-violet-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button className="rounded-xl px-6 py-3">
                  <a href={featuredProject.links.live} className="inline-flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="secondary" className="rounded-xl px-6 py-3">
                  <a href={featuredProject.links.github} className="inline-flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    Source Code
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative min-h-80 lg:min-h-96">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-neutral-800 dark:to-neutral-700">
                <div className="text-center">
                  <div className="mb-4 text-6xl">🚀</div>
                  <p className="text-neutral-600 dark:text-neutral-400">Project Preview</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Other Projects */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-neutral-800 dark:shadow-neutral-800/50">
              {/* ✅ Image Section */}
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-neutral-700 dark:to-neutral-600">
                    <div className="text-center">
                      <div className="mb-2 text-4xl">💼</div>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">Project Image</p>
                    </div>
                  </div>
                )}
                <div className="absolute top-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                </div>
              </div>

              {/* ✅ Text Section */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 text-xl font-semibold text-neutral-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mb-4 flex-1 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {project.desc}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-700 dark:text-neutral-400">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <Button variant="primary" size="sm" className="flex-1 rounded-lg">
                    <a href={project.links.live} className="inline-flex items-center gap-2 text-xs">
                      <ExternalLink className="h-3 w-3" />
                      Demo
                    </a>
                  </Button>
                  <Button variant="secondary" size="sm" className="flex-1 rounded-lg">
                    <a href={project.links.github} className="inline-flex items-center gap-2 text-xs">
                      <Github className="h-3 w-3" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
