import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";

const CarrierRegister = ({ navigation }) => {
  const onContinue = () => {
    navigation?.navigate('VerifyPhone')
  }

  return (
    <View style={styles.screenContainer}>
      <View style={styles.headlineContainer}>
        <Text style={styles.headline}>Register For LiveDrivr</Text>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={styles.scrollContainer}
        >
          <View style={{ alignItems: "flex-start", width: "100%" }}>
            <Text style={[styles.label, { marginTop: 30 }]}>Phone Number</Text>
            <View style={styles.input}>
              <TextInput placeholder="555-555-5555" />
            </View>
          </View>
          <View style={{ alignItems: "flex-start", width: "100%" }}>
            <Text style={[styles.label, { marginTop: 10 }]}>Password</Text>
            <View style={styles.input}>
              <TextInput placeholder="*****" />
            </View>
          </View>
          <View style={{ alignItems: "flex-start", width: "100%" }}>
            <Text style={[styles.label, { marginTop: 10 }]}>
              Confirm Your Password
            </Text>
            <View style={styles.input}>
              <TextInput placeholder="*****" />
            </View>
          </View>
          <View style={{ alignItems: "flex-start", width: "100%" }}>
            <Text style={[styles.label, { marginTop: 10 }]}>
              Your Display Name (do not use anything personally identifiable)
            </Text>
            <View style={styles.input}>
              <TextInput placeholder="555-555-5555" />
            </View>
          </View>
          <View style={styles.divider} />
          <Pressable style={styles.button} onPress={onContinue}>
            <Text style={styles.buttonText}>CONTINUE</Text>
          </Pressable>
          <Pressable
            style={[styles.button, { backgroundColor: "white", marginTop: 15 }]}
          >
            <Text style={[styles.buttonText, { color: "#2699fb" }]}>
              REGISTER WITH FACEBOOK
            </Text>
          </Pressable>
          <Pressable
            style={[styles.button, { backgroundColor: "white", marginTop: 15 }]}
          >
            <Text style={[styles.buttonText, { color: "#2699fb" }]}>
              REGISTER WITH GOOGLE
            </Text>
          </Pressable>
          <Pressable
            style={[styles.button, { backgroundColor: "white", marginTop: 15 }]}
          >
            <Text style={[styles.buttonText, { color: "#2699fb" }]}>
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
    marginBottom: 30,
  },
  scrollContainer: {
    width: "100%",
    alignItems: "center",
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
    color: "#2699fb",
    marginBottom: 5,
  },
  divider: {
    marginTop: 45,
    marginBottom: 30,
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
    fontSize: 12,
    fontWeight: 600,
  },
});

export default CarrierRegister;
