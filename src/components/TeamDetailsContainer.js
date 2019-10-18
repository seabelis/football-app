import React from 'react'
import {connect} from 'react-redux'
import TeamDetails from './TeamDetails'
import {loadTeam} from '../actions/teams'

class TeamDetailsContainer extends React.Component {
  componentDidMount() {
    console.log('team details container')
    this.props.loadTeam(Number(this.props.match.params.id))
  }

  render() {
    console.log('this.props.team: ',this.props.team)
    return <TeamDetails team={this.props.team} />
  }
}

const mapStateToProps = state => ({
  team: state.team
})

export default connect(mapStateToProps, {loadTeam})(TeamDetailsContainer)