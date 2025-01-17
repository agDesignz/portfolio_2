import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa";

const TECH_SKILLS = [
  {
    name: "Node JS",
    icon: FaNodeJs,
    fill: "text-green-500",
  },
  {
    name: "React",
    icon: FaReact,
    fill: "text-cyan-400",
  },
  {
    name: "PostgreSQL",
    icon: BiLogoPostgresql,
    fill: "text-sky-700",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    fill: "text-green-500",
  },
  {
    name: "Tailwind",
    icon: RiTailwindCssFill,
    fill: "text-sky-400",
  },
  {
    name: "Github",
    icon: FaGithub,
    fill: "text-neutral-50",
  },
  {
    name: "Docker",
    icon: FaDocker,
    fill: "text-blue-500",
  },
  {
    name: "WordPress",
    icon: FaWordpressSimple,
    fill: "text-cyan-700",
  },
];

export default TECH_SKILLS;
