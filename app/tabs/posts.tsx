import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  // ScrollView
} from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
function PostScreen() {
  return (
    <View>
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View style={styles.genderSelectionContainer}>
          <Text style={styles.genderTitle}>Create a Post</Text>

          {/* flight Input */}
          <View style={styles.inputContainer}>
            <Image
              source={require("../../assets/images/email.png")}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Flight Number"
              placeholderTextColor="#a9a9a9"
            />
          </View>
          <Text style={[styles.orText, { bottom: 7 }]}>OR</Text>
          {/* Date Input */}
          <View style={styles.inputContainer}>
            <Image
              source={require("../../assets/images/lock.png")}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Date"
              placeholderTextColor="#a9a9a9"
              secureTextEntry
            />
          </View>

          {/* Time Input */}
          <View style={styles.inputContainer}>
            <Image
              source={require("../../assets/images/lock.png")}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Time"
              placeholderTextColor="#a9a9a9"
              secureTextEntry
            />
          </View>
          {/* From Input */}
          <View style={[styles.inputContainer, { marginTop: 4 }]}>
            <Image
              source={require("../../assets/images/lock.png")}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="From"
              placeholderTextColor="#a9a9a9"
              secureTextEntry
            />
          </View>
          {/* To Input */}
          <View style={styles.inputContainer}>
            <Image
              source={require("../../assets/images/lock.png")}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="To"
              placeholderTextColor="#a9a9a9"
              secureTextEntry
            />
          </View>
          {/* Message */}
          <View style={styles.inputMessageContainer}>
            <Image
              source={require("../../assets/images/lock.png")}
              style={[styles.inputIcon, { marginTop: -55 }]}
            />
            <TextInput
              style={[styles.input, { height: 100, textAlignVertical: "top" }]}
              placeholder="Message"
              multiline={true}
              numberOfLines={3}
              placeholderTextColor="#a9a9a9"
              secureTextEntry
            />
          </View>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => alert("Photo Uploaded!")}
          >
            <Text style={styles.continueButtonText}>Create Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#d3d3d3",
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  inputMessageContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 100,
    borderWidth: 1,
    borderColor: "#d3d3d3",
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: "#a9a9a9",
  },
  createAccountText: {
    color: "#000000",
    fontSize: 14,
    marginTop: 10,
  },
  createAccountLink: {
    color: "#39547f",
    fontWeight: "bold",
  },
  genderSelectionContainer: {
    // backgroundColor: "#ffffff",
    width: "100%",
    // borderRadius: 25,
    padding: 20,
    alignItems: "center",
  },
  genderTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  genderButton: {
    backgroundColor: "#f9f9f9",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 10,
  },
  continueText: {
    color: "#000000",
    fontSize: 14,
    marginTop: 10,
  },
  continueButton: {
    backgroundColor: "#39547f",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
  },
  continueButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    color: "black",
    marginVertical: 10,
    fontSize: 16,
  },
});
export default PostScreen;
