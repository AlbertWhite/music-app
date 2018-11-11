import React from "react"
import Tone from "tone/build/Tone.min.js"
import "./header.css"
import triangle from "../imgs/triangle.png"

const playMusic = notesSelected => {
  var synth = new Tone.Synth().toMaster()
  const noteSelectedKey = Object.keys(notesSelected)
  const myScale = []
  for (var i = 0; i < noteSelectedKey.length; i++) {
    const currentKey = noteSelectedKey[i]
    for (var j = 0; j < 3; j++) {
      const note = notesSelected[currentKey][j]
      if (note) {
        myScale.push(`${note.note}${note.key}`)
      }
    }
  }
  var pattern = new Tone.Pattern(
    function(time, note) {
      //the order of the notes passed in depends on the pattern
      synth.triggerAttackRelease(note, "4n", time)
    },
    myScale,
    "up"
  ).start(0)

  Tone.Transport.bpm.value = 120
  synth.volume.value = 15
  Tone.Transport.start("+0.1")
}

const Header = props => {
  const { notesSelected, updateMeter, meter } = props
  let meterThree = false
  if (meter === 3) {
    meterThree = true
  }
  return (
    <div className="header__container">
      <div>
        <input class="header__name" type="text" placeholder="Untitled melody" />
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

      <div className="header__button" onClick={() => playMusic(notesSelected)}>
        <img src={triangle} />
      </div>
    </div>
  )
}

export default Header
