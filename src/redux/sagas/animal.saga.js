import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* filterAnimals(action) {
    const butt = action.payload;
    console.log(butt);
    console.log(createQuery(butt));
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const response = yield axios.get('/api/user', config);
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
    let str = '?';
    if(obj.isInactive && obj.isActive){str += 'act=all'}
    else{str += 'act=true'}
    if(obj.audition !== '') str += '&aud=' + obj.audition;
    if(obj.breed !== '') str += '&aud=' + obj.breed;
    if(obj.maxD !== '') str += '&aud=' + obj.maxD;
    if(obj.minD !== '') str += '&aud=' + obj.minD;
    if(obj.maxW !== '') str += '&aud=' + obj.maxW;
    if(obj.minW !== '') str += '&aud=' + obj.minW;
    if(obj.type !== '') str += '&aud=' + obj.type;
    console.log(str);
    //return str
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