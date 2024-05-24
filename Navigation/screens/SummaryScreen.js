// screens/SummaryScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SummaryScreen = ({ route }) => {
  const { workoutType, duration } = route.params;

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const remainingSeconds = secs % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  
};
 const calculateCalories = (workoutType, duration) => {
       
        const calorieRates = {
            Running: 11.4, 
            Cycling: 6.6,  
            Walking: 5  
          
        };

        const rate = calorieRates[workoutType] || 0; 
        const minutes = duration / 60;
        return rate * minutes;
    };

    const caloriesBurned = calculateCalories(workoutType, duration);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Workout Summary</Text>
            <Text style={styles.summaryText}>Type: {workoutType}</Text>
            <Text style={styles.summaryText}>Duration: {formatTime(duration)}</Text>
            <Text style={styles.summaryText}>Calories Burned: {caloriesBurned.toFixed(2)}</Text>
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
  summaryText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default SummaryScreen;
