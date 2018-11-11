import React, { Component } from "react"
import Tone from "tone/build/Tone.min.js"
import "./header.css"
import triangle from "../imgs/triangle.png"

const playMusic = (notesSelected, bpm, meter, myScale) => {
  var synth = new Tone.Synth().toMaster()

  var pattern = new Tone.Pattern(
    function(time, note) {
      //the order of the notes passed in depends on the pattern
      synth.triggerAttackRelease(note, "4n", time)
    },
    myScale,
    "up"
  ).start(0)

  pattern.iterations = myScale.length

  Tone.Transport.bpm.value = bpm
  synth.volume.value = 15
  Tone.Transport.stop("+0.1")
  Tone.Transport.start("+0.1")
}

class Header extends Component {
  componentDidUpdate() {
    const { notesSelected, meter } = this.props
    const noteSelectedKey = Object.keys(notesSelected)
    const myScale = []
    for (var i = 0; i < noteSelectedKey.length; i++) {
      const currentKey = noteSelectedKey[i]
      for (var j = 0; j < meter; j++) {
        const note = notesSelected[currentKey][j]
        if (note) {
          myScale.push(`${note.note}${note.key}`)
        } else if (note == undefined) {
          myScale.push("")
        }
      }
    }
    this.myScale = myScale
  }

  render() {
    const { notesSelected, updateMeter, meter, bpm, updateBpm } = this.props
    let meterThree = false
    if (meter === 3) {
      meterThree = true
    }
    return (
      <div className="header__container">
        <div>
          <input
            className="header__name"
            type="text"
            placeholder="Untitled melody"
          />
        </div>
        <div className="header__bpm">
          <input
            className="header__bpm-input"
            type="number"
            value={bpm}
            onChange={e => {
              updateBpm(e.target.value)
            }}
          />
          <span className="header__bpm-text">bpm</span>
        </div>
        <div className="header__meter-selector">
          <span
            className={
              meterThree
                ? "header__meter-text--selected header__meter-text"
                : "header__meter-text"
            }
            onClick={() => {
              updateMeter(3)
            }}
          >
            x3
          </span>
          <span
            className={
              !meterThree
                ? "header__meter-text--selected header__meter-text"
                : "header__meter-text"
            }
            onClick={() => {
              updateMeter(4)
            }}
          >
            x4
          </span>
        </div>

        <div
          className="header__button"
          onClick={() => playMusic(notesSelected, bpm, meter, this.myScale)}
        >
          <img src={triangle} />
        </div>
      </div>
    )
  }
}

export default Header
