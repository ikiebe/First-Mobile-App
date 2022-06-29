import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createAppContainer} from 'react-navigation';
import Login from '../components/Login'
import Home from '../components/Home'

const screens = {
    Home :{
        screen: Home
    },  

    Login: {
        screen: Login
    }
}

const HomeStack = createNativeStackNavigator(screens);

export default createAppContainer(HomeStack);