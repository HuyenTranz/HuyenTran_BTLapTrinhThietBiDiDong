import axios from 'axios';

const API_URL = 'https://6457d9490c15cb1482127b2e.mockapi.io/api/cau1/todoApp';

// Hàm gọi API để lấy danh sách todos
export const fetchTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Hàm gọi API để thêm một todo mới
export const addTodo = async (todo) => {
  const response = await axios.post(API_URL, todo);
  return response.data;
};

// Hàm gọi API để xóa một todo
export const deleteTodo = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
