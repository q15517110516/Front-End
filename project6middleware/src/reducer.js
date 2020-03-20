const initialState={
    age:21
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    
    // if(action.type === 'Age_up'){
    //     newState.age++;
    // }
    // if(action.type === 'Age_down'){
    //     newState.age--;
    // }
    
    //NOTE Using thunk
    switch(action.type){
    case "AGE_UP":
        newState.age += action.value;
        newState.loading = false;
        break;
    case "AGE_DOWN":
        newState.age -= action.value;
        break;
    case "LOADING":
        newState.loading = true;
    }


    return newState;

}

export default reducer;