import { Children } from "react";
import { StyleSheet, View } from "react-native";

const HeadlineWrapper = () => {
  return (
    <View style={styles.headlineContainer}>
      {Children}
    </View>
  );
}

const styles = StyleSheet({
  headlineContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#2699fb",
  },
});

export default HeadlineWrapper;