import { NavLink, useLocation } from "react-router-dom";
import uniqid from "uniqid";

function Details() {
    const location = useLocation();
    const { title, tools, description, usage } = location.state;
    console.log(location);
    return (
      <main className="Details">
        <NavLink to="/projects">Back to Projects</NavLink>
        <header>
            <h1>{title}</h1>
        </header>
        <section>
            <article className="tools">
                Languages / Tools / Frameworks: {tools}
            </article>
            <article className="description">
                <h2>Main Objectives:</h2>
                <ul>
                    {description.map(item => {return <li key={uniqid()}>{item}</li>})}
                </ul>
            </article>
            <article className="usage">
                Usage: {usage}
            </article>
        </section>
      </main>
    );
  }
  
  export default Details;