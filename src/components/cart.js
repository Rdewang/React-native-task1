import React, { useEffect } from 'react'
import { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
// import { cartItems, updateQuantity, deleteItem, emptyCart } from "../servicefile";

const cart = async ({ navigation }) => {

    const [cartData, setCartData] = useState();

    // const getData = async () => {
    //     const response = await cartItems();
    //     console.log(response.data)
    // }

    return (
        <View >
            <Text>
                HIIIIIII From Cart
            </Text>
        </View>
    )
}

export default cart
