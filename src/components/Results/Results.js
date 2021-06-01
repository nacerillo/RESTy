import React from "react";
import ReactJson from "react-json-view";
import "./Results.scss";
import { Spinner } from "react-spinners-css";
import { If, Then, Else } from "react-if";
const Results = (props) => {
  return (
    <If condition={props.show === true}>
      <Then>
        <div className="spinner">
          <Spinner color="#45A29E" />
        </div>
      </Then>
      <Else>
        <section id="output_field">
          <label>HEADER</label>
          <br></br>
          <ReactJson src={props.headers} />
          <label>RESULTS</label>
          <br></br>
          <ReactJson src={props.response} />
        </section>
      </Else>
    </If>
  );
};
export default Results;
