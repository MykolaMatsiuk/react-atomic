import React from "react";
import { FontSize } from "@react-atomic/foundation";
export interface TextProps {
    size?: keyof typeof FontSize;
}
declare const Text: React.FC<TextProps>;
export default Text;
