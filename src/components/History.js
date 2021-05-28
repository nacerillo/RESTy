import React from "react";
import "../scss/history.scss";

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logHistory: this.props.history,
    };
  }

  render() {
    return (
      <section id="history">
        {this.state.logHistory.map((item, idx) => {
          return (
            <>
              <p>
                <button id={idx} type="submit" className="history_button">
                  {item[0]}
                </button>
                {item[1]}
              </p>
            </>
          );
        })}
      </section>
    );
  }
}
export default History;
