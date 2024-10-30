// src/store/store.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

// Tạo middleware Saga
const sagaMiddleware = createSagaMiddleware();

// Tạo Redux store với Saga middleware
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

// Khởi động Saga
sagaMiddleware.run(rootSaga);

export default store;
