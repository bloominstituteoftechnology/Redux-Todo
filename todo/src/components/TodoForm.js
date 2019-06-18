import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    margin-top: 50px; 

`
const FormDiv = styled.div`
    display: flex; 
    justify-content: center; 
`

const Button = styled.button`
    margin-right: 5px; 
`


class TodoForm extends React.Component {
    state={
        newTodo: ''
    }
    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: '' })
    }


    handleChange = e => {
        this.setState({
          newTodo: e.target.value
        })
      }
    toggleTodo = (e, id) => {
        console.log('clieck')
        e.preventDefault();
        this.props.toggleTodo(id);
    }

    render(){
        return(
            <FormDiv>
                <Form className='border-b border-b-2 border-teal-500 py-2'>
                    <input 
                        className= "appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type='text'
                        placeholder='Add Todo'
                        value={this.state.newTodo}
                        onChange={this.handleChange}
                    />
                    <Button className= 'flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded' onClick={this.addTodo}>+</Button>
                    <button className='flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded' onClick={this.props.deleteTodo}>-</button>
                </Form>
            </FormDiv>
        )
    }
}



export default TodoForm;