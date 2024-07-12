// screens/GameFeedScreen.js
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const GameFeedScreen = ({ navigation }) => {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Fetch games data (for now, using dummy data)
    const fetchGames = () => {
      const gameData = [
        {
          id: "1",
          title: "Skeeball",
          description:
            "Skeeball is an exciting arcade game where you roll balls up an inclined lane, aiming for target holes with different point values. Collect your balls, and aim for high-scoring holes to rack up points. Perfect your aim and roll to become a skeeball champion!",
          image:
            "https://static-prod.adweek.com/wp-content/uploads/2017/04/skeeball-machine-classic-PAGE-2017.jpg",
        },
        {
          id: "2",
          title: "Golf",
          description:
            "Golf is a strategic game where players hit a ball into a series of holes using different clubs. Tee off, navigate the fairway, avoid hazards, and aim for the green. The goal is to complete each hole with the fewest strokes possible. Enjoy the challenge and precision!",
          image:
            "https://www.euroschoolindia.com/wp-content/uploads/2023/11/indoor-golf-game-jpg.webp",
        },
        {
          id: "3",
          title: "Scrabble",
          description:
            "Scrabble is a word puzzle game where you rearrange scrambled letters to form words. Drag and drop the letters to create as many valid words as possible within a time limit. Earn points for each correct word and score higher with longer words. Challenge your vocabulary skills and beat the clock!",
          image:
            "https://assets.bitent.com/images/games/thumbs/ik/434x434/word_game_big_62548625c2318.png",
        },
        // Add more games as needed
      ];
      setGames((prevGames) => [...prevGames, ...gameData]);
    };

    fetchGames();
  }, [page]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("GameDetail", { game: item })}
    >
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={games}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      onEndReached={() => setPage(page + 1)}
      onEndReachedThreshold={0.5}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});

export default GameFeedScreen;
