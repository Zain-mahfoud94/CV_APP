import { motion } from "framer-motion";
import ElectricBorder from "../components/ElectricBorder.tsx";
import { projects as projectsEN } from "../data/projectsEN";
import { projects as projectsDE } from "../data/projectsDE";

export default function LiveDemoCards({ language }: { language: string }) {
  const projects = language === "DE" ? projectsDE : projectsEN;
  return (
    <section className="w-full">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="p-6 flex flex-col justify-between"
          >
            <ElectricBorder
              color="#7df9ff"
              speed={1}
              chaos={0.25}
              style={{
                backgroundColor: "#060010",
                color: "#fff",
                borderRadius: 16,
                width: "80%",
                margin: "0 auto",
                padding: 12,
              }}
            >
              {/* Title + description */}
              <div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm opacity-80 mb-4">{project.description}</p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-black/10 dark:bg-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex-1 text-center text-sm font-semibold px-4 py-2 rounded-xl
                             bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  className="flex-1 text-center text-sm font-semibold px-4 py-2 rounded-xl
                           border border-black/20 dark:border-white/20
                           hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </ElectricBorder>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
