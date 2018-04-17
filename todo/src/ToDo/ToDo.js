import React, { Component } from 'react';
import { connect } from "react-redux";





export default connect(mapStateToProps, { addToDo, updateToDo })(ToDo);