import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteNote(action) {
  console.log(action.payload);
  try {
    yield axios.delete(`/api/note/${action.payload}`);
    // reset the info on page to show delete - refetch notes from db
    yield put({ type: 'FETCH_NOTES' });
  } catch (err) {
    console.log('Error in deleteNote request', err);
  }
}

// post saga for sending notes to db
function* sendNote(action) {
  console.log(action.payload);
  try {
    yield axios.post('/api/note', action.payload)

  } catch (err) {
    console.log('Error in sendNote POST saga', err);
  }
}

function* fetchNotes() {
  try {
    let response = yield axios.get('/api/note')

    yield put({ type: 'SET_NOTES', payload: response.data })
  } catch (err) {
    console.log('Error in Get notes request', err);
  }
}

function* notesSaga() {
  yield takeLatest('SEND_NOTE', sendNote);
  yield takeLatest('FETCH_NOTES', fetchNotes);
  yield takeLatest('DELETE_NOTE', deleteNote);
}

export default notesSaga;