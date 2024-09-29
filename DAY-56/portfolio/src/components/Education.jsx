import { BookOpen } from "lucide-react";
import Section from "./Section";
const Education = () => {
  return (
    <div className="m-4">
      <Section icon={<BookOpen />} sectionTitle="Education">
        <hgroup className="mt-3 text-gray-800 px-7">
          <h2 className=" font-bold">
            Bachelor of Technology In Electronics and Communication Engineering.
          </h2>
          <h3 className="mx-3 text-sm">
            Maulana Abul Kalam Azad University of Technology, 2017-2021.
          </h3>
        </hgroup>
        <hgroup className="mt-3 text-gray-800 px-7">
          <h2 className=" font-bold">Senior secondary education.</h2>
          <h3 className="mx-3 text-sm">Sadar Alam Memorial Secondary School.</h3>
        </hgroup>
      </Section>
    </div>
  );
};

export default Education;
