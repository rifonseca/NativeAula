import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import LoginAP from "./Components/SesiSenai/LoginAP";
import Boletim from "./Components/SesiSenai/Boletim";
import RegistroAluno from "./Components/SesiSenai/RegistroAluno";
import ResetSenha from "./Components/SesiSenai/Reset";

const Stack = createStackNavigator();

export default function App () {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginAP">
                <Stack.Screen name="LoginAP" component={LoginAP}/>
                <Stack.Screen name="Boletim" component={Boletim}/>
                <Stack.Screen name="RegistroAluno" component={RegistroAluno}/>
                <Stack.Screen name="ResetSenha" component={ResetSenha}/>
            </Stack.Navigator>
        </NavigationContainer>      
    )
};
