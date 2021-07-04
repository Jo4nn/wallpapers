import React, { Component, useState } from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Text,
    TextInput,
} from 'react-native';
import {useTheme} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Provider, connect } from 'react-redux';

import Colors from '../constants/Colors';

function openDrawer(props)
{
    var navigation = props.navigation;
    navigation.openDrawer();
}

function Header(props)
{
    return (
        <View style={[styles.container, Colors.niebieski1]}>
            <TouchableOpacity onPress={() => openDrawer(props)}>
                <Icon style={styles.icon} name={'navicon'} size={25} color="#fff"/>
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = (state) =>
{
    return {
    }
}

export default connect(mapStateToProps)(Header);

const styles = StyleSheet.create({
    container:
    {
        flexDirection: "row",
        alignItems: 'stretch',
        backgroundColor: Colors.niebieski1,
    },
    icon:
    {
        padding: 10,
    },
});