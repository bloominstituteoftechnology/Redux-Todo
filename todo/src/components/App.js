import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {

  render() {
    return(
      null
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state
  };
};

export default connect(mapStateToProps, {})(App);