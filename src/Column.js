import React, { useState, useEffect } from "react";
import Card from "./Card";

function Column(props) {


  return (
    <div className="bg-slate-300 px-4 py-5 border-b border-gray-200 sm:px-6 rounded-lg w-full max-w-full h-full flex flex-col gap-2">
      {props.cardArr.map((card, index) => {
        return (<Card text={card} index = {index} set = {props.removeCards} key = {card+index}/>
        );
      })}
    </div>
  );
}

export default Column;
