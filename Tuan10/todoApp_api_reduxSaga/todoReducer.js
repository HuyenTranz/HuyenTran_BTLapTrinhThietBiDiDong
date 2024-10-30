// src/reducers/todoReducer.js
const initialState = {
  list: [],
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return {
        ...state,
        list: action.payload, // Cập nhật danh sách todos từ API
      };
    case 'ADD_TODO':
      return {
        ...state,
        list: [...state.list, action.payload], // Thêm todo mới vào danh sách
      };
    case 'DELETE_TODO':
      return {
        ...state,
        list: state.list.filter((todo) => todo.id !== action.payload.id), // Xóa todo khỏi danh sách
      };
    default:
      return state;
  }
};

export default todoReducer;
