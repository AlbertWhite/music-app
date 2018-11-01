import React from "react"
import Columns from "./columns"
import { BAR_NUMBER } from "../../constants/config"
import "./noteboard.css"

const NoteBoard = props => {
  let columns = []
  for (let i = 0; i < BAR_NUMBER; i++) {
    const columnsNotesSelected = props.notesSelected[i]
      ? props.notesSelected[i]
      : false
    columns.push(
      <Columns
        {...props}
        meterIndex={i}
        columnsNotesSelected={columnsNotesSelected}
      />
    )
  }

  return <div className="noteboard__container">{columns}</div>
}

export default NoteBoard
