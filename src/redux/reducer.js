import { LOGIN, LOGOUT } from "./types";

const initialState = {
  user: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("KLEDO_USER", action.payload);
      return { user: action.payload };
    case LOGOUT:
      localStorage.removeItem("KLEDO_USER");
      return { user: {} };
    default:
  }
}

export default reducer;
