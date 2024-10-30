import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TextInput,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, addTodo, removeTodo } from './todosSlice';
import axios from 'axios'; // Import axios để gọi API

const API_URL = 'https://6457d9490c15cb1482127b2e.mockapi.io/api/cau1/todoApp'; // URL API của bạn

const TodosScreen = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);
  const todoStatus = useSelector((state) => state.todos.status);
  const error = useSelector((state) => state.todos.error);
  const [newTodo, setNewTodo] = useState(''); // State cho todo mới

  useEffect(() => {
    if (todoStatus === 'idle') {
      dispatch(fetchTodos()); // Gọi API để lấy todos
    }
  }, [todoStatus, dispatch]);

  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      const todoData = {
        name: newTodo,
      };

      try {
        // Gửi yêu cầu POST đến API
        const response = await axios.post(API_URL, todoData);
        // Thêm todo vào Redux store nếu yêu cầu thành công
        dispatch(addTodo({ ...response.data, id: response.data.id })); 
        setNewTodo(''); // Reset input
      } catch (error) {
        console.error('Failed to add todo:', error);
      }
    }
  };

  const handleRemove = (id) => {
    dispatch(removeTodo(id)); // Gọi action để xóa todo
  };

  return (
    <View style={styles.container}>
      {error && <Text>Error: {error}</Text>}
      <Text style={styles.title}>Todo List</Text>
      <TextInput
        style={styles.input}
        placeholder="Thêm Todo mới"
        value={newTodo}
        onChangeText={setNewTodo}
      />
      <Button title="Thêm Todo" onPress={handleAddTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()} // Đảm bảo ID là chuỗi
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text>
              {item.name} - {item.time}
            </Text>
            <Button title="Xóa" onPress={() => handleRemove(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default TodosScreen;