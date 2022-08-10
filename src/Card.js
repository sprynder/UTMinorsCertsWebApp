import React from "react";

function Card(props) {
  return (
    <div className = "flex flex-row w-[10vw] gap-1">
    <div className="text-black border border-black rounded-lg font-mono w-[70vw]">
      {props.text}
    </div>
    <button className = "inline-block text-right w-[5vw]" onClick={()=>props.set(props.index)}>X</button>
    </div>
  );
}

export default Card;
