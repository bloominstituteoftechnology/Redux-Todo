import React from 'react'
export default props => (
  <div>
    <p>{props.value}</p>
    <button onClick={() => props.onComplete(props.value)}>finish me</button>
  </div>
)
