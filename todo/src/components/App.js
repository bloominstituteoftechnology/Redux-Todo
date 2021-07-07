import React, {Component} from 'react';
import TodoContainer from '../containers/TodoContainer';

export default class App extends Component {
    render() {
        return(
            <div>
                <div>Michael's Great Time Super Happy Hour Todo List!</div>
                <TodoContainer/>

            </div>
        )
    }
}