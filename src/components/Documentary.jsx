import { motion } from 'framer-motion'

const reels = [
  { title: 'Day in the Market', desc: 'Listening to traders and families about daily challenges.' },
  { title: 'Youth Voices', desc: 'Conversations with students, dreamers, and creators.' },
  { title: 'Farmers of Tomorrow', desc: 'Innovation and tradition growing side by side.' },
  { title: 'Mothers of Dignity', desc: 'Healthcare and safety through their eyes.' },
]

export default function Documentary() {
  return (
    <section id="documentary" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-extrabold text-black">The Documentary</h2>
            <p className="mt-2 text-black/70 max-w-2xl">A living archive of stories from across the nation — moments that shape policy and purpose.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map((r, i) => (
            <motion.div key={r.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }} className="group cursor-pointer rounded-2xl overflow-hidden ring-1 ring-black/10 bg-white shadow hover:shadow-lg">
              <div className="aspect-[3/4] bg-gradient-to-br from-[var(--color-light-blue)]/20 to-[var(--color-golden-yellow)]/30"></div>
              <div className="p-4">
                <p className="text-sm font-semibold text-black">{r.title}</p>
                <p className="text-sm text-black/70">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
