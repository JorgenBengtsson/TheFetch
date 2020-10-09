import React, { Component } from "react";
import "./displayOwner.css";

export default class DisplayOwner extends Component {
  constructor(props) {
    super(props);
    this.state = { owner: null };
  }
  componentDidUpdate(prevProp) {
    if (this.props.id !== prevProp.id) this.getOwner();
  }
  componentDidMount() {
    if (this.props.id !== null) this.getOwner();
  }
  getOwner() {
    fetch("https://localhost:44365/api/owners/" + this.props.id)
      .then((response) => response.json())
      .then((json) => this.setState({ owner: json }));
  }
  render() {
    return (
      <div className="owner">
        {this.state.owner != null ? (
          <p>
            Owner
            <br />
            name: {this.state.owner.name}
          </p>
        ) : null}
      </div>
    );
  }
}
