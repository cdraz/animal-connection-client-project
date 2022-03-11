const contactReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CONTACTS':
            return action.payload;
        case 'UPDATE_ACTIVE_CONTACTS':
            return {...state, ...action.payload};    
        default:
            return state;
    }
};

export default contactReducer;