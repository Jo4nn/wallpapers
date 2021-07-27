import React, { useState, useEffect } from 'react';
import {
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import ReactNative from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';

const BackButton = props => {
    return (
        <TouchableOpacity
            onPress={() => props.onBackButtonClick()}
            style = {styles.imageContainer}
        >
            <Icon
                color = 'white'
                name = "chevron-left"
                size = {25}
                style = {styles.icon}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: Colors.secondary,
        borderBottomRightRadius: 10,
    },
    icon: {
        margin: 10,
        width: 30,
        height: 30,
        borderRadius: 100,
    },
});

export default BackButton;
