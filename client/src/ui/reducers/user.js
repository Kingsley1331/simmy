const userReducer = (state = [], action) => {
  let newSate;
  switch (action.type) {
    case "GET_USERS":
      newSate = action.payload;
      console.log("%cLIST OF USERS", "color:blue; font-weight:bold;");
      console.log("===> state", newSate);
      return newSate;
    case "DELETE_USERS":
      state = [];
      console.log("%cDELETING USER", "color:blue; font-weight:bold;");
      return state;
    default:
      return state;
    case "ERROR":
      state = [];
      console.log("%cERROR", "color:red; font-weight:bold;");
      return action.payload;
  }
};

export default userReducer;
