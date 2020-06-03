import React from 'react';
import './App.css';
import {Component} from 'react';
import { Provider } from 'react-redux';
import ToDoAppContainer from './containers/toDoAppContainer';
import configureStore from './redux/configureStore';

const store = configureStore();

class App extends Component {
  render(){ // Every react component has a render method.
    return( // Every render method returns jsx. Jsx looks like HTML, but it's actually javascript and functions a lot like xml, with self closing tags requiring the `/` within the tag in order to work propperly
      <div>
        <Provider store ={store}>
          <ToDoAppContainer />
        </Provider>
        
      </div>
    );
  }
}

export default App;
