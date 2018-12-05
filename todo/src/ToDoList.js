import React, {Component} from 'react';
import {deletes} from "./Actions";
import { connect } from 'react-redux';

class ToDoList extends Component {
    deleteHandler = (index) => {
        this.props.deletes(index);
    }
    render(){
        return(
            <>
                {
                    this.props.items.map((item,index) => {
                        return( <p onClick={() => this.deleteHandler(index)} key={index}>{item}</p>)
                        }
                    )
                }
            </>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.items
    };
};
  
export default connect(mapStateToProps,{deletes})(ToDoList)
  