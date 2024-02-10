import { useState } from "react";
import navItems from "../data/NavbarData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = (props) => {
    
  let [selectedNav, setSelectedNav] = useState("Home");
  console.log('navbar')
  const {handleSection} ={...props}
  function setNav(item) {
    setSelectedNav(item);
    handleSection(item);
  }
 
  return (
    <nav className="self-end absolute top-0 -translate-y-full right-0 hidden sm:block">
      <ul className="px-4 py-2  border-[1px] border-[#666] flex  rounded-lg">
        {navItems.map((item) => {
          return (
            <li key={item.name} className="inline mr-2 last:mr-0">
              <button
                onClick={() => {
                  setNav(item.name);
                }}
                className={`rounded-lg transition-all ease-linear duration-75
                p-4 flex flex-col items-center ${
                  selectedNav === item.name
                    ? "bg-gradient-to-r from-primary to-standout text-white"
                    : "bg-[#E1E8EF]"
                }`}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  color={selectedNav === item.name ? "#fff" : "#666"}
                />
                <span className="text-xs ">{item.name}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default NavBar;
