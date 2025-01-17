"use client";
import { useState } from "react";
import Data, { Items } from "../api-services/Data";
import Breakfast from "./Breakfast";
import ListItem from "./ListItem";
import Lunch from "./Lunch";
import AllMenu from "./AllMenu";

//todos:
// 2. destrucutre props
// 3. list item component
type RenderDataProps = {
  allData: Items[];
};
export default function RenderData(props: RenderDataProps) {
  const [items, setItems] = useState(props.allData);

  const categories = props.allData.map((e) => e.category);
  const searchInput = "Sn";

  const result: string[] = [];
  // go through every element of the array
  // if the current element has the search string, add it to the result array
  for (let index = 0; index < categories.length; index++) {
    const element = categories[index];
    if (element?.includes(searchInput)) {
      result.push(element);
    }
  }
  console.log("results: ", result);

  return (
    <>
      <InputFilter />
      <Breakfast handleClick={setItems} />
      <Lunch handleClick={setItems} />
      <AllMenu handleClick={setItems} />
      <ul className="grid grid-cols-3">
        {items.map((item) => {
          return <ListItem key={item.id} data={item} />;
        })}
      </ul>
    </>
  );
}

const InputFilter = () => {
  const [filter, setFilter] = useState("");

  return (
    <>
      <label htmlFor="">Type here:</label>
      <input
        className="m-3 bg-slate-600 text-white"
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
      <p>{filter}</p>
    </>
  );
};
