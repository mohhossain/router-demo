import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import UserDetail from "./UserDetail";
import { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
        {isLoggedIn ? <Route path="about" element={<About />} /> : ""}

        <Route path="/user/:id" element={<UserDetail />}></Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
