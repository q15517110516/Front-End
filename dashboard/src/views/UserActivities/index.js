import React, { Component } from 'react';
import './UserActivities.css';
import LineChart from '../../charts/LineChart';

export class UserActivities extends Component {
    render() {
        const {user} = this.props;
        return (
            <div id="view4" className="pane">
                <div className="header">User Activities</div>
                <div style={{ overflowX: 'scroll', overflowY: 'hidden' }}>
                    <LineChart data={user} width={1100} height={250}/>
                </div>
                
            </div>
        )
    }
}

export default UserActivities;
