import React, { Component } from 'react';
import Card from './styled-component/Card';
import { connect } from 'react-redux';
import { updateTodo, deleteTodo, toggleTodo } from '../actions/action';
import Button from './styled-component/Button';


class Header extends Component {
    constructor(props) {
        super(props);
    }
    updateComplete = (id) => {
        this.props.toggleTodo(id);
        console.log("working");
    }
    
    render() {
        console.log(this.props)
        return (
            <div>
              <Card>
                  <h1>Complete List</h1>
                   {this.props.items.map( (item,index) => {
                         return(
                             <div className='header' key={item.value}>
                                <h3 
                                 onClick={ () => this.props.toggleTodo(item.id)}
                                 className={`item-${item.completed}`}
                                 
                                 >{item.value}</h3>
                                <input 
                                 type='button' 
                                 value="Delete"
                                 onClick={ () => this.props.deleteTodo(index)} />
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

export default connect(mapStateToProps, {toggleTodo, deleteTodo})(Header);