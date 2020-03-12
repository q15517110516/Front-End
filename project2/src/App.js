import React, { Component } from 'react';
import './App.css';
import Child from './child';

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: "Jerry"
        };
        console.log("constructor");
        //constructor only runs one time for initial state
    }

    componentWillMount(){
      if(window.innerWidth < 500){
        this.setState({innerWidth: window.innerWidth});
      }
      console.log("componentWillMount");
      //can do setState
    }

    componentDidMount(){
      console.log("componentDidMount");
    }

    //below is re-rendering
    componentWillReceiveProps(){
      console.log("componentWillReceiveProps");
    }

    shouldComponentUpdate(nextprops, nextState){
      console.log("shouldComponentUpdate");
      return true; //settig true it will re-rendering
    }

    componentWillUpdate(){
      console.log("componentWillUpdate");
    }

    componentDidUpdate(prevProps, prevState){
      //here can do third par UI elements
      console.log("componentDidUpdate");

    }

    unmountChild(){
      this.setState({
        name:'Landlord'
      });
    }
    changeState(){
      this.setState({name:"Jerry2"})
    }

    render(){
      console.log("render");
      if(this.state.name === 'Landlord'){
        return(<div/>);
      }
      return(
        <div className='App'>{/*the className will transfer to class*/}
        {this.state.name}
        <Child name={this.state.name}/>
        innerWith: {this.state.innerWidth}<br/>
        <button onClick={this.changeState.bind(this)}>changeState</button>
        <button onClick={this.unmountChild.bind(this)}>Unmount Child</button>
        </div>
      );
    }
}
export default App;