import { View, Text, Image, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { global } from "../styles/global";

export default function Detalhes() {
  const { id } = useLocalSearchParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)
      .then((res) => res.json())
      .then((data) => setCard(data.data[0]))
      .catch((err) => console.error(err));
  }, []);

  if (!card) {
    return (
      <View style={global.container}>
        <Text style={global.text}>Carregando detalhes...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#121212" }}>
      <View style={{ alignItems: "center", padding: 20 }}>
        <Image source={{ uri: card.card_images[0].image_url }} style={{ width: 250, height: 350, marginBottom: 20 }} />
        <Text style={global.title}>{card.name}</Text>
        <Text style={global.text}>Tipo: {card.type}</Text>
        <Text style={global.text}>Nível: {card.level || "N/A"}</Text>
        <Text style={global.text}>Ataque: {card.atk || "N/A"} | Defesa: {card.def || "N/A"}</Text>
        <Text style={[global.text, { marginTop: 15 }]}>{card.desc}</Text>
      </View>
    </ScrollView>
  );
}
