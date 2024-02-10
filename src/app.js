import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
const App = () => {
  return (
    <div className="sm:px-16 sm:py-8 py-4 px-4">
      <Header></Header>
      <Body></Body>
    </div>
  );
};
const root = ReactDom.createRoot(document.body.querySelector("#root"));
root.render(<App />);
