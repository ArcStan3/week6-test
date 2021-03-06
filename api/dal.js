const PouchDB = require('pouchdb-http')
PouchDB.plugin(require('pouchdb-mapreduce'))
const couch_base_uri = "http://127.0.0.1:5984/" 
const couch_dbname = "todos"
const db = new PouchDB(couch_base_uri + couch_dbname)
const {
    map,
    uniq,
    prop,
    omit,
    compose,
    drop
} = require('ramda')

function getTodos(cb) {
  db.allDocs({
    include_docs: true,
  }, function(err, todo) {
    if (err) return cb(err)
    cb(null, map(obj => obj.doc, todo.rows))
  })
}

function addTodo(todo, cb) {
  todo.completed = false 
  db.post(todo, function(err, res) {
    if (err) return cb(err)
    cb(null, res) 
  })
}

function updateTodo (todo, cb) {
  db.put(todo, function(err, res) {
    if (err) return cb(err)
    cb(null, res)
  })
}

function getTodo(todoId, cb) {
  db.get(todoId, function(err, todo) {
    if (err) return cb(err)
    cb(null, todo)
  })
}

function deleteTodo (id, cb) {
  db.get(id, function (err, todo) {
    if (err) return cb(err)
    db.remove(todo, function (err, removedTodo) {
      if (err) return cb(err)
      cb(null, removedTodo)
    })
  })
}

const dal = {
  getTodo: getTodo,
  getTodos: getTodos,
  addTodo: addTodo,
  deleteTodo: deleteTodo,
  updateTodo: updateTodo
}

module.exports = dal
