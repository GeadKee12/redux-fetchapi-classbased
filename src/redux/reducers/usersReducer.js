import * as ActionType from "../action-types/users";

const initialState = {
  byId: {},
};
const usersReducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state)); // to make sure the "newState" is an object

  switch (action.type) {
    case ActionType.GET_USERS: {
      action.users.forEach((user) => {
        newState.byId[user.id] = user;
      });

      return newState;
    }

    default:
      return state;
  }
};

export default usersReducer;
