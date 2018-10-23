import React from 'react';
import { connect } from 'react-redux';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: props.newItem
        }
    }

    changeHandler = event => {
        console.log(event.target.value)
    }

    render() {
        return (
            <form>
                <input onChange={this.changeHandler} type='text' placeholder='What to do?' value={this.state.newItem} />
                <button>ADD</button>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}


export default connect(mapStateToProps)(TodoItem);