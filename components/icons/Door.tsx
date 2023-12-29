import React from "react";
import { View } from "react-native";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export default function Door(props: any) {
  return (
    <View
    {...props}
    
    >
      <Svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 32 32"
        fill="none"
      >
        <G clipPath="url(#clip0_49425_77)">
          <Path
            d="M13.453 20.787l1.88 1.88L22 16l-6.667-6.667-1.88 1.88 3.44 3.454H4v2.666h12.893l-3.44 3.454zM25.333 4H6.667C5.187 4 4 5.2 4 6.667V12h2.667V6.667h18.666v18.666H6.667V20H4v5.333A2.666 2.666 0 006.667 28h18.666C26.8 28 28 26.8 28 25.333V6.667C28 5.2 26.8 4 25.333 4z"
            fill="#282519"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_49425_77">
            <Path fill="#fff" d="M0 0H32V32H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
}
