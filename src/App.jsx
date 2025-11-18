import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StoryTimeline from './components/StoryTimeline'
import Pillars from './components/Pillars'
import Vision from './components/Vision'
import Documentary from './components/Documentary'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>
        <Hero />
        <StoryTimeline />
        <Pillars />
        <Vision />
        <Documentary />
        <CTA />
      </main>
      <footer className="bg-white border-t border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-black/70 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} URURKA HIIGSIGA DADKA • PEOPLE'S VISION MOVEMENT</p>
          <p className="flex items-center gap-2"><span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--color-light-blue)]"></span> Light theme • Optimized animations</p>
        </div>
      </footer>
    </div>
  )
}

export default App
