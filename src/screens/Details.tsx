import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";
//import { useRoute } from "@react-navigation/native";
import {useRoute} from "@react-navigation/native"; 
import { Repositorios } from "../types/response";

const Details = () => {
  const route = useRoute();

  const item = route.params as Repositorios;
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image
          style={styles.image}
          source={{
            uri: item.owner.avatar_url,
          }}
        />
        <Text>{item.owner.login}</Text>
      </View>
      <Text style={styles.title}>{item.name.toUpperCase()}</Text>
      <Text style={styles.description}>{item.description ?? "-"}</Text>
      <Text> {item.stargazers_count}</Text>
      <Text>{item.watchers_count}</Text>
    </View>
  );
};

export default Details;

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
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
