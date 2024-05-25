import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import { Repositorios } from "../types/response";
import {useNavigation} from "@react-navigation/native"; 
import { HomeProps } from "../types/navigator";

interface CardProps {
  item: Repositorios;
}
const Card: FC<CardProps> = ({ item }) => {
  const { navigation } = useNavigation<HomeProps>();

  const goToDetails = () => {
    navigation.navigate("Details", item);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name.toUpperCase()}</Text>
      <Text style={styles.description}>{item.description ?? "-"}</Text>
      <TouchableOpacity style={styles.button} onPress={goToDetails}>
        <Text style={styles.buttonText}>Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#f8f9fa",
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
    textAlign: "center",
  },
  button: {
    marginVertical: 10,
    width: "50%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
