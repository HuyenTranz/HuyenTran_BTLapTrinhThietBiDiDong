import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Screen1_a = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
        locations={[0, 0.3, 0.85, 0.96, 1]}
        style={styles.gradient}>
        <View style={styles.key}>
          <Image
            style={{
              height: 142,
              width: 142,
              padding: 15,
              marginTop: 45,
              marginBottom: 66,
            }}
            source={require('./assets/circle.png')}
          />
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
        <View style={{ marginTop: 21 }}>
          <Text style={styles.text}>HOW WE WORK?</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    padding: 24,
  },

  key: {
    alignItems: 'center',
  },

  text: {
    fontFamily: 'bold',
    fontWeight: '700',
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
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 23.44,
  },
});

export default Screen1_a;
