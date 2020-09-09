import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// post saga for sending notes to db
function* sendNote(action) {
  console.log(action.payload);
  try {
    yield axios.post('/api/note', action.payload)

  } catch (err) {
    console.log('Error in sendNote POST saga', err);
  }
}

function* notesSaga() {
  yield takeLatest('SEND_NOTE', sendNote);
}

export default notesSaga;