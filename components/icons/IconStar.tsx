import { Colors } from "@/constants/theme";
import { Star } from "lucide-react-native";
import { View, ViewProps } from "react-native";

type IconProps = ViewProps & {
  size: number;
  withBackground?: boolean;
};
export default function IconStar({
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
        backgroundColor: withBackground ? Colors["--yellow-400"] : "",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...otherProps}
    >
      <Star color={Colors["--yellow-500"]} size={size} />
    </View>
  );
}
