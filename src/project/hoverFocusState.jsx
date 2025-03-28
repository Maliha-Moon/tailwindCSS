import React from "react";

const HoverFocusState = () => {
  return (
    <div className="m-36 flex">
      <button
        className="bg-cyan-400 px-4 py-2 rounded-full cursor-pointer hover:bg-cyan-800 hover:text-white
      focus:ring-2 ring-blue-900 active:bg-blue-900 active:text-white"
      >
        Submit Now
      </button>
    </div>
  );
};

export default HoverFocusState;
