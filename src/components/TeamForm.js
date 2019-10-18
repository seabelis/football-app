// Create the TeamForm container. This should be a simple functional component (without state) calling the onSubmit and onChange callbacks. The <input> fields should also use the values. Add a field for name, date and description and a submit button.

import React from 'react'

export default class AddTeamForm extends React.Component {
  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }


  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.name) {
      this.props.addTeam({
        name: this.state.name
      })
    }
  }

  render() {
    return (<div>
      <h2>Add Team</h2>

      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>)
  }
}
