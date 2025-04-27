import { Outlet, useLocation } from "react-router";
import Navbar from "../navbar";

export default function RootLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div className="App">
      <Navbar />
      <div className="content-area">
        <Outlet />
      </div>
      <footer>
        {isHomePage && (
          <a
            href="https://www.flaticon.com/free-icons/tomato"
            title="tomato icons"
            className="tomato-attribution">
            Tomato icons created by AomAm - Flaticon
          </a>
        )}
        <p className="built-by">built by NT</p>
      </footer>
    </div>
  );
}
