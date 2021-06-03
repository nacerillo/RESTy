import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Form from "./components/Form/Form.js";
import Results from "./components/Results/Results.js";
import History from "./components/History/History";
import Help from "./components/Help/Help";
import { If, Then } from "react-if";
import "./scss/app.scss";
import axios from "axios";
import { Switch, Route, BrowserRouter } from "react-router-dom";
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

  containsLog = (array, entry) => {
    // let contains = false;
    for (let i = 0; i < array.length; i++) {
      let a = JSON.stringify(array[i]);
      let b = JSON.stringify(entry);
      if (a === b) {
        return true;
      }
    }
    return false;
  };
  handleForm = async (e, url, method, body) => {
    console.log("Current Histroy", this.state.history);
    e.preventDefault();
    this.setState({ show: true });
    try {
      let headers;
      let results;
      let rawData;
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

        default:
          return;
      }

      let history_log = [url, method, body];
      //console.log("History Log", history_log);

      if (!this.containsLog(this.state.history, history_log)) {
        console.log("Not Yet Contained");
        let current_history = this.state.history;
        current_history.push(history_log);
        this.setState({ history: current_history });
      }
      /*if (!this.state.history.includes(history_log)) {
        let current_history = this.state.history;
        current_history.push(history_log);
        this.setState({ history: current_history });
      }*/
      this.setState({
        results,
        url,
        method,
        headers,
      });
    } catch (err) {
      console.log(err);
      console.log("Houston, we have a problem");
    }

    //  sessionStorage.setItem(this.state.counter, `${method} ${url}`)
    // console.log(this.state.history);
  };

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Form handler={this.handleForm} />
            <div className="home">
              <If condition={this.state.show === true}>
                <Then>
                  <Results
                    response={this.state.results}
                    headers={this.state.headers}
                  />
                </Then>
              </If>

              <If condition={this.state.history.length > 0}>
                <History
                  history={this.state.history}
                  handler={this.handleForm}
                />
              </If>
            </div>
          </Route>
          <Route path="/history">
            <If condition={this.state.history.length > 0}>
              <History history={this.state.history} handler={this.handleForm} />
            </If>
          </Route>
          <Route path="/help">
            <Help />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
