"use client";
import React from "react";
import Data from "../api-services/Data";
import RenderData from "./RenderData";

const Breakfast = () => {
  const breakfastMenu = Data.filter((e) => e.category === "Breakfast");

  return (
    <div>
      <RenderData allData={breakfastMenu} />
    </div>
  );
};

export default Breakfast;
