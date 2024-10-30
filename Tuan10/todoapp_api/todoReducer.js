// src/store/todoReducer.js
const initialState = {
  list: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return { ...state, list: action.payload };
    case 'ADD_TODO':
      return { ...state, list: [...state.list, action.payload] };
    case 'DELETE_TODO':
      return { ...state, list: state.list.filter(todo => todo.id !== action.payload.id) };
    default:
      return state;
  }
};

export default todoReducer;
