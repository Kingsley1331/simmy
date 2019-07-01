export const scenesReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_SCENES":
      state = action.payload;
      console.log("%cLIST OF SCENES", "color:blue; font-weight:bold;");
      break;
    default:
  }
  return state;
};

export const sceneReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_SCENE":
      state = action.payload;
      console.log("%cA SINGLE SCENE", "color:blue; font-weight:bold;");
      break;
    // case 'UPDATE_SCENE':
    //   state = {users: 'users', userList: action.payload};
    //   console.log('%cUPDATING SCENE', 'color:blue; font-weight:bold;');
    //   break;
    // case 'DELETE_SCENE':
    //   state = {users: 'users', userList: action.payload};
    //   console.log('%cDELETING SCENE', 'color:blue; font-weight:bold;');
    //   break;
    default:
  }
  return state;
};
