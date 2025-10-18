import { Colors } from "@/constants/theme";
import { Heart } from "lucide-react-native";
import { View, ViewProps } from "react-native";

type IconProps = ViewProps & {
  size: number;
  withBackground?: boolean;
};
export default function IconHeart({
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
        backgroundColor: withBackground ? Colors["--red-400"] : "",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...otherProps}
    >
      <Heart color={Colors["--red-500"]} size={size} />
    </View>
  );
}
