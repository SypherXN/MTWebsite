import { writeFileSync, mkdirSync, readFileSync, readdirSync, copyFileSync, existsSync } from "fs";
import { join } from "path";

const W = (p, c) => { mkdirSync(join(p, ".."), { recursive: true }); writeFileSync(p, c, "utf8"); };

// --- data ---
W("src/data/site.json", JSON.stringify({
  name: "Matthew Tran",
  title: "Game Developer",
  subtitle: "M.S. Computer Science @ USC",
  tagline: "Building multiplayer experiences that bring people together.",
  description: "Game developer passionate about creating games that bring people together.",
  image: "/images/matthew-tran.png",
  email: "matthewgtran@gmail.com",
  github: "https://github.com/SypherXN",
  linkedin: "https://www.linkedin.com/in/mgtran"
}, null, 2));

W("src/data/now.json", JSON.stringify({
  updated: "2026-05-26",
  items: [
    "M.S. Computer Science (Game Development) at USC",
    "QA Lead on B.L.U.E. (USC AGP 2025)",
    "Game Development Intern at Boltz Entertainment"
  ]
}, null, 2));

const timeline = [
  { title: "QA Lead/Engineer - USC Games (B.L.U.E.)", from: "2025", to: "present", description: "As QA Lead for a 20+ member student game project, I directed a team of three, standardizing testing procedures and workflows to ensure consistent quality. I generated detailed QA reports and partnered closely with engineers to resolve bugs impacting user experience and game performance. Additionally, I trained new QA members and coordinated testing schedules using Perforce, Git, and ClickUp, successfully keeping development milestones on track." },
  { title: "Game Development Intern - Boltz Entertainment", from: "2025", to: "present", description: "During my internship, I developed and launched a custom emote system to enhance player interactions within a multiplayer environment, leveraging Unity's Remote Procedure Call (RPC) system to deliver a seamless experience. I optimized asset usage and streamlined the build process, successfully reducing the total game size by over 60%. Additionally, I redesigned core character abilities, introducing new strategic layers to gameplay and elevating the overall player experience." },
  { title: "M.S. in Computer Science (Game Development) - University of Southern California", from: "2024", to: "present", description: "Pursuing a master's degree in Computer Science with a specialization in game development at USC. Contributed to projects from multiplayer spaceship combat to AR fly-hunting games, focusing on innovative gameplay with Unity, Unreal, and industry-standard tools." },
  { title: "B.S. in Computer Engineering - University of California, Santa Barbara", from: "2019", to: "2023", description: "Bachelor's in Computer Engineering with coursework in AI, algorithms, databases, and networks. Collaborated on drone automation, a 3D space roguelike, and an action RPG with mind control as its core mechanic." }
];
W("src/data/timeline.json", JSON.stringify(timeline, null, 2));

const skills = ["Unity","Unreal","C#","C++","Java","Python","GitHub","Perforce","Problem Solving","Leadership","Collaboration","MetaXR","Netcode","WebGL"];
W("src/data/skills.json", JSON.stringify(skills, null, 2));

console.log("data files ok");
