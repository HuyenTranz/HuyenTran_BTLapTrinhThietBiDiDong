// src/components/TodoApp.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const TodoApp = () => {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.list); // Lấy danh sách todos từ Redux store

  useEffect(() => {
    dispatch({ type: 'FETCH_TODOS_REQUEST' }); // Gọi API để lấy todos khi component được khởi tạo
  }, [dispatch]);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const newTodoObj = { id: Math.random().toString(), name: newTodo, completed: false };
      dispatch({ type: 'ADD_TODO', payload: newTodoObj }); // Thêm todo mới
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (todo) => {
    dispatch({ type: 'DELETE_TODO', payload: todo }); // Xóa todo
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <TextInput
        style={styles.input}
        value={newTodo}
        onChangeText={text => setNewTodo(text)}
        placeholder="Enter new todo"
      />
      <Button title="Add Todo" onPress={handleAddTodo} color="#0066CC" />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.name}</Text> {/* Hiển thị tên todo */}
            <TouchableOpacity onPress={() => handleDeleteTodo(item)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

// Styles (giữ nguyên như trước)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFF',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#EEE',
  },
  todoText: {
    fontSize: 16,
    color: '#333',
  },
  deleteButton: {
    color: 'red',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default TodoApp;