import React, { useState, useCallback, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    Text,
    Button,
    FlatList,
    StatusBar,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    TouchableHighlight,
    Animated,
} from 'react-native';
import {
    path,
    not,
    length,
    type,
    pipe,
    of,
    toPairs,
    map,
    apply,
    objOf,
    values,
    keys,
    addIndex,
    take,
    prop,
} from 'ramda';
import Colors from '../constants/Colors';

const HomeScreen = ({
    navigation,
}) => {
    return (
        <SafeAreaView style={styles.root}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
          >
              <Text>
                HELLO Screen HELLO
              </Text>
          </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});

export default HomeScreen;
