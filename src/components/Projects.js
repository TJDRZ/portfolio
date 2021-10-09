import "../styles/Projects.css";
import Nav from "./Nav";
import Project from "./Project";
import weatherApp from "../assets/weather-app.png";
import memoryCard from "../assets/memory-card-game.png";
import htmlForms from "../assets/html-forms.png";
import shoppingCart from "../assets/shopping-cart.png";
import todoList from "../assets/todo-list.png";
import cvApplication from "../assets/cv-application.png";

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
        <Project title="HTML Forms" img={htmlForms} github="https://github.com/TJDRZ/html-forms" live="https://tjdrz.github.io/html-forms/" details="" />
        <Project title="Shopping Cart" img={shoppingCart} github="https://github.com/TJDRZ/shopping-cart" live="https://tjdrz.github.io/shopping-cart/" details="" />
        <Project title="To-Do List" img={todoList} github="https://github.com/TJDRZ/todo-list" live="https://tjdrz.github.io/todo-list/" details="" />
        <Project title="CV Application" img={cvApplication} github="https://github.com/TJDRZ/cv-application" live="https://tjdrz.github.io/cv-application/" details="" />
      </section>
    </main>
  );
}

export default Projects;
