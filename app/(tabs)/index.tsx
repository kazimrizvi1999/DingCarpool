import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const carpoolers = [
  { id: '1', name: 'Eva P.', details: 'Pepperdine > LAX, Flight #SW3997, 9:00 AM' },
  { id: '2', name: 'Paige C.', details: 'Pepperdine > SNA, Flight #UA2863, 5:00 AM' },
  { id: '3', name: 'Leon M.', details: 'Pepperdine > LAX, Flight #SW1898, 6:00 PM' },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Reservations</Text>
      <FlatList
        data={carpoolers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardDetails}>{item.details}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => alert('Open Sidebar')}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // White background
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
    textAlign: 'center', // Center the heading
  },
  card: {
    backgroundColor: '#f9f9f9', // Light card background
    padding: 15,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333333',
  },
  cardDetails: {
    fontSize: 14,
    color: '#555555',
  },
  addButton: {
    right:-100,
    backgroundColor: '#007AFF',
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
