import { atom } from 'recoil';

export const todosState = atom({
  key: 'todosState', // Định danh cho atom
  default: [], // Giá trị mặc định cho todos
});

export const searchTermState = atom({
  key: 'searchTermState', // Định danh cho atom
  default: '', // Giá trị mặc định cho từ khóa tìm kiếm
});
