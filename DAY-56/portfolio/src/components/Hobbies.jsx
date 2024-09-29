import { Heart } from "lucide-react";
import Section from "./Section";
const Hobbies = () => {
  const hobbies = [
    "Photography",
    "Cooking",
    "Traveling",
    "Reading",
    "Gaming",
    "Music",
  ];
  return (
    <div className="m-4">
      <Section icon={<Heart />} sectionTitle="Hobbies & Interests">
        <ul className="list-disc list-inside m-2">
          {hobbies.map((hobby) => (
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
};

export default Hobbies;
