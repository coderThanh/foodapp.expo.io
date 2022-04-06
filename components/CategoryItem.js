import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";

import { updateSelecting } from "../redux/category";

import { colors, styleDefault } from "../assets/default/style";

export default function CategoryItem(props) {
  const { category, style, isActive } = props;
  const dispatch = useDispatch();

  return (
    <View
      style={[
        styles.container,
        style,
        {
          backgroundColor: isActive ? colors.yellow : colors.white,
        },
      ]}
    >
      <Image source={category.image} style={styles.image} />
      <Text style={styles.title}>{category.title}</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          dispatch(updateSelecting({ id: category.id }));
        }}
        style={[
          styles.icon,
          {
            backgroundColor: isActive ? colors.white : colors.red,
          },
        ]}
      >
        <Icon
          name="chevron-forward"
          size={18}
          color={isActive ? colors.black : colors.white}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 30,
    ...styleDefault.shadown,
    borderRadius: 20,
    alignItems: "center",
    flex: 1,
    width: 120,
  },
  title: {
    fontSize: styleDefault.sizeBasic,
    fontFamily: "Montserrat-Medium",
    marginBottom: 20,
  },
  image: {
    height: 60,
    width: 60,
    marginBottom: 10,
  },
  icon: {
    borderRadius: 50,
    height: 25,
    width: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});
