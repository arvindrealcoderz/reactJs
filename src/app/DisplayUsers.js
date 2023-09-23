'use client'
import React from "react";
import { connect } from 'react-redux';
  const Users=(props)=>{

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
                    <th>Location</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
              <td>{props.name}</td>
              <td>{props.email}</td>
              <td>{props.mobile}</td>
              <td>{props.password}</td>
              <td>{props.loc}</td>
            </tr>
                </tbody>
            </table>
            </div>
        </>
    )
}
const mapStateToProps=(state)=>{
    return {
        name: state.appReducer.name,
        email: state.appReducer.email,
        mobile: state.appReducer.mobile,
        password: state.appReducer.password,
        loc:state.appReducer.loc
      };
}
export default connect(mapStateToProps)(Users);