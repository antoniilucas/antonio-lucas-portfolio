import { useState } from 'react'
import { ReactLenis } from 'lenis/react'
import Loader from '@/components/Loader/Loader'
import PageTransition from '@/components/PageTransition/PageTransition'
import Navbar from '@/components/Navbar/Navbar'
import CustomCursor from '@/components/CustomCursor/CustomCursor'
import Background from '@/components/Background/Background'
import Footer from '@/components/Footer'
import Hero from '@/sections/Hero/Hero'
import About from '@/sections/About/About'
import Projects from '@/sections/Projects/Projects'
import Stack from '@/sections/Stack/Stack'
import Experience from '@/sections/Experience/Experience'
import Contact from '@/sections/Contact/Contact'
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery'

function App() {
  const [loaded, setLoaded] = useState(false)
  const reducedMotion = usePrefersReducedMotion()

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: !reducedMotion,
      }}
    >
      <Loader onDone={() => setLoaded(true)} />

      <div className="grain-overlay" aria-hidden="true" />
      <CustomCursor />

      {loaded && (
        <PageTransition>
          <Background />
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />
            <Projects />
            <Stack />
            <Experience />
            <Contact />
          </main>
          <div className="relative z-10">
            <Footer />
          </div>
        </PageTransition>
      )}
    </ReactLenis>
  )
}

export default App
