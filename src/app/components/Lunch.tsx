import React from "react";
import Data, { Items } from "../api-services/Data";

type LunchProps = {
  handleClick: (array: Items[]) => void;
};

const Lunch = ({ handleClick }: LunchProps) => {
  const lunch = Data.filter((e) => e.category === "Lunch");

  return (
    <button
      className="m-2 rounded-lg bg-blue-700 p-2 text-white"
      onClick={() => handleClick(lunch)}
    >
      Lunch
    </button>
  );
};

export default Lunch;
