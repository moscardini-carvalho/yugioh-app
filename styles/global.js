import { StyleSheet } from "react-native";

export const colors = {
  primary: "#1e3a8a",
  secondary: "#9333ea",
  background: "#f0f0f0",
  text: "#111827",
  white: "#ffffff",
  input: "#999999ff"
};

export const global = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: colors.primary,
  },
  input: {
    backgroundColor: colors.input,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    margin: 5,
  },
  text: {
    fontSize: 16,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    margin: 5,
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
  },

  // 🔽 NOVOS ESTILOS PARA OS CARDS
  cardList: {
    paddingHorizontal: 10,
    paddingBottom: 30,
  },
  cardRow: {
    justifyContent: "space-between",
    marginBottom: 20,
  },
  cardBox: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    elevation: 3, // sombra leve no Android
    shadowColor: "#000", // sombra no iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  cardImage: {
    width: "100%",
    height: 170,
    borderRadius: 8,
    marginBottom: 10,
    resizeMode: "contain",
  },
  cardTitle: {
    textAlign: "center",
    marginBottom: 8,
    fontWeight: "600",
    color: colors.text,
  },
});
