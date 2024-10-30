import React from 'react';
import { RecoilRoot } from 'recoil'; // Import RecoilRoot
import TodoApp from './ToDoApp'; // Import TodoApp

const App = () => {
  return (
    <RecoilRoot>
      <TodoApp />
    </RecoilRoot>
  );
};

export default App;
