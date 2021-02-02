import { call, put, takeEvery, take } from 'redux-saga/effects';

import { IMAGES } from '../constants'


function* handleImagesLoad() {
    console.log('fetching images from unsplash');
}

// function* handleDang() {
//     console.log('DANG!!');
// }


function* rootSaga() {
   yield takeEvery(IMAGES.LOAD, handleImagesLoad);
//    yield take('DANG');
//    yield call(handleDang);
}

export default rootSaga; 