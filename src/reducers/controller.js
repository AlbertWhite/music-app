const initialState = {
  meter: 3,
  bpm: 60,
  key: {
    level: 'c',
    majorMinor: 'major'
  }
}

const controllerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_STATE':
      return initialState //it is not necessary
    default:
      return state
  }
}

export default controllerReducer
