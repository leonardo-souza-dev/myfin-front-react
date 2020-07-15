import React from "react";
import List from "./list"

const boardstyle = {
  display: "inline-block",
  overflow: "auto",
  overflowY: "hidden",
  maxWidth: "100%",
  margin: "0 0 1em",
  whiteSpace: "nowrap"
}

const Board = ({ lists }) => (
  <ul style={boardstyle}>
    {lists.map(item => (
      <List list={item}/>
    ))}
  </ul>
);

export default Board;
