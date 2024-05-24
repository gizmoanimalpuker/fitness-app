// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const HomeScreen = ({ navigation }) => {
  const [workoutType, setWorkoutType] = useState('Running');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Workout Type</Text>
      <Picker
        selectedValue={workoutType}
        onValueChange={(itemValue) => setWorkoutType(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Running" value="Running" />
        <Picker.Item label="Cycling" value="Cycling" />
        <Picker.Item label="Swimming" value="Swimming" />
        <Picker.Item label="Walking" value="Walking" />
      </Picker>
      <Button
        title="Start Workout"
        onPress={() => navigation.navigate('Workout', { workoutType })}
      />
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
  picker: {
    height: 50,
    width: 200,
    marginBottom: 20,
  },
});

export default HomeScreen;
