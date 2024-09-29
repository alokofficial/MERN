import { Github, Globe, Linkedin, Twitter } from "lucide-react";
import Section from "./Section";
const Contacts = () => {
  return (
    <div className="m-4">
      <Section icon={<Globe />} sectionTitle="Contact & Social Media">
        <div className="m-3">
          <h3>Email: aloknh31@gmail.com</h3>
          <h3>Phone: (+91) 7903737445</h3>
        </div>
        <div className="m-3 leading-7">
          <a
            className="flex gap-2 visited:text-blue-700"
            href="https://www.linkedin.com/in/alokofficial/"
          >
            <Linkedin />
            LinkedIn
          </a>

          <a
            className="flex gap-2 visited:text-blue-700"
            href="https://github.com/alokofficial"
          >
            <Github />
            Github
          </a>

          <a
            className="flex gap-2 visited:text-blue-700"
            href="https://twitter.com"
          >
            <Twitter />
            Twitter
          </a>
        </div>
      </Section>
    </div>
  );
};

export default Contacts;
