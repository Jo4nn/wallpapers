import React from 'react';
import {
  View,
  Platform,
  SafeAreaView,
  Button,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import OctoIcon from 'react-native-vector-icons/Octicons';
import { TouchableOpacity } from 'react-native';
import { path } from 'ramda';
import TabNavigator from './TabNavigator';
import DrawerContent from './DrawerContent';

import SingleImageScreen from '../screens/SingleImageScreen';
import Home from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const dispatch = useDispatch();
    return (
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Home} options={{headerMode: 'none', headerShown : false}} />
        <Drawer.Screen name="Single Image" component={SingleImageScreen} options={{ headerShown: false }}/>
      </Drawer.Navigator>
    );
};
export default DrawerNavigator;
