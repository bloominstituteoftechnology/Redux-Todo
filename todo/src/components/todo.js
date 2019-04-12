import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import Header from './header/header'
import Section from './section/section'
import Input from './input/input'

const Todo = ({name, list, info}) => (
    <TODO>
        <Header />
        <Section title='NAME' data={name} />
        <Section title='TODO LIST' data={list} />
        <Section title='INFO' data={info} />
        <Input />
    </TODO>
)

const mapStateToProps = (state) => {
    return {
        name: state.name,
        list: state.list,
        info: state.info,
    }
}

const TODO = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');

    background-color: #222;
    // color: #0F3;
    color: #FFB000;
    font-family: 'Roboto Mono', monospace;
    font-size: 1.6rem;
    height: 100vh;
    padding: 1rem;
    width: 100vw;

    pre, span, h2, p, figure {
        line-height: 2.4rem;
        // text-shadow: #0F3 0 0 1rem;
        text-shadow: #FFB000 0 0 1rem;
    }
    
`

export default connect(mapStateToProps, {})(Todo)