import React from "react";
import "../scss/history.scss";

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logHistory: this.props.history,
    };
  }
  handleClick = (e) => {
    e.preventDefault();

    let idx = e.target.id;
    let search = this.state.logHistory[idx];
    console.log(search);
    this.props.handler(e, search[0], search[1], search[2]);
  };
  render() {
    return (
      <section id="history">
        {this.state.logHistory.map((item, idx) => {
          return (
            <>
              <p>
                <button
                  id={idx}
                  type="submit"
                  className="history_button"
                  onClick={this.handleClick}
                >
                  {item[1]}
                </button>
                {item[0]}
              </p>
            </>
          );
        })}
      </section>
    );
  }
}
export default History;
