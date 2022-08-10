import React, { useState, useEffect } from "react";
import Card from "./Card";

function Column(props) {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(props.cardArr);
  }, [props.cardArr]);
  return (
    <div className="bg-slate-300 px-4 py-5 border-b border-gray-200 sm:px-6 rounded-lg w-full max-w-full h-full flex flex-col gap-2">
      {cards.map((card) => {
        return <Card text={card} />;
      })}
    </div>
  );
}

export default Column;
