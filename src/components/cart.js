import React, { useEffect, useState } from 'react'
import { View, Text,FlatList, StyleSheet, Button ,TouchableOpacity} from 'react-native'
import { cartItems , updateQuantity} from "../servicefile";

const cart = ({ navigation}) => {

    const [ data , setData ] = useState();

    useEffect(() => {
        getData();
    },[])

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

    const show = ({ item }) => {
        // console.log(item,"from show")
        return (
                <View style={styles.item} >
                    <View style={styles.image}><Text>Image</Text></View>
                    <View style={styles.aboutItem}>
                        <Text style={[styles.title]}>{item?.item?.name}</Text>
                        <Text style={[styles.itemDesc]}>{item?.item?.description}</Text>
                        <Text style={[styles.itemPrice]}> Rs. { item.quantity * item?.item?.price } /-</Text>
                        <View style={styles.btnview}>
                            <Button title="-" style= {styles?.quantitybtn}/>
                            <Text> {item.quantity}</Text>
                            <Button title="+" style= {styles?.quantitybtn} />
                        </View>
                        {/* <View style={{flexDirection: 'row'}}>
											<TouchableOpacity onPress={() => this.quantityHandler('less', i)} style={{ borderWidth: 1, borderColor: '#cccccc' }}>
												<MaterialIcons name="remove" size={22} color="#cccccc" />
											</TouchableOpacity>
											<Text style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#cccccc', paddingHorizontal: 7, paddingTop: 3, color: '#bbbbbb', fontSize: 13 }}>{item.qty}</Text>
											<TouchableOpacity onPress={() => this.quantityHandler('more', i)} style={{ borderWidth: 1, borderColor: '#cccccc' }}>
												<MaterialIcons name="add" size={22} color="#cccccc" />
											</TouchableOpacity>
										</View> */}
                    </View>
                </View>
        )
    }

    return (
        <View style={{ flex: 1, flexDirection: "column", backgroundColor: "coral" }}>
        <FlatList
            data={data}
            renderItem={show}
            keyExtractor={(data) => data.id }
        />
        <View>
            <Button title="Shop more" onPress = {() => {
                 navigation.navigate("Home")
            }} />
            {/* {console.log("data",data)} */}
        </View>
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
    },
    quantitybtn : {
        flex : 1,
        backgroundColor: "red",
        width: 15,
        height:15,
        color:"red",
        justifyContent: "center",
        alignItems: "center"

    },
    btnview : {
        // flex:1,
        flexDirection:"row",
        alignContent:"flex-end",
        width: 15,
        height:15,
        color: "red",
    }

});
export default cart

