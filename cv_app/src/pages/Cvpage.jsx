import { useState } from "react";
import General from "../components/General";
import Educational from "../components/Educational";
import Experience from "../components/Experience";
import Outputcv from "../components/Ouputcv";

function Cvpage() {
  const [general, setGeneral] = useState({ name: "", email: "", phone: "" });
  const [education, setEducation] = useState({
    school: "",
    course: "",
    styear: "",
    endyear: "",
  });
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    styear: "",
    endyear: "",
  });

  return (
    <>
      <div className="mt-24 flex gap-10 p-6 min-h-screen ">
        <div className="w-3/5 bg-white p-6 rounded-lg shadow-lg">
          <Outputcv
            General={general}
            Educational={education}
            Experience={experience}
          />
        </div>
        <div className="w-2/5 p-6 rounded-lg ">
          <General general={general} setGeneral={setGeneral} />
          <br />
          <Educational education={education} setEducation={setEducation} />
          <br />
          <Experience experience={experience} setExperience={setExperience} />
        </div>
      </div>
    </>
  );
}

export default Cvpage;
