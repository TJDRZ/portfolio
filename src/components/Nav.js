import "../styles/Nav.css";
import { NavLink, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();

  let homeStyle = {
    fontWeight: "bold",
    backgroundColor: "rgba(204, 204, 204, 0.5)",
  };

  let projectStyle = {
    fontWeight: "500",
    backgroundColor: "rgba(204, 204, 204, 1)",
  };

  return (
    <nav
      className={`Nav ${
        location.pathname === "/" ? "home-nav" : "project-nav"
      }`}
    >
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? homeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            style={({ isActive }) => (isActive ? projectStyle : undefined)}
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
