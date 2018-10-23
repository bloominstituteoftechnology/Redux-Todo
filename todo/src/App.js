import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect}  from "react-redux"

const App = (props) => {
  console.log(props)
  return (
    <div>
      <h1>TODO LIST</h1>
      {props.items.map(item => <div>{item}</div>)}
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    items: state

  }
}

export default connect(mapStateToProps)(App);
