import { Code } from "lucide-react";
import Pills from "./Pills";
import Section from "./Section";

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
      <Section icon={<Code />} sectionTitle="Skills">
      <Pills items={skillSets} />
      </Section>
    </div>
  );
};

export default Skill;
