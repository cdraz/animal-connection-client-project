import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchContacts(action) {
    const qFilter = action.payload
    try {
        const response = yield axios.get(`/api/contact`, {params: qFilter});
        yield put({ type: 'SET_CONTACTS', payload: response.data });
    }
    catch (error) {
        console.error('fetchContacts failed', error);
    }
}

function* addContacts(action) {
    try {
        console.log('contact post action.payload', action.payload);
        
        const response = yield axios.post(`/api/contact`, action.payload);
        yield put({ type: 'FETCH_CONTACTS',});
    }
    catch (error) {
        console.error('fetchContacts failed', error);
    }
}

function* fetchContactDetails(action){
    try {
        const responseContact = yield axios.get(`/api/contact/${action.payload.id}`);
        yield put({ type: 'SET_SELECTED_CONTACT', payload: responseContact.data[0]});
    }
    catch (error) {
        console.error('fetchContacts failed', action.payload, error);
    }
}

function* deleteContacts(action) {
    try{
        
    yield axios.delete(`/api/contact${action.payload}`);
    } catch (error) {
        console.log('DELETE contact failed', error);
    }
}

function* saveChanges(action){
    try{
        
    yield axios.put(`/api/contact`, action.payload);
    } catch (error) {
        console.log('UPDATE contact failed', error);
    }
}


function* contactSaga () {
    yield takeLatest('FETCH_CONTACTS', fetchContacts);
    yield takeLatest('FETCH_SELECTED_CONTACT', fetchContactDetails);
    yield takeLatest('ADD_CONTACTS', addContacts);
    yield takeLatest('SAVE_CONTACT_CHANGES',saveChanges);
    yield takeLatest('DELETE_CONTACTS', deleteContacts);
}

export default contactSaga;