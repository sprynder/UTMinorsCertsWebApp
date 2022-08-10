import "./App.css";
import React, { useState } from "react";
import Select from "react-select";
import Column from "./Column";
import Display from "./Display";
import classes from "./classes.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const aquaticCreatures = classes;

const schools = [
  "architecture",
  "business",
  "communication",
  "education",
  "engineering",
  "fine-arts",
  "geosciences",
  "information",
  "liberal-arts",
  "social-work",
  "natural-sciences",
];

function App() {
  const [cards, setCards] = useState([]);
  const [schoolIndex, setSchoolIndex] = useState(0);

  function remove(value) { 
    let tempArr =[...cards]
    let temp= tempArr.filter(function(ele){ 
        return ele != value; 
    });
    setCards(temp);
}

  return (
    <div>
    <div className = "h-[5vh] flex place-items-center">
      <header className="inline-block font-mono align-middle text-xl text-center w-[100vw]">
        {schools[schoolIndex]
          .split("-")
          .map(
            (word) =>
              "" + word.charAt(0).toUpperCase() + word.slice(1, word.length)
          )
          .join(" ")}
      </header>
      </div>
      <div className="flex flex-row h-[95vh] ">
        <div className="w-[15vw] text-center mx-2 font-mono ">
          Welcome to the UT Minor and Certificate Collection!
          <br></br><br></br>
          <p>Displayed to the right is a grid of all the minors/certificates for a specific school. You can rotate through the different schools by using the "next" and "prev" buttons at the bottom of the page.<br></br><br></br>
          To the right of that is a search box to select any classes you have taken. Only classes that are explicitly listed as minor/certificate coursework on the UT website are shown.<br></br><br></br>
          Once you select a class, it will be displayed in the box below the search bar, as well as in the box of any minor/certficate that is coursework for. </p>
        </div>
        <div className="w-[70vw]">
          <div className="h-[90vh]">
            <Display school={schools[schoolIndex]} classes={cards} />
          </div>
          <div className="flex flex-row place-item-center h-[5vh]">
            {schoolIndex == 0 ? (
              <button
                disabled
                className="flex place-content-start w-[50vw] "
                onClick={() => setSchoolIndex(schoolIndex - 1)}
              ></button>
            ) : (
              <button
                className="inline-block font-mono align-middle text-xl text-left w-[50vw] "
                onClick={() => setSchoolIndex(schoolIndex - 1)}
              >
                {"<<Prev"}
              </button>
            )}
            {schoolIndex == schools.length - 1 ? (
              <button
                disabled
                className="flex place-content-end w-[50vw]"
                onClick={() => setSchoolIndex(schoolIndex + 1)}
              ></button>
            ) : (
              <button
                className="inline-block font-mono align-middle text-xl text-right w-[50vw] "
                onClick={() => setSchoolIndex(schoolIndex + 1)}
              >
                {"Next>>"}
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-col w-[15vw] h-[90vh] gap-3 mx-4">
          <Select
            options={aquaticCreatures}
            onChange={(opt) => {
              let arr = [...cards];
              arr.push(opt.value);
              setCards(arr);
            }}
          />
          <Column cardArr={cards} removeCards = {remove}/>
        </div>
      </div>
    </div>
  );
}

export default App;
