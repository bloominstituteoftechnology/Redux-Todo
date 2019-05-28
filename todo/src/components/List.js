import React from 'react';

export default (props) => {
  const events = props.events.map((event, i) =>
    <Item index={i} key={i} event={event} />)

  return (
    <ul>
      {events}
    </ul>
  )
}