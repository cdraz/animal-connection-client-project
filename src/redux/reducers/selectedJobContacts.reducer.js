const selectedJobContacts = (state = {}, action) => {
    switch (action.type) {
      case "SET_SELECTED_JOB_CONTACTS":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default selectedJobContacts;