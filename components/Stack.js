import { View, StyleSheet } from "react-native";

export default function Stack(props) {
  const { renderLeft, renderRight, style } = props;

  return (
    <View style={[styles.container, style]}>
      {renderLeft}
      {renderRight}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
