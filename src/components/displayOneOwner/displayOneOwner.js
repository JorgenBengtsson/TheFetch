import React, { Component } from "react";
import "./displayOwner.css";

export default class DisplayOneOwner extends Component {
  constructor() {
    super();
    this.state = { owner: null };
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
        .then((json) => this.setState({ owner: json }));
    }
  }
  render() {
    return (
      <div className="ownerInfo">
        {this.state.owner != null ? (
          <>
            <div>Name: {this.state.owner.name}</div>
            <div>Age: {this.state.owner.age}</div>
            <div>Adress: {this.state.owner.adress}</div>
          </>
        ) : null}
      </div>
    );
  }
}
