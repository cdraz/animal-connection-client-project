import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* filterAnimals(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const response = yield axios.get(`/api/animal${createQuery(action.payload)}`, config);
        //yield put({ type: 'SET_ANIMALS', payload: response.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* animalSaga() {
    yield takeLatest('FILTER_ANIMALS', filterAnimals);
}

export default animalSaga;

function createQuery(obj){
    let str = `?${obj.actFilter}`;
    if(obj.audition !== '') str += '&aud=' + obj.audition;
    if(obj.breed !== '') str += '&breed=' + obj.breed;
    if(obj.maxD !== '') str += '&maxd=' + obj.maxD;
    if(obj.minD !== '') str += '&mind=' + obj.minD;
    if(obj.maxW !== '') str += '&maxw=' + obj.maxW;
    if(obj.minW !== '') str += '&minw=' + obj.minW;
    if(obj.type !== '') str += '&typ=' + obj.type;
    console.log(str);
    return str
}
// audition:
// breed:
// isActive: 
// isInactive:
// maxD: 
// maxW: 
// minD: 
// minW:
// type: