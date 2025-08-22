import AboutSection from "../../components/AboutSection"
import { getProjects } from "../../lib/projects"

export const metadata = {
  title: 'À propos – Portfolio'
}

export default function AProposPage() {
  const projects = getProjects();

  return (
    <div className="prose dark:prose-invert max-w-none mt-28">
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
          { label: 'Projets complétés', value: projects.length.toString() + '+' },
          // { label: 'Secteurs couverts', value: '25+' },
          { label: "Années d'expérience", value: '3+' },
        ]}
      />
    </div>
  )
}
