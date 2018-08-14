import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addItem, deleteItem } from '../actions';


class List extends Component {
    render() {
        return (
            <form>
                <input></input>
                <button>Sumbit</button>
                
            </form>
            <ol>list title
                <li>first item </li>
            </ol>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

export default connect(mapStateToProps, )(List)