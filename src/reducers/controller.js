const initialState = {
  meter: 3,
  bpm: 60,
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
    default:
      return state
  }
}

export default controllerReducer
