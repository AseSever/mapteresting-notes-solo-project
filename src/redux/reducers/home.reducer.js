const homeReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PUBLIC_NOTES':
            return action.payload;
        default:
            return state
    }
}

export default homeReducer;