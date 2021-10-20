import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import usersReducer from "./usersReducer";

// const rootReducer = (history) =>
//   combineReducers({
//     router: connectRouter(history),
//     usersReducer,
//   });
console.log(usersReducer);
const rootReducer = () => {
  combineReducers({
    key1: usersReducer,
  });
};

export default rootReducer;
