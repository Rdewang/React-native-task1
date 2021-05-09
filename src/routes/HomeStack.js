import React from 'react'
import { View, Text } from 'react-native';
import Home from "../components/home";
import Items from "../components/items";
import Details from "../components/details";
import Cart from "../components/cart";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome' }} />
                <Stack.Screen name="Items" component={Items} />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="Cart" component={Cart} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default HomeStack
// const screens = {
//     Home: {
//         screen: Home
//     },
//     Items: {
//         screen: Items
//     }
// }

// const HomeStack = createStackNavigator(screens);

// export default NavigationContainer(HomeStack)
