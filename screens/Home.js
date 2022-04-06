import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";

import Stack from "../components/Stack";
import ScreenTitle from "../components/ScreenTitle";
import Search from "../components/Search";
import SectionTitle from "../components/SectionTitle";
import CategoryItem from "../components/CategoryItem";
import FoodItem from "../components/FoodItem";
import LoopList from "../components/LoopList";

import avatarUrl from "../assets/images/profile.png";
import { styleDefault } from "../assets/default/style";

export default function HomeScreen(props) {
  // Get State root form react redux
  const { selecting, items } = useSelector((state) => state.category);
  const foods = useSelector((state) => state.food.items);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <Stack
        renderLeft={<Image source={avatarUrl} style={styles.avatar} />}
        renderRight={<Icon name="menu-outline" size={32} style={styles.menu} />}
        style={{
          paddingHorizontal: styleDefault.padHori,
        }}
      />
      {/* Body */}
      <ScreenTitle title="Delivery" sup="food" style={styles.screenTitle} />
      <Search style={{ marginBottom: 5 }} />
      <SectionTitle title="Categories" style={styles.seactionTitle} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <CategoryItem
            category={item}
            isActive={item.id == selecting ? true : false}
            style={{
              marginLeft: styleDefault.padHori,
            }}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 20 }}
      />
      <SectionTitle title="Popular" style={styles.seactionTitle} />
      <LoopList
        data={foods}
        renderItem={(item) => (
          <FoodItem
            key={item.id}
            food={item}
            style={{
              marginBottom: 20,
            }}
          />
        )}
        style={{
          paddingHorizontal: styleDefault.padHori,
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 20,
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
    paddingTop: 30,
    paddingBottom: 20,
  },
  seactionTitle: {
    marginBottom: 10,
    marginTop: 25,
  },
});
