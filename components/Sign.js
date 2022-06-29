import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Alert} from 'react-native'
//import CheckBox from '@react-native-community/checkbox'
//add check box later

const Sign = ({navigation}) => {

const[toggleCheckBox, setToggleCheckBox] = useState(false);
//const[passGreat, setpassGreat] = useState(false);
//setpassGreat()


    return (
        <View><Text style={styles.login}>Sign Up</Text>

        <View style={styles.l}>
        <TextInput placeholder={"name e.g John Doe"} placeholderTextColor={"red"} style={styles.username}></TextInput>
        </View>

        <View style={styles.l}>
        <TextInput placeholder={"City"} placeholderTextColor={"red"} style={styles.username}></TextInput>
        </View>

        <View style={styles.l}>
        <TextInput placeholder={"number"} keyboardType={"number-pad"} placeholderTextColor={"red"} style={styles.username}></TextInput>
        </View>


{/*onBlur={passGreat<8?console.log("good"):Alert.alert("haffa nah")}*/}
        <View style={styles.l}>
        <TextInput secureTextEntry={true} 
        placeholder={"password"} placeholderTextColor={"red"} style={styles.username}></TextInput>
        </View>

        <View style={styles.l}>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.log}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={{color: "red", marginTop: 20,}}>On signing up you have agreed to our terms and conditions</Text>
        </View>

        <View style={styles.lm}>

        {/*
        <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue)=>setToggleCheckBox(newValue)}
        
        />
        */}

                
        <TouchableOpacity style={styles.par} onPress={()=>navigation.navigate("Login")}>
        <Text style={styles.alr}>Already have an account? Login</Text>
        </TouchableOpacity>


        </View>

    </View>


    )
}

export default Sign

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

    alr:{
        marginTop: 30,
        color: "red",
        textAlign: "center",
    },

    par:{
        width: 300,
        marginLeft: "auto",
        marginRight: "auto",
    }

})
