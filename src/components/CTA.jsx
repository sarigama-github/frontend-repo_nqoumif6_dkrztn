import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="join" className="relative bg-white py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl font-extrabold text-black">
          Join UHD • PVM
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-3 text-black/70">
          Be part of a people-led movement. Share your story, volunteer, or help build policies that matter.
        </motion.p>
        <motion.form initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="mt-8 grid sm:grid-cols-[1fr_auto] gap-3 max-w-xl mx-auto">
          <input type="email" required placeholder="Your email" className="h-12 px-4 rounded-lg ring-1 ring-black/10 bg-white text-black placeholder:text-black/40 focus:outline-none focus:ring-[var(--color-light-blue)]" />
          <button className="h-12 px-6 rounded-lg bg-[var(--color-golden-yellow)] text-black font-semibold ring-1 ring-black/10 shadow hover:shadow-md">Get updates</button>
        </motion.form>
        <p className="mt-4 text-xs text-black/60">We respect your privacy. No spam.</p>
      </div>
    </section>
  )
}
