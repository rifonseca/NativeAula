import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import HomeStart from './Components/HomeStart';
import Cadastrar from './Components/Cadastrar';
import Listar from './Components/Listar';

const Stack = createStackNavigator();

export default function App () {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeStart}/>
                <Stack.Screen name="Cadastrar" component={Cadastrar}/>
                <Stack.Screen name="Listar" component={Listar}/>
            </Stack.Navigator>
        </NavigationContainer>      
    )
};
