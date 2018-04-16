import React, {Component} from 'react';
import {deletes} from "./Actions";
import { connect } from 'react-redux';

class ToDoList extends Component {
    render(){
        console.log(this.props)
        return(
            <>
                {
                    this.props.items.map((item,index) => (
                        <p onClick={(event,num=index) => this.props.deletes(event,num)} name={index} key={index}>{item}</p>)
                    )
                }
    
            </>
        );
    }
}


// export default ToDoList;

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
  };
  
  export default connect(mapStateToProps)(ToDoList);
  