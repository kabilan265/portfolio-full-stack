import { useState } from "react";
import AboutMe from "./AboutMe";
import NavBar from "./NavBar";
import ProfileCard from "./ProfileCard";
import Resume from "./Resume";
import Contact from "./Contact";
import Projects from "./Projects";

const Body = () => {
  const [section, setSection] = useState("Home");
  function renderSection() {
    let render;
    switch (section) {
      case "Home": {
        render = AboutMe();
        break;
      }
      case "Resume": {
        render = Resume();
        break;
      }
      case "Contact": {
        render = Contact();
        break;
      }
      case "Projects": {
        render = Projects();
        break;
      }
      default: {
        render = AboutMe();
        break;
      }
    }
    return render;
  }
  return (
    <main className="flex flex-col sm:flex-row sm:justify-start   gap-5">
      <ProfileCard />
      <section className="sm:px-8  pb-10  rounded-md relative grow ">
        <NavBar
          handleSection={(navItem) => {
            setSection(navItem);
          }}
        />
        <div className="hidden sm:block">
        {renderSection()}
        </div>
        <div className="block sm:hidden">
          <AboutMe className='mb-5' />
          <Resume className='mb-5' />
          <Projects className='mb-5' />
          <Contact />
        </div>
      </section>
    </main>
  );
};
export default Body;
