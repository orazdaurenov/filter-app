import React from "react";
import Data, { Items } from "../api-services/Data";

type AllMenuProps = {
  handleClick: (array: Items[]) => void;
};

const AllMenu = ({ handleClick }: AllMenuProps) => {
  return (
    <button
      className="m-2 rounded-lg bg-blue-700 p-2 text-white"
      onClick={() => handleClick(Data)}
    >
      All
    </button>
  );
};

export default AllMenu;
