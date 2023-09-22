'use client'
import React from "react";
import { appStore } from "@/store";
export const B=()=>{
    const [loc , setLoc]=React.useState("");
    const fnSubmit=()=>{
        appStore.dispatch({type:'Loc', payload: loc})
    }
    return (
        <>
            <h1>B component executed...</h1>
            <p>
                Localtion :: <input onChange={(eve)=>setLoc(eve.target.value)}/>

            </p>
            <p>
                <button onClick={fnSubmit}>Submit</button>
            </p>
        </>
    )
}