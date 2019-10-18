// Create the TeamsList that renders an <li> in an <ul> for every team. Inside the <li> a <Link> (from react-router-dom) should be used to link to another page located on /team/:id. When there are no teams yet, just display the text 'Loading...'.

import * as React from "react";
import { Link } from "react-router-dom";

// contains markup and retrieve data via the props
export default function TeamsList(props) {
  if (!props.teams) return 'Loading...'

  console.log('props: ', props);
  console.log('props.teams: ', props.teams);


  return (
    <div>
      <ul>
      {props.teams.map((team) => {
        return (
            <li key={team.id}>
              {<Link to={`/team/${team.id}`}>{team.name}</Link>}
            </li>
        );
      })}
      </ul>
    </div>
  );
}
