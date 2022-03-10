const activeJobsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_JOBS':
            return action.payload;
        default:
            return state;
    }
};

export default activeJobsReducer;