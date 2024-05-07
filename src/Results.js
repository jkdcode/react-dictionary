import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results && props.results.meanings) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <h3>/{props.results.phonetic}/</h3>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else if (props.searched) {
    return (
      <section className="no-result">
        No results found. Please check your spelling.
      </section>
    );
  } else {
    return null;
  }
}
