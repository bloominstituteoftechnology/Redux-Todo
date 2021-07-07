import { connect } from 'react-redux';
import { setFilter } from '../actions';
import Tab from '../components/Tab';

const mapStateToProps = ({ filter }, props) => ({
  active: props.filter === filter
});

const mapDispatchToProps = (dispatch, { filter }) => ({
  onClick: () => dispatch(setFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tab);
