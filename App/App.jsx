import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import HomeStart from './Components/HomeStart';
import Cadastrar from './Components/Cadastrar';

const Stack = createStackNavigator();

export default function App () {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeStart}/>
                <Stack.Screen name="Cadastrar" component={Cadastrar}/>
            </Stack.Navigator>
        </NavigationContainer>      
    )
};
