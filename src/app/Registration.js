'use client'
import React from "react";
import { appStore } from "@/store";

export const Registration=()=>{

    const [name ,setName]=React.useState("");
    const [email,setEmail]=React.useState("");
    const [mobile,setMobile]=React.useState("");
    const [password,setPassword]=React.useState("");

    const payload={
        name:name,
        email:email,
        mobile:mobile,
        password:password
    }
    
    const fnSubmit=()=>{
        appStore.dispatch({type:"Name", payload: payload} )
    }
    return (
        <>
        <div className="container">
            <h1>User Registration Details Form..</h1>
            <p>
                Name ::  <input  type="text" name="name" onChange={(event)=>setName(event.target.value)}/> 
            </p>
            <p>
                Email ::  <input type="email" name="email" onChange={(event)=>setEmail(event.target.value)}/> 
            </p>
           
            <p>
                Mobile :: <input  type="mobile" name="mobile" onChange={(event)=>setMobile(event.target.value)}/>
            </p>
            <p>
                Password :: <input type="password" name="password"  onChange={(event)=>setPassword(event.target.value)}/>
            </p>
            <p>
                <button onClick={fnSubmit}> Submit</button>
            </p>

            </div>
        </>

    )
}