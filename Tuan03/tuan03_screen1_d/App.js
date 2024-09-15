import React from 'react';
import {
  StyleSheet,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Screen1_d() {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', marginTop: 25 }}>
        <Text style={{ fontWeight: 700, fontSize: 25, lineHeight: 29.3 }}>
          LOGIN
        </Text>
      </View>

      <View style={{ marginTop: 62 }}>
        <View style={styles.input}>
          <TextInput style={styles.textInput} placeholder="Email" />
        </View>

        <View style={[styles.input, { marginTop: 34 }]}>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry
          />
          <Image
            style={{ marginRight: 20 }}
            source={require('./assets/eye.png')}
          />
        </View>
      </View>

      <View style={{ marginTop: 62 }}>
        <TouchableOpacity
          style={{
            height: 45,
            backgroundColor: '#e53935',
            borderRadius: 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontWeight: 700,
              fontSize: 20,
              lineHeight: 23.44,
              color: 'white',
            }}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 18}}>
        <TouchableOpacity>
          <Text style={styles.text}>
            When you agree to terms and conditions
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 13}}>
        <TouchableOpacity>
          <Text style={[styles.text, { color: '#5D25FA' }]}>
            Forgot your password?
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 14}}>
        <TouchableOpacity>
          <Text style={styles.text}>Or login with</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contact}>
        <View style={[styles.img, {backgroundColor: '#25479B'}]}>
          <Image source={require('./assets/iconFB.png')} />
        </View>
        <View style={[styles.img, {backgroundColor: '#0F8EE0'}]}>
          <Image source={require('./assets/iconZalo.png')} />
        </View>
        <View style={[styles.img, {borderWidth: 1, borderColor: '#0680F1'}]}>
          <Image source={require('./assets/iconGG.png')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    alignContent: 'center',
    padding: 15,
    backgroundColor: '#31AA5230',
  },

  input: {
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#c4c4c4b4',
  },

  textInput: {
    flex: 1,
    height: 54,
    paddingHorizontal: 10,
  },

  text: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 16.41,
    textAlign: 'center',
  },

  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },

  img: {
    height: 45,
    width: 110,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
