import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    render() {
        return ( 
            <div >
                <User/>
                <User/>
                <User/>
                <h1>{this.props.title}</h1>
                <User age = "10">Tom</User>
                <User age = "20">Jerry</User> 
            </div>
        )
    }
}

export default Users;