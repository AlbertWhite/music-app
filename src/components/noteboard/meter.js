import React from 'react'
import Tone from 'tone/build/Tone.min.js'

const triggerSound = () => {
  var synth = new Tone.Synth().toMaster()
  synth.triggerAttackRelease('D4', '4n')
}

const Meter = () => {
  return <div className="meter" onClick={triggerSound} />
}

export default Meter
