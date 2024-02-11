// import React, { useState } from 'react';
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const nav=useNavigate();
  const[error,setError]=useState(false)
    const handleLoginSubmit=(e)=>{
        e.preventDefault();
        const email=e.target.elements.email.value;
        const password=e.target.elements.password.value;
        if (email==="admin@gmail.com" && password==="password"){
            nav("/");
        }
        else{
          setError(true);
        }
        // console.log(e.target.elements.email.value,"data");
        // console.log(e.target.elements.password.value);
    };
    // const [email,setEmail]=useState(" ");
    // const [password,setPasword]=useState(" ");
    // const handleClick=(e)=>{
    //   e.preventDefault();
    //   console.log(email);
    //   console.log(password);
    // }
  return (

    <>
    {error &&
      <div style={{
        
         display: "flex",
      justifyContent: "center",
      marginTop: "1rem",
      }}>
      <div className="alert alert-danger" role="alert" style={{marginTop:'70px',}}>
        Sorry, Credientials did not match!
      </div>

      </div>
    }
     



    <div
    style={{
      display: "flex",
      justifyContent: "center",
      marginTop: "1.5rem",
      width: "100%",
    }}
  >
    <form style={{marginTop:'40px'}} onSubmit={handleLoginSubmit}>
    {/* <form style={{marginTop:'70px'}} > */}
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          name="email"
          // onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div className="form-group mt-4">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          name="password"
          // onChange={(e)=>setPasword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        // onClick={handleClick}
        className="btn btn-primary mt-4"
        style={{ width: "100%" }}
      >
        Login
      </button>
    </form>
  </div>
  </>
  )
}

export default Login;
