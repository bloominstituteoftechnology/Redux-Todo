import React, { Component } from 'react';
import { connect } from "react-redux";
import TODO from './Todo'


const Todolist = props =>{
        return (
    <ul className="list-group">{
            props.todos.map( (todo,i) =>{
                    
                return(
                        <TODO todo={todo} key={i}/>
                )
            })
    }

  
 
</ul>
            
        )
            
        
}
const mapStateToProps = state => {
        return { todos: state };
      };
      
    export default connect(mapStateToProps)(Todolist);
