import React from "react";
import { FontSize } from "@react-atomic/foundation";

export interface TextProps {
  size?: keyof typeof FontSize;
}

const Text: React.FC<TextProps> = ({ size = FontSize.base, children }) => {
  const className = `react-atomic-text react-atomic-text-${size}`;

  return <p className={className}>{children}</p>;
};

export default Text;
