import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Screen1_b = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const isValidEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = () => {
    if (!isValidEmail(email)) {
      setError('Email không hợp lệ');
      setEmail('');
      return;
    } else {
      setError('Email hợp lệ');
    }
  };


  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
        locations={[0, 0.3, 0.85, 0.96, 1]}
        style={styles.gradient}>
        
        <View style={{ alignItems: 'center', marginTop: 76, marginBottom: 37 }}>
          <Image source={require('./assets/lock.png')} />
        </View>

        <View style={styles.key}>
          <Text style={{ fontSize: 25, fontWeight: 700, lineHeight: 29.3 }}>
            FORGET PASSWORD
          </Text>
        </View>

        <View style={styles.key}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 700,
              lineHeight: 17.58,
              textAlign: 'center',
            }}>
            Provide your account’s email for which you want to reset your
            password
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center',
            backgroundColor: '#c4c4c4',
          }}>
          <Image source={require('./assets/email.png')} />
          <TextInput
            style={{ flex: 1, height: 45, padding: 5, borderWidth: 0 }}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          {error && <Text style={{ color: 'red' }}>{error}</Text>}
        </View>

        <View>
          <TouchableOpacity
            style={{
              backgroundColor: '#E3C000',
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 43,
            }}
            onPress={handleSubmit}>
            <Text
              style={{
                fontWeight: 700,
                fontSize: 18,
                lineHeight: 21.09,
              }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },

  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    padding: 30,
  },

  key: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 37,
  },
});

export default Screen1_b;
