import React from 'react';

export const Todo = ({
    onClick,
    completed,
    text
}) => completed ? (
    <li className='list-group-item active'
        onClick={onClick}
    >
        {text}
    </li>
) : (
    <li className='list-group-item'
        onClick={onClick}
    >
        {text}
    </li>
);