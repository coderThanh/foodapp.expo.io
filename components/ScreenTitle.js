import { View, Text, StyleSheet } from "react-native";

import { styleDefault } from "../assets/default/style";

export default function ScreenTitle(props) {
  const { title, sup, styleTitle, styleSup, style } = props;

  return (
    <View style={[styles.container, style]}>
      {sup ? <Text style={[styles.sup, styleSup]}>{sup}</Text> : false}
      {title ? <Text style={[styles.title, styleTitle]}>{title}</Text> : false}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: styleDefault.padHori,
    paddingTop: 30,
    paddingBottom: 20,
  },
  sup: {
    textTransform: "capitalize",
    fontFamily: "Montserrat-Regular",
    fontSize: 20,
    marginBottom: 5,
  },
  title: {
    textTransform: "capitalize",
    fontFamily: "Montserrat-SemiBold",
    fontSize: styleDefault.sizeTitle,
  },
});
