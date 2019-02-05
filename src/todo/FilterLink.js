import React from 'react';

import { store } from "..";

export const FilterLink = ({
    filter,
    currentFilter,
    children
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
                store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter
                });
            }}
        >
            {children}
        </button>
    );
}