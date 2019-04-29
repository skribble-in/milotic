import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const LockAlt: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M5 11h14v10H5zM12 3a5 5 0 0 1 5 5v3H7V8a5 5 0 0 1 5-5z" />
    <Circle cx={12} cy={16} r={1} />
  </Svg>
);

LockAlt.defaultProps = defaultProps;
export default LockAlt;
