import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from "styled-components";

import TodoListContainer from './components/TodoListContainer';
import TodoItemDescription from './components/TodoDescription';
import Home from './Home';

const Main = styled.div`
  border: solid 2px rgba(200, 200, 200, 0.4);
  border-radius: 10px;
  box-shadow: 1px 1px 50px 1px rgba(0,0,0,.2);
  background: rgba(255, 255, 255, .9);
  margin: auto;
  margin-top: 30px;
  max-width: 750px;
  min-width: 200px;
  text-align: center;
  padding: 15px;
  padding-bottom: 25px;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Main>
          <nav>
            <NavLink className="nav-item" activeClassName="active" to="/">Home</NavLink>
          </nav>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route
            exact
            path="/todos"
            render={props => <TodoListContainer {...props} />}
          />
          <Route
            path="/todos/:id"
            render={props => (
              <TodoItemDescription {...props} todoList={this.props.todos} />
            )}
          />
        </Main>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todoList
});

export default connect(mapStateToProps)(App);
