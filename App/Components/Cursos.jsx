import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Cursos = ({navigation})=>{
    const cursos =[
    'Agronomia',
    'Medicina',
    'Medicina Veterinária',
    'Tecnologia da Informação'
    ];

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Cursos Disponíveis</Text>
            {cursos.map((curso,index)=>(
                <Text key={index} style={styles.cursoItem}>
                    {curso}
                </Text>
            ))}
            {/*botão para voltar para o login*/}
            <TouchableOpacity
            style={styles.voltarbutton}
            onPress={()=> navigation.navigate('Login')}
            >
                <Text style={styles.voltarbuttontext}>Voltar para o Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:20,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:20,
    },
    cursoItem:{
        marginBottom:10,
        fontSize:18,
    },
    voltarbutton:{
        marginTop:20,
        backgroundColor:'#007bff',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:5,
    },
    voltarbuttontext:{
        color:'#fff',
        fontSize:18,
    },
});

export default Cursos;