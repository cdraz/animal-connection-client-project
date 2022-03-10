const selectedAnimalReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SELECTED_ANIMAL':
            return action.payload[0];
        default:
            return state;
    }
};

export default selectedAnimalReducer;