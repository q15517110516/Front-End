//Import all our 'actions' from our types.js file
//Define our 'initialState
//Define how state should change based on actions with a 'switch' statement

import { 
    SET_CURRENT_USER,
    USER_LOADING
} from '../actions/types';

const isEmpty = require("is-empty");

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false

};

export default function(state = initialState, action){
    switch (action.type){
        case SET_CURRENT_USER:
            return{
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case USER_LOADING:
            return{
                ...state,
                loading: true
            }
        default:
            return state;
    }
}