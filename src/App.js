import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Results from "./components/Results";
import History from "./components/History";
import { If, Then } from "react-if";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      headers: [],
      count: 0,
      method: "",
      url: "",
      history: [],
      show: false,
    };
  }

  handleForm = (results, url, method, headers) => {
    //console.log("HANDLE REACHED");
    this.setState({ show: true });
    let history_current = this.state.history;
    let history_log = [url, method];
    history_current.push(history_log);
    this.setState({ history: history_current });
    this.setState({
      results,
      url,
      method,
      headers,
      history: history_current,
    });
    //  sessionStorage.setItem(this.state.counter, `${method} ${url}`)
    // console.log(this.state.history);
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Form handler={this.handleForm} />
        <If condition={this.state.show === true}>
          <Then>
            <Results
              response={this.state.results}
              headers={this.state.headers}
            />
          </Then>
        </If>

        <If condition={this.state.history.length > 0}>
          <History history={this.state.history} />
        </If>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
