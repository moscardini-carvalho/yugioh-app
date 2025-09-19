import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { global } from "../styles/global";

export default function Cadastro() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [curso, setCurso] = useState("");

  const salvar = async () => {
    const usuario = { nome, telefone, cpf, email, curso };
    try {
      await AsyncStorage.setItem("usuario", JSON.stringify(usuario));
      alert("Usuário cadastrado com sucesso!");
      router.push("/");
    } catch (error) {
      alert("Erro ao salvar usuário!");
    }
  };

  return (
    <View style={global.container}>
      <Text style={global.title}>Cadastro de Usuário</Text>

      <TextInput style={global.input} placeholder="Nome" placeholderTextColor="#fff" value={nome} onChangeText={setNome} />
      <TextInput style={global.input} placeholder="Telefone" placeholderTextColor="#fff" value={telefone} onChangeText={setTelefone} />
      <TextInput style={global.input} placeholder="CPF" placeholderTextColor="#fff" value={cpf} onChangeText={setCpf} />
      <TextInput style={global.input} placeholder="E-mail" placeholderTextColor="#fff" value={email} onChangeText={setEmail} />
      <TextInput style={global.input} placeholder="Curso" placeholderTextColor="#fff" value={curso} onChangeText={setCurso} />

      <TouchableOpacity style={global.button} onPress={salvar}>
        <Text style={global.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
