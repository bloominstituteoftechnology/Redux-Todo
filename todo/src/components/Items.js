import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggle } from '../Actions'

class Items extends Component {
  toggle(e) {
    this.props.toggle(this.props.index);
  }
  render() {
    return (
      <li>
        <input onChange={this.toggle.bind.bind(this)} />
        {this.props.event.value}
      </li>
    )
  }
}

export default connect(null, { toggle }(Items));


