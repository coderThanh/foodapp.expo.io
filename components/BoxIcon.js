import { View, StyleSheet } from "react-native";

export default function BoxIcon(props) {
  const { Icon, Text, style, space } = props;
  return (
    <View style={style}>
      {Icon}
      <View style={{ width: space, height: space }} />
      {Text}
    </View>
  );
}
