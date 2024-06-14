import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Perfil = ({ route }) => {
    const { id,nome, sobrenome, imagem } = route.params.object;

    //converter a imagem de base64 para jpeg
    const imagemUri = imagem ? `data:image/jpeg;base64,${imagem}` : null;

    return (
        <View style={styles.container}>
            {imagemUri && (
                <Image
                    source={{ uri: imagemUri }}
                    style={styles.profileImage}
                />
            )}
            <Text style={styles.name}>{nome}</Text>
            <Text style={styles.name}>{sobrenome}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    email: {
        fontSize: 18,
        color: 'gray',
    },
});

export default Perfil;
