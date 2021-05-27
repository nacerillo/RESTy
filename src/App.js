import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Results from "./components/Results";
import History from "./components/History";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      count: 0,
      method: "",
      url: "",
      history: [],
    };
  }

  handleForm = (header, results, method, url) => {
    console.log("HANDLE REACHED");
    this.setState({ header, results, method, url });

    console.log(this.state.results);
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Form handler={this.handleForm} />
        <Results response={this.state.results} />
        <History history={this.state.history} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
