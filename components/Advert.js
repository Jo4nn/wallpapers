import React, { Component, useState} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    AsyncStorage,
    Button,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
} from 'react-native';
//import {
//    BannerAd,
//    BannerAdSize,
//    TestIds,
//} from '@react-native-firebase/admob';

import {
    ADVERT_BANNER_ANDROID_ID,
    ADVERT_BANNER_IOS_ID,
} from './../constants/Advert';

// https://rnfb-docs.netlify.app/admob/usage
//const Advert = props => {
//    const [isDisplayed, setIsDisplayed] = useState(true);
//
//    const getBannerId = Platform.OS == "ios" ? ADVERT_BANNER_IOS_ID : ADVERT_BANNER_ANDROID_ID;
//
//    const failedToLoad = (message) => {
//        console.log('error', message);
//        setIsDisplayed(false);
//    }
//
//    return (
//        <BannerAd
//              unitId={getBannerId}
//              size={BannerAdSize.FULL_BANNER}
//              requestOptions={{
//                requestNonPersonalizedAdsOnly: false,
//              }}
//              onAdFailedToLoad={(error) => failedToLoad(error)}
//        />
//    )
//}

export default Advert;
