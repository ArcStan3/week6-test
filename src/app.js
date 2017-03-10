import React, { Component } from 'react'
import Todos from './components/todos'
import TodoForm from './components/form'


const url = 'http://localhost:8080/'

class App extends Component {
  constructor() {
    super()
    this.state = {
      page: 'todos'
    }
    this.nav= this.nav.bind(this)
  }
  
  nav(page) {
    return (e) => {
      e && e.preventDefault()
      this.setState({page: page})
    }
  }
  
  render () {
    
    return (
      <div>
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
          </header>
        <section className="main">
          {this.state.page === 'form' ? <TodoForm nav={this.nav} /> : null}
          {this.state.page === "todos" ? <Todos nav={this.nav} /> : null}
          </section>
        </section>
        <footer className="info">
          <p>Double-click to edit a todo</p>
    			<p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
    			<p>Created by <a href="#">you</a></p>
    			<p>Part of <a href="#">TodoMVC App</a></p>
        </footer>
      </div>
    )
  }
}

export default App
