import React from "react"
import Tone from "tone/build/Tone.min.js"
import "./header.css"

const playMusic = notesSelected => {
  var synth = new Tone.FMSynth().toMaster()
  synth.triggerAttackRelease(`B5`, "4n", 1)
  synth.triggerAttackRelease(`C6`, "4n", 4)
  //synth.triggerAttackRelease(`${note}${key}`, "4n")
}

const Header = ({ notesSelected }) => {
  return (
    <div className="header__container">
      <button onClick={() => playMusic(notesSelected)}>play!</button>
    </div>
  )
}

export default Header
