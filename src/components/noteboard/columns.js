import React from "react"
import Column from "./column"

const Columns = ({ meter, meterIndex, updateNote, columnsNotesSelected }) => {
  let columnList = []
  for (let i = 0; i < meter; i++) {
    const columnNoteSelected = columnsNotesSelected[i]
      ? columnsNotesSelected[i]
      : false
    columnList.push(
      <Column
        meterIndex={meterIndex}
        blockIndex={i}
        updateNote={updateNote}
        columnNoteSelected={columnNoteSelected}
      />
    )
  }

  return <div className="columns">{columnList}</div>
}

export default Columns
