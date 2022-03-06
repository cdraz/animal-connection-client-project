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
    let str = `?act=${obj.actFilter}`; //active filter (all, active, inactive)
    if(obj.minA !== '') str += '&aud=' + obj.minA;
    if(obj.maxA !== '') str += '&aud=' + obj.maxA;
    if(obj.breed !== '') str += '&breed=' + obj.breed;
    if(obj.maxL !== '') str += '&maxd=' + obj.maxL;
    if(obj.minL !== '') str += '&mind=' + obj.minL;
    if(obj.maxH !== '') str += '&maxd=' + obj.maxH;
    if(obj.minH !== '') str += '&mind=' + obj.minH;
    if(obj.maxN !== '') str += '&maxd=' + obj.maxN;
    if(obj.minN !== '') str += '&mind=' + obj.minN;
    if(obj.maxB !== '') str += '&maxd=' + obj.maxB;
    if(obj.minB !== '') str += '&mind=' + obj.minB;
    if(obj.maxW !== '') str += '&maxw=' + obj.maxW;
    if(obj.minW !== '') str += '&minw=' + obj.minW;
    if(obj.type !== '') str += '&typ=' + obj.type;
    console.log(str);
    return str
}
// audition:
// actFilter
// breed:
// isActive: 
// isInactive:
// maxD: 
// maxW: 
// minD: 
// minW:
// type: