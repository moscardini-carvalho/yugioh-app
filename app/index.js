import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { global } from "../styles/global";

export default function Login() {
  const router = useRouter();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={global.container}>
      <Text style={global.title}>Login</Text>

      <TextInput
        style={global.input}
        placeholder="Usuário"
        placeholderTextColor="#fff"
        value={usuario}
        onChangeText={setUsuario}
      />

      <TextInput
        style={global.input}
        placeholder="Senha"
        placeholderTextColor="#fff"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={global.button} onPress={() => router.push("/cards")}>
        <Text style={global.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={global.button} onPress={() => router.push("/cadastro")}>
        <Text style={global.buttonText}>Cadastrar Usuário</Text>
      </TouchableOpacity>
    </View>
  );
}
