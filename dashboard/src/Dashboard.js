import React, { Component } from 'react';
import data from './data';
import { Layout } from 'antd';
import UserProfile from './views/UserProfile';
import Gender from './views/Gender';
import Filter from './views/Filter';
import PerformanceSheet from './views/PerformanceSheet';
import Age from './views/Age';
import UserList from './views/UserList';
import './dashboard.css';

const { Sider, Content } = Layout;

export class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state={
      selectedUser: data[0],
      greaterThenAge: 0,
      includedGender: ['Male', 'Female', 'Unknown'],
    }
  };

  changeSelectUser = value => {
    this.setState({
      selectedUser: value
    });
  };

  changeGreaterThenAge = value => {
    this.setState({
      greaterThenAge: value
    });
  };

  changeIncludedGender = value => {
    this.setState({
      includedGender: value
    });
  };

  render() {
    const {selectedUser, greaterThenAge, includedGender} = this.state;
    const filteredData = data.filter(user=>includedGender.indexOf(user.gender) !== -1)
                              .filter(user=>user.age > greaterThenAge);
    return (
      <div>
        <Layout style={{ height: 920 }}>
          <Sider width={300} style={{ backgroundColor: '#eee'}}>
            <Content style={{ height: 200}}>
              <UserProfile user={selectedUser}/>
            </Content>
            <Content style={{ height: 300}}>
              <Gender data={filteredData}/>
            </Content>
            <Content style={{ height: 400}}>
              <Filter changeGreaterThenAge={this.changeGreaterThenAge}
                      changeIncludedGender={this.changeIncludedGender}/>
            </Content>
          </Sider>
          <Layout>
            <Content style={{ height: 300}}>
              <PerformanceSheet user={selectedUser}/>
            </Content>
            <Layout style={{ height: 600 }}>
              <Content>
                <Age data={filteredData}/>
              </Content>
              <Sider width={300} style={{ backgroundColor: "#eee" }}>
                <UserList data={filteredData} changeSelectUser={this.changeSelectUser}/>
              </Sider>
            </Layout>
          </Layout>
        </Layout>
        
      </div>
    )
  }
}

export default Dashboard
