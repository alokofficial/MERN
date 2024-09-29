import { Award } from "lucide-react";
import Section from "./Section";
const Extracurricular = () => {
  const items = [
    "Volunteer at local coding bootcamp for underprivileged youth.",
    "Developed 4 projects using React, Node.js, and MongoDB.",
    "Co-organised 3 hackathons.",
  ]
  return (
    <div className="m-4">
      <Section icon={<Award />} sectionTitle="Extracurricular Activities">
      <ul className="list-disc list-inside m-2">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

      </Section>
    </div>
  );
};

export default Extracurricular;
