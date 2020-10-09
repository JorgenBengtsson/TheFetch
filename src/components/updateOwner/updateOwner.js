import React, { Component } from "react";

export default class UpdateOwner extends Component {
  constructor(props) {
    super(props);
    this.state = { id: this.props.id, owner: null, name: "" };
  }
  componentDidUpdate(prevProp) {
    if (this.props.id !== prevProp.id)
      this.setState((state, props) => ({ id: props.id }), this.getOwner);
  }
  componentDidMount() {
    if (this.props.id)
      this.setState(
        (state, props) => ({
          id: props.id,
        }),
        this.getOwner
      );
  }
  getOwner() {
    console.log(this.state.id);
    if (this.state.id != null)
      fetch("https://localhost:44365/api/owners/" + this.state.id)
        .then((response) => response.json())
        .then((json) => this.setState({ owner: json, name: json.name }));
  }
  updateOwner() {
    var owner = { ...this.props.owner, name: this.state.name };
    fetch("https://localhost:44365/api/owners/" + this.state.id, {
      method: "PUT",
      body: JSON.stringify(owner),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => this.props.onUsersUpdate());
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={() => this.updateOwner()}>Update</button>
      </div>
    );
  }
}
