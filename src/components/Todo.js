import React from 'react';

const Todo = props => {
    console.log('yo',props)
    const handleClick = () => {
       props.handleToggleItem(props.handleToggleItem);
    }
    return (
        <div onClick={handleClick} className={`item${props.item.completed ? ' completed' : ''}`}>
            <p>{props.item.task}</p>
        </div>
    )
}
export default Todo;