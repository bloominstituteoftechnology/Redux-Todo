import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

class Form extends component {
constructor(props){
    super(props);
    this.state = {
      text: ''
}
}
handleAddTodo = e => {
    e.preventDefault();
    const { text } = this.state;
    const newTodo = {
        text,
        completed: false,
        id: Math.random() + text
    };
    this.props.addTodo(newTodo);
    this.setState({ text: ''});
};

handleSubmit = (e) => {
    this.setSTate({ text: e.target.value});
}
};

return (
    <form>
        <input onChange={this.handleSubmit} value={this.state.text}
        />
        <Button onClick={this.handleAddTodo} />
        </form>
)

export default connect(null, { addTodo })(Form);ß