import {ReactNode} from 'react';
import {Text, TextProps, TextStyle} from 'react-native';

interface Props extends TextProps {
  size: 'S' | 'M' | 'L';
  children: ReactNode;
  style?: TextStyle;
}

function Typography({size, children, style, ...rest}: Props) {
  const preset = {
    S: {fontSize: 10},
    M: {fontSize: 14},
    L: {fontSize: 18},
  };
  return <Text style={[preset[size], style]}>{children}</Text>;
}

export default Typography;
