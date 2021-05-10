import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { cartItems , updateQuantity} from "../servicefile";

const cart = ({ navigation}) => {

    const [ data , setData ] = useState([]);

    useEffect(() => {
        getData();
    })

    const getData = async () => {
        // console.log(itemId)
        let response = await cartItems();
        if (response) {
            const res = response.data;
            console.log(res)
            // setData(res);
            // console.log("data", data, " res" , res)
        } else {
            console.log("Error", response)
        }
    }

    return (
        <View>
            <Text>hiiiii</Text>
        </View>
    )
}

export default cart

