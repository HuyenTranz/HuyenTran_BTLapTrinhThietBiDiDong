import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

export default function Screen01() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/icon/941.png')} />
        <Image source={require('../assets/icon/group.png')} />
      </View>
      <View style={styles.img}>
        <Image source={require('../assets/icon/img.png')} />
      </View>
      <View
        style={{
          alignItems: 'center',
          padding: 15,
        }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 700,
            textAlign: 'center',
            color: '#B353E2',
          }}>
          MANAGE YOUR TASK
        </Text>
      </View>
      <View style={styles.email}>
        <Image
          style={{ marginRight: 5 }}
          source={require('../assets/icon/email.png')}
        />
        <TextInput placeholder="Enter your name"></TextInput>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#00BDD6',
            padding: 12,
            borderRadius: 12,
            width: 190,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ fontWeight: 400, fontSize: 16 }}>GET STARTED -></Text>
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
  header: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  email: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 8,
    borderWidth: 1,
    margin: 28,
    borderRadius: 12,
  },
});
