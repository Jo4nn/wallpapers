import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import {
  path,
  isNil,
} from 'ramda';
import DrawerNavigator from './DrawerNavigator';

const AppNavigator = props => {
  const dispatch = useDispatch();
  const navRef = useRef();

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;