import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

const VerifyPhone = ({ navigation }) => {
  const onContinue = () => {
    navigation?.navigate("WelcomeOnboarding");
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.headlineContainer}>
        <Text style={styles.headline}>Verify Your Phone</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna
            cursus eget nunc scelerisque viverra mauris in aliquam.
          </Text>
        </View>
        <View style={styles.actionContainer}>
          <View style={{ alignItems: "center", width: "100%" }}>
            <Text style={[styles.label, { marginTop: 10 }]}>
              Enter Verification Code
            </Text>
            <View style={styles.input}>
              <TextInput placeholder="*****" style={{ textAlign: "center" }} />
            </View>
          </View>
          <View style={styles.divider} />
          <Pressable style={styles.button} onPress={onContinue}>
            <Text style={styles.buttonText}>CONTINUE</Text>
          </Pressable>
        </View>
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
    paddingHorizontal: 35,
    paddingTop: 40,
  },
  text: {
    color: "#2699fb",
    lineHeight: 20,
    fontWeight: 500,
    letterSpacing: 0.5,
    textAlign: "center",
  },
  actionContainer: {
    paddingHorizontal: 35,
    marginTop: 60,
    width: "100%",
    alignItems: "center",
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

export default VerifyPhone;
