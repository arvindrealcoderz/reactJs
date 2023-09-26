'use client'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
const DisplayUserData = (props) => {
    return (
        <>
            <div>
                <h2>Get user List</h2>
                <table border="1px" className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email </th>
                        </tr>
                    </thead>
                    <tbody className="tbody-light table-hover">
                        {props.users != undefined ? props.users.map((listValue, index) => {
                            return (
                                <tr key={index}>
                                    <td>{listValue.id}</td>
                                    <td>{listValue.firstName}</td>
                                    <td>{listValue.lastName}</td>
                                    <td>{listValue.email}</td>
                                </tr>
                            );
                        }) : ""}
                    </tbody>
                </table>
            </div>
        </>

    )

}



const mapStateToProps = (state) => {
    console.log(1, state)
    return {
        users: state.userReducer.users.users

    };

}

export default connect(mapStateToProps)(DisplayUserData);