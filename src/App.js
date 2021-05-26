import React from "react";
import "./scss/form.scss";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Results from "./Results";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      header: "",
    };
  }

  handleForm = (header, results) => {
    console.log("HANDLE REACHED", results);
    this.setState({ header, results });
    console.log(this.state.results);
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form handler={this.handleForm} />
        <Results header={this.state.header} response={this.state.results} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
