import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: 1,
    image: require('../assets/4_B/giacchuyen1.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    start: require('../assets/4_B/Group5.png'),
    money: '69.900 đ',
    sale: '-39%',
  },
  {
    id: 2,
    image: require('../assets/4_B/daynguon1.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    start: require('../assets/4_B/Group5.png'),
    money: '69.900 đ',
    sale: '-39%',
  },
  {
    id: 3,
    image: require('../assets/4_B/dauchuyendoipsps21.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    start: require('../assets/4_B/Group5.png'),
    money: '69.900 đ',
    sale: '-39%',
  },
  {
    id: 4,
    image: require('../assets/4_B/dauchuyendoi1.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    start: require('../assets/4_B/Group5.png'),
    money: '69.900 đ',
    sale: '-39%',
  },
  {
    id: 5,
    image: require('../assets/4_B/carbusbtops2.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    start: require('../assets/4_B/Group5.png'),
    money: '69.900 đ',
    sale: '-39%',
  },
  {
    id: 6,
    image: require('../assets/4_B/daucam1.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    start: require('../assets/4_B/Group5.png'),
    money: '69.900 đ',
    sale: '-39%',
  },
];

const Item = ({ obj }) => (
  <View style={styles.body}>
    <Image source={obj.image} />
    <Text>{obj.title}</Text>
    <Image source={obj.start} />
    <View style={{ flexDirection: 'row' }}>
      <Text style={{ fontWeight: 'bold' }}>{obj.money}</Text>
      <Text style={{ paddingLeft: 20, color: '#333' }}>{obj.sale}</Text>
    </View>
  </View>
);

export default function Screen4b() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabHome}>
        <TouchableOpacity>
          <Image
            source={require('../assets/icon/ant-design_arrow-left-outlined.png')}
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', backgroundColor: 'white', padding: 5, flex: 1, margin: 20}}>
          <Image source={require('../assets/4_B/whh_magnifier.png')} />
          <TextInput style={{marginLeft: 15}} placeholder="Dây cáp USB" />
        </View>
        <Image source={require('../assets/4_B/bi_cart-check(1).png')}/>
        <TouchableOpacity>
          <Image source={require('../assets/4_B/Group2.png')} />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item obj={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
      <View style={styles.tabHome}>
        <TouchableOpacity>
          <Image source={require('../assets/icon/Group10.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/icon/Vector(Stroke).png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/icon/Vector1(Stroke).png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  tabHome: {
    height: 45,
    padding: 15,
    backgroundColor: '#1ba9ff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  flatListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  body: {
    width: '70%',
    padding: 20,
  },
});
