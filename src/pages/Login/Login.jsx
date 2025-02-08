import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");

  const Navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email: ", email); 
    console.log("Password: ", password);
    setEmail("");
    setPassword("");
  }
  
  return (
    <>
      <form action="login" onSubmit={(e)=>handleSubmit(e)}>
        <div>
          <label htmlFor="email"> Email</label>
          <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Enter Your Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password"> Password</label>
          <input 
          type="password" 
          id="password" 
          name="password" 
          placeholder="Enter Your Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      <p onClick={(e)=>Navigate('/signup')}>Sign Up Now</p>
    </>
  );
}

export default Login