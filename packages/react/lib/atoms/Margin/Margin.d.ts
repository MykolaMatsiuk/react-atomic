import React from "react";
import { Spacing } from "@react-atomic/foundation";
export interface MarginProps extends React.PropsWithChildren {
    space?: keyof typeof Spacing;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
}
declare const Margin: React.FC<MarginProps>;
export default Margin;
