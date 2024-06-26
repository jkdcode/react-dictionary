import React from "react";
import Examples from "./Examples";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h4 className="text-capitalize part-of-speech">
        {props.meaning.partOfSpeech}
      </h4>
      <div>
        <div className="definition">{props.meaning.definition}</div>
        <div className="example">
          <Examples examples={props.meaning.example} />
        </div>
      </div>
      <div className="synonyms">
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
