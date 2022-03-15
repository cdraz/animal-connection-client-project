const animalTypesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ANIMAL_TYPES':
            return action.payload;
        default:
            return state;
    }
};

export default animalTypesReducer;