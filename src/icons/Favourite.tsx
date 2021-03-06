import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Favourite: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M12 21l-1.45-1.295C5.4 15.125 2 12.103 2 8.395 2 5.374 4.42 3 7.5 3c1.74 0 3.41.795 4.5 2.05A6.037 6.037 0 0 1 16.5 3C19.58 3 22 5.374 22 8.395c0 3.708-3.4 6.73-8.55 11.32L12 21z" />
  </Svg>
);

Favourite.defaultProps = defaultProps;
export default Favourite;
