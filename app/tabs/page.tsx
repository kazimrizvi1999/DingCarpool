import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const App = () => {
  const carpoolers = [
    {
      id: '1',
      name: 'Eva P.',
      gender: 'Male',
      route: 'Pepperdine > LAX',
      departureDate: '1/12',
      flight: 'S*****',
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
    },
    {
      id: '2',
      name: 'Paige C.',
      gender: 'Female',
      route: 'Pepperdine > SNA',
      departureDate: '1/13',
      flight: 'U*****',
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
    },
    {
      id: '3',
      name: 'Leon M.',
      gender: 'Male',
      route: 'Pepperdine > LAX',
      departureDate: '1/16',
      flight: 'S*****',
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
    },
  ];

  const renderCarpooler = ({ item }:any) => (
    <View style={styles.carpoolerCard}>
      <Image source={{ uri: item.image }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.gender}>{item.gender}</Text>
        <Text style={styles.route}>{item.route}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.departure}>Leaves at</Text>
        <Text style={styles.date}>{item.departureDate}</Text>
        <Text style={styles.flight}>Flight #{item.flight}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Reservations</Text>
        <Text style={styles.subtitle}>You do not have any reservations</Text>
      </View>
      <View style={styles.nearbySection}>
        <Text style={styles.sectionTitle}>Nearby Carpoolers</Text>
        <FlatList
          data={carpoolers}
          renderItem={renderCarpooler}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#888888',
    marginTop: 5,
  },
  nearbySection: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  carpoolerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  gender: {
    fontSize: 12,
    color: '#888888',
  },
  route: {
    fontSize: 14,
    color: '#555555',
    marginTop: 5,
  },
  details: {
    alignItems: 'flex-end',
  },
  departure: {
    fontSize: 12,
    color: '#888888',
  },
  date: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  flight: {
    fontSize: 12,
    color: '#888888',
    marginTop: 5,
  },
});

export default App;
