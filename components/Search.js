import { View, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useState } from "react";

import { styleDefault, colors } from "../assets/default/style";

export default function Search(props) {
  const { style, placeholder } = props;
  const [state, setState] = useState({});
  return (
    <View style={[styles.container, style]}>
      <Icon name="search-outline" size={22} />
      <TextInput
        placeholder={placeholder ? placeholder : "Search.."}
        onChangeText={(newText) => setState({ ...state, value: newText })}
        defaultValue={state.value}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: styleDefault.padHori,
    flexDirection: "row",
  },
  input: {
    marginLeft: 10,
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderGray,
    paddingBottom: 7,
    fontSize: styleDefault.sizeBasic,
  },
});
