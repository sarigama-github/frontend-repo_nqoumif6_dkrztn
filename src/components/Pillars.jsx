import { motion } from 'framer-motion'
import { Shield, HeartHandshake, BookOpen, Leaf, Briefcase } from 'lucide-react'

const pillars = [
  { icon: Shield, title: 'Good Governance', text: 'Transparent institutions, rule of law, and public trust.' },
  { icon: BookOpen, title: 'Education for All', text: 'Quality learning that unlocks potential for every child.' },
  { icon: Briefcase, title: 'Opportunity & Jobs', text: 'A thriving economy that rewards work and innovation.' },
  { icon: HeartHandshake, title: 'Social Dignity', text: 'Healthcare, safety nets, and respect for every citizen.' },
  { icon: Leaf, title: 'Sustainable Future', text: 'Protecting our environment and building resilient communities.' },
]

export default function Pillars() {
  return (
    <section id="pillars" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-extrabold text-black">Our Pillars</h2>
            <p className="mt-2 text-black/70 max-w-2xl">The values and priorities that guide UHD • PVM — each pillar a commitment to the people.</p>
          </div>
          <div className="hidden md:block text-sm text-black/60">Light theme • Performance-focused animations</div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 16, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }} className="group rounded-2xl bg-white ring-1 ring-black/10 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[var(--color-light-blue)]/10 text-[var(--color-light-blue)] ring-1 ring-black/5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-black">{title}</h3>
              </div>
              <p className="mt-3 text-black/70">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
