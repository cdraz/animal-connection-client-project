const selectedAnimalReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SELECTED_ANIMAL':
            return action.payload[0];
        case 'UPDATE_SELECTED_ANIMAL':
            return {
                // Return our current selected animal, but update the existing properties with our payload
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};

export default selectedAnimalReducer;