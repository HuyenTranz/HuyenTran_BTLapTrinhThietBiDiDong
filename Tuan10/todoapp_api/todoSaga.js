// src/store/todoSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Hàm gọi API để lấy danh sách todo
function* fetchTodos() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/todos');
    yield put({ type: 'SET_TODOS', payload: response.data });
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
}

// Theo dõi hành động FETCH_TODOS_REQUEST
export function* watchFetchTodos() {
  yield takeEvery('FETCH_TODOS_REQUEST', fetchTodos);
}
