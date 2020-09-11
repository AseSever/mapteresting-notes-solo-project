import { combineReducers } from 'redux';

const editDetailValues = (state = {}, action) => {
    switch (action.type) {
        case 'SET_EDIT_DETAILS':
            return action.payload;
        default:
            return state
    }
}

export default combineReducers({
    editDetailValues,
  });
  