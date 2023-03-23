import React, { useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import "./styles/Login.css"
import { signInwithGoogle } from './Firebase';


const Login = () => { 
  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem("name")){
      console.log("Already Login")
      navigate("/SearchLogin")
    };
    // eslint-disable-next-line
  },[])

  
  const redirect=()=>{
    signInwithGoogle();
 
  }

  const handelLogin = () => {
    // console.log("Handel Login")
    return redirect();
    // navigate("/Search")
    // console.log("Login clicked") 
  }
  return (
    <div className='login-container'>
      <h1 >WelCome To AirBus</h1>
      <h3>Pls Login </h3>
      <button onClick={handelLogin}>Login </button>
    </div>
  )
}

export default Login