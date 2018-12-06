import { connect } from 'react-redux'
import { increaseAction, decreaseAction } from '../actions/index'
import Counter from '../components/Counter'


const mapStateToProps = state => ({
  value: state.counter.count,
  decrementCount: state.decrement.decrementCount
})

const mapDispatchToProps = dispatch => ({
  onIncreaseClick: () => dispatch(increaseAction),
  onDecreaseClick: () => dispatch(decreaseAction)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

