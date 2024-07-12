// screens/GameDashboardScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Pedometer } from "expo-sensors";
import * as TaskManager from "expo-task-manager";
import * as BackgroundFetch from "expo-background-fetch";

const BACKGROUND_FETCH_TASK = "background-fetch-task";

TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
  try {
    const { steps } = await Pedometer.getStepCountAsync();
    return steps
      ? BackgroundFetch.BackgroundFetchResult.NewData
      : BackgroundFetch.BackgroundFetchResult.NoData;
  } catch (error) {
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

const GameDashboardScreen = ({ route }) => {
  const { game } = route.params;
  const [currentStepCount, setCurrentStepCount] = useState(0);

  useEffect(() => {
    let subscription;

    const startPedometer = () => {
      subscription = Pedometer.watchStepCount((result) => {
        setCurrentStepCount(result.steps);
      });
    };

    const startBackgroundTask = async () => {
      await BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
        minimumInterval: 15, // 15 minutes
        stopOnTerminate: false,
        startOnBoot: true,
      });
    };

    startPedometer();
    startBackgroundTask();

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.description}>{game.description}</Text>
      <Text style={styles.stepCount}>Steps: {currentStepCount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  stepCount: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default GameDashboardScreen;
