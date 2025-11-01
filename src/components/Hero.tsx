// components/Hero.tsx
import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { Button } from './ui/Button';
import ProfileImg from './WhatsApp Image 2025-10-31 at 18.34.13_1ec6d6b3.jpg';

export function Hero() {
  const handleDownloadResume = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/Resume.pdf'; // Make sure Resume.pdf is in your public folder
    link.download = 'Akash_Rawat_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-violet-900/20" />
      <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-violet-200/40 blur-3xl dark:bg-violet-800/20" />
      <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-800/20" />
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-sm text-violet-700 backdrop-blur-sm dark:border-violet-800 dark:bg-neutral-800/80 dark:text-violet-300">
                <MapPin className="h-4 w-4" />
                <span>Indore, Madhya Pradesh, India</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            >
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                Akash
              </span>
              <br />
              <span className="bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent dark:from-white dark:to-neutral-300">
                Rawat
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mb-8 max-w-2xl text-xl text-neutral-600 dark:text-neutral-400 lg:mx-0"
            >
              Aspiring Front-End Developer skilled in HTML, CSS, JavaScript, and React.js. Passionate about building responsive, user-friendly websites and continuously improving through learning and creativity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Button className="group rounded-xl px-8 py-4 text-base font-semibold">
                <a href="#projects" className="inline-flex items-center gap-3">
                  View My Work 
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="secondary" className="rounded-xl px-8 py-4 text-base font-semibold">
                <a href="#contact" className="inline-flex items-center gap-3">
                  Get In Touch
                </a>
              </Button>
              <Button 
                variant="ghost" 
                className="rounded-xl px-8 py-4 text-base font-semibold border-2 border-violet-200 hover:border-violet-300 dark:border-violet-800 dark:hover:border-violet-700"
                onClick={handleDownloadResume}
              >
                <div className="inline-flex items-center gap-3">
                  <Download className="h-5 w-5" />
                  Download Resume
                </div>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start"
            >
              {[
                { value: '2', label: 'Projects Completed' },
                { value: '3⭐', label: 'HackerRank Coder' },
                { value: '5+', label: 'Certifications' },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-neutral-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto lg:mx-0"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 opacity-20 blur-2xl" />
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-violet-400 to-indigo-400 opacity-40 blur-xl" />
              
              {/* Main image container */}
              <div className="relative rounded-full border-4 border-white/20 bg-gradient-to-br from-violet-100 to-indigo-100 p-2 shadow-2xl dark:from-neutral-800 dark:to-neutral-700">
                <img
                  src={ProfileImg}
                  alt="Akash Rawat"
                  className="relative h-80 w-80 rounded-full object-cover shadow-lg lg:h-96 lg:w-96"
                />
              </div>
              
              {/* Floating elements - Only keeping the available status */}
              {/* <div className="absolute -top-4 -right-4 rounded-2xl bg-white/80 p-3 shadow-2xl backdrop-blur-sm dark:bg-neutral-800/80">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Available</span>
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}