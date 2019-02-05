import React, { Component } from 'react';
import './App.css';
import { Todo } from './todo/Todo';
import { store } from './index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo {...store.getState()}></Todo>
      </div>
    );
  }
}

export default App;
