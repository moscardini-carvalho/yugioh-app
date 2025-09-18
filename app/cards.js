import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Image, FlatList, Stylesheet } from 'react-native';
import axios from 'axios';

export default function Cards({ navigation }) {

    const [cards, setCards] = useState([]);

    useEfecct(() => {

        axios
            .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0")
            .then((res) => setCards(res.data.data))
            .catch((err) => console.log(err));

    }, []);

    const excluirCard = (id) => {
        setCards(cards.filter((c) => c.id !== id));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de Cards</Text>
            <FlatList
                data={cards}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <view style={styles.card}>
                        <Text style={styles.nome}>{item.name}</Text>
                        <Image source={{ uri: item.card_images[0].image_url }}
                            style={styles.imagem}
                        />
                        <button
                            title="Detalhes"
                            onPress={() => navigation.navigate("Detalhes", { card: item })}
                        />
                        <button
                            title="Excluir"
                            onPress={() => excluirCard(item.id)}
                        />
                    </view>
                )}
            />
        </View>
    )
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 20
        },
        titulo: {
            fontSize: 24,
            textAlign: 'center',
            marginBottom: 20
        },
        card: {
            marginBottom: 20,
            alignItens: 'center'
        },
        nome: {
            fontSize: 18,
            fontWeight:'bold',
            marginBottom: 5
        },
        imagem: {
            width: 120,
            height: 180,
            marginBottom: 5     
        }
    });