import React from 'react';
import { combineReducers } from 'redux';

import { store } from '../index';
import { AddTodo } from './AddTodo';
import { Footer } from './Footer';
import { TodoList } from './TodoList';

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
export const TodoApp = ({
    todos,
    visibilityFilter
}) => (
        <div>
            <AddTodo onAddClick={text =>
                store.dispatch({
                    type: 'ADD_TODO',
                    text,
                    id: nextTodoId++
                })
            } />
            <TodoList
                todos={getVisibleTodos(
                    todos,
                    visibilityFilter
                )}
                onTodoClick={id =>
                    store.dispatch({
                        type: 'TOGGLE_TODO',
                        id
                    })
                }
            />
            <Footer
                visibilityFilter={visibilityFilter}
                onFilterClick={filter =>
                    store.dispatch({
                        type: 'SET_VISIBILITY_FILTER',
                        filter
                    })
                }
            />
        </div>
    )