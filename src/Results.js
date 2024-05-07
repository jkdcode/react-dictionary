import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.results);
  if (props.results && props.results.meanings) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <h3>/{props.results.phonetic}/</h3>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else if (props.searched) {
    return (
      <div>No results found. Please check if you spelled it correctly.</div>
    );
  } else {
    return null;
  }
}
