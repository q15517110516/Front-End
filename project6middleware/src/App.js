import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';
import * as actionCreator from './actions';

class App extends Component{
  render(){
    return(
      <div className="App">
        <div>Age: <span>{this.props.age}</span></div>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }

}

const mapStateToProps = (state) =>{
  return{
    age:state.age,

    //NOTE Using thunk
    loading: state.loading 
  };
};

const mapDispachToProps = (dispach) =>{
  return{
    // onAgeUp:()=>dispach({type: 'Age_up', value:1}),
    // onAgeDown:()=>dispach({type: 'Age_down', value:1})
    
    //NOTE Using thunk
    onAgeUp:()=>dispach(actionCreator.ageUp(1)),
    onAgeDown:()=>dispach(actionCreator.ageDown(1))

  }
}
export default connect(mapStateToProps, mapDispachToProps)(App);

