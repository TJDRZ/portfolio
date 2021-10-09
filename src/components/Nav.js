import { NavLink, useLocation } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
  const location = useLocation()
  console.log(location);

  return (
    <nav className={`Nav ${location.pathname === '/portfolio' ? "blue-shadow" : "red-shadow"}`}>
      <ul>
        <li>
          <NavLink to="/portfolio">Home</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
