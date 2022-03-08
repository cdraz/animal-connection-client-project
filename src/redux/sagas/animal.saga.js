import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* filterAnimals(action) {
    const qFilter = action.payload
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const response = yield axios.get(`/api/animal`, {params: qFilter});
        yield put({ type: 'SET_ANIMALS', payload: response.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* fetchAnimals() {
    try {
        const response = yield axios.get(`/api/animal`);
        yield put({ type: 'SET_ANIMALS', payload: response.data });
    }
    catch (error) {
        console.error('fetchAnimals failed', error);
    }
}

function* fetchSelectedAnimal(action) {
    try {
        const response = yield axios.get(`/api/animal/${action.payload}`);
        yield put({ type: 'SET_SELECTED_ANIMAL', payload: response.data });
    }
    catch (error) {
        console.error('fetchSelectedAnimal failed', error);
    }
}

function* animalSaga() {
    yield takeLatest('FILTER_ANIMALS', filterAnimals);

    // For development and testing we will use this to get all animals
    // For final product we should be able to put all get requests through the filter saga & endpoint
    yield takeLatest('FETCH_ANIMALS', fetchAnimals);

    yield takeLatest('FETCH_SELECTED_ANIMAL', fetchSelectedAnimal);
}

export default animalSaga;