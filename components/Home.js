import React from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'

const Home = ({navigation}) => {
    return (
        <View style={styles.cont}>
            <Image style={styles.ang} source={require('./../assets/angryBird.png')}/>
            <Text style={styles.welc}>Welcome to Chat App</Text>

        <TouchableOpacity style={styles.get} onPress={()=> navigation.navigate("Login")}>
            <Text style={styles.gets}>Get Started</Text>
        </TouchableOpacity>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    cont:{
        flex: 1,
        height: 100,
        borderWidth: 2,
        borderColor: "red",
    },
    welc:{
        color: "red",
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 50,
    },

    get:{
        width: 200,
        backgroundColor: "red",
        height: 50,
        borderRadius: 10,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20,
    },

    gets: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 5,
        fontSize: 30,
    },

    ang: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 100,
    },


})
