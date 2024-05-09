import React from "react";
import "./Pictures.css";

export default function Pictures(props) {
  if (props.pictures) {
    const limitedPictures = props.pictures.slice(0, 6);

    return (
      <section className="pictures">
        <div className="row">
          {limitedPictures.map(function (picture, index) {
            return (
              <div className="col-6" key={index}>
                <a href={picture.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={picture.src.landscape}
                    className="img-fluid pictures"
                    alt="dictionary illustration"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
