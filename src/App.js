import Login from "./components/Login";
import Signup from "./components/Signup";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Welcome from "./components/Welcome";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
      </Routes>
    </Router>
  );
}
