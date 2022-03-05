const animalReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ANIMALS':
            return action.payload;
        default:
            return state;
    }
};

export default userReducer;