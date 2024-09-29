import { User } from "lucide-react";
import Section from "./Section";
const About = () => {
  return (
    <div className=" m-4">
      <Section icon={<User />} sectionTitle="About Me">
        <p className="mt-3 text-gray-800">
          I'm a passionate full stack developer with 3 years of experience in
          building web applications. I love creating efficient scalable, and
          use-friendly solutions to complex problems.
        </p>
      </Section>
    </div>
  );
};

export default About;
