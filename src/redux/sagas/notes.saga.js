import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// saga to post or remove a like from homepage
function* toggleLike(action) {
  console.log(action.payload);
  try {
    yield axios.put(`/api/note/likes/${action.payload}`);

    yield put({ type: 'FETCH_PUBLIC_NOTES' })
  } catch (err) {
    console.log('Error in likeNote saga', err);
  }
}

// saga to fetch public noted for home page
function* publicNotes() {
  try {
    let response = yield axios.get('/api/note/public');

    yield put({ type: 'SET_PUBLIC_NOTES', payload: response.data});
  } catch (err) {
    console.log('Error in publicNotes saga', err);
  }
}

// saga for fetching a specific note detail
function* noteDetails(action) {
  try {
    let response = yield axios.get(`/api/note/details/${action.payload}`);
    console.log(response.data);
    yield put({ type: 'SET_DETAILS', payload: response.data[0]});
  } catch (err) {
    console.log('Error in notDetails saga', err);
  }
}

// saga for user to delete targeted note
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

    yield put({ type: 'FETCH_NOTES' })
  } catch (err) {
    console.log('Error in sendNote POST saga', err);
  }
}

// saga to get notes for My Notes page
function* fetchNotes() {
  try {
    let response = yield axios.get('/api/note');

    yield put({ type: 'SET_NOTES', payload: response.data });
  } catch (err) {
    console.log('Error in Get notes request', err);
  }
}

function* notesSaga() {
  yield takeLatest('SEND_NOTE', sendNote);
  yield takeLatest('FETCH_NOTES', fetchNotes);
  yield takeLatest('DELETE_NOTE', deleteNote);
  yield takeLatest('FETCH_DETAILS', noteDetails);
  yield takeLatest('FETCH_PUBLIC_NOTES', publicNotes);
  yield takeLatest('TOGGLE_LIKE', toggleLike);
}

export default notesSaga;