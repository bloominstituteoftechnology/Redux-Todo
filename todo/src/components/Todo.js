import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleComplete } from '../actions';

class Todo extends Component {

}

export default connect(null, { toggleComplete })(Todo);