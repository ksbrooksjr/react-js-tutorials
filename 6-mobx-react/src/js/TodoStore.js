import { action, computed, observable, useStrict } from "mobx"

useStrict(true)

class Todo {
  @observable value
  @observable id
  @observable complete

  constructor(value) {
    this.value = value
    this.id = Date.now()
    this.complete = false
  }
}

export class TodoStore {
  @observable todos = []
  @observable filter = ""

  @computed get filteredTodos() {
    var matchesFilter = new RegExp(this.filter, "i")
    return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value))
  }

  @action createTodo(value) {
    this.todos.push(new Todo(value))
  }

  @action clearComplete = () => {
    const incompleteTodos = this.todos.filter(todo => !todo.complete)
    this.todos.replace(incompleteTodos)
  }

  @action filterMethod = (e) => {
    this.filter = e.target.value;
  }

  @action toggleComplete = (todo) => {
    todo.complete = !todo.complete
  }

  createNew = (e) => {
    if (e.which === 13) {
      this.createTodo(e.target.value)
      e.target.value = ""
    }
  }

}

export default new TodoStore
