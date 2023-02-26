import { View, Text, StyleSheet, Pressable } from "react-native";

const WelcomeScreen = ({navigation}) => {
  const onRegister = () => {
    navigation?.navigate('CarrierOrDriver')
  }
  const onLogin = () => {
    navigation?.navigate('LoginScreen')
  }

  return (
    <View style={styles.welcomeContainer}>
      <View style={styles.headlineContainer}>
        <Text style={styles.headline}>Welcome To LiveDrivr</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={{ color: "#828282", fontSize: 18 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna
            cursus eget nunc scelerisque viverra mauris in aliquam.
          </Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.buttonsContainer}>
          <Pressable style={styles.button} onPress={onRegister}>
            <Text style={styles.buttonText}>
              REGISTER
            </Text>
          </Pressable>
          <Pressable style={[styles.button, {backgroundColor: 'white'}]} onPress={onLogin}>
            <Text style={[styles.buttonText, {color: '#2699fb'}]}>
              LOG INTO AN EXISTING ACCOUNT
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
  },
  headline: {
    fontSize: 32,
    fontWeight: 500,
    color: "white",
    marginBottom: 25,
    letterSpacing: 0.5,
  },
  contentContainer: {
    flex: 3,
    alignItems: 'center'
  },
  headlineContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#2699fb",
  },
  divider: {
    marginTop: 50,
    borderBottomColor: '#BCE0FD',
    borderBottomWidth: 4,
    width: 24,
  },
  textContainer: {
    paddingHorizontal: 30,
    paddingTop: 40
  },
  buttonsContainer: {
    paddingHorizontal: 30,
    marginTop: 20,
    width: '100%',
    justifyContent: 'center'
  },
  button: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#2699fb',
    marginTop: 15,
    padding: 15,
    backgroundColor: '#2699fb',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 14
  }
});

export default WelcomeScreen;
