import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Mute: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M18 10l4 4m-4 0l4-4M13 5v14l-5-4H3V9h5zM13 14c1.5-1 1.5-3 0-4" />
  </Svg>
);

Mute.defaultProps = defaultProps;
export default Mute;
