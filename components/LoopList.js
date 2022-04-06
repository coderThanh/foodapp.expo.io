import { View } from "react-native";

export default function LoopList(props) {
  const { data, renderItem, style } = props;
  var renderList = [];
  data.forEach((item) => renderList.push(renderItem(item)));

  return <View style={style}>{renderList}</View>;
}
