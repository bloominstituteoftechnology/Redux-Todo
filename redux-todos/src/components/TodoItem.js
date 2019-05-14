import React from 'react'

export default function TodoItem(props) {
    console.log(props)
    return (
        <li>
            <div>
                {props.item.content}
            </div>
        </li>
    )
}