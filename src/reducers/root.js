import { combineReducer } from 'redux'
import controllerReducer from './controller'
import noteReducer from './note'

export default combineReducer({
  controller: controllerReducer,
  note: noteReducer
})
