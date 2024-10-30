// src/store/rootSaga.js
import { all } from 'redux-saga/effects';
import { watchFetchTodos } from './todoSaga';

export default function* rootSaga() {
  yield all([watchFetchTodos()]);
}
