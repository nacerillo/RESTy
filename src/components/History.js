import React from "react";
import "../scss/history.scss";

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("REACHED", this.props.history);
    return <section id="history">{this.props.history}</section>;
  }
}
export default History;
