import React from 'react';
import {connect} from 'react-redux';

const Headline = (props) => { 
    return (
        <h1>Hi, {props.name}</h1>
    )
}

const MapStateToProps = (state) => {
    return {name: state.name}
}

// this establishes MapStateToProps, which is given state and retursn an object, i.e. the name entered in the form

export default connect(MapStateToProps)(Headline);
// this marries 'name' in state to 

