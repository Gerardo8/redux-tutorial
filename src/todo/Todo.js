import React, { Component } from 'react';
import { combineReducers } from 'redux';

import { store } from '../index';
import { FilterLink } from './FilterLink';

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            }
        default:
            return state;
    }
}

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
}

export const todoApp = combineReducers({
    todos,
    visibilityFilter
});

const toggleTodo = id => store.dispatch({
    type: 'TOGGLE_TODO',
    id
});

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed);
        default:
            return todos;
    }
}

let nextTodoId = 0;
export class Todo extends Component {

    render() {
        const { todos, visibilityFilter } = this.props;
        const visibleTodos = getVisibleTodos(
            todos,
            visibilityFilter
        )
        return (
            <div>
                <input className='form-control' ref={node => this.input = node} />
                <button className='btn btn-primary' onClick={() => {
                    store.dispatch({
                        type: 'ADD_TODO',
                        text: this.input.value,
                        id: nextTodoId++
                    });
                    this.input.value = '';
                }}>
                    Add todo
                </button>
                <ul className='list-group'>
                    {visibleTodos.map(todo => {
                        if (todo.completed) {
                            return (
                                <li className='list-group-item active'
                                    key={todo.id}
                                    onClick={() => toggleTodo(todo.id)}
                                >
                                    {todo.text}
                                </li>
                            );
                        } else {
                            return (
                                <li className='list-group-item'
                                    key={todo.id}
                                    onClick={() => toggleTodo(todo.id)}
                                >
                                    {todo.text}
                                </li>
                            );
                        }
                    }
                    )}
                </ul>
                <p>
                    Show:
                    {' '}
                    <FilterLink
                        filter='SHOW_ALL'
                        currentFilter={visibilityFilter}
                    >
                        All
                    </FilterLink>
                    {' '}
                    <FilterLink
                        filter='SHOW_ACTIVE'
                        currentFilter={visibilityFilter}
                    >
                        Active
                    </FilterLink>
                    {' '}
                    <FilterLink
                        filter='SHOW_COMPLETED'
                        currentFilter={visibilityFilter}
                    >
                        Completed
                    </FilterLink>
                </p>
            </div>
        )
    }
}