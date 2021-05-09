import React from 'react';

import { View, StyleSheet, Text } from "react-native";

const footer = () => {
    return (
        <View style={styles.footer}>
            <Text>Footer</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    footer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: '#F55F09',
        alignItems: 'center',
        paddingTop: "5%",
        paddingBottom: "8%",
    }
})

export default footer
