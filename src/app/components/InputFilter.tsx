import React, { useState } from "react";
import Data, { Items } from "../api-services/Data";

type InputFilterProps = {
  setItems: (itemsArr: Items[]) => void;
};

const InputFilter = ({ setItems }: InputFilterProps) => {
  const [filter, setFilter] = useState("");
  function onSearch() {
    const allData = Data;
    for (let index = 0; index < allData.length; index++) {
      const currentItem = allData[index];
      if (currentItem?.title.includes(filter)) {
        setItems([currentItem]);
      }
    }
  }
  return (
    <>
      <label htmlFor="">Type here:</label>
      <input
        className="m-3 bg-slate-600 text-white"
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={(event) => {
          setFilter(event.target.value);
          onSearch();
        }}
      />
    </>
  );
};

export default InputFilter;
