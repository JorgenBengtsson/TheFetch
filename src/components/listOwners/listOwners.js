import React, { Component } from "react";
import "./listOwners.css";

export default class ListOwners extends Component {
  constructor() {
    super();
    this.state = { owners: [] };
  }
  componentDidMount() {
    fetch("https://localhost:44365/api/owners")
      .then((response) => response.json())
      .then((json) => this.setState({ owners: json }));
  }
  onSelect(id) {
    this.props.onSelectOwner(id);
  }
  render() {
    return (
      <ul className="ownerList">
        {this.state.owners.map((item) => (
          <li onClick={() => this.onSelect(item.id)}>{item.name}</li>
        ))}
      </ul>
    );
  }
}
