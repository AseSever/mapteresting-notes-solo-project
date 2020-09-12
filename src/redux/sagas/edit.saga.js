import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


// saga for fetching a specific note details for edit page
function* fetchEditDetails(action) {
    console.log(action.payload)
    try {
      let response = yield axios.get(`/api/edit/details/${action.payload}`)
      console.log(response.data);
      yield put({ type: 'SET_EDIT_DETAILS', payload: response.data[0]})
    } catch (err) {
      console.log('Error in fetchEditDetails saga', err);
    }
  }

  function* editNote(action) {
    console.log(action.payload.id);
    try {
      yield axios.put(`/api/edit/details/${action.payload.id}`, action.payload)

    } catch (err) {
      console.log('Error in editNote update saga', err);
    }
  }

  function* editSaga() {
      yield takeLatest('FETCH_EDIT_DETAILS', fetchEditDetails);
      yield takeLatest('UPDATE_NOTE', editNote);
  }

  export default editSaga;