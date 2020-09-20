import React, { Component } from "react";
import Note from "../Note";
import "./style.css";

class Day extends Component {
  onDrop(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    const element = document.getElementById(data);
    e.currentTarget.appendChild(element);
  }

  onDragOver(e){
    e.preventDefault();
  }

  render() {
    return (
      <li className="day">
        <h2 className="description">{this.props.day.numberDay}</h2>
        <ul
          id={this.props.id}
          onDrop={this.onDrop}
          onDragOver={this.onDragOver}
        >
          {this.props.day.notes.map((item, index) => (
            <Note note={item} key={index} id={index} idParent={this.props.id}/>
          ))}
        </ul>
      </li>
    );
  }
}

export default Day;
