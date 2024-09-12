import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  var myFn = () => {
    setCount(count + 2);
  };
  return (
    <view>
      <Button title="Click" onPress={myFn}></Button>
      <Text>{count}</Text>
    </view>
  );
}
