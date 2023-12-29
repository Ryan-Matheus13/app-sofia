import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function Arrow(props: any) {
  return (
    <View {...props}>
      <Svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 25 25"
        fill="none"
      >
        <Path
          d="M19.7916 12.5L5.20829 12.5"
          stroke="#FFD666"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.5 19.7917L5.20833 12.5001L12.5 5.20841"
          stroke="#FFD666"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}
