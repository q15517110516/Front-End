import React, { Component } from 'react';
// import { NavLink, Link } from 'react-router-dom';
import './UserProfile.css';
// import Router from '../../Router';


export class UserProfile extends Component {
    render() {

        let { user } = this.props;
        if (user == null){
            user = {
                name: 'null',
                gender: 'null',
                age: 'null',
            }
        }
        return (
            <div id='view1' className="pane">
                <div className="header">User Profile</div>
                <div className="profile">
                    <div className="userphoto">
                        <img className="photo" src={user.img} aria-hidden alt="userphoto"/>
                    </div>
                    <div className="info">
                        <div>Name: {user.name}</div>
                        <div>Gender: {user.gender}</div>
                        <div>Age: {user.age}</div>
                        <div>ID: {user.ID}</div>    
                    </div>
                </div>
                
            </div>
        )
    }
}

export default UserProfile;
