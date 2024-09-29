import { User } from "lucide-react";
const About = () => {
  return (
    <div className=" m-4">
      <div className="flex gap-2">
        <User />
        <h1 className="text-xl font-bold">About Me</h1>
      </div>
      <p className="mt-3 text-gray-800">
        I'm a passionate full stack developer with 3 years of experience in
        building web applications. I love creating efficient scalable, and
        use-friendly solutions to complex problems.
      </p>
    </div>
  );
};

export default About;
