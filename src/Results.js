import React from "react";
import ReactJson from "react-json-view";
import "./scss/form.scss";

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section id="output_field">
        <ReactJson src={this.props.response} />
      </section>
    );
  }
}
export default Results;
