import React from 'react';
import { connect } from 'react-redux';
import { add } from '../actions';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap';

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          newTodo: '',
        };
        this.toggle = this.toggle.bind(this);
        this.toggleSet = this.toggleSet.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

      toggleSet() {
          this.props.add(this.state.newTodo)
        this.setState({
          modal: !this.state.modal,
          newTodo: ''
        });
      }

      handleChange(e) {
          const todo = e.target.value;
          this.setState({
            newTodo: todo
          });
      }


    render() {
        return (
          <div>
            <Button color="danger" onClick={this.toggle}>Add new to-do</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>What do you need to do?</ModalHeader>
              <ModalBody>
                <Input type="text" name="text" id="exampleText" onChange={this.handleChange}/>
             </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleSet}>Add</Button>
              </ModalFooter>
            </Modal>
          </div>
        );
      }
    
}

const mapDispatchToProps = dispatch => {
    return {
      add: item => dispatch(add(item))
    };
  };


export default connect(null, mapDispatchToProps)(TodoInput);