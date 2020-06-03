import React from 'react';
import {Component} from 'react';
import List from './List';
import Input from './Input';


class ToDoApp extends Component{
    
    onInputChange = (event) =>{
        this.props.inputChange(event.target.value); //updates state to new value when user changes the input value
    };

    onInputSubmit = (event) =>{
        event.preventDefault();
        this.props.inputSubmit();
    };

    onListItemClick = (i) =>{ //takes the index of the element to be updated
        this.props.listItemClick(i)
    };

    deleteListItem = (i) =>{
        this.props.deleteListItem(i)
    };
    render(){
        console.log(this.props)
        return(
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h1>My To Do App</h1>
                            <hr/>
                            <List
                                onClick={this.onListItemClick}
                                listItems={this.props.toDoApp.list}
                                deleteListItem={this.deleteListItem}
                            />
                            <Input
                                value={this.props.toDoApp.newToDo}
                                onChange={this.onInputChange}
                                onSubmit={this.onInputSubmit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoApp;