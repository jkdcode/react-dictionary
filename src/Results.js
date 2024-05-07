import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results && props.results.meanings) {
    return (
      <div className="Results">
        <section>
          <h2 className="word text-capitalize">{props.results.word}</h2>
          <h3 className="phonetics">/{props.results.phonetic}/</h3>
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
        No results found. Did you spell it correctly?
      </section>
    );
  } else {
    return null;
  }
}
