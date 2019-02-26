import React, { useState, useContext, useRef, useEffect } from 'react';
import uuid from 'uuid/v4';
import { TodosContext } from '../context';

export const TodoForm = () => {
  const { state: { currentTodo }, dispatch } = useContext(TodosContext);
  const [todo, setTodo] = useState('');
  const inputRef = useRef(null);

  const addTodo = () => {
    dispatch({
      type: 'ADD_TODO',
      payload: {
        id: uuid(),
        text: todo,
        complete: false
      }
    });

    setTodo('');
    inputRef.current.focus();
  }

  const updateTodo = () => {
    dispatch({
      type: 'UPDATE_TODO',
      payload: {
        ...currentTodo,
        text: todo
      }
    });

    setTodo('');
    inputRef.current.focus();
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (!currentTodo) {
      return addTodo();
    }

    updateTodo();
  }

  useEffect(() => {
    if (currentTodo) {
      setTodo(currentTodo.text);
    }
  }, [currentTodo]);

  return (
    <form 
      className="flex justify-center p-5"
      onSubmit={handleSubmit}
    >
      <input 
        type="text"
        className="border-black border-solid border-2"
        value={todo}
        onChange={event => setTodo(event.target.value)}
        ref={inputRef}
      />
      <button 
      type="submit"
        className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
        {currentTodo ? 'Edit todo' : 'Add Todo'}
      </button>
      <button 
        className="bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded"
        onClick={() => dispatch({ type: 'CLEAR_TODOS' })}
        >
          Clear todos
        </button>
    </form>
  );
}