import React, { Component } from 'react';
import './App.css';
import Route from 'react-router-dom/Route'; 
import { BrowserRouter as Router, NavLink, Redirect, Prompt } from 'react-router-dom';


const User = props => {
  return (<h1> Welcome User: {props.username} </h1>)
};
class App extends Component{
  state = {
    loggedIn: false
  };
  loginHandle = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }));
  };
  render(){
    return(
      <Router>
        <div className="App">
          <ul>
            <li>
              <NavLink to ="/" exact activeStyle={{color: 'green'}} >Home</NavLink>
            </li>
            <li>
            <NavLink to ="/about" exact activeStyle={{color: 'green'}} >About</NavLink>
            </li>
            <li>
            <NavLink to ="/user/tom" exact activeStyle={{color: 'green'}} >User Tom</NavLink>
            </li>
            <li>
            <NavLink to ="/user/jerry" exact activeStyle={{color: 'green'}} >User Jerry</NavLink>
            </li>
          </ul>

          <Prompt 
            when = {!this.state.loggedIn}
            message = { (location) => {
              return location.pathname.startsWith('/user') ? 'Are you sure' : true}
            }/>

            <input type="button" value={this.state.loggedIn ? 'log out' : 'log in'} 
              onClick = {this.loginHandle.bind(this)}/>

            <Route path="/" exact strict render={
              () => {
                return (<h1>Welcome Home</h1>);
              }
            }
            />
            <Route path="/about" exact strict render={
              () => {
                return (<h1>Welcome About</h1>);
              }
            }
            />
            <Route path="/user/:username" exact strict render={
              ({match}) => (
                this.state.loggedIn ? (<User username={match.params.username}/>) : (<Redirect to= '/' />)
              )}/>
                
        </div>
      </Router>
    );
  }
}

export default App;
