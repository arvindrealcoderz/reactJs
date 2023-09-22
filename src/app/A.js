'use client'
import React from "react";
import { appStore } from "@/store";
export const A=()=>{

    const [name ,setName]=React.useState("")
    
    const fnSubmit=()=>{
        appStore.dispatch({type:"Name", payload: name} )
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
        </>

    )
}