import React from 'react';

export const AddTodo = ({
    onAddClick
}) => {
    let input;
    return (
        <div>
            <input className='form-control' ref={node => input = node} />
            <button className='btn btn-primary' onClick={() => {
                onAddClick(input.value);
                input.value = '';
            }}>
                Add todo
                </button>
        </div>
    )
}