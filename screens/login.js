import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function Login({ navigation }) {

    // Campos para inserção do usuário e senha
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = setState('');

    const handleLogin = ()=> {

        if (usuario && senha) {
            navigation.replace('Cards');
    }else{
        alert("Campos incompletos. Preencha todos os campos.");
    }

};

return (

    <View style={Styles.container}>
        <text style={styles.titulo}>Login</text>        
        <TextInput
            placeholder="Usuário"
            style={styles.input}
            value={usuario}
            onChangeText={setUsuario}
        />
        <TextInput
            placeholder="Senha"
            secureTextEntry
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
        />
        <button title="Entrar" onPress={handleLogin}/>
        <button title="Cadastrar Usuário" onPress={()=> navigation.navigate("Cadastro")}/>
    </View>
    );
}

const styles = StyleSheet.create({

    container: {flex: 1,
        justifyContent: 'center',
        padding: 20
    },

    titulo: { fontSize: 24,
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