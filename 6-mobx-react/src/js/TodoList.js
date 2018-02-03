import React from "react"
import { observer } from "mobx-react"


const todoList = observer(({store}) => {
  const {
    clearComplete,
    filter,
    filteredTodos,
    todos,
    filterMethod,
    toggleComplete,
    createNew
  } = store

  const todoList = filteredTodos.map(todo => (
    <li key={todo.id}>
     <input type="checkbox" onChange={() => toggleComplete(todo)} value={todo.complete} checked={todo.complete} />
     <span>{todo.value}</span>
    </li>
  ))

  const styles = {
    display: "block",
    marginTop: 20,
    marginBottom: 10
  }

  return(
    <div>
      <h1>todos</h1>

      <label style={styles}>New Todo</label>
      <input
        className="new"
        onKeyPress={createNew}
        />

      <label style={styles}>Filter Todos</label>
      <input
        className="filter"
        value={filter}
        onChange={filterMethod}
        />

      <ul>{todoList}</ul>
      <a href="#" onClick={clearComplete}>Clear Complete</a>
    </div>
  )
})

export default todoList;
