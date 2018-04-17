import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoList from './components/TodoList'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class App extends Component {
  render () {
    return (
      <Container>
        <TodoList todos={this.props.todos} />
      </Container>
    )
  }
}
App.propTypes = {
  todos: PropTypes.array.isRequired
}

const mapStateToProps = state => ({ todos: state })
export default connect(mapStateToProps)(App)
