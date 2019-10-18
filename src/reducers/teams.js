//Create a reducer in reducers/teams.js that responds to the TEAMS_FETCHED action by replacing the state with action.teams. The default state should be null. Add the teams reducer to the reducers/index.js.

import { TEAMS_FETCHED, TEAM_CREATE_SUCCESS } from '../actions/teams'

export default (state = [], action = {}) => {
  switch (action.type) {
      case TEAMS_FETCHED:
          return action.payload;
      case TEAM_CREATE_SUCCESS:
        return [...state, {...action.payload}]
      default:
          return state;
}
}