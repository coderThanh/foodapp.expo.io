import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import Stack from "../components/Stack";
import ScreenTitle from "../components/ScreenTitle";

import { styleDefault, colors } from "../assets/default/style";

export default function Food(props) {
  const { navigation, route } = props;
  const { id } = route.params;
  const dispatch = useDispatch();
  const [state, setState] = useState({ isReady: false });
  const { food, isReady } = state;

  useEffect(() => {}, [food]);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <Stack
        renderLeft={
          <TouchableOpacity
            style={styles.menuLeft}
            onPress={() => navigation.goBack()}
          >
            <Icon name="chevron-back" size={20} />
          </TouchableOpacity>
        }
        renderRight={
          <TouchableOpacity style={styles.menuRight}>
            <Icon name="star" size={15} color={colors.white} />
          </TouchableOpacity>
        }
        style={{ paddingHorizontal: styleDefault.padHori }}
      />

      {/* Title Page */}
      <ScreenTitle title={isReady ? food.title : "Food Screen"} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 20,
  },
  menuLeft: {
    borderColor: colors.borderGray,
    borderWidth: 1,
    borderRadius: 8,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  menuRight: {
    borderRadius: 8,
    width: 40,
    height: 40,
    backgroundColor: colors.yellow,
    justifyContent: "center",
    alignItems: "center",
  },
});
