import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postImageUrl(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json'},
            withCredentials: true,
        };

        const response = yield axios.get('/api/note', config);
    } catch (err) {

    }
}

function* imageInfoSaga() {
    yield takeLatest('POST_IMAGE_URL', postImageUrl)
}


export default imageInfoSaga;