import "../styles/Projects.css";
import Nav from "./Nav";
import Project from "./Project";
import weatherApp from "../assets/weather-app.png";
import memoryCard from "../assets/memory-card-game.png";

function Projects() {
  return (
    <main className="Projects">
      <Nav />
      <header>
        <h1>Projects</h1>
      </header>
      <section className="project-container">
        <Project title="Weather App" img={weatherApp} github="https://github.com/TJDRZ/weather-app" live="https://tjdrz.github.io/weather-app/" details="" />
        <Project title="Memory Card Game" img={memoryCard} github="https://github.com/TJDRZ/memory-card-game" live="https://tjdrz.github.io/memory-card-game/" details="" />
      </section>
    </main>
  );
}

export default Projects;
