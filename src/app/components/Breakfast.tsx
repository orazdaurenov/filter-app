"use client";
import React from "react";
import Data from "../api-services/Data";
import RenderData from "./RenderData";
import { Items } from "../api-services/Data";

type Props = {
  onFilter: (arr: Items[]) => void;
};

const Breakfast = ({ onFilter }: Props) => {
  const breakfastMenu = Data.filter((e) => e.category === "Breakfast");

  return (
    <button
      onClick={() => onFilter(breakfastMenu)}
      className="m-2 rounded-lg bg-blue-700 p-2 text-white"
    >
      Breakfast
    </button>
  );
};

export default Breakfast;
