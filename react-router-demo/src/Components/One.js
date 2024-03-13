import React from 'react'
import Two from './Two'

function One(props) {
  return (
    <div style={{backgroundColor:'yellow',width:'900px'}}>
        <h1>Layer One</h1>
        <Two data={props.data}/>
    </div>
  )
}

export default One