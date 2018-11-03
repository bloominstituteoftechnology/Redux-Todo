import React from 'react';
import { connect } from 'react-redux';

const Headline = props => {
    return <h1> Headline: {props.nombre} </h1>
}

const mapStateToProps = state => {
    return { nombre: state.name }
}

export default connect(mapStateToProps)(Headline)