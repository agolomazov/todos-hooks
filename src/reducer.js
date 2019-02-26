const toggleTodo = (state, action) => {
  const todos = new Map(state.todos);
  const todo = todos.get(action.payload);
  if (todo) {
    todo.complete = !todo.complete;
  }
  return {
    ...state,
    todos
  }
}

const removeTodo = (state, action) => {
  const todos = new Map(state.todos);
  todos.delete(action.payload);
  return {
    ...state,
    todos
  };
}

const addTodo = (state, action) => {
  if (!action.payload.text) {
    return state;
  }
  const todos = new Map(state.todos);
  todos.set(`${action.payload.id}`, action.payload);
  return {
    ...state,
    todos
  };
}

const setCurrentTodo = (state, action) => ({
  ...state,
  currentTodo: action.payload
});

const updateTodo = (state, { payload }) => {
  const todos = new Map(state.todos);
  todos.set(`${payload.id}`, payload);
  return {
    ...state,
    todos,
    currentTodo: null
  }
}

const clearTodos = state => {
  return {
    ...state,
    todos: new Map(),
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