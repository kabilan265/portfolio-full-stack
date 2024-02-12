import Swiggy from "../../assets/swiggy.png";
import Instagram from "../../assets/instagram.jpg";

const projects = [
  {
    name: "Swiggy Clone",
    techStack: ["React.js", "Tailwind", "netlify"],
    url: "https://exquisite-donut-d0946e.netlify.app/",
    img: Swiggy,
    desc: "Uses swiggy api to replicate the UI with list of restuarants, restuarant detail, search and add to cart functionality",
    code: "https://github.com/kabilan265/swiggy-clone-react",
  },
  {
    name: "Instagram Clone",
    img: Instagram,
    techStack: ["Vue js", "Express.js", "MongoDB", "Socket.io", "Tailwind"],
    url: "https://spiffy-torte-590262.netlify.app/#/login",
    desc: "Developed a chat application from scratch, incorporating features such as signup, login, a chat system, image and profile picture uploading, and implemented JWT tokens for authentication",
    code: "https://github.com/kabilan265/Instagram-fe-vue",
  },
];

const FEskills = ["React", "Vuejs", "Javascript", "Css", "Tailwind", "Jest"];
const otherSkills = ["Nodejs", "Expressjs", "MongoDB", "Azure Devops"];
export { projects, FEskills, otherSkills };
