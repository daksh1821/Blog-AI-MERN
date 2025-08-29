import React, { useRef } from 'react';
import { useAppContext } from '../context/AppContext';

export default function Header() {
  const { setInput, input } = useAppContext();
  const inputRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
    inputRef.current.value = "";
  };

  const clearSearch = () => {
    setInput("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="flex justify-center items-center h-[300px]">
      <div className="text-center mt-20 mb-1">
        <div className="flex items-center gap-1 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm hover:bg-purple-200 transition mx-auto max-w-[215px]">
          <p className="truncate">
            New: AI feature integrated
            <span className="text-purple-500"> ✨</span>
          </p>
        </div>

        <h1 className="text-3xl mt-10 sm:text-6xl font-semibold sm:leading-16 text-gray-700">
          Your Own <span className="text-primary">Blogging</span> Platform
        </h1>

        <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500">
          This is your space to think out loud, to share what matters, and to write without filters. Whether it's one word or a thousand, your story starts right here.
        </p>

        {/* Search Bar */}
        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden mt-20"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for blogs"
            required
            className="w-full pl-4 outline-none"
          />
          <button
            type="submit"
            className="bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
