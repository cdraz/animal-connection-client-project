import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchContacts() {
    try {
        const response = yield axios.get(`/api/contact`);
        yield put({ type: 'SET_CONTACTS', payload: response.data });
    }
    catch (error) {
        console.error('fetchContacts failed', error);
    }
}

function* addContacts(action) {
    try {
        console.log('contact post action.payload',action.payload);
        
        const response = yield axios.post(`/api/contact`, action.payload);
        yield put({ type: 'FETCH_CONTACTS',});
    }
    catch (error) {
        console.error('fetchContacts failed', error);
    }
}

function* saveChanges(action) {
    try{
        yield axios.put('/api/contact', action.payload);
        yield put ({
            type: 'FETCH_CONTACTS'

        })
    }
    catch (error) {
        console.error('fetchContacts failed', error);
}
}


function* contactSaga () {
    yield takeLatest('FETCH_CONTACTS', fetchContacts);
    yield takeLatest('ADD_CONTACTS', addContacts);
    yield takeLatest('SAVE_CONTACT_CHANGES',saveChanges);

}

export default contactSaga;