import React from "react"
import Tone from "tone/build/Tone.min.js"

const triggerSound = (note, key) => {
  var synth = new Tone.Synth().toMaster()
  synth.triggerAttackRelease(`${note}${key}`, "4n")
}

const Meter = ({ musicNote, musicKey }) => {
  return (
    <div className="meter" onClick={() => triggerSound(musicNote, musicKey)} />
  )
}

export default Meter
