import React from 'react';
import ReactDom from 'react-dom'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const toDoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      toDoList: toDoList
    };
  }
  handleClearCompleted= ()=> {
    const newToDo = this.state.toDoList.filter(item => {
      return item.completed === false;
    })
    this.setState({
      ...this.state,
      toDoList: newToDo
    })
  }
  handleAddItem = (taskName) => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      toDoList:[...this.state.toDoList, newTask]
    })
  }

  handleToggledItem = (selectedTask)=> {
    
    
    this.setState({
      ...this.state,
      toDoList: this.state.toDoList.map(item => {
        if(item.id === selectedTask.id) {
          return({
            ...item,
            completed: !item.completed
          })
        }else {
          return item
        }
      })
    })
  }



  render() {
    return (
      <div className='App'>
      <div className='header'>
        <h2>Tasks:</h2>
        <TodoList toDoList={this.state.toDoList} handleToggledItem={this.handleToggledItem}/>
        <TodoForm handleAddItem={this.handleAddItem}/>
      </div>
      <button onClick={this.handleClearCompleted} className='clear-btn'>Clear completed</button>
      </div>
    );
  }
}

export default App;
