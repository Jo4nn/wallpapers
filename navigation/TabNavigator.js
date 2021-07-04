import React from 'react';
import OctoIcon from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  MainStackNavigator,
} from './StackNavigator';
// import Colors from '../constants/Colors';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
    return (
        <Tab.Navigator
            swipeEnabled={true}
            animationEnabled={true}
            tabBarOptions={{
                // activeTintColor: Colors.primaryTeal,
                // inactiveTintColor: Colors.grey3,
                indicatorStyle: {
                    // borderBottomColor: Colors.primaryTeal,
                    borderBottomWidth: 2,
                },
                labelStyle: {margin: 0},
                showIcon: true,
                showLabel: false,
            }}>
            <Tab.Screen
                name="Home"
                component={MainStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="home-outline"
                            color={color}
                            size={20}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default TopTabNavigator;
