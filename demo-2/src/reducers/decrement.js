const decrement = (state = { decrementCount: 100 }, action) => {
  const decrementCount = state.decrementCount
  switch (action.type) {
    case 'DECREMENT':
      return { decrementCount: decrementCount - 1 }
    default:
      return state
  }
}

export default decrement