import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import TeamsListContainer from './components/TeamsListContainer'
import TeamDetailsContainer from './components/TeamDetailsContainer'
import LoginFormContainer from './components/LoginFormContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Link to="/login"> Login</Link>
          <Link to='/'> Teams </Link>
          <Route path="/" exact component={TeamsListContainer} />
          <Route path="/team/:id" exact component={TeamDetailsContainer} />
          <Route path="/login" exact component={LoginFormContainer} />
        </div>
      </Provider>
    );
  }
}

export default App