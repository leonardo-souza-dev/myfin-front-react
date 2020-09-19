import React, { Component } from "react";
import Week from "./components/Week";
import Header from "./components/Header/";

class App extends Component {
  constructor() {
    super();

    this.state = {
      week: [
        {
          numberDay: 1,
          notes: [
            {
              title: "pagar conta",
              description: "hoje eu tenho que pagar a conta tal",
              dateScheduled: "2020-07-16T08:00",
            },
            {
              title: "fazer curso",
              dateScheduled: "2020-07-16T11:00",
            },
          ],
        },
        {
          numberDay: 2,
          notes: [
            {
              title: "pagar conta",
              description: "hoje eu tenho que pagar a conta tal",
              dateScheduled: "2020-07-16T08:00",
            },
          ],
        },
        {
          numberDay: 3,
          notes: [
            {
              title: "pagar conta",
              description: "hoje eu tenho que pagar a conta tal",
              dateScheduled: "2020-07-16T08:00",
            },
            {
              title: "fazer curso",
              dateScheduled: "2020-07-16T11:00",
            },
            {
              title: "fazer curso",
              dateScheduled: "2020-07-16T11:00",
            },
          ],
        },
        {
          numberDay: 4,
          notes: [
            {
              title: "pagar conta",
              description: "hoje eu tenho que pagar a conta tal",
              dateScheduled: "2020-07-16T08:00",
            },
            {
              title: "fazer curso",
              dateScheduled: "2020-07-16T11:00",
            },
          ],
        },
        {
          numberDay: 5,
          notes: [
            {
              title: "pagar conta",
              description: "hoje eu tenho que pagar a conta tal",
              dateScheduled: "2020-07-16T08:00",
            },
            {
              title: "fazer curso",
              dateScheduled: "2020-07-16T11:00",
            },
          ],
        },
        {
          numberDay: 6,
          notes: [
            {
              title: "pagar conta",
              description: "hoje eu tenho que pagar a conta tal",
              dateScheduled: "2020-07-16T08:00",
            },
            {
              title: "fazer curso",
              dateScheduled: "2020-07-16T11:00",
            },
          ],
        },
        {
          numberDay: 7,
          notes: [
            {
              title: "pagar conta",
              description: "hoje eu tenho que pagar a conta tal",
              dateScheduled: "2020-07-16T08:00",
            },
            {
              title: "fazer curso",
              dateScheduled: "2020-07-16T11:00",
            },
          ],
        }
      ],
      backlog: [
        {
          title: "pagar conta",
          description: "hoje eu tenho que pagar a conta tal",
          dateScheduled: "2020-07-16T08:00",
        },
        {
          title: "fazer curso",
          description: "fazer curso tal",
          dateScheduled: "2020-07-16T11:00",
        },
      ],
    };
  }
  addNoteToBacklog(noteTitle) {
    const novoBacklog = [
      ...this.state.backlog,
      { title: noteTitle, description: "" },
    ];
    const novoEstado = { ...this.state, backlog: novoBacklog };
    console.log(novoEstado);
    this.setState(novoEstado);
  }

  render() {
    return (
      <>
        <Header title="my-fin react" />
        <Week
          weekDays={this.state.week}
          addNoteToBacklog={this.addNoteToBacklog.bind(this)}
          backlog={this.state.backlog}
        />
      </>
    );
  }
}

export default App;
