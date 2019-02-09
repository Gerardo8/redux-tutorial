import React, { Component } from 'react';
import { VisibleTodoList } from './todo/VisibleTodoList';

export class Provider extends Component {

  getChildContext() {
    return {
      store: this.props.store
    };
  }

  render() {
    return this.props.children;
  }
}

Provider.childContextTypes = {
  store: React.PropTypes.object
};

VisibleTodoList.contextTypes = {
  store: React.PropTypes.object
};
