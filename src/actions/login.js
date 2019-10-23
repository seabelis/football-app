import request from "superagent";
const baseUrl = "http://localhost:4000";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const login = (email, password) => (dispatch, getState) => {
  console.log(email, password);
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(response => {
      console.log("What do we get?", response);
      //login should dispatch the JWT from the /login responsebody inside an action with type JWT.
      dispatch({ type: LOGIN_SUCCESS, payload: response.body.jwt });
    })
    .catch(console.error);
};

// You need a reducer named user and an action creator, login in actions.js. login should dispatch the JWT from the /login responsebody inside an action with type JWT.


