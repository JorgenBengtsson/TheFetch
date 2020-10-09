import React, { Component } from "react";
import "./updateOwner.css";

export default class UpdateOwner extends Component {
  constructor() {
    super();
    this.state = { name: "", age: 0, adress: "", owner: null };
  }
  componentDidMount() {
    this.fetchOwner();
  }
  componentDidUpdate(prevProp) {
    if (this.props.id !== prevProp.id) this.fetchOwner();
  }
  fetchOwner() {
    if (this.props.id) {
      fetch("https://localhost:44365/api/owners/" + this.props.id)
        .then((response) => response.json())
        .then((json) =>
          this.setState({
            name: json.name,
            age: json.age,
            adress: json.adress ? json.adress : "",
            owner: json,
          })
        );
    }
  }
  updateOwner() {
    var owner = {
      name: this.state.name,
      age: this.state.age,
      adress: this.state.adress,
    };
    fetch("https://localhost:44365/api/owners/" + this.props.id, {
      method: "PUT",
      body: JSON.stringify(owner),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }).then(() => this.props.onUpdatedOwner());
  }
  render() {
    return (
      <div className="updateOwner">
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
        <button onClick={() => this.updateOwner()}>Update</button>
      </div>
    );
  }
}
