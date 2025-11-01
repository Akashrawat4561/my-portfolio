// components/Footer.tsx
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-neutral-200/80 dark:border-neutral-800/80 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <p className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
              Designed by Akash Rawat
            </p>
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-500">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Achievements",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-neutral-600 transition-colors hover:text-violet-600 dark:text-neutral-400 dark:hover:text-violet-400"
              >
                {item}
              </a>
            ))}
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          ></motion.div>
        </div>
      </div>
    </footer>
  );
}
