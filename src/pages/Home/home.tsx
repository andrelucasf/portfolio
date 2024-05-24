import About from "../../components/About/about";
import Experience from "../../components/Experience/experience";
import Skills from "../../components/Skills/skills";
import Education from "../../components/Education/education";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-left-container">
        <About />
      </div>

      <div className="home-right-container">
        <Skills />
        <Experience />
        <Education />
      </div>
    </div>
  );
}

export default Home;
