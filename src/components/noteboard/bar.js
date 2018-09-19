import React from 'react'
import Column from './column'

const Bar = ({ meter }) => {
  let columnList = []
  for (let i = 0; i < meter; i++) {
    columnList.push(<Column />)
  }

  return <div className="bar">{columnList}</div>
}

export default Bar
