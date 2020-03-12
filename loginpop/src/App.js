import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props);
    //this.submit = this.submit.bind(this);
    this.state = {
      value: ""
    }
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }
  submit = (e) => {
    alert("Hello" + this.state.value);
    e.preventDefault();
  }
  render() {
    return (
      <div>
        Username
        <input type="text" onChange={this.handleChange} value={this.state.value}/>
        >Password
        <input type="text"/>
        <button type="submit" onClick={this.submit}>Submit</button>
      </div>
    )
  }
}

export default App
