import React, { Component } from 'react'
import Input from './components/Input'
import Todo from './components/Todo'
import { Container } from './styles/Global'

class App extends Component {
  render() {
    return (
      <Container>
        <p>hello world</p>
        <Input />
        <Todo />
      </Container>
    )
  }
}

export default App
