import { Colors } from "@/constants/theme";
import { Heart, MessageCircle } from "lucide-react-native";
import { View, ViewProps } from "react-native";

type IconProps = ViewProps & {
  size: number;
  withBackground?: boolean;
};
export default function IconMessage({
  size,
  withBackground,
  ...otherProps
}: IconProps) {
  return (
    <View
      style={{
        width: 35,
        height: 35,
        borderRadius: 99,
        backgroundColor: withBackground ? Colors["--blue-400"] : "",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...otherProps}
    >
      <MessageCircle color={Colors["--blue-500"]} size={size} />
    </View>
  );
}
