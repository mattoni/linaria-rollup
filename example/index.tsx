import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { TestComponent } from "linaria-rollup";

const App = () => {
  return (
    <div>
      <TestComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
