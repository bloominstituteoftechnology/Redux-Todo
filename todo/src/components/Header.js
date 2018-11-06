import React, { Component } from 'react';
import Card from './styled-component/Card';
import { connect } from 'react-redux';
import { updateTodo, deleteTodo } from '../actions/action';
import Button from './styled-component/Button';


class Header extends Component {
    constructor(props) {
        super(props);
    }
    updateComplete = (id) => {
        this.props.updateTodo(id);
        console.log("working");
    }
    render() {
        console.log(this.props)
        return (
            <div>
              <Card>
                  <h1>Complete List</h1>
                   {this.props.items.map( item => {
                         return(
                             <div className='header' key={item.value}>
                                <h3 
                                 onClick={ () => this.props.updateTodo(item.id)}
                                 className={`item-${item.completed}`}
                                 
                                 >{item.value}</h3>
                                <input type='button' value="Delete" />
                                <input type='button' value="Edit" />
                             </div>
                         )
                   })}
                <div className='buttons'>
                    <Button>All</Button>
                    <Button>Completed</Button>
                    <Button>Active</Button>
                </div>   
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

export default connect(mapStateToProps, {updateTodo})(Header);