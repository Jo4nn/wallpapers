import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import {
  path,
  isNil,
} from 'ramda';
import DrawerNavigator from './DrawerNavigator';
// import Advert from '../components/Advert';

const AppNavigator = props => {
  const dispatch = useDispatch();
  const navRef = useRef();

//      <Advert />

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;