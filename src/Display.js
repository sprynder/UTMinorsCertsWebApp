import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import "./scroll.css"
function Display(props) {
  const [minors, setMinors] = useState([]);

  useEffect(()=>{
        let url = 'https://ut-minor-app.herokuapp.com/minors/' + props.school;
        fetch(url).then(res => res.json()).then (json => setMinors(json) )
  },[props.school])
  return (
    <div className="bg-slate-300 px-4 py-5 border-b border-gray-200 sm:px-6 rounded-lg w-full max-w-full h-full grid grid-cols-4 gap-2 scroll">
      {minors.map((minor) => {
        return <Tile 
        data={minor}
        classes = {props.classes}
         />;
      })}
    </div>
  );
}

export default Display;
