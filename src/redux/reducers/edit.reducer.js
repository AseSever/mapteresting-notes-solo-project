

const editDetailValues = (state = {}, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_EDIT':
            console.log(action.payload.key, action.payload.value)
            // change the given property to the given value 
            return {
                ...state,
                [action.payload.key]: action.payload.value,
            };
        case 'SET_EDIT_DETAILS':
            return action.payload;
        default:
            return state
    }
}

export default editDetailValues;

