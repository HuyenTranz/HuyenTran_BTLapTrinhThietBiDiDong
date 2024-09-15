import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Screen1_c() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
        locations={[0, 0.3, 0.85, 0.96, 1]}
        style={styles.gradient}>
        <View style={{ marginTop: 103, alignItems: 'center' }}>
          <Text style={styles.textCode}>CODE</Text>
        </View>

        <View style={{ marginTop: 62, alignItems: 'center' }}>
          <Text style={styles.textVerifcate}>VERIFICATION</Text>
        </View>

        <View style={{ marginTop: 55, alignItems: 'center' }}>
          <Text style={styles.textEnter}>
            Enter ontime password sent on ++849092605798
          </Text>
        </View>

        <View style={styles.inputCode}>
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
        </View>

        <View style={{ marginTop: 34 }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#e3c000',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.textVerifyCode}>VERIFY CODE</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    alignContent: 'center',
  },

  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 10,
  },

  textCode: {
    fontSize: 60,
    fontWeight: 700,
    lineHeight: 70.31,
  },

  textVerifcate: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 23.44,
  },

  textEnter: {
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 17.58,
    textAlign: 'center',
  },

  textVerifyCode: {
    fontWeight: 700,
    fontSize: 18,
    lineHeight: 21.09,
  },

  inputCode: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 14,
  },

  input: {
    height: 50,
    width: 50,
    borderWidth: 1,
    padding: 10,
  },
});
