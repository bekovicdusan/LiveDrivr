import { View, Text, StyleSheet, Pressable } from "react-native";

const CarrierOrDriver = () => {
  // return (
  //   <View>
  //     <Text>
  //       hello from carrier
  //     </Text>
  //   </View>
  // )
  return (
    <View style={styles.screenContainer}>
      <View style={styles.headlineContainer}>
        <Text style={styles.headline}>Carrier or Driver?</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={[styles.label, {marginTop: 70}]}>Register as a Carrier</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>REGISTER AS A CARRIER</Text>
        </Pressable>
        <View style={styles.divider} />
        <Text style={styles.label}>Register as a Driver</Text>
        <Pressable style={[styles.button]}>
          <Text style={[styles.buttonText]}>
            LOG INTO AN EXISTING ACCOUNT
          </Text>
        </Pressable>
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
    paddingHorizontal: 30
  },
  label: {
    fontSize: 22,
    fontWeight: 600,
    color: '#7f7f7f',
    marginBottom: 10
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
    width: '100%',
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

export default CarrierOrDriver;
