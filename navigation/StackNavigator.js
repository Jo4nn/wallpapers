import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/HomeScreen';
import SingleImageScreen from '../screens/SingleImageScreen';
const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerMode: 'none', headerShown : false}} />
        </Stack.Navigator>
    );
};

export { MainStackNavigator };
