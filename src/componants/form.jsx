import React, { useState } from "react";

export default function Form() {

    const [name,setName]=useState({firstName:"",lastName:""})
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    function handleSubmit(event){
        event.preventDefault()
        console.log("::handleSubmit event::>>",event)
        console.log("::handleSubmit Name::>>",name)
    }
  return (
    <>
    <form action="">
        {name.firstName}-{name.lastName}
      <input onChange={(e)=>{setName({...name,firstName:e.target.value})}} type="text" value={name.firstName}/><br/><br/>
      <input onChange={(e)=>{setName({...name,lastName:e.target.value})}} type="text" value={name.lastName}/><br/><br/>
      <input onChange={(e)=>{setEmail(e.target.value)}} type="text" value={email}/><br/><br/>
      <input onChange={(e)=>{setPassword(e.target.value)}} type="text" value={password}/><br/><br/>
      <button onClick={(e)=>handleSubmit(e)}>Submit</button>
      </form>
    </>
  );
}   
