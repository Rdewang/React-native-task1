import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { getItembyCatId } from "../servicefile";

const items = ({ navigation }) => {

    const [data, setData] = useState();

    const getData = async () => {
        let response = await getItembyCatId(2);
        console.log(response.data)
        if (response) {
            setData(response.data.data)
        } else {
            console.log("Error", response)
        }
    }

    useEffect(() => {
        getData();
    }, []);
    const show = ({ item }) => {
        return (
            <TouchableOpacity style={[styles.item]}
                onPress={() => { console.log("item clicked"); navigation.push('Details', { id: item.id }) }}
            >
                <View style={styles.item} >
                    <View style={styles.image}><Text>Image</Text></View>
                    <View style={styles.aboutItem}>
                        <Text style={[styles.title]}>{item.name}</Text>
                        <Text style={[styles.itemDesc]}>{item.description}</Text>
                        <Text style={[styles.itemPrice]}> Rs. {item.price}/-</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1, flexDirection: "column", backgroundColor: "coral" }}>
            <FlatList
                data={data}
                renderItem={show}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    item: {
        flex: 1,
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: "grey",
        justifyContent: "space-between",
        flexDirection: "row",
        flexGrow: 4,
        borderRadius: 11,
        maxHeight: 130,

    },
    title: {
        fontSize: 20,
    },
    image: {
        flex: 1,
        backgroundColor: "darkgrey",
        marginRight: 10,
        alignItems: "center",
        justifyContent: 'center',
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
        // maxHeight: 8
    }

});

export default items
