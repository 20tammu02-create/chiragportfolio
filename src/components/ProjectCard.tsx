import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Project } from '../data/projects';

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={`#${project.slug}`}
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group block overflow-hidden rounded-[1.75rem] bg-[#212121] border border-white/10 hover:border-primary/40 transition-colors"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={project.cover} alt={project.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary/60">{project.brand}</p>
            <h3 className="mt-1 text-2xl md:text-3xl font-bold tracking-[-0.05em] text-[#E1E0CC]">{project.title}</h3>
          </div>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-black transition-transform group-hover:rotate-[-45deg]">
            <ArrowRight size={20} />
          </span>
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm text-gray-500">{project.category}</p>
        <p className="mt-3 text-sm leading-relaxed text-gray-400">{project.idea}</p>
      </div>
    </motion.a>
  );
}
