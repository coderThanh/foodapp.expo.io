import { View, Text, StyleSheet } from "react-native";

import { styleDefault } from "../assets/default/style";

export default function SectionTitle(props) {
  const { title, style, styleTitle } = props;
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.title, styleTitle]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: styleDefault.padHori,
  },
  title: {
    fontSize: 17,
    fontFamily: "Montserrat-SemiBold",
    textTransform: "capitalize",
    marginBottom: 5,
  },
});
