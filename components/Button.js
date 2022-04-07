import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors, styleDefault } from "../assets/default/style";

export default function Button(props) {
  const { fnPress, title, style, prefix, suffix } = props;

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.7}
      onPress={typeof fnPress === "function" ? () => fnPress() : () => {}}
    >
      <Text style={styles.text}>
        {prefix} {title} {suffix}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.yellow,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  text: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: styleDefault.sizeBasic,
  },
});
