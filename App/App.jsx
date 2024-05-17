import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import LoginAP from "./Components/SesiSenai/LoginAP";

const Stack = createStackNavigator();

export default function App () {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginAP">
                <Stack.Screen name="LoginAP" component={LoginAP}/>
            </Stack.Navigator>
        </NavigationContainer>      
    )
};
