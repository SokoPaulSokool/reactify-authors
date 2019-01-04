import { SIGNUP, LOGIN } from "../actions/types";

const initialState = {
  user: {},
  loggedIn: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      window.location.href = "/login";
      break;
    case LOGIN:
      window.location.href = "/articles";
      return { ...state, user: action.payload, loggedIn: true };

    default:
      return state;
  }
};
