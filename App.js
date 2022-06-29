import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
//import Navigator from './routes/HomeStack'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sign from './components/Sign';


export default function App() {

const MyStack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      
<MyStack.Navigator>
  <MyStack.Screen name="Home" component={Home}></MyStack.Screen>
  <MyStack.Screen name="Login" component={Login}></MyStack.Screen>
  <MyStack.Screen name="Sign" component={Sign}></MyStack.Screen>
</MyStack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
