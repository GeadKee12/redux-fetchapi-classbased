import { message } from "antd";
import * as API from "../../api/Fetch";
import * as ActionType from "../action-types/users";

export const get_users = () => (dispatch) => {
  return API.FetchUser().then((data) => {
    console.log("Getting users data: ", data);

    // if (data.status !== 200) {
    //   message.error("Failed to Get Users");
    // } else {
    // dispatch(get_users_success(data));
    // }
  });
};

export const get_users_success = (data) => {
  return {
    type: ActionType.GET_USERS,
    data,
  };
};
