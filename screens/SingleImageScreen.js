import React, {useEffect, useState} from 'react';
import {
    Text,
    Button,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';
import {
    find,
    path,
    prop,
    propEq,
} from 'ramda';
import TrackPlayer, {
  TrackPlayerEvents,
  STATE_PLAYING,
} from 'react-native-track-player';
import {
  useTrackPlayerProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player/lib/hooks';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../constants/Colors';
import BackButton from '../components/BackButton';

import catSrc from '../assets/images/cat.jpg';
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

// https://github.com/rohanbhatia96/musicplayer-react-native/blob/master/App.js

const songListDetails = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    imageSrc: catSrc,
    title: 'Cat',
    url: catMp3Src,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    imageSrc: chickenSrc,
    title: 'Chicken',
    url: chickenMp3Src,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    imageSrc: dogSrc,
    title: 'Dog',
    url: dogMp3Src,
  },
    {
      id: '58694XCDSf-3da1-471f-bd96-145571e29d72',
      imageSrc: donkeySrc,
      title: 'Donkey',
      url: donkeyMp3Src,
    },
    {
      id: '586defeCDSf-3da1-471f-bd96-145571e29d72',
      imageSrc: duckSrc,
      title: 'Duck',
      url: duckMp3Src,
    },
    {
      id: '586defeCferfref-3da1-471f-bd96-145571e29d72',
      imageSrc: goatSrc,
      title: 'Goat',
      url: goatMp3Src,
    },
    {
      id: '586deflmkCferfref-3da1-471f-bd96-145571e29d72',
      imageSrc: gooseSrc,
      title: 'Goose',
      url: gooseMp3Src,
    },
    {
      id: '586defeCferfref-3da1-471f-bd96-14frefr71e29d72',
      imageSrc: horseSrc,
      title: 'Horse',
      url: horseMp3Src,
    },
    {
      id: '586defeCferfref-3da1-471f-bfefer96-14frefr71e29d72',
      imageSrc: pigSrc,
      title: 'Pig',
      url: pigMp3Src,
    },
    {
      id: '586defeCfefrrfref-3da1-471f-bfefer96-14frefr71e29d72',
      imageSrc: roosterSrc,
      title: 'Rooster',
      url: roosterMp3Src,
    },
    {
      id: '586defeCfefrrfref-3da1-471f-bfefer96-14frefr71e29d72',
      imageSrc: sheepSrc,
      title: 'Sheep',
      url: sheepMp3Src,
    },
    {
      id: '586defxqffefrrfref-3da1-471f-bfefer96-14frefr71e29d72',
      imageSrc: turkeySrc,
      title: 'Turkey',
      url: turkeyMp3Src,
    },
];

const SingleImageScreen = (props) => {
    const [songDetails, setSongDetails] = useState();
    const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);
    const [isSeeking, setIsSeeking] = useState(false);
    const {position, duration} = useTrackPlayerProgress(250);

    useEffect(() => {
        const itemId = props.route.params.itemId;
        setSongDetails(find(propEq('id', props.route.params.itemId))(songListDetails));
    }, [props]);

    useEffect(() => {
        if (songDetails) {
          const startPlayer = async () => {
             let isInit =  await trackPlayerInit();
             setIsTrackPlayerInit(isInit);
          }
          startPlayer();
        }
    }, [songDetails]);

    //this hook updates the value of the slider whenever the current position of the song changes
    useEffect(() => {
        if (!isSeeking && position && duration) {
            setSliderValue(position / duration);
        }
    }, [position, duration]);

  useTrackPlayerEvents([TrackPlayerEvents.PLAYBACK_STATE], event => {
    if (event.state === STATE_PLAYING) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  });

    const trackPlayerInit = async () => {
        if (songDetails) {
              await TrackPlayer.setupPlayer();
              TrackPlayer.updateOptions({
                stopWithApp: true,
                capabilities: [
                  TrackPlayer.CAPABILITY_PLAY,
                  TrackPlayer.CAPABILITY_PAUSE,
                  TrackPlayer.CAPABILITY_JUMP_FORWARD,
                  TrackPlayer.CAPABILITY_JUMP_BACKWARD,
                ],
              });

              await TrackPlayer.add({
                id: prop('id')(songDetails),
                url: prop('url')(songDetails),
                type: 'default',
                title: prop('title')(songDetails),
              });
              return true;
        }
    };

  const onButtonPressed = () => {
    if (!isPlaying) {
      TrackPlayer.play();
      //setIsPlaying(true);
    } else {
      TrackPlayer.pause();
      //setIsPlaying(false);
    }
  };

  const slidingStarted = () => {
    setIsSeeking(true);
  };

  const slidingCompleted = async value => {
    await TrackPlayer.seekTo(value * duration);
    setSliderValue(value);
    setIsSeeking(false);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <BackButton
            onBackButtonClick={() => console.log('------fwefe')}
            {...props}
        />
        <Image
          source={prop('imageSrc')(songDetails)}
          resizeMode="contain"
          style={styles.animalImage}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.songTitle}>{prop('title')(songDetails)}</Text>
      </View>
      <View style={styles.controlsContainer}>
        <Slider
          style={styles.progressBar}
          minimumValue={0}
          maximumValue={1}
          value={sliderValue}
          minimumTrackTintColor="#111000"
          maximumTrackTintColor="#000000"
          onSlidingStart={slidingStarted}
          onSlidingComplete={slidingCompleted}
          thumbTintColor="#000"
        />
        <TouchableOpacity
            onPress={onButtonPressed}
            style = {styles.imageContainer}
            disabled={!isTrackPlayerInit}
        >
            <Icon
                color = 'white'
                name = {isPlaying ? 'pause' : 'play'}
                size = {25}
                style = {styles.icon}
            />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const {height, width} = Dimensions.get('window');
const itemWidth = (width - 15);

const styles = StyleSheet.create({
    icon: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: Colors.primaryTeal,
    },
      mainContainer: {
        flex: 1,
        backgroundColor: '#EDEDED',
      },
      imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      detailsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      controlsContainer: {
        flex: 0.45,
        justifyContent: 'flex-start',
      },
      animalImage: {
        width: itemWidth,
        height: itemWidth,
        alignSelf: 'center',
        borderRadius: 10,
      },
      progressBar: {
        height: 10,
        paddingBottom: 90,
      },
      songTitle: {
        color: Colors.grey3,
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'capitalize',
      },
});

export default SingleImageScreen;
