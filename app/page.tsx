import AboutSection from "../components/AboutSection"
import ContactSection from "../components/ContactSection"
import { Hero } from "../components/Hero"
import { ProjectGrid } from "../components/ProjectGrid"
import { getProjects } from "../lib/projects"

export default function Page() {
  const projects = getProjects()

  return (
    <div className="space-y-12 lg:space-y-20">
      <Hero />
      <section className="space-y-12">
        <h2 className="text-lg md:text-2xl xl:text-4xl font-bold">Projets récents</h2>
        <ProjectGrid projects={projects.slice(0,3)} />
      </section>

      <AboutSection
        name="El'Ghaleb Saïd Ali Mohamed"
        bio="
          Je suis développeur web front-end, spécialisé dans la création d’applications modernes et performantes avec React et Next.js. Fort de 3 années d’expérience, j’ai participé à des projets variés, allant de plateformes e-commerce à des systèmes temps réel, en intégrant des technologies comme Prisma, Zustand, TailwindCSS, ShadCN UI et Socket.IO.

          Passionné par le design fonctionnel et l’expérience utilisateur, j’aime concevoir des interfaces fluides, animées et intuitives grâce à des outils comme Framer Motion. J’accorde une importance particulière à la qualité du code, à la scalabilité des applications et à la collaboration au sein d’équipes dynamiques.

          Mon objectif est de continuer à progresser dans des projets innovants, tout en apportant des solutions efficaces, élégantes et adaptées aux besoins des utilisateurs.
        "
        role="Développeur React/Next certifié"
        phone="(+261) 32 39 869 63"
        email="saidalighaleb007@gmail.com"
        photoUrl="/me_diplome.jpg"
        stats={[
          { label: 'Projets complétés', value: '20+' },
          // { label: 'Secteurs couverts', value: '25+' },
          { label: "Années d'expérience", value: '3+' },
        ]}
      />

      <ContactSection />
    </div>
  )
}
