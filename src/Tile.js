import React from "react";

function Tile(props) {
  let title = Object.keys(props.data)[0];
  return (
    <div className="text-black border border-black rounded-lg h-[20vh] font-mono">
    <div className = "border-b-2 border-black pl-1">
      {title}
    </div>
    <div className = "grid grid-cols-3">
        {
          props.classes.map((classes)=>{
            if(props.data[title].includes(classes))
            {
              return (<div className = "font-mono pl-1">{classes}</div>)
            }
        })
        }
      </div>
      </div>
  );
}

export default Tile;
