import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './actions/action'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { newTodo: '' }
    this.addTodo = this.addTodo.bind(this)
  }

  addTodo(e) {
    e.preventDefault()
  }

  changeHandler = e => {
    console.log(this.state)
    this.setState({ newTodo: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <form>
          <input
            type="text"
            placeholder="enter text"
            onChange={this.changeHandler}
            onSubmit={this.addTodo}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    newTodo: App.prototype.addTodo
  }
}

export default connect(
  mapStateToProps,
  { addTodo }
)(App)
