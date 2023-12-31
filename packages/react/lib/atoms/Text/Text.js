import React$1 from 'react';
import { FontSize } from '@react-atomic/foundation';

const Text = ({ size = FontSize.base, children }) => {
    const className = `react-atomic-text react-atomic-text-${size}`;
    return React$1.createElement("p", { className: className }, children);
};

export default Text;
//# sourceMappingURL=Text.js.map
