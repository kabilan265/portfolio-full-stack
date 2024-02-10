import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <div className="h-full sm:px-10 px-5 py-5 bg-white  mb-5">
      <div>
        <div className="flex items-center gap-10  mb-4">
          <h1 className="text-3xl font-semibold font-heading">CONTACT</h1>
          <div className="h-[2px] w-[200px] bg-gradient-to-r  from-primary to-standout"></div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-7 ">
          <div className=" bg-card rounded-lg p-4 grow">
            <h3 className="mb-3">
              <FontAwesomeIcon icon={faPhone} color="#ff9C1A" width='20px' />
              <span className="ml-[8px] font-semibold">Phone:</span>
            </h3>
            <div className="ml-[28px] text-sm">+91 8825746098</div>
            <div className="ml-[28px] text-sm">+91 9962908042</div>
          </div>
          <div className=" bg-card rounded-lg p-4 grow">
            <h3 className="mb-3">
              <FontAwesomeIcon icon={faEnvelopeOpen} color="#ff9C1A" width='20px' />
              <span className="ml-[8px] font-semibold">Email:</span>
            </h3>
            <div className="ml-[28px] text-sm">kabichandran777@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
