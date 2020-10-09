import React, { Component } from "react";
import "./addOwner.css";

export default class AddOwner extends Component {
  constructor() {
    super();
    this.state = { name: "", age: 0, adress: "" };
  }
  saveOwner() {
    fetch("https://localhost:44365/api/owners/", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        age: this.state.age,
        adress: this.state.adress,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }).then(() => this.props.onAddedOwner());
  }
  render() {
    return (
      <div className="addOwner">
        <div>
          Name:{" "}
          <input
            type="text"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>
        <div>
          Age:{" "}
          <input
            type="number"
            value={this.state.age}
            onChange={(e) => this.setState({ age: e.target.value })}
          />
        </div>
        <div>
          Adress:{" "}
          <input
            type="text"
            value={this.state.adress}
            onChange={(e) => this.setState({ adress: e.target.value })}
          />
        </div>
        <button onClick={() => this.saveOwner()}>Save</button>
      </div>
    );
  }
}
