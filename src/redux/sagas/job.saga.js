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

function* fetchJobDetails(action) {
    try {
        const response = yield axios.get(`/api/job/${action.payload}`);
        console.log('response.data for set selected job details is ',response.data);
        
        yield put({ type: 'SET_SELECTED_JOB_DETAILS', payload: response.data[0] });
    }
    catch (error) {
        console.error('fetchSelectedJob failed', error);
    }
}

function* deleteJob(action) {
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      };
      // send the action.payload as the params
      // the config includes credentials which
      // allow the server session to recognize the user
      yield axios.delete(`/api/job/${action.payload}`, config);
    } catch (error) {
      console.log("DELETE Job failed", error);
    }
  }

function* jobSaga() {
    yield takeLatest('FILTER_JOBS', filterJobs);

    // For development and testing we will use this to get all animals
    // For final product we should be able to put all get requests through the filter saga & endpoint
    yield takeLatest('FETCH_JOBS', fetchJobs);
    yield takeLatest('ADD_JOB', addJob);
    yield takeLatest("FETCH_JOB_DETAILS", fetchJobDetails);
    yield takeLatest("DELETE_JOB", deleteJob);
    
}

export default jobSaga;
