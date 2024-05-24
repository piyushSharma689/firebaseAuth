import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



document.title="Home"
const Home = () => {
  const [u, setu]= useState("null")
  const navigate = useNavigate();

  const toRegister = (utype) => {
    setu(utype);
    navigate("/Register");
  };

  console.log(u)

  return (
    
    <>
      <h1>Login as </h1>

      <button onClick={()=>toRegister("student")}>Student</button>

      <button onClick={()=>toRegister("teacher")}>Teacher</button>
    </>
  );
};

export default Home;
