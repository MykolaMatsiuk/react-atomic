import React$1 from 'react';

const Margin = ({ space = "xxxs", children, left, right, top, bottom }) => {
    let className = ``;
    if (!left && !right && !top && !bottom) {
        className = `react-atomic-margin-${space}`;
    }
    if (left) {
        className = `${className} react-atomic-margin-left-${space}`;
    }
    if (right) {
        className = `${className} react-atomic-margin-right-${space}`;
    }
    if (top) {
        className = `${className} react-atomic-margin-top-${space}`;
    }
    if (bottom) {
        className = `${className} react-atomic-margin-bottom-${space}`;
    }
    return React$1.createElement("div", { className: className }, children);
};

export default Margin;
//# sourceMappingURL=Margin.js.map
