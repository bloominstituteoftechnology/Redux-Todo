import { connect } from 'react-redux'
import { setVisibleFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.setvisibleFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibleFilter(ownProps.filter))
  }
})

const Filter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default Filter