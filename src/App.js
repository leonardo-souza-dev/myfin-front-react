import React, { Component } from "react";
import Week from "./components/Week";
import Header from "./components/Header/";
import BacklogNotes from "./dados/BacklogNotes";
import Backlog from "./components/Backlog";
import Notes from "./dados/Notes";

class App extends Component {
  constructor(){
    super();
    this.backlogNotes = new BacklogNotes();
    this.notes = new Notes();
  }

  render() {
    //console.log(this.backlogNotes)
    console.log(this.notes)
    return (
      <>
        <Header title="my-fin react" />
        <Backlog id={"backlog"}
          backlogNotesProp={this.backlogNotes} 
          addNoteProp={this.backlogNotes.addNote.bind(this.backlogNotes)}
        /> 
        <Week
          //criarNota={this.notas.criarNota}
          notesProp={this.notes}
        />
      </>
    );
  }
}

export default App;
