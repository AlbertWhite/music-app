import { BAR_NUMBER } from "../constants/config"

const initialState = {
  notesSelected: {}
}

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NOTE":
      const { blockIndex, key, meterIndex, note } = action

      let newState = {
        ...state,
        notesSelected: {
          ...state.notesSelected,
          [meterIndex]: {
            ...state.notesSelected[meterIndex],
            [blockIndex]: {
              note: note,
              key: key
            }
          }
        }
      }

      //update note...

      return newState
    default:
      return state
  }
}

export default noteReducer
