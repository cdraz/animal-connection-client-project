import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchAnimalTypes() {
    try {
        const response = yield axios.get(`/api/types`);
        yield put({ type: 'SET_ANIMAL_TYPES', payload: response.data });
    }
    catch (error) {
        console.error('fetchAnimalTypes failed', error);
    }
}

function* animalTypesSaga() {
    yield takeLatest('FETCH_ANIMAL_TYPES', fetchAnimalTypes);
}

export default animalTypesSaga;