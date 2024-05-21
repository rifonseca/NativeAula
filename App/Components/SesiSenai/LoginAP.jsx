import React, { useState } from "react";
import { View,Text,TextInput,Button,StyleSheet,Image,TouchableOpacity,Alert } from "react-native";
import axios from "axios";      

const LoginAP = ({navigation}) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginAluno = async() => {
        try{
            if(!email || !password){
                Alert.alert("Todos os campos são obrigatórios");
            }
            else{
                const response = await axios.post('http://10.0.2.2:8085/api/login/aluno', {
                    email:email,
                    password:password
                });

                //se o login foi bem sucedido
                if(response.status === 200){
                    navigation.navigate('Boletim');
                }
                else{
                    //login mal sucedido
                    Alert.alert('Erro', response.data.message);
                }
            }
        }
        catch(error){
            console.log("Erro ao fazer o login do aluno: ", error);
            Alert.alert("Erro ao fazer o login do aluno");
        }
    };

    const handleLoginProfessor = async() =>{
        try{
            const response = await axios.post('http://10.0.2.2:8085/api/login/professor',{
                email:email,
                password:password
            });

            if(response.status === 200){
                //login bem sucedido
                navigation.navigate('ListAlunos');
            }
            else{
                //login mal sucedido
                Alert.alert("Erro", response.data.message);
            }
        }
        catch(error){
            console.log("Erro ao fazer o login do professor: ", error);
            Alert.alert("Erro ao fazer o login do professor");
        }
    }

    const handleRegistroAluno = () =>{
        navigation.navigate('RegistroAluno');
    }

    const handleRegistroProfessor = () =>{
        navigation.navigate('Professor');
    }

    const handleResetSenha = () => {
        navigation.navigate('ResetSenha');
    }

    return(
        <View style={styles.container}>
            <Image source={require('../../img/senai.png')} style={styles.logo}/>
            <Text style={styles.title}>Bem-vindo (a)</Text>
            <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            />
             <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            />
            <View style={styles.buttonContainer}>
                <Button title="Login Aluno" onPress={handleLoginAluno}/>
                <Button title="Login Professor" onPress={handleLoginProfessor}/>
            </View>
            <View style={styles.registerContainer}>
                <TouchableOpacity onPress={handleRegistroAluno}>
                    <Text style={styles.registerLink}>Registro do Aluno</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleRegistroProfessor}>
                    <Text style={styles.registerLink}>Registro do Professor</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleResetSenha}>
                <Text style={styles.resetSenha}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:20,
    },
    logo:{
        width:200,
        height:200,
        resizeMode:'contain',
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:20,
    },
    input:{
        width:'100%',
        borderWidth:1,
        borderColor:'gray',
        borderRadius:5,
        padding:10,
        marginBottom:10,
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%',
        marginBottom:10,
    },
    registerContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%',
    },
    registerLink:{
        color:'blue',
        textDecorationLine:'underline',
    },
    resetSenha:{
        marginTop:10,
        color:'red',
        textDecorationLine:'underline',
    },
});

export default LoginAP;