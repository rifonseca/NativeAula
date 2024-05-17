import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import LoginAP from "./Components/SesiSenai/LoginAP";
import Boletim from "./Components/SesiSenai/Boletim";

const Stack = createStackNavigator();

export default function App () {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Boletim">
                <Stack.Screen name="LoginAP" component={LoginAP}/>
                <Stack.Screen name="Boletim" component={Boletim}/>
            </Stack.Navigator>
        </NavigationContainer>      
    )
};
