import React, {Component} from 'react';
import Users from './Users';

class App extends Component{
  render(){
    return(
      <div>
        <h1>Hello World
          <Users title="Users List"/>
            <users>test</users>
        </h1>
      </div>
    );
  }
}

export default App;
