import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([])
  const navigate = useNavigate();


  const handleChange = ()=>{
    const validationErrors = []
    if(!email.endsWith("@gmail.com")){
      validationErrors.push("Email should end with @gmail.com")
    }
    if(password.length < 5){
      validationErrors.push("Password length should be greater than 5")
    }

    if(validationErrors.length > 0){
      setErrors(validationErrors);
    }else{
      navigate("/welcome");
    }
  }

  return (
    <>
      <input type="text" placeholder="Email" value={email} onChange={(e)=>{
        setEmail(e.target.value);
      }}/>
      <input type="text" placeholder="Password" value={password} onChange={(e)=>{
        setPassword(e.target.value);
      }} />
      <button onClick={()=>{
        handleChange();
      }}>Sign Up</button>

      {errors.length > 0 ? errors.map((error)=>{
        return <li style={{color:"red", listStyle:"none"}}>{error}</li>
      }): null}
    </>
  );
}
