import { combineReducers } from 'redux'
import counter from './counter'
import decrement from './decrement'

export default combineReducers({
  counter,
  decrement
})