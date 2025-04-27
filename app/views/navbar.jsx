import { NavLink } from "react-router";
import Nav from "react-bootstrap/cjs/Nav.js";

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
      <h1 className="col-md-6 col-xs-12 app-name">Pomodoro</h1>

      <Nav
        variant="underline"
        defaultActiveKey="/"
        className="navbar-margin col-md-6 col-xs-12 justify-content-end"
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

/*
<nav className="header bg-light-800 border-b-1 border-gray-300">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">Pomodoro</div>
            <div className="sm:ml-6 sm:block">
              <div className="flex justify-end space-x-4">
                <NavLink
                  to="/"
                  style={activeLink}
                  className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium hover:bg-gray-400 hover:text-white"
                  end>
                  Home
                </NavLink>

                <NavLink
                  to="/settings"
                  style={activeLink}
                  className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium hover:bg-gray-400 hover:text-white"
                  end>
                  Settings
                </NavLink>

                <NavLink
                  to="/about"
                  style={activeLink}
                  className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium hover:bg-gray-400 hover:text-white"
                  end>
                  About
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
*/
