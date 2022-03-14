import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const naviagte = useNavigate();

  const checkValidation = () => {
    let validationErros = [];
    if (!(number.length === 10)) {
      validationErros.push("Number Should be 10 digits");
    }
    if (password.length < 5) {
      validationErros.push("Password can not be less than 5 digits");
    }

    if (validationErros.length > 0) {
      setErrors(validationErros);
    } else {
      naviagte("/welcome");
    }
  };

  return (
    <>
      <input
        placeholder="Enter Number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <input
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          checkValidation();
        }}
      >
        Log in
      </button>
      {errors.length
        ? errors.map((item) => {
            return <li style={{ color: "red", listStyle: "none" }}>{item}</li>;
          })
        : null}
    </>
  );
}
