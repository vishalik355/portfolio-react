import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  const heroData = {
    name: "Vishali",
    title: "Frontend Developer (React.js) | Scalable Web Applications | 4+ Years Experience",
    subtitle: "Open to Full-time Roles | Immediate Joiner",
    desc: "Frontend Developer with 4+ years of experience building fast, responsive, and scalable web applications using React.js, JavaScript, HTML, and CSS. Focused on performance optimization, clean code practices, and delivering seamless user experiences.",
  };

  const aboutData = {
    heading: "I Build",
    highlight: "Modern Web Applications",
    desc: "Frontend Developer with 4+ years of experience building responsive and high-performance web applications. Skilled in React.js, JavaScript, HTML, CSS, Bootstrap, and Tailwind CSS. I specialize in API integration, dynamic UI development, and creating scalable frontend solutions with clean and maintainable code.",
    stats: [
      { value: "30+", label: "Projects Completed" },
      { value: "4+", label: "Years Experience" },
      { value: "100%", label: "Client Satisfaction" },
    ],
  };
  const servicesData = {
    tag: "💻 Frontend Development",
    title: "Services I Provide",
    services: [
      {
        title: "React.js Development",
        desc: "Building dynamic and scalable web applications using React with modern frontend architecture.",
      },
      {
        title: "Frontend Development",
        desc: "Responsive and high-performance websites using HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS.",
      },
      {
        title: "API Integration",
        desc: "Integrating REST APIs and handling dynamic data using React hooks like useState and useEffect.",
      },
      {
        title: "Website Optimization",
        desc: "Improving performance, responsiveness, and overall user experience of web applications.",
      },
    ],
  };
  const contactData = {
    title: "Let's Work Together",
    desc: "Looking for a Frontend Developer with strong experience in React and modern web technologies? Let’s build fast, scalable, and user-friendly web applications together.",
    email: "vishalik355@gmail.com",
  };
  return (
    <>
      <Navbar menuItems={menuItems} />
      <Home data={heroData} />
      <About data={aboutData} />
      <Services data={servicesData} />
      <Projects />
      <Contact data={contactData} />
    </>
  );
}

export default App;
