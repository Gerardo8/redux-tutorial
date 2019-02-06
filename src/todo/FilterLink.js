import React from 'react';

export const FilterLink = ({
    filter,
    currentFilter,
    children,
    onClick
}) => {
    if (filter === currentFilter) {
        return (
            <span>
                {children}
            </span>
        );
    }
    return (
        <button className='btn btn-dark'
            onClick={e => {
                e.preventDefault();
                onClick(filter)
            }}
        >
            {children}
        </button>
    );
}