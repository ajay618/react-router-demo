import React from 'react'
import One from '../Components/One'

function Profile(props) {
  return (
    <div style={{backgroundColor:'green'}}>
      <h1>Profile Page!</h1>
      <One data={props.data}/>
    </div>
  )
}

export default Profile