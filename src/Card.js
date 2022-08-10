import React from "react";

function Card(props) {
  return (
    <div className="text-black border border-black rounded-lg font-mono">
      {props.text}
    </div>
  );
}

export default Card;
