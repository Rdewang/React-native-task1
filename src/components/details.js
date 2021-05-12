import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, Button } from 'react-native';
import { getItembyId, addToCart } from "../servicefile"

const details = ({ navigation, route }) => {
    const { id } = route.params;
    let res = "";
    const [data, setData] = useState([]);

    useEffect(() => {
        getData(id);
    },[]);

    const getData = async (itemId) => {
        // console.log(itemId)
        let response = await getItembyId(itemId);
        if (response) {
             res = response.data.data[0];
            // console.log(res)
            setData(res);
            // console.log("data", data, " res" , res)
        } else {
            console.log("Error", response)
        }
    }
    // console.log(data)
    return ( 
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.title}>{data.name}</Text>
                    {/* <Text style={styles.title}>Mobile</Text> */}
                </View>
                <View style={styles.image}>
                    <Text>Image</Text>
                </View>
                <View >
                    <Text style={styles.price}> Rs. {data.price} /-</Text>
                    {/* <Text style={styles.price}> Rs. 10,000 /-</Text> */}
                </View>
                <View >
                    <Text style={styles.desc}>{data.description}</Text>
                    {/* <Text style={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                </Text> */}
                </View>
                <View style={styles.addtocart}>
                    <Button
                        title="Add To Cart"
                        onPress={() => {
                            console.log("Item Added");
                            addToCart(data.id)
                            navigation.navigate('Cart')
                        }}
                        color="#843ED7"
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "flex-start",
        flexDirection: "column",
        padding: 15
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "blue",
        paddingBottom: 3,
        paddingLeft: 2,
        alignSelf: 'flex-start'
    },
    price: {
        fontStyle: "italic",
        fontSize: 18,
        fontWeight: "700",
        color: "blue",
        alignSelf: 'flex-start',
        margin: 10
    },
    desc: {
        opacity: 0.9,
        color: "grey",
        fontSize: 14,
        padding: 10
    },
    addtocart: {
        margin: 10,
        width: "40%"
    },
    image: {
        width: "100%",
        height: 250,
        backgroundColor: "linen",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default details
