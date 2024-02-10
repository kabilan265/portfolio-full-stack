import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { FEskills, otherSkills } from "../utils/Constants";
const Resume = () => {
  return (
    <div className="h-full sm:px-10 px-5 py-5 bg-white  mb-5">
      <div>
        <div className="flex items-center gap-10  mb-6">
          <h1 className="text-3xl font-semibold font-heading">RESUME</h1>
          <div className="h-[2px] w-[200px] bg-gradient-to-r  from-primary to-standout"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-7 gap-4 mb-10 sm:mb-6">
        <div className="grow">
          <h2 className="sm:mb-4 mb-4 text-lg font-semibold">
            <FontAwesomeIcon icon={faGraduationCap} color="#ff9C1A" />
            <span className="ml-3">Education:</span>
          </h2>
          <div className=" bg-[#FFE3BF] rounded-lg p-4 ">
            <span className="text-[#1A1003] text-sm block mb-2">2017-2021</span>
            <span className="block text-base font-semibold mb-2">BE (CSE)</span>
            <span className="block text-sm font-medium">
              Panimalar institute of technology
            </span>
          </div>
        </div>
        <div className="grow">
          <h2 className="sm:mb-4 mb-4 text-lg font-semibold">
            <FontAwesomeIcon icon={faBriefcase} color="#ff9C1A" />
            <span className="ml-3">Experience:</span>
          </h2>
          <div className=" bg-[#FFE3BF] rounded-lg p-4 ">
            <span className="text-[#1A1003] text-sm block mb-2">
              2021-present
            </span>
            <span className="block text-base font-semibold mb-2">
              Frontend Developer
            </span>
            <span className="block text-sm font-medium">
              Tata consultancy services
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-7  gap-4 mb-10 sm:mb-0">
        <div>
          <h3 className="sm:mb-2 mb-4 text-lg font-semibold">FE skills:</h3>
          <div className="flex flex-wrap gap-3 ">
            {FEskills.map((skill) => {
              return (
                <span
                  key={skill}
                  className="p-2 text-sm bg-[#E1E8EF] rounded-md"
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="sm:mb-2 mb-4  text-lg font-semibold">Other skills:</h3>
          <div className="flex flex-wrap gap-3 ">
            {otherSkills.map((skill) => {
              return (
                <span
                  key={skill}
                  className="p-2 text-sm bg-[#E1E8EF] rounded-md"
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
