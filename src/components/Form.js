import React from "react";
import "../scss/form.scss";
import { If, Then } from "react-if";
import axios from "axios";
class Form extends React.Component {
  constructor(props) {
    super(props); // for now, just do this
    this.state = {
      url: "input here",
      method: null,
      body: "",
    };
  }

  handleURL = (e) => {
    let url = e.target.value;
    this.setState({ url: url });
  };
  handleSelect = (e) => {
    e.preventDefault();
    let method = e.target.value;
    this.setState({ method: method });
  };

  handleBody = (e) => {
    e.preventDefault();
    let body = e.target.value;
    console.log(e.target.value);
    this.setState({ body: body });
  };

  //https://swapi.dev/api/people/
  handleSubmit = async (e) => {
    e.preventDefault();
    /*let rawData;
    let results;
    let url;
    let method;
    let headers;
    let body;
    try {
      method = this.state.method;
      url = this.state.url;
      body = this.state.body;
      switch (method) {
        case "GET":
          rawData = await axios.get(url);
          headers = rawData.headers;
          results = rawData.data;
          // console.log("HEADERS", headers);
          break;
        case "DELETE":
          rawData = await axios.delete(url);
          console.log(rawData);
          if (rawData.status === 204) {
            headers = { delete: "Worked!" };
            results = { delete: "Worked!" };
          }
          break;
        case "PUT":
          rawData = await axios.put(url, { body });
          headers = rawData.headers;
          results = rawData.data;
          break;
        case "POST":
          rawData = await axios.post(url, { body });
          headers = rawData.headers;
          results = rawData.data;
          break;
      }
      //rawData = await fetch(url, { method: method });
      //data = await rawData.json();
      this.props.handler(results, url, method, headers);
    } catch (err) {
      console.log(rawData);
      console.log("Huston, we have a problem...");
    }*/
    this.props.handler(e, this.state.url, this.state.method, this.state.body);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <section id="url_input">
            <lable>
              URL:
              <input type="text" onChange={this.handleURL} />
            </lable>
            <button id="mybutton" type="submit">
              Go!
            </button>
          </section>

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
          <section>
            <textarea
              type="submit"
              id="body_input"
              onChange={this.handleBody}
            ></textarea>
          </section>
        </form>
      </div>
    );
  }
}
export default Form;
