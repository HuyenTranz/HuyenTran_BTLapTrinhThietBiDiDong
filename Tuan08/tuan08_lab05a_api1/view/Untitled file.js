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

export default function Screen03() {
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
        <TouchableOpacity>
          <Image source={require('../assets/icon/leftarrow.png')} />
        </TouchableOpacity>
      </View>

      <View>
        <Text
          style={{
            fontWeight: 700,
            fontSize: 32,
            textAlign: 'center',
            margin: 30,
          }}>
          ADD YOUR JOB
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          borderWidth: 1,
          borderRadius: 5,
          padding: 5,
          marginLeft: 27,
          marginRight: 27,
        }}>
        <Image
          style={{ marginLeft: 5 }}
          source={require('../assets/icon/todo.png')}
        />
        <TextInput
          style={{ padding: 7, flex: 1 }}
          placeholder="Input your job!"></TextInput>
      </View>

      <View style={{ alignItems: 'center', marginTop: 40, marginBottom: 10 }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#00BDD6',
            borderRadius: 50,
            padding: 7,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 15,
          }}>
          <Text
            style={{
              color: 'white',
              padding: 10,
              width: 190,
              textAlign: 'center',
              fontSize: 16,
            }}>
            FINISH ->
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'center' }}>
        <Image source={require('../assets/icon/img.png')} />
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
});
