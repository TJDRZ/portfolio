import "../styles/Details.css";
import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import uniqid from "uniqid";

function Details() {
  const location = useLocation();
  const { title, tools, description, usage } = location.state.details;
  const { image } = location.state;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="Details">
      <header className="details-header">
        <NavLink className="details-link" to="/projects">
          Back to Projects
        </NavLink>
        <h1 className="details-h1">{title}</h1>
        <div className="tools">
          <h2 className="details-h2">Languages / Tools / Frameworks:</h2>
          <p>{tools}</p>
        </div>
      </header>
      <section className="details-container">
        <div className="details-img-container">
          <img className="details-img" src={image} alt="hi" />
        </div>
        <article className="description">
          <h2 className="details-h2">Main Objectives:</h2>
          <ul>
            {description.map((item) => {
              return <li key={uniqid()}>{item}</li>;
            })}
          </ul>
        </article>
        <article className="usage">
          <h2 className="details-h2">Usage:</h2>
          <ul>
            {usage.map((item) => {
              return <li key={uniqid()}>{item}</li>;
            })}
          </ul>
        </article>
      </section>
    </main>
  );
}

export default Details;
