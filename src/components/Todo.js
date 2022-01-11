
import React from 'react';
import '../style.css'

const Todo = props => {
    console.log('yo',props)
    const handleClick = () => {
       props.handleToggleItem(props.item);
       console.log('132',!props.item.completed)
    }
    return (
        
        <div onClick={()=> handleClick()} className={`item${props.item.completed ? ' complete' : ''}`}>
            <p>{props.item.task}</p>
        </div>
    )
}
export default Todo;