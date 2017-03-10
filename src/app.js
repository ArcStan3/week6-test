import React, { Component } from 'react'
import Todos from './components/todos'

const url = 'http://localhost:8080/'

class App extends Component {
  render () {
    return (
      <div>
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
          </header>
          <section className="main">
          <Todos />
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
