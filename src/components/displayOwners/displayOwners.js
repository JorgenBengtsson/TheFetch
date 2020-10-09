import React, { Component } from "react";

export default class DisplayOwners extends Component {
  handleClickEvent(id) {
    this.props.onOwnerClick(id);
  }
  render() {
    return (
      <ul>
        {this.props.owners.map((item) => (
          <li key={item.id} onClick={() => this.handleClickEvent(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    );
  }
}
