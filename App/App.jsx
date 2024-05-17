import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Login from "./Components/Login";
import Cursos from "./Components/Cursos";
import Cadastro from "./Components/CadastroLogin";
import XML from "./Components/Xml";

const Stack = createStackNavigator();

export default function App () {
    return(
        <XML/>
        // <NavigationContainer>
        //     <Stack.Navigator initialRouteName="Login">
        //         <Stack.Screen name="Login" component={Login}/>
        //         <Stack.Screen name="Cursos" component={Cursos}/>
        //         <Stack.Screen name="Cadastro" component={Cadastro}/>
        //     </Stack.Navigator>
        // </NavigationContainer>      
    )
};
