import React, { Component } from 'react';
import axios from "axios";

class App extends Component {

  state = {people: []};

  componentDidMount(){
    axios
      .get("https://reqres.in/api/users?page=2")
      .then(response => {
        this.successShow(response);
      })
      .catch(error => {
        this.successShow(error);
      })
    }
      successShow(response){
        this.setState({
          people: response.data.data
        });
      }

  
  render() {
    console.log(this.state.people[0]);
    console.log(this.state.people[1]);
    return (
      <div>
        <ul>
          {this.state.people.map(
            ({id, first_name, last_name, avatar}) => (
              <li key = {id}>
                Firstname: {first_name}
                Lastname: {last_name}
                avatar: {avatar}
              </li>
            )
          )}
        </ul>
      </div>
    )
  }
}

export default App

