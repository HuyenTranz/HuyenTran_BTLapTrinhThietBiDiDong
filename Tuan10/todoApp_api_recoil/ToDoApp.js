import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { fetchTodos, addTodo, deleteTodo } from './todoApi'; // Import các hàm API
import { todosState, searchTermState } from './todoAtoms'; // Import các atom

const TodoApp = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useRecoilState(todosState); // Sử dụng Recoil cho todos
  const [searchTerm, setSearchTerm] = useRecoilState(searchTermState); // Sử dụng Recoil cho từ khóa tìm kiếm

  // Lấy danh sách todos khi component được khởi tạo
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const todosFromApi = await fetchTodos(); // Gọi hàm fetchTodos từ api.js
        setTodos(todosFromApi); // Cập nhật todos
      } catch (error) {
        console.error('Failed to fetch todos:', error); // In lỗi nếu không tải được
      }
    };

    loadTodos();
  }, [setTodos]);

  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      const newTodoObj = { id: Math.random().toString(), name: newTodo, completed: false }; // Sử dụng 'name'
      setTodos((prevTodos) => [...prevTodos, newTodoObj]); // Thêm todo mới vào danh sách
      setNewTodo(''); // Reset input
      await addTodo(newTodoObj); // Gọi hàm API để thêm todo
    }
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id); // Gọi hàm API để xóa todo
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id)); // Xóa todo theo ID
  };

  // Lọc todos dựa trên từ khóa tìm kiếm
  const filteredTodos = todos.filter(todo => 
    (searchTerm && searchTerm.trim().length > 0) ? todo.name.toLowerCase().includes(searchTerm.toLowerCase()) : true
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text> {/* Tiêu đề ứng dụng */}
      
      {/* Input tìm kiếm */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          value={searchTerm}
          onChangeText={setSearchTerm} // Cập nhật từ khóa tìm kiếm
          placeholder="Search todos..." // Placeholder cho input tìm kiếm
        />
        <TouchableOpacity style={styles.searchButton} onPress={() => {}}>{/* Nút tìm kiếm */}
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={[styles.input, {marginBottom: 10,}]}
        value={newTodo}
        onChangeText={text => setNewTodo(text)} // Cập nhật todo mới
        placeholder="Enter new todo" // Placeholder cho input nhập todo
      />
      <Button title="Add Todo" onPress={handleAddTodo} color="#0066CC" /> {/* Nút thêm todo */}
      <FlatList
        data={filteredTodos} // Dữ liệu todo đã lọc
        keyExtractor={(item) => item.id.toString()} // Chìa khóa duy nhất cho mỗi item
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.name}</Text> {/* Hiển thị tiêu đề todo */}
            <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
              <Text style={styles.deleteButton}>Delete</Text> {/* Nút xóa todo */}
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

// Các style cho component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FFF',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchButton: {
    backgroundColor: '#0066CC',
    paddingVertical: 9,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  searchButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#EEE',
  },
  todoText: {
    fontSize: 18,
    color: '#333',
  },
  deleteButton: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TodoApp;