import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type Props = {
  text: string;
  className?: string;
  showAsterisk?: boolean;
};

export function WordsPullUp({ text, className = '', showAsterisk = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const words = text.split(' ');

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, index) => {
        const isLast = index === words.length - 1;
        return (
          <span key={`${word}-${index}`} className="overflow-hidden inline-flex mr-[0.13em] pb-[0.05em]">
            <motion.span
              initial={{ y: 28, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 28, opacity: 0 }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative inline-block"
            >
              {word}
              {showAsterisk && isLast && (
                <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] leading-none">*</span>
              )}
            </motion.span>
          </span>
        );
      })}
    </div>
  );
}

type Segment = { text: string; className?: string };

export function WordsPullUpMultiStyle({ segments, className = '' }: { segments: Segment[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const words = segments.flatMap((segment) =>
    segment.text.split(' ').map((word) => ({ word, className: segment.className || '' }))
  );

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {words.map((item, index) => (
        <span key={`${item.word}-${index}`} className="overflow-hidden inline-flex mr-[0.18em] pb-[0.06em]">
          <motion.span
            initial={{ y: 24, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
            transition={{ duration: 0.75, delay: index * 0.055, ease: [0.16, 1, 0.3, 1] }}
            className={`inline-block ${item.className}`}
          >
            {item.word}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
