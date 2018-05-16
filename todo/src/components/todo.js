import React from 'react';
import { todo, todo2 } from '../actions';

const list = props => {
    
}



const mapStoreToProps = state => {
    return {

    };
};



export default connect(mapStoreToProps, { ADD_TODO, COMPLETE_TODO })(list);