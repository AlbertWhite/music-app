import React from 'react'
import Bar from './bar'
import { BAR_NUMBER } from '../../constants/config'
import './noteboard.css'

const NoteBoard = props => {
  let BarList = []

  for (let i = 0; i < BAR_NUMBER; i++) {
    BarList.push(<Bar meter={props.meter} />)
  }

  return <div>{BarList}</div>
}

export default NoteBoard
