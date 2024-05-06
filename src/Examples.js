import React from "react";

export default function Examples(props) {
  const { examples } = props;

  if (examples) {
    return (
      <div>
        <div>
          <strong>Example: </strong>
          <em>{examples}</em>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
