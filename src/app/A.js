'use client'
import React from "react";

export const A=()=>{

    const [name ,setName]=React.useState("")

    const fnSubmit=()=>{
        console.log('submitted....')
    }
    return (
        <>
            <h1>A component Executed....</h1>
            <p>
            Name ::  <input onChange={(event)=>setName(event.target.value)}/> 
            </p>
            <p>
                <button onClick={fnSubmit}> Submit</button>
                
            </p>
            <p>Result :: {name}</p>
        </>

    )
}