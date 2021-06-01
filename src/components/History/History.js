import React from "react";
import "./history.scss";
import Modal from "../Modal/Modal.js";
import { If, Then } from "react-if";
import { Link } from "react-router-dom";
class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logHistory: this.props.history,
      open: false,
      redirect: false,
    };
  }

  toggleModal = () => {
    console.log("Hello");
    this.setState({ open: !this.state.open });
  };
  handleClick = (e) => {
    e.preventDefault();

    let idx = e.target.id;
    let search = this.state.logHistory[idx];
    // console.log(search);
    // this.setState({ redirect: !this.state.redirect });
    this.props.handler(e, search[0], search[1], search[2]);
    // useHistory().push("/");
  };
  render() {
    return (
      <section id="history_feild">
        <h2>History</h2>
        {this.state.logHistory.map((item, idx) => {
          return (
            <>
              <If condition={this.state.open}>
                <Then>
                  <Modal close={this.toggleModal}>
                    <p>URL: {item[0]}</p>
                    <br></br>
                    <p>Medthod: {item[1]}</p>
                    <br></br>
                    <p>Body: {item[2]}</p>
                    <br></br>
                  </Modal>
                </Then>
              </If>
              <div className="history_buttons">
                <Link to="/">
                  <button
                    id={idx}
                    type="button"
                    className={item[1]}
                    onClick={this.handleClick}
                    value={item[1]}
                  >
                    {item[1]}
                  </button>
                </Link>
                <button className="details" onClick={this.toggleModal}>
                  {item[0]}
                </button>
              </div>
            </>
          );
        })}
      </section>
    );
  }
}
export default History;
