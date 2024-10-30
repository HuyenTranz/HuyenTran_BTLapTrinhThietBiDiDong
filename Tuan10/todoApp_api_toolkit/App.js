// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodosScreen from './TodosScreen';

const App = () => {
  return (
    <Provider store={store}>
      <TodosScreen />
    </Provider>
  );
};

export default App;
