import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews(){

    const json = yield fetch('https://newsapi.org/v1/articles')
    .then(response => response.json() );

    yield put({ type: "NEWS_RECEIVED", json: json.article,});
}

function* actionWatcher() {
    yield takeLatest('GET_NEWS', fetchNews)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}