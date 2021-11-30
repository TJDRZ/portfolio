import "../styles/Projects.css";
import Nav from "./Nav";
import Project from "./Project";
import projectsJSON from "../projects.json";
import toneToken from "../assets/tone-token.png";
import toneTokenDetails from "../assets/tone-token-details.png";
import weatherApp from "../assets/weather-app.png";
import weatherAppDetails from "../assets/weather-app-details.png";
import memoryCard from "../assets/memory-card-game.png";
import memoryCardDetails from "../assets/memory-card-game-details.png";
import htmlForms from "../assets/html-forms.png";
import htmlFormsDetails from "../assets/html-forms-details.png";
import shoppingCart from "../assets/shopping-cart.png";
import shoppingCartDetails from "../assets/shopping-cart-details.png";
import todoList from "../assets/todo-list.png";
import todoListDetails from "../assets/todo-list-details.png";
import cvApplication from "../assets/cv-application.png";
import cvApplicationDetails from "../assets/cv-application-details.png";
import portfolio from "../assets/portfolio.png";
import portfolioDetails from "../assets/portfolio-details.png";

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
          title={projectsJSON.toneToken.title}
          img={toneToken}
          github={projectsJSON.toneToken.github}
          live={projectsJSON.toneToken.live}
          details={projectsJSON.toneToken.details}
          detailsImg={toneTokenDetails}
        />
        <Project
          title={projectsJSON.weatherApp.title}
          img={weatherApp}
          github={projectsJSON.weatherApp.github}
          live={projectsJSON.weatherApp.live}
          details={projectsJSON.weatherApp.details}
          detailsImg={weatherAppDetails}
        />
        <Project
          title={projectsJSON.memoryCard.title}
          img={memoryCard}
          github={projectsJSON.memoryCard.github}
          live={projectsJSON.memoryCard.live}
          details={projectsJSON.memoryCard.details}
          detailsImg={memoryCardDetails}
        />
        <Project
          title={projectsJSON.htmlForms.title}
          img={htmlForms}
          github={projectsJSON.htmlForms.github}
          live={projectsJSON.htmlForms.live}
          details={projectsJSON.htmlForms.details}
          detailsImg={htmlFormsDetails}
        />
        <Project
          title={projectsJSON.shoppingCart.title}
          img={shoppingCart}
          github={projectsJSON.shoppingCart.github}
          live={projectsJSON.shoppingCart.live}
          details={projectsJSON.shoppingCart.details}
          detailsImg={shoppingCartDetails}
        />
        <Project
          title={projectsJSON.todoList.title}
          img={todoList}
          github={projectsJSON.todoList.github}
          live={projectsJSON.todoList.live}
          details={projectsJSON.todoList.details}
          detailsImg={todoListDetails}
        />
        <Project
          title={projectsJSON.cvApplication.title}
          img={cvApplication}
          github={projectsJSON.cvApplication.github}
          live={projectsJSON.cvApplication.live}
          details={projectsJSON.cvApplication.details}
          detailsImg={cvApplicationDetails}
        />
        <Project
          title={projectsJSON.portfolio.title}
          img={portfolio}
          github={projectsJSON.portfolio.github}
          live={projectsJSON.portfolio.live}
          details={projectsJSON.portfolio.details}
          detailsImg={portfolioDetails}
        />
      </section>
    </main>
  );
}

export default Projects;
