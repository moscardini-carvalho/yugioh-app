import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { global, } from "../styles/global";

export default function Cards() {
    const [cards, setCards] = useState([]);
    const [categoria, setCategoria] = useState("all");
    const router = useRouter();

    const buscarCartas = (filtro) => {
        let url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0";

        if (filtro === "monstros") {
            url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal%20Monster";
        } else if (filtro === "magias") {
            url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Spell%20Card";
        } else if (filtro === "armadilhas") {
            url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Trap%20Card";
        }

        fetch(url)
            .then((res) => res.json())
            .then((data) => setCards(data.data))
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        buscarCartas(categoria);
    }, [categoria]);

    return (
        <View style={global.container}>
            <Text style={global.title}>Yu-Gi-Oh! Cards</Text>

            {/* Botões de filtro */}
            <View style={{ flexDirection: "row", marginBottom: 15 }}>
                <TouchableOpacity style={[global.button, { flex: 1, margin: 5 }]} onPress={() => setCategoria("monstros")}>
                    <Text style={global.buttonText}>Monstros</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[global.button, { flex: 1, margin: 5 }]} onPress={() => setCategoria("magias")}>
                    <Text style={global.buttonText}>Magias</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[global.button, { flex: 1, margin: 5 }]} onPress={() => setCategoria("armadilhas")}>
                    <Text style={global.buttonText}>Armadilhas</Text>
                </TouchableOpacity>
            </View>

            {/* Lista de cartas */}
            <FlatList
                data={cards}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                contentContainerStyle={global.cardList}
                columnWrapperStyle={global.cardRow}
                renderItem={({ item }) => (
                    <View style={global.cardBox}>
                        <Image source={{ uri: item.card_images[0].image_url_small }} style={global.cardImage} />
                        <Text style={global.cardTitle}>{item.name}</Text>
                        <TouchableOpacity style={global.button} onPress={() => router.push({ pathname: "/detalhes", params: { id: item.id } })}>
                            <Text style={global.buttonText}>Ver Detalhes</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
    );
}
