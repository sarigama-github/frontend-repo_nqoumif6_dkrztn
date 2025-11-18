import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#story', label: 'Story' },
  { href: '#pillars', label: 'Pillars' },
  { href: '#vision', label: 'Vision' },
  { href: '#documentary', label: 'Documentary' },
  { href: '#join', label: 'Join' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[var(--color-light-blue)] to-[var(--color-golden-yellow)] shadow ring-1 ring-black/5"></div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-black tracking-wide">URURKA HIIGSIGA DADKA</p>
            <p className="text-xs text-black/70">PEOPLE'S VISION MOVEMENT</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-black/80 hover:text-black transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <button aria-label="Menu" className="md:hidden p-2 rounded-md border border-black/10" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3 grid gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="py-2 text-sm font-medium text-black/80 hover:text-black" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
