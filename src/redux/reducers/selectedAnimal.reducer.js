import { combineReducers } from 'redux';

const animalDetails = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SELECTED_ANIMAL':
            return action.payload[0];
        default:
            return state;
    }
};

const workHistory = (state = [], action) => {
    switch (action.type) {
        case 'SET_SELECTED_ANIMAL_WORK_HISTORY':
            return action.payload;
        default:
            return state;
    }
};

const auditionHistory = (state = [], action) => {
    switch (action.type) {
        case 'SET_SELECTED_ANIMAL_AUDITION_HISTORY':
            return action.payload;
        default:
            return state;
    }
};

const animalContactInfo = (state = [], action) => {
    switch (action.type) {
        case 'SET_SELECTED_ANIMAL_CONTACT_INFO':
            return action.payload;
        default:
            return state;
    }
}

const selectedAnimalReducer = combineReducers({
    animalDetails,
    workHistory,
    auditionHistory,
    animalContactInfo
});

export default selectedAnimalReducer;