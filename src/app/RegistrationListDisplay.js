import React from "react";
import { Connect } from "react-redux";

let RegistrationListDisplay=(props)=>{

    return (
        <>
        <div className="container">
            <h1>Display Registred User Details</h1>
            <table border="1px">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Password</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </>
    )
    
}
export default RegistrationListDisplay;