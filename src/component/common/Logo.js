import React from "react";

export class Logo extends React.PureComponent {
  render() {
    return React.createElement(
      "div",
      { className: "logo" },
      React.createElement("b", null, "netflix"),
      "roulette"
    );
  }
}
