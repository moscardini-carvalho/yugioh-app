import { View, Text, Button, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 20 }}>Login</Text>
      <TextInput
        placeholder="Usuário"
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
        value={senha}
        onChangeText={setSenha}
      />
      <Button title="Entrar" onPress={() => router.push("/cards")} />
      <Button title="Cadastrar Usuário" onPress={() => router.push("/cadastro")} />
    </View>
  );
}
