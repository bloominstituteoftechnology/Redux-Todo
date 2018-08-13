import { connect } from 'react-redux';
import { setFilter } from '../actions';
import Tab from '../components/Tab';

const mapStateToProps = (state, ownProps) => {
  return { active: ownProps.filter === state.filter };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { onClick: () => dispatch(setFilter(ownProps.filter)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tab);
