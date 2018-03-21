import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addItem } from '../actions/AddAction'

class MasterList extends Component {
    
    render() {
        return(
            <ul>
                <li>Walk The Dog</li>
                <form><input></input></form>

            </ul>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        list: state
    }
}
export default connect(mapStateToProps, { addItem })(MasterList);