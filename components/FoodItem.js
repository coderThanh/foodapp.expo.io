import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { colors, styleDefault } from "../assets/default/style";

import BoxIcon from "./BoxIcon";

export default function CategoryItem(props) {
  const { food, style, onPress } = props;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.boxText}>
        <BoxIcon
          Icon={<Icon name="flame" size={22} color={colors.yellow} />}
          Text={<Text style={styles.title}>top of the week</Text>}
          style={[styles.boxIcon, styles.boxTop]}
          space={5}
        />
        <Text style={[styles.title, styles.boxItem]}>{food.title}</Text>
        <Text style={[styles.weight, styles.boxItem]}>
          Weight {food.weight}gr
        </Text>
        <View style={styles.boxBottom}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.toch}
            onPress={() => onPress()}
          >
            <Icon name="add" size={18} color={colors.black} />
          </TouchableOpacity>
          <BoxIcon
            Icon={<Icon name="star" size={15} color={colors.black} />}
            Text={<Text style={styles.textRating}>{food.rating}</Text>}
            style={styles.boxIcon}
            space={5}
          />
        </View>
      </View>
      <View style={styles.imgWrap}>
        <Image source={food.image} resizeMode="contain" style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 25,
    flexDirection: "row",
    flex: 1,
    alignItems: "stretch",
    overflow: "hidden",
  },
  boxText: {
    flex: 1,
    paddingRight: 5,
    position: "relative",
    paddingBottom: 65,
  },
  boxTop: {
    marginBottom: 15,
    marginTop: 20,
  },
  boxIcon: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    flex: 1,
  },
  boxItem: {
    marginLeft: 20,
    marginBottom: 5,
  },
  boxBottom: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    left: 0,
    bottom: 0,
  },
  title: {
    fontSize: styleDefault.sizeBasic,
    fontFamily: "Montserrat-SemiBold",
    textTransform: "capitalize",
    flex: 1,
  },
  weight: {
    color: colors.textGray,
    fontFamily: "Montserrat-Regular",
  },
  textRating: {},
  toch: {
    backgroundColor: colors.yellow,
    height: 50,
    width: 90,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 20,
  },
  imgWrap: {
    flexBasis: 200,
    marginRight: -60,
    justifyContent: "center",
  },
  image: {
    width: "100%",
  },
});
