// screens/WorkoutScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WorkoutScreen = ({ route, navigation }) => {
  const { workoutType } = route.params;
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else if (!isTimerRunning && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, seconds]);

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const remainingSeconds = secs % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const startWorkout = () => {
    setSeconds(0);
    setIsTimerRunning(true);
  };

  const stopWorkout = () => {
    setIsTimerRunning(false);
    navigation.navigate('Summary', { workoutType, duration: seconds });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{workoutType} Workout</Text>
      <Text style={styles.timer}>{formatTime(seconds)}</Text>
      {isTimerRunning ? (
        <Button title="Stop Workout" onPress={stopWorkout} />
      ) : (
        <Button title="Start Workout" onPress={startWorkout} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  timer: {
    fontSize: 48,
    marginBottom: 20,
  },
});

export default WorkoutScreen;
