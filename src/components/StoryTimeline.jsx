import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const chapters = [
  {
    title: 'Roots of Vision',
    text: 'Born from community hopes and daily struggles, UHD • PVM began as a promise to listen first and lead with humility.',
  },
  {
    title: 'Voices Unite',
    text: 'Farmers, students, entrepreneurs, and elders — a tapestry of voices came together to build a shared future.',
  },
  {
    title: 'Path to Dignity',
    text: 'From education to health, from opportunity to security — we are shaping policies grounded in human dignity.',
  },
  {
    title: 'Forward Together',
    text: 'A democratic movement led by the people, guided by integrity, and powered by hope.',
  },
]

export default function StoryTimeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] })
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="story" ref={ref} className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[280px_1fr] gap-10">
          <div className="relative">
            <h2 className="text-3xl font-extrabold text-black">The Story</h2>
            <p className="mt-2 text-black/70">A cinematic timeline of how UHD • PVM grew from a spark into a people-powered movement.</p>

            <div className="mt-10 relative h-full">
              <div className="absolute left-3 top-0 bottom-0 w-1 rounded bg-black/10 overflow-hidden">
                <motion.div style={{ height: progress }} className="absolute left-0 top-0 w-full bg-[var(--color-light-blue)]" />
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {chapters.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5, delay: i * 0.05 }} className="relative pl-10">
                <div className="absolute left-0 top-2 w-6 h-6 rounded-full border-2 border-[var(--color-light-blue)] bg-white shadow"></div>
                <h3 className="text-xl font-bold text-black">{c.title}</h3>
                <p className="mt-2 text-black/70">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
