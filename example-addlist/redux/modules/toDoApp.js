const INPUT_CHANGED = 'example1/toDoApp/INPUT_CHANGED';
const INPUT_SUBMIT = 'example1/toDoApp/INPUT_SUBMIT';
const LIST_ITEM_CLICK = 'example1/toDoApp/LIST_ITEM_CLICK';
const DELETE_LIST_ITEM = 'example1/toDoApp/DELETE_LIST_ITEM';

export function listItemClick(index){
    return {
        type: LIST_ITEM_CLICK,
        index
    }
}

export function deleteListItem(index) {
    return {
        type: DELETE_LIST_ITEM,
        index
    }
}

export function inputSubmit(){
    return {
        type: INPUT_SUBMIT
    };
}

export function inputChange(value){
    return {
        type: INPUT_CHANGED,
        value
    }
}

const initialState = {
    list: [{item: 'test', done: false},
            {item: 'Go', done: false}],
    newToDo: ''
};

export default function reducer(state = initialState, action){
    switch (action.type){
        case INPUT_SUBMIT:
            return Object.assign(
            {},
            state,
            {list: [...state.list, {item: state.newToDo, done: false }],
            newToDo: ''}
            );
        case INPUT_CHANGED:
            return Object.assign(
                {},
                state,
                {newToDo: action.value}
            );
        case LIST_ITEM_CLICK:
            return Object.assign(
                {},
                state,
                {list: [...state.list.slice(0, action.index),
                        Object.assign({}, state.list[action.index], {done: !state.list[action.index].done}),
                        ...state.list.slice(action.index+1)]}
            );
        case DELETE_LIST_ITEM:
            return Object.assign(
                {},
                state,
                {list: [...state.list.slice(0, action.index),
                        ...state.list.slice(action.index+1)]}
            );
        default:
            return state;
    }
}