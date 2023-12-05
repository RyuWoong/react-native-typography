var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { Text } from 'react-native';
function Typography(_a) {
    var size = _a.size, children = _a.children, style = _a.style, rest = __rest(_a, ["size", "children", "style"]);
    var preset = {
        S: { fontSize: 10 },
        M: { fontSize: 14 },
        L: { fontSize: 18 },
    };
    return <Text style={[preset[size], style]}>{children}</Text>;
}
export default Typography;
//# sourceMappingURL=index.js.map