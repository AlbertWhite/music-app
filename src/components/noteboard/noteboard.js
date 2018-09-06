import React from 'react'
import Bar from './bar'

const NoteBoard = props => {
  return (
    <div>
      <Bar meter={props.meter} />
    </div>
  )
}

export default NoteBoard
