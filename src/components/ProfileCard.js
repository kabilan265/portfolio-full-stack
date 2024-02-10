import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faMobileScreen,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import Profile from "../../assets/profile.jpg";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
const ProfileCard = () => {
  return (
    <section className="basis-80">
      <div className=" pt-[80px] pb-10 text-center bg-white rounded-md relative">
        {
          <img
            src={Profile}
            className="rounded-lg
 h-[160px] absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"
          />
        }
        <h3 className=" font-heading font-bold text-xl mb-1">
          Kabilan Chandran
        </h3>
        <div className="text-light text-xs opacity-80 mb-3">
          Full Stack Developer
        </div>
        <div className="flex items-center justify-center gap-1 mb-4">
          <a
            href="https://www.linkedin.com/in/kabilan-chandran-a970bb18b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="p-2 px-3 bg-[#F2F7FC]"
          >
            <FontAwesomeIcon icon={faLinkedinIn} color="#0077B5" />
          </a>
          {/*  <div className="p-2 px-3 bg-[#F2F7FC]">
            <FontAwesomeIcon icon={faFacebook} color="#1877F2" />
          </div> */}
          <a
            href="https://github.com/kabilan265"
            target="_blank"
            className="p-2 px-3 bg-[#F2F7FC]"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className="p-4 mx-6 rounded-md bg-[#F2F5F9] text-left">
          <div className="flex items-center justify-start gap-6 mb-4 ">
            <FontAwesomeIcon icon={faMobileScreen} color="#ff9C1A" />
            <div className="">
              <div className="opacity-60 text-xs">Phone</div>
              <div className="font-semibold text-xs">+91 8825746098</div>
            </div>
          </div>
          <div className="flex items-center justify-start  gap-6 mb-4  ">
            <FontAwesomeIcon icon={faEnvelopeOpen} color="#ff9C1A" />
            <div>
              <div className="opacity-60 text-xs">Email</div>
              <div className="font-semibold text-xs">
                kabichandran777@gmail.com
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start mb-6 gap-6  ">
            <div>
              <FontAwesomeIcon icon={faLocationDot} color="#ff9C1A" />
            </div>
            <div>
              <div className="opacity-60 text-xs">Location</div>
              <div className="font-semibold text-xs">Chennai, India</div>
            </div>
          </div>
          <button className="bg-gradient-to-r text-center block m-auto text-sm from-primary to-standout text-white p-2 px-3 rounded-full">
            <FontAwesomeIcon icon={faDownload} color="#fff" />
            <span className="ml-3">Download Resume</span>
          </button>
        </div>
      </div>
    </section>
  );
};
export default ProfileCard;
