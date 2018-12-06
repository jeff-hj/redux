import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'
import { connect } from 'react-redux'

// reducers
const counter = (state = { count: 0 }, action) => {
  const count = state.count
  switch (action.type) {
    case 'INCREMENT':
      return { count: count + 1 }
    default:
      return state
  }
}
const decrement = (state = { decrementCount: 100 }, action) => {
  const decrementCount = state.decrementCount
  switch (action.type) {
    case 'DECREMENT':
      return { decrementCount: decrementCount - 1 }
    default:
      return state
  }
}

let rootReducer =  combineReducers({
  counter,
  decrement
})

const store = createStore(rootReducer)

// logger
console.log(store.getState());
store.subscribe(() =>
    console.log(store.getState())
);


const Counter = ({ value, decrementCount , onIncreaseClick, onDecreaseClick }) => (
  <div>
    <span>Increase: </span><span>{value}</span>
    <br/>
    <span>Decrease: </span><span>{decrementCount}</span>
    <br/>
    <button onClick={onIncreaseClick}>Increase</button>
    <button onClick={onDecreaseClick}>Decrease</button>
  </div>
)


const mapStateToProps = state => ({
  value: state.counter.count,
  decrementCount: state.decrement.decrementCount
})

const mapDispatchToProps = dispatch => ({
  onIncreaseClick: () => dispatch(increaseAction),
  onDecreaseClick: () => dispatch(decreaseAction)
})

// Action Creator
const increaseAction = { type: 'INCREMENT' }
const decreaseAction = { type: 'DECREMENT' }


let CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)



const App = () => (
  <div>
    <CounterContainer />
  </div>
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

