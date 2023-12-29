import React from "react";
import { View } from "react-native";
import Svg, { Circle, G, Rect } from "react-native-svg";

export default function Slider(props: any) {
  return (
    <Svg width={30} height={4} viewBox="0 0 30 4" fill="none" {...props}>
      <G id="Carro">
        <Rect
          id="Rectangle"
          x={22}
          width={8}
          height={4}
          rx={2}
          fill="#BECFD8"
        />
        <Rect id="Rectangle_2" width={16} height={4} rx={2} fill="#FFD152" />
      </G>
    </Svg>
  );
}
