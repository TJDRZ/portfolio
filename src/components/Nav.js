import { NavLink, useLocation } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
  const location = useLocation();

  return (
    <nav
      className={`Nav ${
        location.pathname === "/" ? "home-nav" : "project-nav"
      }`}
    >
      <ul>
        <li>
          <NavLink
            exact to="/"
            activeStyle={{
              fontWeight: "bold",
              backgroundColor: "rgba(204, 204, 204, 0.5)",
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact to="/projects"
            activeStyle={{
              fontWeight: "500",
              backgroundColor: "rgba(204, 204, 204, 1)",
            }}
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;