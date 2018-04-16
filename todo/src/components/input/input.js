import React from 'react';

class Input extends React.Component {
    render() {
        return (
            <div className='input'>
                <input type='text' placeholder='Input a new todo!'></input>
            </div>
        )
    }
}

export default Input;