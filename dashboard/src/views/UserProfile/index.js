import React, { Component } from 'react';
import { Avatar } from 'antd';
import './UserProfile.css';


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
                    <div className={'avatar-view'}>
                        <Avatar shape="square" size={120} icon="user"/>
                        
                    </div>
                    <div className={'info-view'}>
                        <div>Name: {user.name}</div>
                        <div>Gender: {user.gender}</div>
                        <div>Age: {user.age}</div>
                        <div>Contact Number: {user.phone}</div>
                        <div>Email: {user.email}</div>

                    </div>
                </div>
                
            </div>
        )
    }
}

export default UserProfile;
