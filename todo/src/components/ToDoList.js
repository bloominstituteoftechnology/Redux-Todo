import React, {Component} from 'react';
import {remove,switchDo,addToDo} from '../actions';
import {connect} from 'react-redux';
import './ToDoList.css';


class ToDoList extends Component{
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.done = this.done.bind(this);
    this.remove = this.remove.bind(this);
  }

  remove(id){
    this.props.remove(id);
  }

  done(id){
    this.props.switchDo(id);
  }

  handleChange(event){
    this.setState({value:event.target.value});
  }

  handleSubmit(event){
    this.props.addToDo(this.state.value);
    this.setState({value:''});
    event.preventDefault();

  }
  
  render(){
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
       <input type="text" value={this.state.value} onChange={this.handleChange} />

      </form>
      <div>
        <h1 className="title">ToDos</h1>
        {
          this.props.list.todos.map( (e,i)=>{
            if(e && e.completed === true){
              return (
              <div className="todo" key={i}>
                <h1 className="completed" onClick={()=>this.done(i)}>{e.text}
            <button className="remove"onClick={()=>this.remove(i)}>Remove</button>

                
                </h1>
                                </div>

              );
            }
            else{
              if(e){
                return (

              <div className="todo">
                <h1 className="notCompleted" key={i} onClick={()=>this.done(i)}>{e.text}</h1>
                </div>
                );
              }
              else{
                return <span key={i}></span>;
              }
            }
          })
        }
      </div>
    </div>
    );
  }
}
const mapStateToProps = (state) =>{
 
  return {
    list: state
  };
}
export default connect(mapStateToProps, {remove,switchDo,addToDo})(ToDoList);
