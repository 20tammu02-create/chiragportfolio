import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import type { Project } from '../data/projects';

const labels = ['Insight', 'Idea', 'Impact'];

export function CaseStudy({ project, index }: { project: Project; index: number }) {
  const blocks = [project.insight, project.idea, project.impact];
  return (
    <section id={project.slug} className="border-t border-white/10 py-16 md:py-24 scroll-mt-8">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-primary/60">0{index + 1} / {project.brand}</p>
            <h2 className="mt-3 text-4xl font-bold tracking-[-0.06em] text-[#E1E0CC] md:text-7xl">{project.title}</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-gray-400 md:text-base">{project.category}</p>
        </motion.div>

        <div className="project-scroll mb-8 flex gap-4 overflow-x-auto pb-4">
          {project.slides.map((slide, slideIndex) => (
            <motion.img
              key={slide}
              src={slide}
              alt={`${project.title} slide ${slideIndex + 1}`}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: slideIndex * 0.08 }}
              className="h-[260px] w-[360px] shrink-0 rounded-3xl border border-white/10 object-cover md:h-[420px] md:w-[590px]"
            />
          ))}
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {blocks.map((block, blockIndex) => (
            <motion.div
              key={labels[blockIndex]}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: blockIndex * 0.1 }}
              className="rounded-[1.5rem] bg-[#101010] p-5 md:p-6"
            >
              <div className="mb-4 flex items-center gap-2 text-primary">
                <Check size={18} />
                <h3 className="text-sm uppercase tracking-[0.25em]">{labels[blockIndex]}</h3>
              </div>
              <p className="text-lg leading-snug text-[#E1E0CC] md:text-xl">{block}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mt-3 rounded-[1.5rem] bg-[#212121] p-5 md:p-6"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary/60">Why it works</p>
              <p className="mt-2 max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">{project.why}</p>
            </div>
            <ArrowRight className="hidden text-primary md:block" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
