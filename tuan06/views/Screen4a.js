import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: 1,
    image: require('../assets/4_A/ca_nau_lau.png'),
    title: 'Ca nấu lẩu, nấu mì mini...',
    shopName: 'Shop Devang',
    action: 'Chat',
  },
  {
    id: 2,
    image: require('../assets/4_A/ga_bo_toi.png'),
    title: '1 KG KHÔ GÀ BƠ TỎI...',
    shopName: 'Shop LDT Food',
    action: 'Chat',
  },
  {
    id: 3,
    image: require('../assets/4_A/xa_can_cau.png'),
    title: 'Xe cần cẩu đa năng',
    shopName: 'Shop Thế giới đồ chơi',
    action: 'Chat',
  },
  {
    id: 4,
    image: require('../assets/4_A/do_choi_dang_mo_hinh.png'),
    title: 'Đồ chơi dạng mô hình',
    shopName: 'Shop Thế giới đồ chơi',
    action: 'Chat',
  },
  {
    id: 5,
    image: require('../assets/4_A/lanh_dao_gian_don.png'),
    title: 'Lãnh đạo đơn giản',
    shopName: 'Shop Minh Long Book',
    action: 'Chat',
  },
  {
    id: 6,
    image: require('../assets/4_A/hieu_long_con_tre.png'),
    title: 'Hiểu lòng con trẻ',
    shopName: 'Shop Minh Long Book',
    action: 'Chat',
  },
];

const Item = ({ obj }) => (
  <View style={styles.body}>
    <Image source={obj.image} />
    <View style={{flex: 1, paddingLeft: 15}}>
      <Text style={{textTransform: 'uppercase', fontWeight: 500}}>{obj.title}</Text>
      <Text style={{paddingTop: 10}}>{obj.shopName}</Text>
    </View>
    <View>
      <TouchableOpacity style= {styles.btn}>
        <Text style={{color: "white"}}>{obj.action}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function Screen4a() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabHome}>
        <TouchableOpacity>
          <Image
            source={require('../assets/icon/ant-design_arrow-left-outlined.png')}
          />
        </TouchableOpacity>
        <Text style={{ color: 'white' }}>Chat</Text>
        <TouchableOpacity>
          <Image source={require('../assets/icon/bi_cart-check.png')} />
        </TouchableOpacity>
      </View>

      <View style={{ height: 70, padding: 20, backgroundColor: '#e5e5e5' }}>
        <Text>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item obj={item} />}
          keyExtractor={(item) => item.id}
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

  body: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1
  },

  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 88,
    height: 38,
    backgroundColor: '#F31111'
  }
});
