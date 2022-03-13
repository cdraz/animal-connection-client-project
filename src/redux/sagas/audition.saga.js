import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Post an audition
function* addAudition(action) {
    try {
        const response = yield axios.post(`/api/audition`, action.payload);
        yield put({ type: 'FETCH_SELECTED_ANIMAL', payload: {id: action.payload.id }});
    }
    catch (error) {
        console.error('addAudition failed', error);
    }
}

// Delete an audition
function* deleteAudition(action) {
    try {
        console.log('IN DELETE AUDITION');
        const response = yield axios.delete(`/api/audition/${action.payload.id}`);
        yield put({ type: 'FETCH_SELECTED_ANIMAL', payload: {id: action.payload.animalsId }});
    }
    catch (error) {
        console.error('deleteAudition failed', error);
    }
}


function* auditionSaga() {
    yield takeLatest('ADD_AUDITION', addAudition);
    yield takeLatest('DELETE_AUDITION', deleteAudition);
}

export default auditionSaga;