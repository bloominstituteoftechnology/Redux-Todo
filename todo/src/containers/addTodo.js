import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo } from '..actions';
import './addTodo.css';

class AddTodo extends Component {
    state = {
        currentItem: ''
    };
}