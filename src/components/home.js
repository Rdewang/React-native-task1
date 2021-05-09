import React from 'react'
import { View, StyleSheet, Text, Pressable, Button } from 'react-native';


const home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.btn}>
                <Button
                    title="Furniture"
                    onPress={() => {
                        console.log("furniture Pressedddd")
                        navigation.navigate('Items')
                    }}
                    color="red"
                />
            </View>
            <View style={styles.btn}>
                <Button
                    title="Electronics"
                    onPress={() => {
                        navigation.navigate("Items")
                        console.log("Electric Pressed")
                    }}
                    color="blue"
                />
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // flexDirection: 'column',
        // justifyContent: 'space-around',
        justifyContent: 'center',
        padding: 25,
        // height: "80%",
        alignItems: "center"
    },
    btn: {
        width: "70%",

    }
});

export default home
