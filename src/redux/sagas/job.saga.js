import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* filterJobs(action) {
    const thing = action.payload
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const response = yield axios.get(`/api/job${createQuery(action.payload)}`, {params: {...thing}});
        //yield put({ type: 'SET_JOBS', payload: response.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* fetchJobs() {
    try {
        const response = yield axios.get(`/api/job`);
        yield put({ type: 'SET_JOBS', payload: response.data });
    }
    catch (error) {
        console.error('fetchJobs failed', error);
    }
}

function* addJob(action) {
    try {
        console.log('job post action.payload',action.payload);
        
        const response = yield axios.post(`/api/job`, action.payload);
        yield put({ type: 'FETCH_JOBS',});
    }
    catch (error) {
        console.error('fetchJobs failed', error);
    }
}

function* jobSaga() {
    yield takeLatest('FILTER_JOBS', filterJobs);

    // For development and testing we will use this to get all animals
    // For final product we should be able to put all get requests through the filter saga & endpoint
    yield takeLatest('FETCH_JOBS', fetchJobs);
    yield takeLatest('ADD_JOB', addJob);
}

export default jobSaga;
