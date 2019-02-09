import React, { Component } from 'react';
import './App.css';
import { TodoApp } from './todo/TodoApp';
import { store } from './index';
// import { Provider } from './Provider';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store} className="App">
        <TodoApp />
      </Provider>
    );
  }
}

export default App;
