import React, { Component } from 'react';
import './view6.css';
import { List } from 'antd';

export class index extends Component {

    selectUser = (user) => {
        this.props.changeSelectUser(user);
    };
    render() {
        const {data} = this.props;
        return (
            <div id="view6" className="pane">
                <div className="header">User List</div>
                <List size="small" 
                bordered 
                dataSource={data}
                renderItem={user => 
                    <List.Item onClick={() => this.selectUser(user)}>
                        <div>
                            {user.name + ':' + user.age}
                        </div>
                    </List.Item>}
                />       
            </div>
        )
    }
}

export default index
