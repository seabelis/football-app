// Create the TeamsList that renders an <li> in an <ul> for every team. Inside the <li> a <Link> (from react-router-dom) should be used to link to another page located on /team/:id. When there are no teams yet, just display the text 'Loading...'.

import * as React from 'react'
import { Link } from 'react-router-dom'

// contains markup and retrieve data via the props
export default function TeamsList(props) {
    // console.log(props.teams[0])

  return (<div>
    { props.teams.map((id) => {
      if (!this.props.teams) return 'Loading...'
      return <div key={ id }>
      {<Link to={ `/team/${id}` }>{name}</Link>}</div>
    })}

  </div>)
}
