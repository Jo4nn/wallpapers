import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Dimensions,
    TouchableOpacity,
} from 'react-native';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
    {
      id: '58694XCDSf-3da1-471f-bd96-145571e29d72',
      title: 'Forth Item',
    },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const HomeScreen = (props) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => props.navigation.navigate('Single Image')}>
        <Item title={item.title} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.root}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}                   // set number of columns
        columnWrapperStyle={styles.row}  // space them out evenly

      />
    </SafeAreaView>
  );
};

const {height, width} = Dimensions.get('window');
const itemWidth = (width - 15) / 2;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    margin: 5,
    borderRadius: 10,
    width: itemWidth,
    height: itemWidth,
    flex: 0.5,
  },
  title: {
    fontSize: 32,
  },
  row: {
      flex: 1,
      justifyContent: "space-around"
  }
});


export default HomeScreen;
