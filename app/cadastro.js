import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cadastro({ navigation }) {

    const [nome, setNome] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');

    const salvarUsuario = async () => {

        const usuario = { nome, usuario, senha, email };

        try {

            await AsyncStorage.setItem('usuario', JSON.stringify(usuario));
            alert('Usuário cadastrado com sucesso!');
            navigation.goback();
        } catch (error) {
            alert('Erro ao cadastrar usuário. Tente novamente.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastro de Usuário</Text>
            <TextInput
                placeholder="Nome"
                style={styles.input}
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder="Usuário"
                style={styles.input}
                value={usuario}
                onChangeText={setUsuario}
            />
            <TextInput
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
            <button title='Cadasdtrar' onPress={salvarUsuario} />
        </View>    
        );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },

    titulo: {
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 20
    },

    input: {
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5
    }


});