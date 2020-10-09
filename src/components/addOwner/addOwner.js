import React, { Component } from "react";

export default class addOwner extends Component {
  constructor() {
    super();
    this.state = { name: "" };
  }
  saveOwner() {
    fetch("https://localhost:44365/api/owners", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        car: null,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={() => this.saveOwner()}>Save</button>
      </div>
    );
  }
}
