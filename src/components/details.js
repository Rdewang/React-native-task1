import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, Button } from 'react-native';
import { getItembyId, addToCart } from "../servicefile"

const details = ({ navigation, route }) => {
    const { id } = route.params;
    const [data, setData] = useState(null);

    useEffect(() => {
        // getData(id);
        let response = getItembyId(id);
        if (response) {
            const res = response.data.data;
            console.log(res[0])
            setData(res[0])
            console.log("data", data)
            return
        } else {
            console.log("Error", response)
        }
    }, []);

    const getData = async (itemId) => {
        // console.log(itemId)
        let response = await getItembyId(itemId);
        if (response) {
            const res = response.data.data;
            console.log(res[0])
            setData(res[0])
            console.log("data", data)
            return
        } else {
            console.log("Error", response)
        }
    }


    // console.log(data)
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.title}>
                    {/* <Text style={styles.title}>{data}</Text> */}
                    <Text style={styles.title}>Mobile</Text>
                </View>
                <View style={styles.image}>
                    <Text>Image</Text>
                </View>
                <View >
                    {/* <Text style={styles.price}> Rs. {data.price} /-</Text> */}
                    <Text style={styles.price}> Rs. 10,000 /-</Text>
                </View>
                <View >
                    {/* <Text style={styles.desc}>{data.description}</Text> */}
                    <Text style={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                </Text>
                </View>
                <View style={styles.addtocart}>
                    <Button
                        title="Add To Cart"
                        onPress={() => {
                            console.log("Item Added");
                            addToCart(6)
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
        backgroundColor: "darkgrey",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default details
