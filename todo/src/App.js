import React, { Component } from 'react';

import TodoNav from './components/TodoNav/TodoNav';
import TodoList from './components/TodoList';
import { Container, Row, Col } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Row>
          <Col>
            <TodoNav/>
          </Col>
        </Row>
        <Row>
          <Col>
            <TodoList />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
