import { View, Text, StyleSheet, TextInput, ScrollView, Pressable } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.headlineContainer}>
        <Text style={styles.headline}>Log In To LiveDrivr</Text>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView style={{width: '100%'}} contentContainerStyle={styles.scrollContainer}>
          <View style={{ alignItems: "flex-start", width: "100%" }}>
            <Text style={[styles.label, { marginTop: 30 }]}>
              Register as a Carrier
            </Text>
            <View style={styles.input}>
              <TextInput placeholder="555-555-5555" />
            </View>
          </View>
          <View style={{ alignItems: "flex-start", width: "100%" }}>
            <Text style={[styles.label, { marginTop: 10 }]}>Password</Text>
            <View style={styles.input}>
              <TextInput placeholder="555-555-5555" />
            </View>
          </View>
          <View style={styles.divider} />
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              LOG IN
            </Text>
          </Pressable>
          <Pressable style={[styles.button, {backgroundColor: 'white', marginTop: 15}]}>
            <Text style={[styles.buttonText, {color: '#2699fb'}]}>
              LOGIN WITH FACEBOOK
            </Text>
          </Pressable>
          <Pressable style={[styles.button, {backgroundColor: 'white', marginTop: 15}]}>
            <Text style={[styles.buttonText, {color: '#2699fb'}]}>
              LOGIN WITH GOOGLE
            </Text>
          </Pressable>
          <Pressable style={[styles.button, {backgroundColor: 'white', marginTop: 15}]}>
            <Text style={[styles.buttonText, {color: '#2699fb'}]}>
              REGISTER WITH APPLE
            </Text>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headline: {
    fontSize: 32,
    fontWeight: 500,
    color: "white",
    marginBottom: 25,
    letterSpacing: 0.5,
  },
  headlineContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#2699fb",
  },
  contentContainer: {
    flex: 3,
    alignItems: "center",
    marginBottom: 30
  },
  scrollContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 45,
  },
  input: {
    borderWidth: 1,
    borderColor: "#2699fb",
    padding: 15,
    width: "100%",
  },
  label: {
    fontSize: 12,
    fontWeight: 600,
    color: "#7f7f7f",
    marginBottom: 10,
  },
  divider: {
    marginVertical: 30,
    borderBottomColor: "#BCE0FD",
    borderBottomWidth: 4,
    width: 24,
  },
  textContainer: {
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  button: {
    width: "100%",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#2699fb",
    padding: 15,
    backgroundColor: "#2699fb",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
});

export default LoginScreen;
