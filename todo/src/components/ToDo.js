import React, { Component } from "react";
import { connect } from 'react-redux';
import { newToDo, complete, deleter, initial, deleteAll, deleteCompleted, copy } from '../actions';


class ToDo extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
        this.state = {
            newItem: ''
        }
    }
    handleClick(i) {
        this.props.complete(i);
        localStorage.setItem('items', JSON.stringify(this.props.todo));
    }

    // handleDelete(i) {
    //     const store = this.props.todo;
    //     store.splice(i,1);
    //     this.setState({
    //         items:store
    //     })
    //     localStorage.setItem('items', JSON.stringify(this.props.todo));
    // }

    addNewItem (event) {
        event.preventDefault();
        this.props.newToDo(this.state.newItem)
        this.setState({
            newItem: ''
        });
        localStorage.setItem('items', JSON.stringify(this.props.todo))
    };

    handleChange (event) {
        this.setState({
            newItem: event.target.value
        });
    };

    componentWillMount() {
        (localStorage.getItem('items') !== undefined && localStorage.getItem('items') !== null) && this.props.initial()
    }
    render() {
        return (
            <div>
                <h3>my to-do list</h3>
                <h5>click on an item to mark completed</h5>
                <table>
                    <tr>
                        <th><div>complete?</div></th><th>delete?</th>
                    </tr>
                    {this.props.todo.map((item, i) => 
                    <tr>
                        <td key={i} >
                            {localStorage.setItem('items', JSON.stringify(this.props.todo))}
                            {item.completed 
                            ? 
                            <form>
                                <div type="button" onClick={() => (this.handleClick(i))}>
                                    <s>{item.name} </s>
                                </div>
                            </form>
                            : 
                            <form>
                                <div type="button" onClick={() => (this.handleClick(i))}>
                                    {item.name}
                                </div>
                            </form>
                        }
                        </td>
                        <td>
                            <form>
                                <div type="button" onClick={() => this.props.deleter(i)}>
                                    {localStorage.setItem('items', JSON.stringify(this.props.todo))}
                                    delete!
                                </div>
                            </form>
                        </td>
                        <td>
                            <form>
                                <div type="button" onClick={() => this.props.copy(i)}>
                                    copy
                                </div>
                            </form>
                        </td>
                    </tr>)}
                </table>
                <form onSubmit={this.addNewItem} >  
                    <input type="text" onChange = {this.handleChange} placeholder="new to do.." value={this.state.newItem}/> 
                    <input type="submit" value="list it!"/>
                </form> 
                <h2>Add a to do list item above!</h2>
                <form>
                    <div type="button" onClick={() => this.props.deleteCompleted()}>
                        {localStorage.setItem('items', JSON.stringify(this.props.todo))}
                        DELETE COMPLETED
                    </div>
                </form>
                <form>
                    <div type="button" onClick={() => this.props.deleteAll()}>
                        {localStorage.setItem('items', JSON.stringify(this.props.todo))}
                        DELETE ALL!!!!!!!
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todo: state
    };
};

export default connect(mapStateToProps, { newToDo, complete, deleter, initial, deleteAll, deleteCompleted, copy })(ToDo);