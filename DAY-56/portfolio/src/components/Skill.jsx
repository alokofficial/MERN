import { Code } from "lucide-react";
import Pills from "./Pills";
const Skill = () => {
  const skillSets = [
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "AWS",
    "Git",
    "Github",
  ];
  return (
    <div className="m-4">
      <div className="flex gap-2 mb-3">
        <Code />
        <h1 className="text-xl font-bold">Skills</h1>
      </div>
      <Pills items={skillSets} />
    </div>
  );
};

export default Skill;
