import React from 'react';
import { store } from '../index';

let nextTodoId = 0;

export const AddTodo = () => {
  let input;
  return (
    <div>
      <input className='form-control' ref={node => input = node} />
      <button className='btn btn-primary' onClick={() => {
        store.dispatch({
          type: 'ADD_TODO',
          text: input.value,
          id: nextTodoId++
        })
        input.value = '';
      }}>
        Add todo
                </button>
    </div>
  )
}
