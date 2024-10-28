import React from 'react';

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
          <span onClick={() => toggleComplete(todo.id)}>{todo.task}</span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
