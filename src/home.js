import React from "react";
import Transacoes from "./transacoes";
import Board from "./board"

class Home extends React.Component {
  state = {
    transacoes: [],
    lists: [],
    loading: true
  };
  componentDidMount() {
    this.getTransacoes();
    this.getLists();
  }

  async getTransacoes() {
    const results = [
      { valor: 2, descricao: "cafe", data: '2020-01-01'},
      { valor: 30, descricao: "livro", data: '2020-03-01'},
      { valor: 10, descricao: "uber", data: '2020-03-04'},
      { valor: 50, descricao: "luz", data: '2020-04-04'},
      { valor: 23, descricao: "netflix", data: '2020-05-04'}];

    this.setState({ transacoes: [...results], loading: false });   
  }

  async getLists() {
    const lists = [
      { description: "bcaa", cards:[ { description: "pagar conta"}, { description: "fazer curso"} ] },
      { description: "bcaa", cards:[ { description: "ligar para joao"} ] },
      { description: "bcaa", cards:[ { description: "estudar react"} ] },
      { description: "bcaa", cards:[ { description: "estudar react"} ] },
      { description: "bcaa", cards:[ { description: "estudar react"} ] },
      { description: "bcaa", cards:[ { description: "estudar react"} ] },
      { description: "bcaa", cards:[ { description: "estudar react"} ] }
    ];

    this.setState({ lists: [...lists], loading: false });   
  }

  render() {
    return ( <Board lists={this.state.lists} /> );
  }
}

export default Home;
