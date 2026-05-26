import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Check, Mail, Download, Github, Linkedin } from 'lucide-react';
import { useRef } from 'react';
import { WordsPullUp, WordsPullUpMultiStyle } from './components/WordsPullUp';
import { ProjectCard } from './components/ProjectCard';
import { CaseStudy } from './components/CaseStudy';
import { projects } from './data/projects';

const primaryText = '#E1E0CC';
const navItems = ['Work', 'About', 'Resume', 'Contact'];

function ScrollText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.25'] });
  const chars = text.split('');
  return (
    <p ref={ref} className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-[#DEDBC8] sm:text-sm md:text-base">
      {chars.map((char, index) => {
        const start = index / chars.length - 0.08;
        const end = index / chars.length + 0.04;
        const opacity = useTransform(scrollYProgress, [start, end], [0.22, 1]);
        return <motion.span key={`${char}-${index}`} style={{ opacity }}>{char}</motion.span>;
      })}
    </p>
  );
}

function Hero() {
  return (
    <section className="relative h-screen bg-black p-4 md:p-6">
      <div className="relative h-full overflow-hidden rounded-2xl bg-[#101010] shadow-glow md:rounded-[2rem]">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />

        <nav className="absolute left-1/2 top-0 z-20 -translate-x-1/2 rounded-b-2xl bg-black px-4 py-2 md:rounded-b-3xl md:px-8">
          <div className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="whitespace-nowrap text-[10px] transition-colors sm:text-xs md:text-sm"
                style={{ color: 'rgba(225, 224, 204, 0.8)' }}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-8">
          <div className="grid items-end gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-primary/70 md:text-sm">Creative strategy portfolio</p>
              <WordsPullUp
                text="Chirag"
                showAsterisk
                className="text-[27vw] font-medium leading-[0.78] tracking-[-0.09em] text-[#E1E0CC] sm:text-[24vw] md:text-[22vw] lg:text-[18vw] xl:text-[17vw]"
              />
            </div>
            <div className="lg:col-span-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-md text-xs leading-[1.2] text-primary/70 sm:text-sm md:text-base"
              >
                Insight-led campaigns, culture-first ideas, and brand storytelling built for work that moves across platforms, people, and moments.
              </motion.p>
              <motion.a
                href="#work"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group mt-5 inline-flex items-center gap-2 rounded-full bg-primary py-1 pl-5 pr-1 text-sm font-medium text-black transition-all hover:gap-3 sm:text-base"
              >
                View the work
                <span className="grid h-9 w-9 place-items-center rounded-full bg-black text-primary transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight size={18} />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-black px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#101010] px-5 py-16 text-center md:px-10 md:py-24">
        <p className="text-[10px] uppercase tracking-[0.35em] text-primary sm:text-xs">About</p>
        <h2 className="mx-auto mt-5 max-w-4xl text-3xl leading-[0.95] tracking-[-0.045em] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl">
          <WordsPullUpMultiStyle
            segments={[
              { text: 'I am Chirag Jain,', className: 'font-normal text-[#E1E0CC]' },
              { text: 'a creative strategist', className: 'font-serif italic text-primary' },
              { text: 'building campaigns from culture, behavior, and sharp insight.', className: 'font-normal text-[#E1E0CC]' }
            ]}
          />
        </h2>
        <ScrollText text="I am a Communications and Media Studies student with experience across digital marketing, campaign execution, events, and media research. My work blends brand thinking with audience psychology: finding the human tension, turning it into a simple idea, and shaping it into something people want to share." />
      </div>
    </section>
  );
}

