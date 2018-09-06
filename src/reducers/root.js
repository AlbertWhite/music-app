import { combineReducers } from 'redux'
import controllerReducer from './controller'
import noteReducer from './note'

export default combineReducers({
  controller: controllerReducer,
  note: noteReducer
})
