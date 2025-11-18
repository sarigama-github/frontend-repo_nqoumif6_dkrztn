import { motion } from 'framer-motion'

const points = [
  'A nation where education and opportunity are rights, not privileges.',
  'A government that serves with humility and earns public trust.',
  'An economy that supports entrepreneurs, farmers, and workers alike.',
  'Healthcare, dignity, and safety for every family.',
  'A sustainable future — water, land, and resources for generations to come.',
]

export default function Vision() {
  return (
    <section id="vision" className="relative bg-white py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-[var(--color-light-blue)]/10 blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-[var(--color-golden-yellow)]/10 blur-2xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-extrabold text-black">The Vision</h2>
            <p className="mt-3 text-black/70 max-w-xl">Our long-term horizon is clear and people-centered — a future built on dignity, opportunity, and collective wisdom.</p>
            <ul className="mt-6 space-y-3">
              {points.map((p, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="flex items-start gap-3">
                  <span className="mt-1 w-2.5 h-2.5 rounded-full bg-[var(--color-golden-yellow)] ring-2 ring-[var(--color-light-blue)]/30"></span>
                  <span className="text-black/80">{p}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="aspect-[4/3] rounded-2xl bg-white ring-1 ring-black/10 shadow-sm p-6">
            <div className="w-full h-full rounded-xl bg-gradient-to-br from-[var(--color-light-blue)]/15 to-[var(--color-golden-yellow)]/20"></div>
            <p className="sr-only">Visual composition representing unity and progress</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
