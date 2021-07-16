import React from "react";
import "./form.scss";
class Form extends React.Component {
  constructor(props) {
    super(props); // for now, just do this
    this.state = {
      url: "input here",
      method: null,
      selectionMade: false,
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
    this.setState({ method: method, selectionMade: true });
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
    this.props.handler(e, this.state.url, this.state.method, this.state.body);
  };

  render() {
    return (
      <div className = "form-container">
          <div className="method_select">
              <button
                onClick={this.handleSelect}
                id="put"
                name="method"

                className="method"
                value="PUT">PUT</button>

              <button
                onClick={this.handleSelect}
                id="post"
                name="method"
                className="method"
                value="POST">POST</button>

              <button
                onClick={this.handleSelect}
                id="get"
                name="method"
                className="method"

                value="GET">GET</button>
           
              <button
                onClick={this.handleSelect}
                id="delete"
                name="method"
                className="method"
                value="DELETE">DELETE</button>      
          </div>
        <form className = "form_inputs" onSubmit={this.handleSubmit}>
          <div className="url_input">
              <input type="text" onChange={this.handleURL} placeholder = "api/url" />
        
  
            <button className="go" type="submit" disabled={!this.state.selectionMade}>
              Go!
            </button>
          </div>  
          <div className = "text_body">
            <textarea
              type="submit"
              onChange={this.handleBody}
            ></textarea>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
