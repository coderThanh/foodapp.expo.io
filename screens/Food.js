import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { getFoodsById } from "../redux/food";

import Stack from "../components/Stack";
import ScreenTitle from "../components/ScreenTitle";
import Price from "../components/Price";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";

import { styleDefault, colors } from "../assets/default/style";
import tomato from "../assets/images/tomato.png";
import cheese from "../assets/images/cheese.png";
import garlic from "../assets/images/garlic.png";
import ham from "../assets/images/ham.png";

export default function Food(props) {
  const { navigation, route } = props;
  const { id } = route.params;
  const dispatch = useDispatch();
  const [state, setState] = useState({ isReady: false });
  const { food, isReady } = state;

  useEffect(() => {
    dispatch(getFoodsById({ id }))
      .unwrap()
      .then((res) => {
        if (res && res.food) {
          setState({ ...state, food: res.food, isReady: true });
        }
      })
      .catch((reject) => console.log(reject));
  }, [food]);

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
      <ScreenTitle title={isReady ? food.title : ""} />

      {/* Prices */}
      <Price
        price={isReady ? food.price : ""}
        style={{ paddingHorizontal: styleDefault.padHori }}
      />

      {/* Box Detail */}
      <View style={styles.boxDetail}>
        <View style={styles.boxDetailText}>
          <Text style={styles.textSup}>Size</Text>
          <Text style={styles.textTitle}>Medium 14”</Text>
          <Text style={styles.textSup}>Curst</Text>
          <Text style={styles.textTitle}>Thin Crust</Text>
          <Text style={styles.textSup}>Delivery in</Text>
          <Text style={styles.textTitle}>30 min</Text>
        </View>
        {isReady ? (
          <Image
            resizeMode="contain"
            source={food.image}
            style={styles.thumn}
          />
        ) : (
          false
        )}
      </View>

      {/* Ingredients */}
      <SectionTitle title={"Ingredients"} />
      <FlatList
        data={[cheese, garlic, tomato, ham]}
        renderItem={({ item }) => {
          return (
            <View style={styles.galleyItem}>
              <Image
                source={item}
                resizeMode="contain"
                style={styles.galleyImg}
              />
            </View>
          );
        }}
        horizontal={true}
        keyExtractor={(item, index) => index}
        contentContainerStyle={{ paddingLeft: styleDefault.padHori }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
      {/* Button */}
      <Button
        title="Place an order"
        suffix={<Icon name="chevron-forward" size={18} />}
        style={styles.btn}
        fnPress={() =>
          Alert.alert("Thông báo", "Bạn đã đặt hàng thành công", [
            {
              text: "Về trang chủ",
              onPress: () => navigation.goBack(),
            },
            {
              text: "Oke",
              style: "cancel",
            },
          ])
        }
      />
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
  boxDetail: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  boxDetailText: {
    flexBasis: 170,
    flex: 1,
    paddingLeft: styleDefault.padHori,
    paddingRight: 10,
  },
  thumn: {
    height: 176,
    marginRight: "-20%",
  },
  textSup: {
    fontFamily: "Montserrat-Regular",
    fontSize: styleDefault.sizeBasic - 1,
    color: colors.textGray,
    marginBottom: 4,
    textTransform: "capitalize",
  },
  textTitle: {
    fontSize: styleDefault.sizeBasic,
    fontFamily: "Montserrat-SemiBold",
    marginBottom: 18,
    textTransform: "capitalize",
  },
  galleyItem: {
    backgroundColor: "white",
    borderRadius: 15,
    marginRight: 15,
    padding: 20,
    ...styleDefault.shadown,
  },
  galleyImg: {
    width: 80,
    height: 80,
  },
  btn: {
    marginHorizontal: styleDefault.padHori,
    marginTop: 60,
  },
});
