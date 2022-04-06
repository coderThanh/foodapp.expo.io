import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

import Stack from "../components/Stack";
import ScreenTitle from "../components/ScreenTitle";

import avatarUrl from "../assets/images/profile.png";
import { styleDefault } from "../assets/default/style";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Stack
        renderLeft={<Image source={avatarUrl} style={styles.avatar} />}
        renderRight={<Icon name="menu-outline" size={32} style={styles.menu} />}
        style={{
          paddingHorizontal: styleDefault.padHori,
        }}
      />
      {/* Screen Title */}
      <ScreenTitle title="Delivery" sup="food" style={styles.screenTitle} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: styleDefault.padVerti,
  },
  avatar: {
    borderRadius: 40,
    width: 50,
    height: 50,
    borderColor: "white",
    borderWidth: 1,
  },
  menu: {
    opacity: 0.8,
  },
  screenTitle: {
    paddingVertical: 30,
  },
});
