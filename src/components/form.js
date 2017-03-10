import React from 'react'

class TodoForm extends React.Component {
  constructor() {
    super()
    this.state = {
      title: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  
  handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:8080/todos', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(data => this.props.nav('todos')() )
  }
  
  render() {
    return (
      
      <div className="pa4">
       <form onSubmit={this.handleSubmit}>
       <input type="text" name="title"
         value={this.state.title}
         onChange={this.handleChange}
        />
       <button>Add</button>
       </form>
     </div>
      
    )
    
  }
  
}

export default TodoForm