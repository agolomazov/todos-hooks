const toggleTodo = (state, action) => {
  const todo = state.todos.get(action.payload);
  if (todo) {
    todo.complete = !todo.complete;
  }
  return {
    ...state
  }
}

const removeTodo = (state, action) => {
  state.todos.delete(action.payload);
  return {
    ...state
  };
}

const addTodo = (state, action) => {
  if (!action.payload.text) {
    return state;
  }
  state.todos.set(`${action.payload.id}`, action.payload);
  return {
    ...state
  };
}

const setCurrentTodo = (state, action) => ({
  ...state,
  currentTodo: action.payload
});

const updateTodo = (state, { payload }) => {
  state.todos.set(`${payload.id}`, payload);
  return {
    ...state,
    currentTodo: null
  }
}

const clearTodos = state => {
  state.todos.clear();
  return {
    ...state,
    currentTodo: null
  }
}

export function reducer(state, action) {
  switch(action.type) {
    case 'TOGGLE_TODO':
      return toggleTodo(state, action);
    case 'DELETE_TODO':
      return removeTodo(state, action);
    case 'CLEAR_TODOS':
      return clearTodos(state, action);
    case 'ADD_TODO':
      return addTodo(state, action);
    case 'SET_CURRENT_TODO':
      return setCurrentTodo(state, action);
    case 'UPDATE_TODO':
      return updateTodo(state, action);
    default:
      return state;
  }
}