import "../styles/Home.css";
import Nav from "./Nav";
import github from "../assets/github.svg";
import linkedIn from "../assets/linkedin.svg";

function Home() {
  return (
    <main className="Home">
      <Nav />
      <header className="home-header">
        <h1 className="home-h1 blue-shadow">Thomas Drzewiecki</h1>
        <p className="home-p blue-shadow">
          Front-End Web Developer from Baltimore, MD.
        </p>
      </header>
      <div className="social">
        <a href="https://github.com/TJDRZ">
          <img className="social-img" src={github} alt="Github"></img>
        </a>
        <a href="https://www.linkedin.com/in/thomas-drzewiecki-9839ab21b/">
          <img className="social-img" src={linkedIn} alt="LinkedIn"></img>
        </a>
      </div>
      <div className="contact">
        <a className="contact-link" href="mailto:tjdrzewiecki@gmail.com">Contact Me</a>
      </div>
    </main>
  );
}

export default Home;
