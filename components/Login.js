import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

const Login = ({navigation}) => {
    return (
        <View>
            <Text style={styles.login}>Login</Text>

            <View style={styles.l}>
            <TextInput placeholder={"name e.g John Doe"} placeholderTextColor={"red"} style={styles.username}></TextInput>
            </View>

            <View style={styles.l}>
            <TextInput secureTextEntry={true} placeholder={"password"} placeholderTextColor={"red"} style={styles.username}></TextInput>
            </View>

            <View style={styles.l}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.log}>Login</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.lm}>

            <TouchableOpacity>
            <Text style={styles.forgot}>Forgot password??</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate("Sign")}>
            <Text style={styles.new}>New Here? sign up</Text>
            </TouchableOpacity>
            
            </View>

        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    login:{
        marginTop: 100,
        textAlign: "center",
        color: "red",
        fontSize:40,
        fontWeight: "bold"
    },
    username:{
        borderWidth: 4,
        borderColor: "red",
        borderRadius: 10,
    },

    l:{
        marginTop: 20,
        width: 200,
        marginLeft: "auto",
        marginRight: "auto",
    },

    btn:{
        backgroundColor: "red",
        borderRadius: 10,
        height: 40,
    },

    log:{
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
    },

    lm:{
    display: "flex",
    flexDirection: "row"    
    },

    forgot:{
        color: "red",
        marginTop: 30,
        marginRight: 30,
        marginLeft: 30,
    },

    new:{
        marginTop: 30,
        color: "red",
    }

})
