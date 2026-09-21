import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'MindSpace',
    tech: ['React.js', 'JavaScript', 'Tailwind CSS'],
    desc: 'A comprehensive mental health tracking application that helps users monitor their moods, maintain journals, and find daily inspiration through curated quotes.',
    image: ['MindSpace.jpg', 'MindSpace2.png'],
    featured: false,
    links: {
      live: 'https://mindspace-app-pearl.vercel.app/',
      github: 'https://github.com/Akashrawat4561/mindspace-app'
    }
  },
  {
    title: 'ShortX URL Shortener',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    desc: 'A fast and secure URL shortener service to create compact and easy-to-share links.',
    image: 'URLShortener.png',
    featured: false,
    links: {
      live: 'https://short-x-url-shortener.vercel.app/',
      github: 'https://github.com/Akashrawat4561/ShortX-URL-Shortener'
    }
  },
  {
    title: 'WorkScout (Opportunities OS)',
    tech: ['React', 'Tailwind CSS', 'WebCmd', 'Node.js'],
    desc: 'A comprehensive platform for discovering and managing career opportunities.',
    image: 'WorkScout.png',
    featured: false,
    links: {
      live: '#',
      github: 'https://github.com/Akashrawat4561/opportunities_OS'
    }
  },
  {
    title: 'Student Accommodation Finder (SecureStay)',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Google Maps API'],
    desc: 'A platform connecting students with verified hostel and PG listings, featuring smart filters, interactive maps, and landlord management tools.',
    image: 'SecureStay.jpg',
    featured: false,
    links: {
      live: '#',
      github: 'https://github.com/Akashrawat4561'
    }
  } 
];

export function Projects() {
  const [expandedProjects, setExpandedProjects] = useState<string[]>([]);
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const toggleExpand = (title: string) => {
    setExpandedProjects((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

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
              {featuredProject.image ? (
                <a href={featuredProject.links.github} target="_blank" rel="noopener noreferrer" className="absolute inset-0 block rounded-r-3xl overflow-hidden">
                  {Array.isArray(featuredProject.image) ? (
                    <div className="relative h-full w-full group/img bg-neutral-100 dark:bg-neutral-800">
                      <img
                        src={featuredProject.image[0]}
                        alt={`${featuredProject.title} 1`}
                        className="absolute inset-0 h-full w-full object-cover object-top transition-all duration-700 group-hover/img:opacity-0 hover:scale-105"
                      />
                      <img
                        src={featuredProject.image[1]}
                        alt={`${featuredProject.title} 2`}
                        className="absolute inset-0 h-full w-full object-cover object-top opacity-0 transition-all duration-700 group-hover/img:opacity-100 hover:scale-105"
                      />
                    </div>
                  ) : (
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                  )}
                </a>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-neutral-800 dark:to-neutral-700 rounded-r-3xl">
                  <div className="text-center">
                    <div className="mb-4 text-6xl">🚀</div>
                    <p className="text-neutral-600 dark:text-neutral-400">Project Preview</p>
                  </div>
                </div>
              )}
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
              <div className="relative aspect-video overflow-hidden rounded-t-2xl bg-neutral-100 dark:bg-neutral-800">
                {project.image ? (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
                    {Array.isArray(project.image) ? (
                      <div className="relative h-full w-full">
                        <img
                          src={project.image[0]}
                          alt={`${project.title} 1`}
                          className="absolute inset-0 h-full w-full object-cover object-top transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
                        />
                        <img
                          src={project.image[1]}
                          alt={`${project.title} 2`}
                          className="absolute inset-0 h-full w-full object-cover object-top opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </a>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-neutral-700 dark:to-neutral-600">
                    <div className="text-center">
                      <div className="mb-2 text-4xl">💼</div>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">Project Image</p>
                    </div>
                  </div>
                )}
                <div className="pointer-events-none absolute top-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
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
                  {(expandedProjects.includes(project.title) ? project.tech : project.tech.slice(0, 3)).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && !expandedProjects.includes(project.title) && (
                    <button 
                      onClick={() => toggleExpand(project.title)}
                      className="cursor-pointer rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-700 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
                    >
                      +{project.tech.length - 3}
                    </button>
                  )}
                  {project.tech.length > 3 && expandedProjects.includes(project.title) && (
                    <button 
                      onClick={() => toggleExpand(project.title)}
                      className="cursor-pointer rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-700 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
                    >
                      Less
                    </button>
                  )}
                </div>

                <div className="flex gap-3">
                  <Button variant="primary"  className="flex-1 rounded-lg">
                    <a href={project.links.live} className="inline-flex items-center gap-2 text-xs">
                      <ExternalLink className="h-3 w-3" />
                      Demo
                    </a>
                  </Button>
                  <Button variant="secondary"  className="flex-1 rounded-lg">
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
