import React, { Component } from 'react';
import Todo from './Todo';
import './App.css';
import { connect } from 'react-redux';
import { add, remove, markComplete } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      h: window.innerHeight,
      w: window.innerWidth
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({ h: window.innerHeight, w: window.innerWidth });
    });  
    console.log(this);
  }

  handleEnter = (e) => {
    if(e.which === 13 && e.target.value !== '' && e.target.value !== ' ') {
      this.props.add(e.target.value);
      e.target.value = '';
    }
  }

  render() {
    return (
      <div 
        className="App"
        style={{
          height: this.state.h,
          width: this.state.w,
          maxHeight: this.state.h,
          maxWidth: this.state.w
        }}>
        <section className="page">
          <header>Redux Todos</header>
          <div className="add-todos">
            <input 
              onKeyDown={this.handleEnter}
              type="text" 
              placeholder="Add Todo" />
          </div>
          <div className="todos">
            {
              this.props.todos.map((todo, i) => {
                return <Todo
                        id={todo.id}
                        remove={this.props.remove}
                        markComplete={this.props.markComplete}
                        key={i}
                        text={todo.text}
                        completed={todo.completed} />
              })
            }
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        todos: state
    };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps, { add, remove, markComplete })(App);
