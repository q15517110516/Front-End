const initialState = {
    a:1
};
const Reducer = (state = initialState, action = {}) => {
    if(action.type === 'Update_a'){
        return{
        ...state,
        a: state.a + action.b
    }
    }
    return state;

}

export default reducer;