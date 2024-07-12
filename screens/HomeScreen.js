// screens/HomeScreen.js
import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { auth } from "../firebase";

const HomeScreen = ({ navigation }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Fetch games data from an API or a local source
    const fetchGames = () => {
      // Dummy data for games
      const gameData = [
        { id: "1", title: "Game 1", description: "Description for Game 1" },
        { id: "2", title: "Game 2", description: "Description for Game 2" },
        { id: "3", title: "Game 3", description: "Description for Game 3" },
        // Add more games as needed
      ];
      setGames(gameData);
    };

    fetchGames();
  }, []);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("GameDetail", { game: item })}
    >
      <View style={{ padding: 20, borderBottomWidth: 1 }}>
        <Text style={{ fontSize: 18 }}>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Welcome to the Game App
      </Text>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

export default HomeScreen;
