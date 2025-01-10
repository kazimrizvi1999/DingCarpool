import { Link } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function PostScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Explore Screen</Text>
      </View>

      {/* Floating Button */}
      <View style={styles.floatingButton}>
        <Link href="/addPost/page" style={styles.iconWrapper}>
          <Icon name="add" size={30} color="#fff" />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    width: 55,
    height: 55,
    backgroundColor: "#294167",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    bottom: 10,
    right: 20,
    elevation: 5, // For Android shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5, // For iOS shadow
  },
  iconWrapper: {
    verticalAlign:"middle",
    paddingHorizontal:10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
});

export default PostScreen;
