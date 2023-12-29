import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function Cross(props: any) {
  return (
    <View {...props}>
      <Svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 14 14"
        fill="none"
      >
        <Path
          d="M13 8H8v5c0 .55-.45 1-1 1s-1-.45-1-1V8H1c-.55 0-1-.45-1-1s.45-1 1-1h5V1c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"
          fill="#FDCF64"
        />
      </Svg>
    </View>
  );
}
