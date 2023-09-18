const allUserReducer = (state = null, action) => {
  switch (action.type) {
    case "GET_ALL_USER":
      return state;

    case "SET_ALL_USER":
      console.log(action.allUsers);
      return action.allUsers;

    default:
      return state;
  }
};

export default allUserReducer;
