import React from "react";
import { connect } from "react-redux";

const MovieList = props => {
  return (
    <div>
      <div>{props.user.name}</div>
      <div>{props.movies}</div>
      <div>{props.moviesToWatch}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    movies: state.movies,
    moviesToWatch: state.moviesToWatch
  };
};

export default connect(
  mapStateToProps,
  {}
)(MovieList);
