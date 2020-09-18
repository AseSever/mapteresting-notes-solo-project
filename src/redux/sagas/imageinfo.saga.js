import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postImageUrl(action) {
    console.log(action.payload);
    try {
        const config = {
            headers: { 'Content-Type': 'application/json'},
            withCredentials: true,
        };

        const data = {
            imageUrl: action.payload
        }


        console.log(data);
        const response = yield axios.post('/api/image-url', data, config);
        console.log(response);
    } catch (err) {

    }
}

function* imageInfoSaga() {
    yield takeLatest('POST_IMAGE_URL', postImageUrl)
}


export default imageInfoSaga;