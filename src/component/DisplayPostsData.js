'use client'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
const DisplayPostsData = (props) => {
    return (
        <>
            <div>
                <h2>Get Posts Data List</h2>
                <table border="1px" className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Reaction</th>
                            <th>Body</th>
                            <th>User Id</th>
                        </tr>
                    </thead>
                    <tbody className="tbody-light table-hover">
                        {props.posts != undefined ? props.posts.map((listValue, index) => {
                            return (
                                <tr key={index}>
                                    <td>{listValue.id}</td>
                                    <td>{listValue.title}</td>
                                    <td>{listValue.reactions}</td>
                                    <td>{listValue.body}</td>
                                    <td>{listValue.userId}</td>
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
    console.log(2,state.postReducer.posts )
    return {
        posts:state.postReducer.posts

    };

}

export default connect(mapStateToProps)(DisplayPostsData);