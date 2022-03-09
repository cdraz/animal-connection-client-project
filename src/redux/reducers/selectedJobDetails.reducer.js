const selectedJobDetails = (state = {}, action) => {
    switch (action.type) {
      case "SET_SELECTED_JOB_DETAILS":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default selectedJobDetails;