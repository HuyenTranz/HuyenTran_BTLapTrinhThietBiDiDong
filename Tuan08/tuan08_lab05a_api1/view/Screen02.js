import React, { useState, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';

export default function Screen02() {
  const Base_Url = 'https://64583ae61a4c152cf9937c0c.mockapi.io/api/v1/todos';
  const [todos, setTodos] = useState([]);

  const handleGetTodos = () => {
    fetch(Base_Url)
      .then((response) => response.json())
      .then((json) => setTodos(json))
      .catch((error) => {
        alert(error.message());
      });
  };
  useEffect(() => {
    handleGetTodos();
  }, []);

  const ItemTodo = ({ obj }) => {
    return (
      <View style={styles.todosList}>
        <Image source={require('../assets/icon/todolist.png')} />
        <Text style={{ flex: 1, marginLeft: 10 }}>{obj.job}</Text>
        <Image source={require('../assets/icon/note.png')} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
        }}>
        <Image source={require('../assets/icon/941.png')} />
        <Image source={require('../assets/icon/group.png')} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
          paddingTop: 15,
          marginLeft: 27,
          marginRight: 27,
        }}>
        <TouchableOpacity>
          <Image source={require('../assets/icon/leftarrow.png')} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
          }}>
          <Image source={require('../assets/icon/avt.png')} />
          <View style={{ paddingLeft: 10 }}>
            <Text
              style={{ fontSize: 20, fontWeight: 700, textAlign: 'center' }}>
              Hi Twinkle
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 400,
                textAlign: 'center',
              }}>
              Have agrate day a head
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          borderWidth: 1,
          borderRadius: 5,
          padding: 7,
          marginTop: 20,
          marginLeft: 27,
          marginRight: 27,
        }}>
        <Image
          style={{ marginLeft: 5 }}
          source={require('../assets/icon/search.png')}
        />
        <TextInput
          style={{ padding: 7, flex: 1 }}
          placeholder="Search"></TextInput>
      </View>
      <View style={styles.body}>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ItemTodo obj={item} />}
        />
      </View>

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#00BDD6',
            borderRadius: 50,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 15
          }}>
          <Image source={require('../assets/icon/add.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  body: {
    flex: 1,
    margin: 27,
  },
  todosList: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#DEE1E6',
    padding: 12,
    marginBottom: 10,
    borderRadius: 24,
  },
});
