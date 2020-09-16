const mapReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_MAP_LATLNG':
            return action.payload;
        default:
            return state
    }
}

export default mapReducer;