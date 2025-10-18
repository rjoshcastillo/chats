import { Colors } from "@/constants/theme";
import { Heart, MessageCircle, Users2 } from "lucide-react-native";
import { View, ViewProps } from "react-native";

type IconProps = ViewProps & {
  size: number;
  withBackground?: boolean;
};
export default function IconUsers({ size, withBackground, ...otherProps }: IconProps) {
  return (
    <View
      style={{
        width: 35,
        height: 35,
        borderRadius: 99,
        backgroundColor: withBackground ? Colors["--green-400"] : '',
        justifyContent: "center",
        alignItems: "center",
      }}
      {...otherProps}
    >
      <Users2 color={Colors["--green-500"]} size={size} />
    </View>
  );
}
