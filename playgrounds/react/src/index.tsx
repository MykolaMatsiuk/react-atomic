import React from "react";
import ReactDOM from "react-dom";

import { Button } from "@react-atomic/react";

import "@react-atomic/scss/lib/Button.css";
// import "@ds.e/scss/lib/Utilities.css";
// import "@ds.e/scss/lib/Text.css";
// import "@ds.e/scss/lib/Margin.css";
// import "@ds.e/scss/lib/Select.css";
// import "@ds.e/scss/lib/global.css";

const options = [
  {
    label: "Strict Black",
    value: "strict-black",
  },
  {
    label: "Heavenly Green",
    value: "heavenly-green",
  },
  {
    label: "Sweet Pink",
    value: "pink",
  },
];

ReactDOM.render(
  <div style={{ padding: "40px" }}>
    <Button label='Example button' />
  </div>,
  document.querySelector("#root")
);

// <Select label='Please select a size' onOptionSelected={console.log} options={[{ label: '', value: '' }]} />
