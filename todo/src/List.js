import React, { Component } from 'react';

class List extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                {this.props.items.map(item => {
                    return(
                        <p>{items.task}</p>
                    )
                })}    
            </div>
        )
    }
}

export default List;