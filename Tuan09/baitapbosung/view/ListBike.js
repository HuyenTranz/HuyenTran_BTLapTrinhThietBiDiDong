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

const DATA = [
  {
    id: 1,
    image: require('../assets/images/bifour_-removebg-preview1.png'),
    name: 'Pinarello',
    price: '1800',
  },
  {
    id: 2,
    image: require('../assets/images/bione-removebg-preview.png'),
    name: 'Pina Mountai',
    price: '1700',
  },
  {
    id: 3,
    image: require('../assets/images/bithree_removebg-preview.png'),
    name: 'Pina Bike',
    price: '1500',
  },
  {
    id: 4,
    image: require('../assets/images/bitwo-removebg-preview.png'),
    name: 'Pinarello',
    price: '1900',
  },
  {
    id: 5,
    image: require('../assets/images/bithree_removebg-preview.png'),
    name: 'Pinarello',
    price: '2700',
  },
  {
    id: 6,
    image: require('../assets/images/bione-removebg-preview.png'),
    name: 'Pinarello',
    price: '1350',
  },
];

const Item = ({ obj }) => (
  <View style={styles.productItem}>
    <View style={styles.productImg}>
      <Image source={require('../assets/images/ant-design_heart-twotone.png')} />
      <Image source={obj.image} />
    </View>
    <View>
      <Text style={styles.productText}>{obj.name}</Text>
    </View>
    <View>
      <Text style={styles.productText}>${obj.price}</Text>
    </View>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerText1}>
        <Text style={styles.text1}>The world’s Best Bike</Text>
      </View>
      <View style={styles.containerBtns}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textBtn}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textBtn}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textBtn}>Mountain</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.productList}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item obj={item} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    paddingTop: 49,
    margin: 15,
  },
  containerText1: {
    paddingBottom: 10,
  },
  text1: {
    fontSize: 25,
    fontWeight: 700,
    lineHeight: 28.73,
    color: '#E94141',
  },
  containerBtns: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btn: {
    borderColor: '#E9414187',
    borderWidth: 1,
    height: 20,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  textBtn: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24.91,
    textAlign: 'center',
  },
  productList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productItem: {
    width: 167,
    height: 200,
    backgroundColor: '#F7BA8326',
    borderRadius: 10,
    margin: 5,
  },
  productImg: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  productText: {
    fontSize: 17,
    fontWeight: 400,
    lineHeight: 24.91,
    textAlign: 'center',
  },
});
