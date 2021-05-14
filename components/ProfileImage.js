import React, { useState, useEffect } from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';
import ReactNative from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    useDispatch,
    useSelector,
    connect,
} from 'react-redux';
import { isNil } from 'ramda';

import Colors from '../constants/Colors';

const ProfileImage = props => {
    return (
        <View style = {styles.centeredView}>
            <View style = {styles.imagePreview}>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
              />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imagePreview: {
        height: 100,
        width: 100,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primaryTeal,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
        backgroundColor: Colors.primaryTeal,
    },
});

export default ProfileImage;
