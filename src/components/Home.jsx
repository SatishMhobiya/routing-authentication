import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Landing Page</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/signup">
        <button>Signup</button>
      </Link>
    </>
  );
}
