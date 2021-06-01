import { React } from "react";
import "./Help.scss";
const Help = (props) => {
  return (
    <>
      <h2>How To Use This Application:</h2>
      <ul>
        <li>
          Select which CRUD action you would like to perform (GET, PUT, POST,
          DELETE)
        </li>
        <li>Input the URL for the API that you wish to target</li>
        <li>Input your body data (If applicable) in the text area</li>
        <li>Results will be diplayed below</li>
        <li>
          If you wish to run a previous action, click on Re-run in the history
          section
        </li>
      </ul>
    </>
  );
};
export default Help;
