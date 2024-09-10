import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Screen1_a = () => {
  return (
    <View style={styles.container}>
      <View style={styles.key}>
        <Image style={styles.img} source={require('./assets/circle.png')} />
      </View>
      <View style={styles.key}>
        <Text style={[styles.text, styles.line1]}>GROW YOURS BUSINESS</Text>
      </View>
      <View style={styles.key}>
        <Text style={[styles.text, styles.line2]}>
          We will help you to grow your business using online server
        </Text>
      </View>
      <View style={styles.btns}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.text, styles.line3]}>HOW WE WORK?</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CCF9',
    padding: 24,
    justifyContent: 'center',
  },

  img: {
    height: 142,
    width: 142,
    padding: 15,
    marginTop: 69,
    marginBottom: 66,
  },

  key: {
    alignItems: 'center',
  },

  text: {
    fontFamily: 'bold',
    fontWeight: 700,
    textAlign: 'center',
  },

  line1: {
    fontSize: 25,
    lineHeight: 29.3,
    marginBottom: 50,
  },

  line2: {
    fontSize: 15,
    lineHeight: 17.58,
    marginBottom: 50,
  },

  btns: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  btn: {
    backgroundColor: '#e3c100',
    height: 45,
    width: 125,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    fontFamily: 'bold',
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 23.44,
  },

  line3: {
    marginTop: 21,

  }
});

export default Screen1_a;
