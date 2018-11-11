import React, { Component } from "react"
import propsTypes from "react"
import Tone from "tone/build/Tone.min.js"

class Block extends Component {
  constructor(props) {
    super(props)
  }

  triggerSound(note, key, meterIndex, blockIndex) {
    var synth = new Tone.Synth().toMaster()
    synth.triggerAttackRelease(`${note}${key}`, "4n")
    this.props.updateNote({
      note: note,
      key: key,
      meterIndex: meterIndex,
      blockIndex: blockIndex
    })
  }

  render() {
    const {
      isCNote,
      isBNote,
      note, //current note
      musicKey, //current key
      meterIndex, //current index of column (meter)
      blockIndex, //current index of note in a meter
      currentNote, //current note selected
      currentKey, //current key selected
      updateNote //function, update note in this column
    } = this.props

    const isCurrentNote = currentNote === note && currentKey === musicKey
    let classNames = "block"
    if (isCurrentNote) {
      classNames += " block--selected"
    }

    if (isCNote) {
      classNames += " block--border-bottom"
    }

    if (isBNote) {
      classNames += " block--border-top"
    }

    return (
      <div
        className={classNames}
        onClick={() =>
          this.triggerSound(note, musicKey, meterIndex, blockIndex)
        }
      >
        <div className="block-note">{note}</div>
      </div>
    )
  }
}

export default Block
