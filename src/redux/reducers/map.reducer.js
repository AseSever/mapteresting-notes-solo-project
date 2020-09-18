const mapReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_MAP_LATLNG':
            return action.payload;
        case 'CLEAR_MAP_LATLNG':
            return {};
        default:
            return state
    }
}

export default mapReducer;