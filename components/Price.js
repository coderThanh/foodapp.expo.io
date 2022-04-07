import NumberFormat from "react-number-format";
import { View, Text, StyleSheet } from "react-native";
import { colors, styleDefault } from "../assets/default/style";

export default function Price(props) {
  const { price, style, stylePrice } = props;

  return (
    <View style={[styles.container, style]}>
      <NumberFormat
        value={price}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$ "}
        renderText={(value) => (
          <Text style={[styles.price, stylePrice]}>{value}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  price: {
    color: colors.orange,
    fontFamily: "Montserrat-SemiBold",
    fontSize: styleDefault.sizeTitle,
  },
});
