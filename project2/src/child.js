import React, { Component } from 'react';
import './App.css';

class Child extends Component {
    state={
        name:"Tom"
    };
    constructor() {
        super();
        this.state = {
            name: "Jerry"
        };
        console.log("child constructor");
        //constructor only runs one time for initial state
    }

    componentWillMount(){
        console.log("child componentWillMount");
      //can do stState
    }

    componentDidMount(){
        console.log("child componentDidMount");
    }

    //below is re-rendering
    componentWillReceiveProps(){
        console.log("child componentWillReceiveProps");
    }

    shouldComponentUpdate(nextprops, nextState){
        console.log("child shouldComponentUpdate");
      return true; //settig true it will re-rendering
    }

    componentWillUpdate(){
        console.log("child componentWillUpdate");
    }

    componentDidUpdate(prevProps, prevState){
      //here can do third par UI elements
        console.log("child componentDidUpdate");

    }

    componentWillUnmount(){
        console.log("child componentWillUnmount");

    }

    render(){
        console.log("child render");
        return (
            <div className="App">
            child.name: {this.props.name}
            </div>
            );
    }
}
export default Child;