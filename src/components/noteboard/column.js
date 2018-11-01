import React from "react"
import Block from "./block"
import { NOTE_NUMBER } from "../../constants/config"

const Column = ({ blockIndex, meterIndex, updateNote, columnNoteSelected }) => {
  const column = []

  let key = 3
  let note = "C"
  for (let i = 0; i < NOTE_NUMBER; i++) {
    key = 5 - parseInt(i / 7)
    switch (i % 7) {
      case 6:
        note = "C"
        break
      case 5:
        note = "D"
        break
      case 4:
        note = "E"
        break
      case 3:
        note = "F"
        break
      case 2:
        note = "G"
        break
      case 1:
        note = "A"
        break
      case 0:
        note = "B"
        break
    }

    column.push(
      <Block
        note={note}
        musicKey={key}
        meterIndex={meterIndex}
        blockIndex={blockIndex}
        updateNote={updateNote}
        currentNote={columnNoteSelected.note}
        currentKey={columnNoteSelected.key}
      />
    )
  }

  return <div className="column">{column}</div>
}

export default Column
