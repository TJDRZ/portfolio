import { Link } from  "react-router-dom";
import "../styles/Project.css";
import githubLogo from "../assets/github.svg";
import liveLogo from "../assets/play.svg";
import detailsLogo from "../assets/block-menu.svg";

function Project(props) {
  const { title, img, github, live, details } = props;

  return (
    <article className="Project">
      <header>
        <h2>{title}</h2>
      </header>
      <div className="screenshot-container">
        <img className="screenshot" src={img} alt="" />
      </div>
      <nav>
        <ul className="link-list">
          <li>
            <a className="project-link" href={github}>
              <img className="logo-link" src={githubLogo} alt="Github"></img>
              Github Repo
            </a>
          </li>
          <li>
            <a className="project-link" href={live}>
              <img
                className="logo-link"
                src={liveLogo}
                alt="Live Preview"
              ></img>
              Live Preview
            </a>
          </li>
          <li>
            <Link className="project-link" to={{
              pathname: "/details",
              state: details
            }}>
              <img className="logo-link" src={detailsLogo} alt="Details"></img>
              Details
            </Link>
          </li>
        </ul>
      </nav>
    </article>
  );
}

export default Project;
