import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, Button, Modal, TouchableOpacity, Pressable } from 'react-native'
import { cartItems, updateQuantity, deleteItem, emptyCart } from "../servicefile";

const cart = ({ navigation }) => {

    const [data, setData] = useState();
    const [ showModal, setshowModal] = useState(false);

    const incrementQuantity = (id ,quantity) => {
        const newQuantity = quantity + 1
        updateQuantity(id, newQuantity)
        getData();
    }
    const decrementQuantity = (id ,quantity) => {
        const newQuantity = quantity - 1;
        updateQuantity(id, newQuantity)
        getData();
    }

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        // console.log(itemId)
        let response = await cartItems();
        if (response) {
            const res = response.data.data;
            // console.log(res)
            setData(res);
        } else {
            console.log("Error", response)
        }
    }

    const showModel = () => {

        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        />

    }

    const handleDelete = (id) => {
        deleteItem(id);
        getData();
    }

    const show = ({ item }) => {
        // console.log(item,"from show")
        return (
            <View style={styles.item} >
                <View style={styles.image}><Text>Image</Text></View>
                <View style={styles.aboutItem}>
                    <View style={styles.title}>
                        <Text style={{ fontSize: 20 }}>{item?.item?.name}</Text>
                        <Pressable onPress={() => {
                            console.log("delete")
                            handleDelete(item.id)
                            }}>
                            <Text style={{ fontSize: 20 }}>x</Text>
                        </Pressable>
                    </View>

                    <Text style={[styles.itemDesc]}>{item?.item?.description}</Text>
                    <Text style={[styles.itemPrice]}> Rs. {item.quantity * item?.item?.price} /-</Text>
                    <View style={styles.btnview}>
                        <Pressable onPress={() => {
                            console.log("+");
                            incrementQuantity(item.id, item.quantity)
                    }} >
                            <Text style={styles?.quantitybtn}> + </Text>
                        </Pressable>
                        <Text style={styles.quantityno}> {item.quantity}</Text>
                        <Pressable onPress={() => {
                            console.log(" --");
                            decrementQuantity(item.id, item.quantity)
                        }}>
                            <Text style={styles?.quantitybtn}> - </Text>
                        </Pressable>
                    </View>
                </View>
                <View>

                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, flexDirection: "column", backgroundColor: "coral" }}>
            <FlatList
                data={data}
                renderItem={show}
                keyExtractor={(data) => data.id}
            />
            <View>
                <Button title="Shop more" onPress={() => {
                    navigation.navigate("Home")
                }} />
                {/* {console.log("data",data)} */}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    item: {
        flex: 2,
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: "grey",
        justifyContent: "space-between",
        flexDirection: "row",
        flexGrow: 10,
        borderRadius: 11,
        maxHeight: 130,

    },
    title: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: 8,
        fontSize: 20
    },
    image: {
        flex: 1,
        backgroundColor: "darkgrey",
        marginRight: 10,
        alignItems: "center",
        justifyContent: 'center',
        maxHeight: 200
    },
    aboutItem: {
        flex: 3,
        flexDirection: "column",
    },
    itemPrice: {
        fontWeight: "800",
        fontSize: 20,
        fontStyle: "italic",
        marginTop: 2
    },
    itemDesc: {
        fontWeight: "100",
        fontStyle: "italic",
        opacity: 0.5,
    },
    btnview: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "flex-end",
        marginRight: 8,

    },
    quantitybtn: {
        fontSize: 18,
        fontWeight: "bold",
        marginHorizontal: 2,
        justifyContent: "center",
        alignContent: "center",
        borderWidth: 1,
        backgroundColor: "#1DCFE0",
    },
    quantityno: {
        borderEndWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold"
    }

});
export default cart

