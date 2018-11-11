const initialState = {
  meter: 4,
  bpm: 180,
  key: {
    level: "c",
    majorMinor: "major"
  }
}

const controllerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INIT_STATE":
      return initialState //it is not necessary
    case "UPDATE_METER":
      return {
        ...state,
        meter: action.meter
      }
    case "UPDATE_BPM":
      return {
        ...state,
        bpm: action.bpm
      }
    default:
      return state
  }
}

export default controllerReducer
