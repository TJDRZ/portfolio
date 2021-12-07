import "../styles/Home.css";
import Nav from "./Nav";
import github from "../assets/github.svg";
import linkedIn from "../assets/linkedin.svg";

function Home() {
  return (
    <main className="Home">
      <Nav />
      <header className="home-header">
        <h1 className="home-h1">
          Th<span className="flicker delay1">o</span>mas Drzewi
          <span className="flicker delay2">e</span>cki
        </h1>
        <p className="home-p">
          Front<span className="flicker delay3">e</span>nd Web Developer from
          Bal
          <span className="flicker delay4">t</span>imore, MD.
        </p>
      </header>
      <div className="social">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/TJDRZ"
        >
          <img className="social-img" src={github} alt="Github"></img>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.linkedin.com/in/thomas-drzewiecki-9839ab21b/"
        >
          <img className="social-img" src={linkedIn} alt="LinkedIn"></img>
        </a>
      </div>
      <div className="contact">
        <a className="contact-link" href="mailto:tjdrzewiecki@gmail.com">
          Contact Me
        </a>
      </div>
    </main>
  );
}

export default Home;
