import React from "react";

export default function Examples(props) {
  const { examples } = props;

  if (examples) {
    // Function to capitalize the first letter of a string
    const capitalizeFirstLetter = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
      <div>
        <div>"{capitalizeFirstLetter(examples)}"</div>
      </div>
    );
  } else {
    return null;
  }
}
