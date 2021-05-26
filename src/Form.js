import React from "react";
import "./scss/form.scss";
class Form extends React.Component {
  constructor(props) {
    super(props); // for now, just do this
    this.state = {
      url: "input here",
      method: null,
    };
  }

  handleChange = (e) => {
    let url = e.target.value;
    this.setState({ url });
  };
  handleSelect = (e) => {
    e.preventDefault();
    let method = e.target.value;
    this.setState({ method });
  };
  //https://swapi.dev/api/people/
  handleSubmit = async (e) => {
    e.preventDefault();
    let rawData = await fetch(this.state.url, { method: this.state.method });
    let data = await rawData.json();
    let count = data.count;
    let results = data;
    //console.log("REACHED", rawData.body);
    //this.setState({ url });
    this.props.handler(count, results);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div id="method_select">
            <label for="put">
              PUT
              <input
                onChange={this.handleSelect}
                type="radio"
                id="put"
                name="method"
                value="PUT"
              ></input>
            </label>

            <label for="post">
              POST
              <input
                onChange={this.handleSelect}
                type="radio"
                id="post"
                name="method"
                value="POST"
              ></input>
            </label>

            <label for="get">
              GET
              <input
                onChange={this.handleSelect}
                type="radio"
                id="get"
                name="method"
                value="GET"
              ></input>
            </label>

            <label for="delete">
              DELETE
              <input
                onChange={this.handleSelect}
                type="radio"
                id="delete"
                name="method"
                value="DELETE"
              ></input>
            </label>
          </div>
          <div id="url_input">
            <lable>
              URL:
              <input type="text" onChange={this.handleChange} />
            </lable>
            <button id="mybutton" type="submit">
              Go!
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
