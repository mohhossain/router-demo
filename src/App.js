import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import UserDetails from "./UserDetails";

function App() {
  let greeting = "Welcome to the homepage!";
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
        <Route path="/" element={<Home greeting={greeting}></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
        <Route
          path="/user/:user_id"
          element={<UserDetails></UserDetails>}
        ></Route>
      </Routes>

      {/* <About></About>
      <Home></Home>
      <Error></Error> */}
    </div>
  );
}

export default App;
