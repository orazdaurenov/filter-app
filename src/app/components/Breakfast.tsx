"use client";
import React from "react";
import Data, { Items } from "../api-services/Data";

type BreakfastProps = {
  handleClick: (array: Items[]) => void;
};

const Breakfast = ({ handleClick }: BreakfastProps) => {
  const breakfast = Data.filter((e) => e.category === "Breakfast");
  return (
    <button
      onClick={() => handleClick(breakfast)}
      className="m-2 rounded-lg bg-blue-700 p-2 text-white"
    >
      Breakfast
    </button>
  );
};

export default Breakfast;
