import React from "react";
import {useNavigate} from "react-router-dom"
export default function Login(){
  const navigate= useNavigate();
  function onSubmit(){
    navigate('/Dashboard');
  }
   
   
    return (
    <><h1>login page</h1>
    <button onClick={onSubmit}>login</button>
      </>
    )
}