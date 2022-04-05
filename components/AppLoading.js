import { ActivityIndicator, Image, View, StyleSheet } from "react-native";

import pizaUrl from "../assets/images/pizza1.png";
import colors from "../assets/colors/colors";

export default function AppLoading(props) {
  const { source, style } = props;
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={source ? source : pizaUrl}
        style={[styles.image, style]}
      />
      <ActivityIndicator color={colors.textGray} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 120,
  },
});
