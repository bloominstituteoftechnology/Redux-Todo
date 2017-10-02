import React, {Component} from 'react';
import {complete} from '../actions'
import {connect} from 'react-redux'
class Todoitem extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(i) {
        this.props.complete(i);
        localStorage.setItem('items', JSON.stringify(this.props.todo));
    };
    
    render() {
        return (
            <li>
                <form>
                    <div type="button" onClick={() => (this.handleClick(i))}>
                        <s>{item.name} {item.completed ?  'completed' : 'incomplete'}</s>
                    </div>
                </form> 
            </li>
        );
    }
}

export default connect(null, {complete})(Todoitem)