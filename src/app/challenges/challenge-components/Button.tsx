"use client";
import React, { useState } from "react";

const Button = () => {
  const [visible, setHidden] = useState(true);
  return (
    <div className="m-5 flex gap-4">
      <button
        onClick={() => {
          visible ? setHidden(false) : setHidden(true);
        }}
        className="rounded-lg bg-blue-700 p-4 text-white"
      >
        Show/Hide
      </button>
      {visible && <p>Welcome to React Challenges</p>}
    </div>
  );
};

export default Button;
