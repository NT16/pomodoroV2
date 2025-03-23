import { Outlet } from "react-router";
import Navbar from "../navbar";

export default function RootLayout() {
  return (
    <div className="App">
      <Navbar />
      <div className="content-area">
        <Outlet />
      </div>
      <footer>built by NT</footer>
    </div>
  );
}
