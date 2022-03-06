import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* filterAnimals(action) {
    const thing = action.payload
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const response = yield axios.get(`/api/animal`, {params: {...thing}});
        //yield put({ type: 'SET_ANIMALS', payload: response.data });
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

function* animalSaga() {
    yield takeLatest('FILTER_ANIMALS', filterAnimals);

    // For development and testing we will use this to get all animals
    // For final product we should be able to put all get requests through the filter saga & endpoint
    yield takeLatest('FETCH_ANIMALS', fetchAnimals);
}

export default animalSaga;

// function createQuery(obj){
//     let str = `?act=${obj.actFilter}`; //active filter (all, active, inactive)
//     if(obj.minA !== '') str += '&minA=' + obj.minA;
//     if(obj.maxA !== '') str += '&maxA=' + obj.maxA;
//     if(obj.breed !== '') str += '&breed=' + obj.breed;
//     if(obj.maxL !== '') str += '&maxL=' + obj.maxL;
//     if(obj.minL !== '') str += '&minL=' + obj.minL;
//     if(obj.maxH !== '') str += '&maxH=' + obj.maxH;
//     if(obj.minH !== '') str += '&minH=' + obj.minH;
//     if(obj.maxN !== '') str += '&maxN=' + obj.maxN;
//     if(obj.minN !== '') str += '&minN=' + obj.minN;
//     if(obj.maxB !== '') str += '&maxB=' + obj.maxB;
//     if(obj.minB !== '') str += '&minB=' + obj.minB;
//     if(obj.maxW !== '') str += '&maxW=' + obj.maxW;
//     if(obj.minW !== '') str += '&minW=' + obj.minW;
//     if(obj.type !== '') str += '&type=' + obj.type;
//     console.log(str);
//     return str
// }
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