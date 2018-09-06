import React from 'react'
import Meter from './meter'
import { NOTE_NUMBER } from '../../constants/config'

const Bar = ({ meter }) => {
  const column = []
  for (let i = 0; i < NOTE_NUMBER; i++) {
    column.push(Meter)
  }

  const columnList = []
  for (let i = 0; i < meter; i++) {
    columnList.push(column)
  }

  return columnList
}

export default Bar
