import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] overflow-hidden bg-white">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-40 w-[60vw] h-[60vw] rounded-full bg-[var(--color-light-blue)]/15 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[55vw] h-[55vw] rounded-full bg-[var(--color-golden-yellow)]/20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-black/60 bg-black/5 rounded-full px-3 py-1 ring-1 ring-black/10">
            UHD • PVM
            <span className="h-1 w-1 rounded-full bg-[var(--color-light-blue)]"></span>
            People's Vision Movement
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
            A movement shaped by the people, for the people
          </h1>
          <p className="mt-5 text-lg text-black/70 max-w-xl">
            URURKA HIIGSIGA DADKA (UHD) — PEOPLE'S VISION MOVEMENT (PVM) is a citizen-driven journey towards dignity, opportunity, and shared prosperity.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <a href="#story" className="px-5 py-3 rounded-lg bg-[var(--color-light-blue)] text-white font-semibold shadow hover:shadow-md transition-shadow">Begin the story</a>
            <a href="#join" className="px-5 py-3 rounded-lg border border-black/10 text-black font-semibold bg-white hover:bg-black/5">Join us</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-[var(--color-light-blue)]/20 to-[var(--color-golden-yellow)]/30 ring-1 ring-black/10 overflow-hidden">
            {/* Cinematic card montage */}
            <div className="w-full h-full grid grid-cols-3 gap-2 p-2">
              {Array.from({ length: 9 }).map((_, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-lg bg-white/70 backdrop-blur shadow-sm ring-1 ring-black/5"></motion.div>
              ))}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="absolute -bottom-5 left-6 bg-white rounded-xl px-4 py-3 shadow ring-1 ring-black/10">
            <p className="text-sm font-medium text-black/80">Storytelling • Documentary • Community</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
