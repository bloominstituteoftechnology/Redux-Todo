import React from 'react';
import { connect } from 'react-redux';

const Notes = props => {
  
  return <h1>{props.word}</h1>
}

const mapStateToProps = state => {
  return {
    word: state.word
  };
}

export default connect(mapStateToProps, {})(Notes);