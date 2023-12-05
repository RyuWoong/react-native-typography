import { ReactNode } from 'react';
import { TextProps, TextStyle } from 'react-native';
interface Props extends TextProps {
    size: 'S' | 'M' | 'L';
    children: ReactNode;
    style?: TextStyle;
}
declare function Typography({ size, children, style, ...rest }: Props): import("react").JSX.Element;
export default Typography;
//# sourceMappingURL=index.d.ts.map