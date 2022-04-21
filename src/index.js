import'./styles.css';
//Por defecto busca el index.js
import { Todo,TodoList } from "./classes";
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);

todoList.todos[0].imprimirClase();
/*const tarea = new Todo('Aprender Javascript!!');

todoList.nuevoTodo(tarea);

console.log(todoList);

crearTodoHtml( tarea ); */

/* 
localStorage.setItem('mi-key','ABC123');

setTimeout(() => {
    localStorage.removeItem('mi-key');
}, 1500); */