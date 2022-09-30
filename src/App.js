import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Error from "./Error";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
