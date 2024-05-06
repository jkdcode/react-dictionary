import React from "react";
import Examples from "./Examples";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>
        <strong>Definition:</strong> {props.meaning.definition}
      </p>
      <p>
        <Examples examples={props.meaning.example} />
      </p>
      <p>
        <strong>Synonyms: </strong>
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
