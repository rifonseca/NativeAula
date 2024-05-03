import React, {useState} from "react";
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import axios from "axios";

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async () =>{
        try{

            //verificar se os campos foram preenchidos
            if(!email || !senha){
                Alert.alert('Erro', 'Por favor, preencha todos os campos.');
                return
            }

            //Objeto para enviar para a API 
            const data = {
                email:email,
                senha:senha
            }

            //Enviar os dados para a API 
            const response = await axios.post('http://localhost:8085');

            //Verificar se o login foi efetuado com sucesso
            if(response.status === 200){
                setEmail('');
                setSenha('');

                navigation.navigate('Cursos');
            }
            else{
                Alert.alert('Erro', 'Email ou senha incorretos. Por favor, tente novamente');
            }
        }
        catch(error){
            if(error.response && error.response.status ===401){
                Alert.alert('Erro', "Email ou senha incorretos. Por favor, tente novamente");
            }
            else{
                Alert.alert('Erro', 'Ocorreu um erro ao fazer o login. Por favor, tente novamente');
            }
        }
    };

    return(
        <View style={styles.container}>
            <Image source={require('../img')} style={styles.logo}/>
            <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            />
            <TextInput
            style={styles.input}
            placeholder="Senha"
            onChangeText={setSenha}
            value={senha}
            secureTextEntry
            />
            <Button title="Entrar" onPress={handleLogin}/>
            <TouchableOpacity onPress={()=> navigation.navigate('Cadastro')}>
                <Text style={styles.link}>Ainda não tem cadastro? Cadastre-se aqui</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
    },
    logo:{
        width:250,
        height:50,
        marginBottom:50,
    },
    input:{
        width:'80%',
        height:40,
        borderColor:'gray',
        borderWidth:1,
        marginBottom:10,
        paddingHorizontal:10,
    },
    link:{
        marginTop:10,
        color:'blue',
    },
});

export default Login;