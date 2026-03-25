import { Hero } from "@/components/hero"
import { TechMarquee } from "@/components/tech-marquee"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}
