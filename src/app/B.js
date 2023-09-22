'use client'
import React from "react";

export const B=()=>{
    const [loc , setLoc]=React.useState('');
    const fnSubmit=()=>{
        console.log('on submit function called B component.....')
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