import About from "./components/About";
import Heading from "./components/Heading";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Education from "./components/Education";
import Extracurricular from "./components/Extracurricular";
import Hobbies from "./components/Hobbies";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <div className="bg-gray-200 min-h-screen">
        <div className="bg-white max-w-3xl mx-auto ">
          <Heading />
          <About />
          <Projects />
          <Skill />
          <Education />
          <Hobbies />
          <Extracurricular />
          <Contacts />
        </div>
      </div>
    </>
  );
}

export default App;
