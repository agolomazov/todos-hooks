import React from 'react';

const initialTodos = new Map();

export const TodosContext = React.createContext({
  todos: initialTodos,
  currentTodo: null
});