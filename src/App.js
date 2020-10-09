import React, { Component } from "react";
import "./App.css";
import DisplayOwners from "./components/displayOwners/displayOwners";
import DisplayOneOwner from "./components/displayOneOwner/displayOneOwner";
import AddOwner from "./components/addOwner/addOwner";
import UpdateOwner from "./components/updateOwner/updateOwner";

export default class App extends Component {
  constructor() {
    super();
    this.state = { owners: [], id: undefined };
  }
  componentDidMount() {
    this.fetchOwners();
  }
  fetchOwners() {
    fetch("https://localhost:44365/api/owners/")
      .then((response) => response.json())
      .then((json) => this.setState({ owners: json }));
  }
  render() {
    return (
      <div>
        <DisplayOwners
          owners={this.state.owners}
          onOwnerClick={(id) => this.setState({ id: id })}
        />
        <DisplayOneOwner id={this.state.id} />
        <AddOwner onAddedOwner={() => this.fetchOwners()} />
        <UpdateOwner
          onUpdatedOwner={() => this.fetchOwners()}
          id={this.state.id}
        />
      </div>
    );
  }
}
