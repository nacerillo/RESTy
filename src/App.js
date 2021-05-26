import React from "react";
import "./scss/form.scss";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
