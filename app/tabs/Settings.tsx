import React from 'react';
import { View,ScrollView, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={require("../../assets/images/bg.jpeg")}
          style={styles.backgroundImage}
        >
          <Text style={styles.userId}>User ID: 1 938 234 8345</Text>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://i.pravatar.cc/150?img=3', 
            }}
          />
          <Text style={styles.name}>Kevin Ding</Text>
          <Text style={styles.email}>kevin_ding@pepperdine.edu</Text>
        </ImageBackground>
      </View>

      <View style={styles.settings}>
        <Text style={styles.settingsTitle}>Settings</Text>
        {['Account', 'Notifications', 'FAQ', 'Terms & Conditions'].map((item, index) => (
          <TouchableOpacity key={index} style={styles.option}>
            <Text style={styles.optionText}>{item}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  backgroundImage: {
    width: '100%', 
    height: '100%', 
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  
  header: {
    flex: 0.60,
    backgroundColor: '#2f3640',
    alignItems: 'center',
  },
  
  userId: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 10,
  },
  
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 10,
  },
  
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  email: {
    color: '#dcdde1',
    fontSize: 14,
  },
  
  settings: {
    backgroundColor: '#fff',
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    flex: 1,
  },
  
  settingsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  
  option: {
    backgroundColor: 'white',
    borderRadius: 20,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    boxShadow: "2px 4px 17px -6px rgba(0,0,0,0.75)",
  },
  
  optionText: {
    fontSize: 16,
    textAlign: "center",
    color: '#2f3640',
  },
  
  logoutButton: {
    backgroundColor: '#40739e',
    borderRadius: 20,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  
  logoutText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
