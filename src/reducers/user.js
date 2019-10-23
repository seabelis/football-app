import { LOGIN_SUCCESS } from '../actions/login'

const token = localStorage.getItem("jwt");
// The user reducer should use an empty string as its inital state.
const initialState = token ? token : null;

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
        // The user reducer should respond to JWT by returning the action's payload to save the token to the state.
      localStorage.setItem("jwt", action.payload);
      return action.payload;
    default:
      return state;
  }
};
