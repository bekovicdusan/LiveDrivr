import { View, Text, StyleSheet, Image } from "react-native";

const WelcomeOnboarding = () => {

  return (
    <View style={styles.welcomeContainer}>
      <View style={styles.imageContainer}>
        <Image style={{width: 150, height: 150}} source={require('../../assets/welcome.png')}/>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.headlineContainer}>
          <Text style={styles.headline}>
            Welcome to LiveDrivr
          </Text>
        </View>
        <View style={styles.sublineContainer}>
          <Text style={styles.text}>
            Trust and Verify Carriers Driver to Driver
          </Text>
        </View>
      </View>
      <View style={styles.navigationContainer}>
        <Text style={{color: '#2699fb' }}>
          navigation
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  headline: {
    paddingHorizontal: 70,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 500,
    color: "#2699fb",
    marginBottom: 25,
    letterSpacing: 0.5,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center'
  },
  navigationContainer: {
    flex: 1
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    paddingHorizontal: 30,
    paddingTop: 40
  },
  text: {
    color: '#2699fb',
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 90
  }
});

export default WelcomeOnboarding;
