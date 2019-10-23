import React from 'react'

export default function(props){
    return <form onSubmit={props.onSubmit}>
        <label>Login</label>
        <input value={props.name} name="name" onChange={props.onChange}/>
        <input type="submit"/>
    </form>
    
}

// You need a reducer named user and an action creator login in actions.js. login should dispatch the JWT from the /login responsebody inside an action with type JWT.

// The user reducer should use an empty string as its inital state, unlike the images reducer which uses an empty array. The user reducer should respond to JWT by returning the action's payload to save the token to the state.