function Features() {
  const items = [
    ['Insight first', 'Every project starts with a human behavior, tension, or cultural habit.'],
    ['Campaign logic', 'Ideas are framed through insight, idea, impact, and why-it-works.'],
    ['Visual storytelling', 'Decks, mockups, and written strategy are built to feel presentation-ready.'],
    ['Global perspective', 'Multilingual communication experience across English, Hindi, Spanish, and French.']
  ];
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-4 py-20 md:px-6 md:py-28">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <WordsPullUpMultiStyle
            className="mx-auto max-w-4xl text-xl font-normal leading-tight tracking-[-0.035em] sm:text-2xl md:text-3xl lg:text-4xl"
            segments={[
              { text: 'Campaign thinking for brands that want cultural pull.', className: 'text-[#E1E0CC]' },
              { text: 'Built from insight. Designed for attention.', className: 'text-gray-500' }
            ]}
          />
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4 lg:min-h-[480px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[1.75rem] bg-[#212121] p-6 md:col-span-2 lg:col-span-1"
          >
            <video className="absolute inset-0 h-full w-full object-cover opacity-45" src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4" autoPlay muted loop playsInline />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 text-2xl font-bold tracking-[-0.04em] text-[#E1E0CC]">Your creative canvas.</p>
          </motion.div>
          {items.map((item, index) => (
            <motion.div
              key={item[0]}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: (index + 1) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[1.75rem] bg-[#212121] p-6"
            >
              <div className="mb-10 grid h-12 w-12 place-items-center rounded-full bg-primary text-black">
                <Check size={22} />
              </div>
              <p className="mb-2 text-xs uppercase tracking-[0.28em] text-primary/50">0{index + 1}</p>
              <h3 className="text-2xl font-bold tracking-[-0.05em] text-[#E1E0CC]">{item[0]}</h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">{item[1]}</p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm text-primary/80">
                Learn more <ArrowRight size={16} className="-rotate-45" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="bg-black px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-primary/60">Selected work</p>
            <h2 className="mt-3 text-5xl font-bold tracking-[-0.07em] text-[#E1E0CC] md:text-8xl">Campaign Lab</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-gray-400 md:text-base">Six speculative campaigns exploring behavioral design, earned media, social engagement, and brand occasion creation.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
}

function Resume() {
  const skills = ['Google Ads', 'GA4', 'DV360', 'Adobe Creative Suite', 'Canva', 'WordPress', 'Campaign Management', 'Copywriting', 'Media Research', 'Event Coordination'];
  return (
    <section id="resume" className="bg-black px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-12">
        <div className="rounded-[2rem] bg-[#101010] p-6 md:p-8 lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.35em] text-primary/60">Resume</p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.06em] text-[#E1E0CC] md:text-6xl">Experience with measurable work.</h2>
          <p className="mt-5 text-sm leading-relaxed text-gray-400 md:text-base">Communications and Media Studies graduate candidate at York University with hands-on experience in digital marketing, campaign execution, event coordination, and media research.</p>
          <a href="/assets/docs/resume.pdf" download className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-bold text-black">
            <Download size={18} /> Download resume
          </a>
        </div>
        <div className="grid gap-4 lg:col-span-7">
          <div className="rounded-[2rem] bg-[#212121] p-6 md:p-8">
            <h3 className="text-2xl font-bold tracking-[-0.04em] text-[#E1E0CC]">Experience highlights</h3>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-gray-300 md:text-base">
              <li>Generated over $40,000 in sales revenue through product expertise and consultative selling.</li>
              <li>Analyzed 200+ media sources through content analysis, framing, and critical discourse methods.</li>
              <li>Executed marketing communications across social media, email, and branding, contributing to a 40% engagement increase.</li>
              <li>Coordinated high-level bilingual conferences for C-suite audiences in Mexico City.</li>
            </ul>
          </div>
          <div className="rounded-[2rem] bg-[#212121] p-6 md:p-8">
            <h3 className="text-2xl font-bold tracking-[-0.04em] text-[#E1E0CC]">Tools & strengths</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => <span key={skill} className="rounded-full border border-primary/20 px-3 py-2 text-xs text-primary/80">{skill}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="bg-black p-4 md:p-6">
      <div className="rounded-[2rem] bg-primary p-6 text-black md:p-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] opacity-70">Available for internships & creative roles</p>
            <h2 className="mt-3 text-5xl font-bold tracking-[-0.08em] md:text-8xl">Let’s build the idea.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm text-primary" href="mailto:officiallyhealthy@gmail.com"><Mail size={18} /> Email</a>
            <a className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm text-primary" href="https://github.com/" target="_blank"><Github size={18} /> GitHub</a>
            <a className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm text-primary" href="https://www.linkedin.com/" target="_blank"><Linkedin size={18} /> LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main style={{ color: primaryText }}>
      <Hero />
      <About />
      <Features />
      <Work />
      {projects.map((project, index) => <CaseStudy key={project.slug} project={project} index={index} />)}
      <Resume />
      <Contact />
    </main>
  );
}
