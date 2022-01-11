import React from "react";


class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            input: ''
        }
    }

handleChanges (e) {
    this.setState({
        ...this.state,
        input:e.target.value
    })
}
handleSubmit (e) {
    e.preventDefault();
    this.props.handleAddItem(this.state.input);
}

render(){
    console.log('hand',this.props)
    return(
        <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChanges} type='text' name='tasks' placeholder='Add a task'/>
            <button>Add</button>
        </form>
    )
}
}
export default TodoForm;