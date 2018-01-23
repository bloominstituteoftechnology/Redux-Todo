import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../actions'

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    handleSubmit = (something) => {
        something.preventDefault();

        const value = this.state.value.trim();
        if(value) {
            this.props.addTodo({
                value,
                completed: false
            });
            this.setState({
                value: ''
            })
        }
    }
    handleChange = (something) => {
        const value = something.target.value;
        this.setState({
            value
        })
    }
    render() {
        return (
            <div className="todoList">
                <form onSubmit={this.handleSubmit}>
                    <input type="value" value={this.state.value} onChange={this.handleChange} />
                    <button type="submit">add todo</button>
                </form>
            <ul>  
                { this.props.todos.map((todo, i) => (
                    <TodoItem key={i} todo={todo} remove={(something) =>{ something.stopPoppagation(); this.props.removeTodo(i) }} toggleComplete={()=> { this.props.toggleTodo(i)}}/>
                ))}  
            </ul>
            </div>
        )}

const mapStateToProps = state => {
    return 
        //something

const mapDispatchToProps = dispatch => {
    return 
        //something


export default connect(mapStateToProps, mapDispatchToProps)(toDoApp);