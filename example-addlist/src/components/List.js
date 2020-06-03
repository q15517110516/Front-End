import React from 'react';

const List = (props) => { // we're using an arrow function and const variable type, a ES6 features

    return (
        <div>
            <ul>
                {props.listItems.map((elem, i) => (
                        // All where doing here is getting the items listItems prop
                        // (which is stored in the state of the parent component)
                        // which is an array, and we're running the .map method
                        // which returns a new array of list items. The key attribute is
                        // required, and must be unique.
                        <li key={i}>
                            <div className="form-inline">
                                <div className="form-group">
                                    <span style={elem.done ? {textDecoration: 'line-through', fontSize: '20px'} : {textDecoration: 'none', fontSize: '20px'}} 
                                            onClick={() => props.onClick(i)}>{elem.item}</span>
                                        <button className="btn btn-danger pull-right"
                                            onClick={props.deleteListItem.bind(null, i)}>
                                        x
                                        </button>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

export default List;