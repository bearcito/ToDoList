import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleCompleted, deleteTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
