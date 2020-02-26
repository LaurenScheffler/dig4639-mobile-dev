import React from 'react';
import './App.css';
import todoList from './todoList.json'

//filter the list based on a checkbox
//add an input form to allow creating todo items with content and priority
//have each item be able to remove itself using a function passed in from the parent

function TodoItem(props) {
  return <p className="card" onClick={() => props.removeTask(props.id)}>{props.content}</p>
}

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList,
      hideCompletedItems:false
    }
    this.currentId = 4;
  }
  addTask(e) {
    console.log(this.refs.taskContent)
    let todoList = this.state.todoList
    todoList.push(
      {"id": this.currentId, "completed": true, "priority": 1, "content": "Task 1" })
      this.currentId++
      this.setState({todoList:todoList})
  }
  removeTask(id) {
    console.log(id)
    let todoList = this.state.todoList
    todoList = todoList.filter((v) => v.id !== id)
    this.setState({todoList})
  }
  render() {
    return (
      <>
      <input type="text" ref="taskContent" />
      <input type="button" value="Add Task" onClick={(e) => this.addTask(e)} />
      <br />
      <input ref="hideCompletedItemsCheckbox"type="checkbox" id="hideCompletedItems" 
      name="hideCompletedItems" value="hideCompletedItems" 
      onChange={(e) => this.setState({hideCompletedItems: e.target.checked})}/>
      <label htmlfor="hideCompletedItems"> I have a bike</label><br></br>
      { 
      ((this.state.hideCompletedItems) ? this.state.todoList
      .filter((v) => !v.completed) : todoList)
      .map((v) => <TodoItem id={v.id} removeTask={(id) key={v.id} priority={v.priority}
       content={v.content}
      completed={v.completed}/>)}
      </>)
  }
}

function App(props) {
 return (
   <TodoList />
 )
}  

export default App;
