import React from 'react';

function Button({label}){
    return <div data-testid = "button" 
            className="button-style">{label}</div>
            //the id used for testing
}

export default Button;