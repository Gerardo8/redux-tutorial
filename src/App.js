import React, { Component } from 'react';
import './App.css';
import { TodoApp } from './todo/TodoApp';
import { store } from './index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp {...store.getState()}></TodoApp>
      </div>
    );
  }
}

export default App;
