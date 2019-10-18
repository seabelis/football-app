import React from 'react'
import {loadTeams} from '../actions/teams'
import {connect} from 'react-redux'
import TeamsList from './TeamsList'

class TeamsListContainer extends React.Component {
  componentDidMount() {
    // console.log('hi');
    
    this.props.loadTeams()
  }

  render() {
    if (!this.props.teams) return 'Loading...'
    return <TeamsList teams={this.props.teams} />
  }
}

const mapStateToProps = state => ({
  teams: state.teams
})

export default connect(mapStateToProps, {loadTeams})(TeamsListContainer)