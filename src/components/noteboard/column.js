import React from 'react'
import Meter from './meter'
import { NOTE_NUMBER } from '../../constants/config'

const Column = () => {
  const column = []

  for (let i = 0; i < NOTE_NUMBER; i++) {
    column.push(<Meter />)
  }

  return <div className="column">{column}</div>
}

export default Column
