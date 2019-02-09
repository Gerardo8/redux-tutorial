import React, { Component } from 'react';
import { connect } from 'react-redux';

import { store } from '../index';
import { TodoList } from './TodoList';

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

// export class VisibleTodoList extends Component {

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.forceUpdate();
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   render() {
//     const props = this.props;
//     const state = store.getState();
//     return (
//       <TodoList
//         todos={
//           getVisibleTodos(
//             state.todos,
//             state.visibilityFilter
//           )
//         }

//         onTodoClick={id =>
//           store.dispatch({
//             type: 'TOGGLE_TODO',
//             id
//           })
//         }
//       />
//     );
//   }
// }

const mapStateToTodoListProps = (state) => ({
  todos: getVisibleTodos(
    state.todos,
    state.visibilityFilter
  )
});

const mapDispatchToTodoListProps = (dispatch) => ({
  onTodoClick: id => dispatch({
    type: 'TOGGLE_TODO',
    id
  })
});

export const VisibleTodoList = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList);
