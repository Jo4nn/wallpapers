/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Provider, connect, useDispatch} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
  View,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './screens/HomeScreen';
import SingleImageScreen from './screens/SingleImageScreen';
import AppNavigator from './navigation/AppNavigator';

const rootReducer = combineReducers({});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
        <AppNavigator />
    </Provider>
  );
};

export default App;
