import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// masonary
// var COL_COUNT = 4;
// var col_heights = [],
//   container = document.getElementById("projects");
// for (var i = 0; i <= COL_COUNT; i++) {
//   col_heights.push(0);
// }
// for (var i = 0; i < container.children.length; i++) {
//   var order = (i + 1) % COL_COUNT || COL_COUNT;
//   container.children[i].style.order = order;
//   col_heights[order] += parseFloat(container.children[i].style.height);
// }
// var highest = Math.max.apply(Math, col_heights);
// container.style.height = highest + "px";
// masonary end

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
