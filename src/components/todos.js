import React from 'react'
import fetch from 'isomorphic-fetch'
import { map, append } from 'ramda'

class Todos extends React.Component {
  constructor() {
    super() 
    this.state = {
      todos: []
    }
  }
  
  componentDidMount() {
    fetch(`http://localhost:8080/todos`)
      .then(res => res.json())
      .then(todos => this.setState({todos}))
  }
  
  
  render() {
    const li = todo => {
      return (
        <li key={todo._id}>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>{todo.title}</label>
            <button className="destroy" />
          </div>
          <input className="edit" defaultValue="Rule the web" />
        </li>
      )
    }
    
  return (
  
    <div>
    <a href="#" onClick={this.props.nav('form')}>Add New Todo</a>
    <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {map(li, this.state.todos)}
        </ul>
    </div>
  
  )
 }
}

export default Todos



/*
<div>
<a href="#" onClick={this.props.nav('form')}>Add New Todo</a>
<input className="toggle-all" type="checkbox" />
  <label htmlFor="toggle-all">Mark all as complete</label>
    <ul className="todo-list">
      {map(li, this.state.todos)}
    </ul>
</div>
*/


