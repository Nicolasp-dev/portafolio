import Tailwind from "./assets/Images/tailwind.png";
import Css from "./assets/Images/css.png";
import GitHub from "./assets/Images/github.png";
import Html from "./assets/Images/html.png";
import Js from "./assets/Images/javascript.png";
import Mongo from "./assets/Images/mongo.png";
import Node from "./assets/Images/node.png";
import ReactImg from "./assets/Images/react.png";
import NextJs from "./assets/Images/nextjs.png";
import Figma from "./assets/Images/Figma.png";
import Git from "./assets/Images/Git.png";

import vetTeams from "./assets/Images/Vet-teams.png";
import Guess from "./assets/Images/Guess.png";
import BankApp from "./assets/Images/BankAppDemo.png";

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
