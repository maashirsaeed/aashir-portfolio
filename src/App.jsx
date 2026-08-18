import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { CurrentRole } from '@/components/sections/CurrentRole'
import { Experience } from '@/components/sections/Experience'
import { Expertise } from '@/components/sections/Expertise'
import { Impact } from '@/components/sections/Impact'
import { Engagement } from '@/components/sections/Engagement'
import { Philosophy } from '@/components/sections/Philosophy'
import { Education } from '@/components/sections/Education'
import { Testimonials } from '@/components/sections/Testimonials'
import { Contact } from '@/components/sections/Contact'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <CurrentRole />
        <Experience />
        <Expertise />
        <Impact />
        <Engagement />
        <Philosophy />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
