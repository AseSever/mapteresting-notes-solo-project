

const editDetailValues = (state = {}, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_EDIT':
            console.log(action.payload)
            return action.payload;
        case 'SET_EDIT_DETAILS':
            return action.payload;
        default:
            return state
    }
}

export default editDetailValues;

