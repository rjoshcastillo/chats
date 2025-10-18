import { Colors } from "@/constants/theme";
import { User2 } from "lucide-react-native";
import { View, ViewProps } from "react-native";

type IconProps = ViewProps & {
  size: number;
  withBackground?: boolean;
};
export default function IconProfile({
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
      <User2 color={Colors["--blue-500"]} size={size} />
    </View>
  );
}
