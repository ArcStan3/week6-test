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
    cb(null, todo.rows)
  })
}

function getTodo(todoId, cb) {
  db.get(todoId, function(err, todo) {
    if (err) return cb(err)
    cb(null, todo.rows)
  })
}
  

const dal = {
  getTodo: getTodo,
  getTodos: getTodos
}

module.exports = dal
