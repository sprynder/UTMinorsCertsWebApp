
import { useRef, useContext, useState } from "react";


 const Search = (props)=> {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
    props.changeMessage(event.target.value);
    console.log('value is:', event.target.value);
  };
  return (
    <div className="flex flex-row gap-2 place-items-center flex-2 w-[18.5vw]">
      <div className="basis-5/6 mt-1 relative flex-auto items-center font-mono mb-2">
        <input
          type="text"
          name="search"
          id="search"
          className="bg-slate-100 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-black rounded-md"
          placeholder="  Search here"
          onChange={handleChange}
          value={message}
        />
      </div>
    </div>
  );
}

export default Search;