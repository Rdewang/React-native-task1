import React from 'react';
import { View, StyleSheet, Text } from "react-native";

const header = () => {
    return (
        <View style={styles.top}>
            <Text style={styles.head}>Task1</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    top: {
        backgroundColor: '#F55F09',
        alignItems: 'center',
        paddingTop: "7%",
        paddingBottom: "4%",
    },
    head: {
        fontWeight: "bold",
        fontSize: 25,
        color: "#fff"
    }
});


export default header
