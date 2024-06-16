import "../styles/Projects.css";
import Nav from "./Nav";
import Project from "./Project";
import projectsJSON from "../projects.json";
import hellhouse from "../assets/hellhouse.png";
import hellhouseDetails from "../assets/hellhouse-details.png";
import toneToken from "../assets/tone-token.png";
import toneTokenDetails from "../assets/tone-token-details.png";
import cvApplication from "../assets/cv-application.png";
import cvApplicationDetails from "../assets/cv-application-details.png";

function Projects() {
  return (
    <main className="Projects">
      <Nav />
      <header>
        <h1>Projects</h1>
        <p>(Github and Live Preview links will open in a new tab)</p>
      </header>
      <section className="project-container">
      <Project
          title={projectsJSON.hellhouse.title}
          img={hellhouse}
          github={projectsJSON.hellhouse.github}
          live={projectsJSON.hellhouse.live}
          details={projectsJSON.hellhouse.details}
          detailsImg={hellhouseDetails}
        />
        <Project
          title={projectsJSON.toneToken.title}
          img={toneToken}
          github={projectsJSON.toneToken.github}
          live={projectsJSON.toneToken.live}
          details={projectsJSON.toneToken.details}
          detailsImg={toneTokenDetails}
        />
        <Project
          title={projectsJSON.cvApplication.title}
          img={cvApplication}
          github={projectsJSON.cvApplication.github}
          live={projectsJSON.cvApplication.live}
          details={projectsJSON.cvApplication.details}
          detailsImg={cvApplicationDetails}
        />
      </section>
    </main>
  );
}

export default Projects;
