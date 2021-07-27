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
    Image,
} from 'react-native';
import Header from '../components/Header';

import Colors from '../constants/Colors';
import catSrc from '../assets/images/cat.png';
import chickenSrc from '../assets/images/chicken.png';
import dogSrc from '../assets/images/dog.png';
import donkeySrc from '../assets/images/donkey.png';
import duckSrc from '../assets/images/duck.png';
import goatSrc from '../assets/images/goat.png';
import gooseSrc from '../assets/images/goose.png';
import horseSrc from '../assets/images/horse.png';
import pigSrc from '../assets/images/pig.png';
import roosterSrc from '../assets/images/rooster.png';
import sheepSrc from '../assets/images/sheep.png';
import turkeySrc from '../assets/images/turkey.png';

import catMp3Src from '../assets/sounds/cat.mp3';
import chickenMp3Src from '../assets/sounds/chicken.mp3';
import dogMp3Src from '../assets/sounds/dog.mp3';
import donkeyMp3Src from '../assets/sounds/donkey.mp3';
import duckMp3Src from '../assets/sounds/duck.mp3';
import goatMp3Src from '../assets/sounds/goat.mp3';
import gooseMp3Src from '../assets/sounds/goose.mp3';
import horseMp3Src from '../assets/sounds/horse.mp3';
import pigMp3Src from '../assets/sounds/pig.mp3';
import roosterMp3Src from '../assets/sounds/rooster.mp3';
import sheepMp3Src from '../assets/sounds/sheep.mp3';
import turkeyMp3Src from '../assets/sounds/turkey.mp3';

// https://www.pluralsight.com/guides/consume-data-from-firebase-firestore-in-a-react-app
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    imageSrc: catSrc,
    animal: 'Cat',
    sound: catMp3Src,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    imageSrc: chickenSrc,
    animal: 'Chicken',
    sound: chickenMp3Src,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    imageSrc: dogSrc,
    animal: 'Dog',
    sound: dogMp3Src,
  },
    {
      id: '58694XCDSf-3da1-471f-bd96-145571e29d72',
      imageSrc: donkeySrc,
      animal: 'Donkey',
      sound: donkeyMp3Src,
    },
    {
      id: '586defeCDSf-3da1-471f-bd96-145571e29d72',
      imageSrc: duckSrc,
      animal: 'Duck',
      sound: duckMp3Src,
    },
    {
      id: '586defeCferfref-3da1-471f-bd96-145571e29d72',
      imageSrc: goatSrc,
      animal: 'Goat',
      sound: goatMp3Src,
    },
    {
      id: '586deflmkCferfref-3da1-471f-bd96-145571e29d72',
      imageSrc: gooseSrc,
      animal: 'Goose',
      sound: gooseMp3Src,
    },
    {
      id: '586defeCferfref-3da1-471f-bd96-14frefr71e29d72',
      imageSrc: horseSrc,
      animal: 'Horse',
      sound: horseMp3Src,
    },
    {
      id: '586defeCferfref-3da1-471f-bfefer96-14frefr71e29d72',
      imageSrc: pigSrc,
      animal: 'Pig',
      sound: pigMp3Src,
    },
    {
      id: '586defeCfefrrfref-3da1-471f-bfefer96-14frefr71e29d72',
      imageSrc: roosterSrc,
      animal: 'Rooster',
      sound: roosterMp3Src,
    },
    {
      id: 'vv6defefrrfref-3da1-471f-bfefer96-14frefr71e29d72',
      imageSrc: sheepSrc,
      animal: 'Sheep',
      sound: sheepMp3Src,
    },
    {
      id: '586defxqffefrrfref-3da1-471f-bfefer96-14frefr71e29d72',
      imageSrc: turkeySrc,
      animal: 'Turkey',
      sound: turkeyMp3Src,
    },
];

const Item = ({ imageSrc }) => (
  <Image
    source={imageSrc}
    resizeMode="contain"
    style={styles.item}
  />
);

const HomeScreen = (props) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => {
            props.navigation.navigate('Single Image', { itemId: item.id })
            }}
        >
            <Item imageSrc={item.imageSrc} />
        </TouchableOpacity>
    );

  return (
    <SafeAreaView style={styles.root}>
        <Header navigation={props.navigation} />
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
        backgroundColor: Colors.primary,
    },
    item: {
        backgroundColor: 'white',
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
        justifyContent: "space-around",
    },
});


export default HomeScreen;
