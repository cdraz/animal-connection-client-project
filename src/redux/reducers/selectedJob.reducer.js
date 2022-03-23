const selectedJob = (state = {}, action) => {
    switch (action.type) {
      case "SET_SELECTED_JOB":
        return action.payload;
        case 'UPDATE_SELECTED_JOB':
            return {
                // Return our current selected animal, but update the existing properties with our payload
                ...state,
                ...action.payload
            }
      default:
        return state;
    }
  };
  
  export default selectedJob;