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
  ScrollView
} from 'react-native';

const HomeScreen = (navigation) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerText1}>
        <Text style={styles.text1}>
          A premium online store for sporter and their stylish choice
        </Text>
      </View>
      <View style={styles.containerImg}>
        <Image
          style={styles.img}
          source={require('../assets/images/bifour_-removebg-preview.png')}
        />
      </View>
      <View style={styles.containerText2}>
        <Text style={styles.text2}>POWER BIKE SHOP</Text>
      </View>
      <View style={styles.containerBtn}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('List')}>
          <Text style={styles.textBtn}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    paddingTop: 49,
  },
  containerText1: {
    padding: 12,
  },
  text1: {
    fontSize: 26,
    fontWeight: 700,
    lineHeight: 26,
    textAlign: 'center',
  },

  containerImg: {
    flex: 1,
    backgroundColor: '#E941411A',
    borderRadius: 50,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: 292,
    height: 270,
  },

  containerText2: {
    paddingTop: 15,
    paddingBottom: 30,
  },

  text2: {
    fontSize: 26,
    fontWeight: 700,
    lineHeight: 29.87,
    textAlign: 'center',
  },

  containerBtn: {
    padding: 12,
  },

  btn: {
    backgroundColor: '#E94141',
    borderRadius: 30,
    padding: 10,
  },

  textBtn: {
    color: 'white',
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 27,
    textAlign: 'center',
  },
});

export default HomeScreen;