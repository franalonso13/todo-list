import { Todo } from "./todo.class";

export class TodoList {
    constructor() {
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }
    eliminarTodo(id) {
        this.todos = this.todos.filter((elem) => elem.id != id);
        this.guardarLocalStorage();
    }

    marcarCompleado(id) {
        this.todos.forEach((todo) => {
            if (todo.id == id) {
                todo.completado = !todo.completado;
            }
        });
        this.guardarLocalStorage();
    }

    eliminarCompletados() {
        this.todos = this.todos.filter((elem) => elem.completado === false);
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage() {
        this.todos = localStorage.getItem('todo')
            ? JSON.parse( localStorage.getItem('todo'))
            : [];

            this.todos = this.todos.map( obj => Todo.fromJson( obj ));
            //Esto sería lo mismo
            //this.todos = this.todos.map( Todo.fromJson());
    }
}
