import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textLogin}>LOGIN</Text>
      </View>
      <View>
        <View style={[styles.inputs, styles.input1]}>
          <Image
            style={styles.img}
            source={require('./assets/avatar_user.png')}
          />
          <TextInput
            style={styles.textInput}
            placeholder="NAME"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.inputs}>
          <Image style={styles.img} source={require('./assets/lock.png')} />
          <TextInput
            style={styles.textInput}
            placeholder="PASSWORD"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Image style={styles.img} source={require('./assets/eye.png')} />
        </View>
      </View>
      <View style={styles.btns}>
        <TouchableOpacity
          style={{
            height: 45,
            backgroundColor: 'black',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 2,
          }}
          onPress={() => alert(`Login\nName: ${name}\nPassword: ${password}`)}>
          <Text
            style={{
              fontSize: 20,
              lineHeight: 23.44,
              fontWeight: 700,
              color: 'white',
            }}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity>
          <Text style={{ fontWeight: 700, fontSize: 20, lineHeight: 22.44 }}>
            Forgot your password?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edbf01',
  },

  textLogin: {
    paddingTop: 75,
    fontWeight: 700,
    fontSize: 30,
    lineHeight: 35.16,
    marginLeft: 3,
  },

  img: {
    margin: 24,
    width: 32,
    height: 32,
  },

  inputs: {
    margin: 15,
    height: 54,
    borderWidth: 1,
    borderColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
  },

  textInput: {
    flex: 1,
    height: 52,
    fontSize: 12,
    lineHeight: 21.59,
  },

  input1: {
    marginTop: 82,
    marginBottom: 20,
  },

  btns: {
    marginTop: 44,
    margin: 15,
  },
});
