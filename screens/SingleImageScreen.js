import React, { useState, useCallback, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Button,
    SafeAreaView,
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
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Colors from '../constants/Colors';

const SingleImageScreen = ({navigation}) => {
    return (
        <View style={styles.root}>
          <Text>
            HELLO
          </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    eventContainer: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        shadowColor: Colors.primaryTeal,
        shadowOpacity: 0.36,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 120,
        elevation: 5,
        backgroundColor: 'white',
    },
    image: {
        width: '40%',
        height: '45%',
    },
    googleMapContainer: {
        width: '100%',
    },
    imagePreview: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyStateText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.grey5,
    },
    emptyStateHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.grey5,
    },
    addButtonEventContainer: {
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
        borderColor:  Colors.primaryTeal,
        borderWidth: 1,
        backgroundColor: Colors.primaryTeal,
    },
    addEventButton: {
        padding: 5,
        fontWeight: 'bold',
        fontSize: 14,
        color:'white',
    },
    iconContainer: {
        paddingRight: 15,
        paddingBottom: 10,
        flexDirection: 'row',
        alignContent: 'flex-end',
        justifyContent: 'space-between',
    },
});

export default SingleImageScreen;
