import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {additem, toggleitem, removeitem} from '../../actions'

class Input extends Component {
    constructor() {
        super()
        this.state = {
            text: '',
        }
    }
    componentDidMount = () => document.addEventListener('keydown', this.h_keyDown)

    //didn't put this inline to make it easier to see what's happening
    h_add = text => this.props.additem(text)
    h_complete = id => this.props.toggleitem(parseInt(id))
    h_remove = id => this.props.removeitem(parseInt(id))

    h_input = () => {
        let action = this.state.text.split(' ')[0]
        let payload = this.state.text.split(' ').splice(1).join(' ')
        switch(action) {
            case 'ADD':
                this.h_add(payload)
                break
            case 'COMPLETE':
                this.h_complete(payload)
                break
            case 'REMOVE':
                this.h_remove(payload)
                break
            default:
                this.setState({text: ''})
        }
        //throws a warning about setting state, not sure why h_keyDown doesn't...
        this.setState(prevState => prevState.text = '')
    }

    h_keyDown = e => {
        this.setState(prevState => {
            let text = prevState.text
            if(e.key === 'Backspace') text = text.slice(0,-1)
            else if(e.key === 'Enter') this.h_input()
            else if(e.key.length > 1) return //removes special characters
            else {
                let input = e.key.replace(/[^a-z0-9 ]/gi,'') //alphanumeric only
                text = text.concat(input.toUpperCase()) //transforms to uppercase
            }
            return {
                text: text
            }
        })
    }
    render = () => 
        <INPUT tabIndex='0' onKeyUp={this.test}>
            <pre>YOU@TODO: </pre>
            <pre id='input' onKeyUp={this.h_keyUp}>{this.state.text}</pre>
            <figure></figure>
        </INPUT>
}

const INPUT = styled.div`
    display: flex;
    margin-top: 2.4rem;
    input {
        background-color: transparent;
        // border: none;
        width: 0px;
        min-width: fit-content;
    }
    figure {
        height: 2.4rem;
        width: 0.9609rem;
        background-color: rgba(255,176,0,0.42);
        animation: blink 1s steps(5, start) infinite;

        @keyframes blink {
            to {
                visibility: hidden;
            }
        }
    }
`
export default connect(null, {additem, toggleitem, removeitem})(Input)