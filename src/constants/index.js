import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  threejs,

  certificate,
  efz,
  cambridge,

  sun,
  mercury,
  earth,
  venus,

  portfolio,
  bookingsystem,
  chess
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const certificates = [
  {
    title: "Bootcamp Certificate",
    icon: certificate,
  },
  {
    title: "Federal Diploma",
    icon: efz,
  },
  {
    title: "English Certificate",
    icon: cambridge,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full-Stack Bootcamp",
    company_name: "Constructor Learning",
    icon: sun,
    iconBg: "#fde047",
    points: [
      "Frontend Section: HTML, CSS, Javascript, React, Redux.",
      "Backend & DevOps Section: Python, Django, DB, Docker.",
      "Frontend Assignment: Recreated a given Template from Figma.",
      "Practical Assignment: Worked in a team to build a Full-Stack application.",
      "Final Project: Putting the acquired knowledge together in a Full-Stack group project.",
    ],
  },
  {
    title: "Operations",
    company_name: "PostFinance",
    icon: mercury,
    iconBg: "#fde047",
    points: [
      "Worked in the back office, specializing in private clients, where I provided administrative support and customer service.",
      "Handled various tasks related to customer service, including account opening, management, and maintenance.",
      "Engaged in telephone-based customer service, addressing inquiries and providing assistance to clients.",
    ],
  },
  {
    title: "Apprenticeship",
    company_name: "Lindt & Sprüngli (Schweiz) AG",
    icon: venus,
    iconBg: "#fde047",
    points: [
      "International Distributors ",
      "Human Resources",
      "Marketing Product Management",
      "Financial Accounting",
      "Key Account Management",
      "Customer Service Department",
      "Purchasing Department",
      "Trade Marketing",
      "Sales",
    ],
  },
  {
    title: "More...",
    company_name: "Foundation OrphanHealthcare · Coop · Planzer · Keller Früchte + Gemüse AG ",
    icon: earth,
    iconBg: "#fde047",
    points: [
      "Foundation: As an Executive Assistant, I served in the field of service and administration, undertaking event planning responsibilities and carrying out various administrative tasks.",
      "Coop: I gained experience working both at the cash register and managing product displays within the store.",
      "Planzer & Keller: I actively participated in the delivery, preparation, and organization of freight and contributed to the smooth operation of the warehouse.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portfolio Webpage",
    description:
      "In this project, I aimed to improve my existing skills while also learning something new. To accomplish this, I enrolled in an online course on THREE.js and utilized TailwindCSS for the first time.",
    tags: [
      {
        name: "react",
        color: "yellow-text-gradient",
      },
      {
        name: "threejs",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwind",
        color: "yellow-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/FloWinkler/portfolio-3d",
  },
  {
    name: "Booking System",
    description:
      "As our final bootcamp-project we created an efficient mobile-first booking management system. It streamlined processes, eliminating double bookings, enabling easy online booking and optimizing staff workload.",
    tags: [
      {
        name: "js",
        color: "yellow-text-gradient",
      },
      {
        name: "react",
        color: "yellow-text-gradient",
      },
      {
        name: "python",
        color: "yellow-text-gradient",
      },
      {
        name: "django",
        color: "yellow-text-gradient",
      },
      {
        name: "docker",
        color: "yellow-text-gradient",
      },
    ],
    image: bookingsystem,
    source_code_link: "https://github.com/FloWinkler/final-project-bootcamp",
  },
  {
    name: "Chess Game",
    description:
      "Without using any pre-made tools or guidelines, I'm creating a Chess Game. Next steps: Adding a function to bring back pieces from the graveyard, adding a restart button, and then incorporating the movement rules.",
    tags: [
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "html",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "yellow-text-gradient",
      },
    ],
    image: chess,
    source_code_link: "https://github.com/FloWinkler/chess-game",
  },
];

export { certificates, technologies, experiences, testimonials, projects };


// 1101 775