import Css from "./assets/Images/css.webp";
import Figma from "./assets/Images/Figma.webp";
import Git from "./assets/Images/Git.webp";
import GitHub from "./assets/Images/github.webp";
import Html from "./assets/Images/html.webp";
import Js from "./assets/Images/javascript.webp";
import Mongo from "./assets/Images/mongo.webp";
import NextJs from "./assets/Images/nextjs.webp";
import Node from "./assets/Images/node.webp";
import ReactImg from "./assets/Images/react.webp";
import Tailwind from "./assets/Images/tailwind.webp";

import BankApp from "./assets/Images/BankAppDemo.webp";
import Guess from "./assets/Images/Guess.webp";
import vetTeams from "./assets/Images/Vet-teams.webp";

export const DUMMY_SKILLS = [
  { title: "HTML", image: `${Html}` },
  { title: "CSS", image: `${Css}` },
  { title: "JavaScript", image: `${Js}` },
  { title: "Figma", image: `${Figma}` },
  { title: "Tailwind", image: `${Tailwind}` },
  { title: "React", image: `${ReactImg}` },
  { title: "NextJS", image: `${NextJs}` },
  { title: "NodeJS", image: `${Node}` },
  { title: "MongoDB", image: `${Mongo}` },
  { title: "Git", image: `${Git}` },
  { title: "Git-Hub", image: `${GitHub}` },
];

export const DUMMY_WORKS = [
  {
    image: `${vetTeams}`,
    gitHub:
      " https://github.com/gabrielcontrerasv/top-gun-javascript-project.git",
    website: "https://tglpet.vercel.app/",
    center: false,
  },
  {
    image: `${BankApp}`,
    gitHub: "https://github.com/Nicolas-pc-dev/Guess-My-Number",
    website: "https://npc-bankappdemo.netlify.app/",
    center: true,
  },
  {
    image: `${Guess}`,
    gitHub: "https://github.com/Nicolas-pc-dev/Guess-My-Number",
    website: "https://nicolasp-dev.github.io/Guess-My-Number/",
    center: true,
  },
];
