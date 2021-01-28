import { takeEvery, takeLatest, call, put} from 'redux-saga/effects'

 export function* questNextAsync(){
    yield put({
        type: 'QUEST_NEXT_ASYNC',
        value: 1
    })
}

export function* watchQuestNext(){
    yield takeLatest('QUEST_NEXT', questNextAsync)
}