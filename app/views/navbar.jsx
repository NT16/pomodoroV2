import { NavLink } from "react-router";
import Nav from "react-bootstrap/cjs/Nav.js";
import Dropdown from "react-bootstrap/cjs/Dropdown";

const activeLink = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "",
    color: isActive ? "moccasin" : "black",
    textDecoration: isActive ? "none" : "underline",
    backgroundColor: isActive ? "rgb(108 117 125)" : "",
    padding: isActive ? "4px 8px" : "",
    borderRadius: isActive ? "8px" : "",
  };
};

export default function Navbar() {
  return (
    <div className="row header">
      <h1 className="col-md-6 col-10 app-name">Pomodoro</h1>
      <Dropdown className="col-2 d-md-none d-flex justify-content-end">
        <Dropdown.Toggle
          variant="secondary"
          id="dropdown-basic"
          className="d-md-none mobile-menu-toggle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-three-dots-vertical"
            viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
          </svg>
        </Dropdown.Toggle>

        <Dropdown.Menu className="mobile-menu-dropdown">
          <Dropdown.Item className="mobile-menu-item">
            <NavLink to="/" style={activeLink} end>
              Home
            </NavLink>
          </Dropdown.Item>
          <Dropdown.Item className="mobile-menu-item">
            <NavLink to="/settings" style={activeLink} end>
              Settings
            </NavLink>
          </Dropdown.Item>
          <Dropdown.Item className="mobile-menu-item">
            <NavLink to="/about" style={activeLink} end>
              About
            </NavLink>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Nav
        variant="underline"
        defaultActiveKey="/"
        className="navbar-margin col-md-6 justify-content-end  d-none d-md-flex"
        //activeKey={location.pathname}
      >
        <Nav.Item>
          <NavLink to="/" style={activeLink} end>
            Home
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/settings" style={activeLink} end>
            Settings
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/about" style={activeLink} end>
            About
          </NavLink>
        </Nav.Item>
      </Nav>
    </div>
  );
}
