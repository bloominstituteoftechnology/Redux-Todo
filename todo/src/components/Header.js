import React, { Component } from 'react';
import Card from './styled-component/Card';
import { connect } from 'react-redux';
import { updateTodo } from '../actions/action';


class Header extends Component {
    constructor(props) {
        super(props);
    }
    updateComplete = (id) => {
        this.props.updateTodo(id);
    }
    render() {
        console.log(this.props.items)
        return (
            <div>
              <Card>
                  <h1>Complete List</h1>
                   {this.props.items.map( item => {
                         return(
                             <h3>{item.value}</h3>
                         )
                   })}
              </Card>  
            </div>
        );
    }
}

// export default Todo;

const mapStateToProps = (state) => {
     return {
         items: state
     }
}

export default connect(mapStateToProps)(Header);