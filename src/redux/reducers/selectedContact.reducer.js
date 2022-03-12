const selectedContact = (state = {}, action) => {
    switch (action.type) {
      case "SET_SELECTED_CONTACT":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default selectedContact;