import React, { useState } from "react";
import Data, { Items } from "../api-services/Data";

type InputFilterProps = {
  onSave: (arr: Items[]) => void;
};

const InputFilter = ({ onSave }: InputFilterProps) => {
  const [filter, setFilter] = useState("");
  const allData = Data;
  function onSaveFilter() {
    const categories = ["Breakfast", "Lunch", "Snaks", "Dinner"];
    const categoriesMed = Data.map((e) => e.category);
    const categoriesAdv = new Set(categoriesMed);

    console.log("beginner:", categories);
    console.log("Medium:", categoriesMed);
    console.log("Adv:", categoriesAdv);

    // three levels of complexity:
    // begginger (simple but static): read file and hard code -> [brea,dinn,snaks] -> arr.some(e=>e.includes(filter))
    // medium (dynamic and slow): make arr of categories -> categories=Data.map(e=>e.category) -> [brea,brea,brea,lunch,luch,beak] -> arr.some(e=>e.includes(filter)
    // adv (dyanmic and fast): make a set of categories -> set(categories) -> [break,dinn,snaks] -> arr.some(e=>e.includes(filter))

    // if(filter is part of catergory) {
    //   setItems(category)

    for (let index = 0; index < allData.length; index++) {
      const currentItem = allData[index];
      if (currentItem?.title.includes(filter)) {
        onSave([currentItem]);
      }
      if (currentItem?.category.includes(filter)) {
        // Input: Breakfast  ----> output: 2, 4, 6 cards with
        const breakfast = Data.filter((e) => e.category === "Breakfast");
        onSave(breakfast);
      }
    }
  }

  return (
    <>
      <input
        className="m-4 rounded-lg bg-blue-500 p-3"
        placeholder="type here...."
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
          onSaveFilter();
        }}
      />
    </>
  );
};

export default InputFilter;
