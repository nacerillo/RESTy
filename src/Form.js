import React from "react";
import "./scss/form.scss";
class Form extends React.Component {
  constructor(props) {
    super(props); // for now, just do this
    this.state = {
      words: "input here",
      method: null,
    };
  }

  handleChange = (e) => {
    let words = e.target.value;
    this.setState({ words });
  };
  handleSelect = (e) => {
    e.preventDefault();
    let method = e.target.value;
    this.setState({ method });
  };

  handleClick = (e) => {
    e.preventDefault();
    let words = this.state.words.split("").reverse().join("");
    this.setState({ words });
  };

  render() {
    return (
      <div>
        <div>
          <div id="method_select">
            <label for="put">
              PUT
              <input
                onChange={this.handleSelect}
                type="radio"
                id="put"
                name="method"
                value="put"
              ></input>
            </label>

            <label for="post">
              POST
              <input
                onChange={this.handleSelect}
                type="radio"
                id="post"
                name="method"
                value="post"
              ></input>
            </label>

            <label for="get">
              GET
              <input
                onChange={this.handleSelect}
                type="radio"
                id="get"
                name="method"
                value="get"
              ></input>
            </label>

            <label for="delete">
              DELETE
              <input
                onChange={this.handleSelect}
                type="radio"
                id="delete"
                name="method"
                value="delete"
              ></input>
            </label>
          </div>
        </div>
        <div id="url_input">
          <lable>
            URL:
            <input type="text" onChange={this.handleChange} />
          </lable>
          <button id="mybutton" onClick={this.handleClick}>
            Go!
          </button>
        </div>
        <section id="output_field">
          {this.state.words} {this.state.method}
        </section>
      </div>
    );
  }
}
export default Form;
