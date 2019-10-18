// Create the EventDetails component. This is a functional component. This component will receive a event property that contains a date, a name and a description. Show the name in an <h1>, the date in an <i> and the description in an <p>. When the event is still loading, show 'Loading...'.
import * as React from "react";

function TeamDetails(props){
  console.log('props: ',props)
  if(!props.team.name) return 'Loading'
  return <div>
        {props.team.name}
    </div>
}
export default TeamDetails

