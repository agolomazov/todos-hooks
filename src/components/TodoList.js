import React, { useContext } from 'react';
import { TodosContext } from '../context';
import classnames from 'classnames';

export const TodoList = () => {
  const { state, dispatch } = useContext(TodosContext);
  const todos = Array.from(state.todos.values());
  const title = state.todos.size > 0 ? `${state.todos.size} Todos` : 'Nothing to do!';

  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className='text-bold'>{title}</h1>
      <ul className='list-reset text-white p-0'>
        {todos.map(todo => (
          <li key={todo.id} className='bg-orange-dark border-dark border-dashed border-2 my-2 py-4 flex items-center'>
            <span
              className={
                classnames({
                  'cursor-pointer': true,
                  'flex-1': true,
                  'ml-12': true,
                  'line-through': todo.complete,
                  'text-grey-darkest': todo.complete
                })
              }
              onDoubleClick={() => dispatch({
                type: 'TOGGLE_TODO',
                payload: `${todo.id}`
              })}
            >
              {todo.text}
            </span>
            {' '}
            <button onClick={() => dispatch({
              type: 'SET_CURRENT_TODO',
              payload: todo
            })}>
              <img src="https://icon.now.sh/edit/0500c5" className="h6" alt="Edit todo" />
            </button>
            <button onClick={() => dispatch({
              type: 'DELETE_TODO',
              payload: `${todo.id}`
            })}>
              <img src="https://icon.now.sh/delete/8b0000" className="h6" alt="Delete todo" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
