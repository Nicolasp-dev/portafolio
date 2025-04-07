import { Images } from "./assets/Images/index.ts";

export const DUMMY_SKILLS = [
  { title: "Angular", image: Images.Angular },
  { title: "Typescript", image: Images.Typescript },
  { title: "Ionic", image: Images.Ionic },
  { title: "React", image: Images.ReactImg },
  { title: "JavaScript", image: Images.Js },
  { title: "HTML", image: Images.Html },
  { title: "CSS", image: Images.Css },
  { title: "Tailwind", image: Images.Tailwind },
  { title: "Material UI", image: Images.MaterialUI },
  { title: "Kotlin", image: Images.Kotlin },
  { title: "Git", image: Images.Git },
  { title: "Git-Hub", image: Images.GitHub },
];

export const DUMMY_WORKS = [
  {
    image: Images.VetTeams,
    gitHub: "https://github.com/Nicolasp-dev/VetTeams",
    website: "https://vet-teams.vercel.app/",
    center: false,
  },
  {
    image: Images.SophosApp,
    gitHub: "https://github.com/Nicolasp-dev/Sophos-App",
    website: "https://watch.wave.video/Uz0pvBV66IfMieHg",
    center: true,
  },
  {
    image: Images.Guess,
    gitHub: "https://github.com/Nicolas-pc-dev/Guess-My-Number",
    website: "https://nicolasp-dev.github.io/Guess-My-Number/",
    center: true,
  },
];

export const experiences = {
  "es-ES": [
    {
      title: "Desarrollador Frontend & Móvil",
      company: "Accenture – Cliente: Nequi Colombia",
      date: "Abril 2024 – Presente",
      tasks: [
        "Desarrollo de aplicaciones internas aplicando principios de Clean Architecture.",
        "Construcción de funcionalidades móviles escalables con Angular e Ionic.",
        "Aseguramiento de calidad mediante testing unitario con Jest.",
        "Participación activa en ceremonias ágiles (Scrum).",
      ],
      tech: ["Angular", "Ionic", "Jest"],
    },
    {
      title: "Desarrollador Frontend",
      company: "Suti, IT Services",
      date: "Abril 2023 – Abril 2024",
      tasks: [
        "Traducción de diseños Figma a interfaces funcionales.",
        "Implementación de flujos de datos entre componentes.",
        "Mantenimiento y mejora del código para mayor rendimiento.",
      ],
      tech: ["Angular", "Jest"],
    },
  ],
  "en-US": [
    {
      title: "Frontend & Mobile Developer",
      company: "Accenture – Client: Nequi Colombia",
      date: "April 2024 – Present",
      tasks: [
        "Developed internal web apps applying Clean Architecture principles.",
        "Built scalable mobile features using Angular and Ionic.",
        "Ensured code quality with unit testing using Jest.",
        "Actively participated in Agile ceremonies.",
      ],
      tech: ["Angular", "Ionic", "Jest"],
    },
    {
      title: "Frontend Developer",
      company: "Suti, IT Services",
      date: "April 2023 – April 2024",
      tasks: [
        "Translated Figma designs into functional UIs.",
        "Implemented data flows between components.",
        "Maintained and improved code for better performance.",
      ],
      tech: ["Angular", "Jest"],
    },
  ],
};
