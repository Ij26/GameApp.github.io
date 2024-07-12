// screens/GameDetailScreen.js
import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";

const GameDetailScreen = ({ route, navigation }) => {
  const { game } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: game.image }} style={styles.image} />
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.description}>{game.description}</Text>
      <Button
        title="Join"
        onPress={() => navigation.navigate("GameDashboard", { game })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default GameDetailScreen;
