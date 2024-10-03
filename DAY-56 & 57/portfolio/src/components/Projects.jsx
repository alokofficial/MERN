import { Briefcase } from "lucide-react";
import Section from "./Section";
import Project from "./Project";
const Projects = () => {
  return (
    <div className="m-4">
      <Section icon={<Briefcase />} sectionTitle="Projects">
      <div className="bg-gray-100 rounded-sm shadow-lg py-1 m-3">
        <Project projectTitle="E-Commerce Platform" details="Developed a fully-functional e-commerce plateform with authentication, product management, and payment integration." technologies={["React", "Node.js", "MongoDB","Tailwindcss","Stripe"]}/>
      </div>
      <div className="bg-gray-100 rounded-sm shadow-lg py-1 m-3">
        <Project projectTitle="Social Media Dashboard" details="Created a responsive dashboard for social media analytics, featuring real-time data visualizations and reporting." technologies={["Vue.js", "D3.js", "Express","Tailwindcss","PostgreSQL"]}/>
      </div>
      </Section>
    </div>
  );
};

export default Projects;
