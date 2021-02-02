import {  takeLatest, put } from 'redux-saga/effects'
//import { QUEST_NEXT_ASYNC } from '../constants/quiz'

export function* questNextAsync(){
    // yield put({
    //     type: 'QUEST_NEXT_ASYNC',
    //     value: 1
    // })
}

export function* watchQuestNext(){
    yield takeLatest('QUEST_NEXT_ASYNC', questNextAsync)
}

//QUEST_NEXT_ASYNC